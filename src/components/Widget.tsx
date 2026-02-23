import { useState, useEffect } from 'react';
import { regions, presetAmounts, getMockWallet, type Region, type CryptoAsset, type PaymentMethod } from '../data';
import PaymentForm from './PaymentForms';
import PaymentIcon from './PaymentIcons';

type Step = 'amount' | 'method' | 'pay' | 'success';

interface WidgetProps {
  region: Region;
  asset: CryptoAsset;
}

export default function Widget({ region, asset }: WidgetProps) {
  const [step, setStep] = useState<Step>('amount');
  const [amount, setAmount] = useState(100);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [processing, setProcessing] = useState(false);

  const config = regions[region];
  const usdAmount = amount * config.fxRateToUsd;
  const cryptoAmount = (usdAmount / asset.price).toFixed(asset.price >= 100 ? 6 : 2);
  const localRate = (asset.price / config.fxRateToUsd);

  useEffect(() => {
    setStep('amount');
    setSelectedMethod(null);
    setProcessing(false);
  }, [region, asset]);

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setStep('success');
    }, 2000);
  };

  const handleBack = () => {
    setProcessing(false);
    if (step === 'method') setStep('amount');
    if (step === 'pay') setStep('method');
  };

  const handleReset = () => {
    setStep('amount');
    setSelectedMethod(null);
    setProcessing(false);
    setAmount(100);
  };

  const stepLabel = {
    amount: 'Enter Amount',
    method: 'Payment Method',
    pay: `Pay with ${selectedMethod?.name ?? ''}`,
    success: 'Complete',
  };

  return (
    <div className="w-full max-w-[400px] mx-auto">
      <div className="rounded-2xl overflow-hidden bg-white dark:bg-[#1C1C1E] shadow-xl dark:shadow-2xl dark:shadow-black/40 border border-gray-100 dark:border-gray-800">
        {/* Header */}
        <div className="px-6 pt-5 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {step !== 'amount' && step !== 'success' && (
              <button
                onClick={handleBack}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {stepLabel[step]}
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1.5">
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{asset.symbol}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{asset.networks[0]}</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="px-6 pb-6">
          {step === 'amount' && (
            <AmountStep
              amount={amount}
              setAmount={setAmount}
              config={config}
              cryptoAmount={cryptoAmount}
              asset={asset}
              localRate={localRate}
              onContinue={() => setStep('method')}
            />
          )}
          {step === 'method' && (
            <MethodStep
              methods={config.methods}
              onSelect={(m) => {
                setSelectedMethod(m);
                setStep('pay');
              }}
            />
          )}
          {step === 'pay' && selectedMethod && (
            <PayStep
              amount={amount}
              config={config}
              cryptoAmount={cryptoAmount}
              asset={asset}
              method={selectedMethod}
              processing={processing}
              onPay={handlePay}
            />
          )}
          {step === 'success' && (
            <SuccessStep
              cryptoAmount={cryptoAmount}
              asset={asset}
              onReset={handleReset}
            />
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 dark:border-gray-800 px-6 py-3">
          <p className="text-center text-xs text-gray-400 dark:text-gray-500">
            Powered by <span className="font-semibold text-zota">zota</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Amount Step ---------- */
function AmountStep({
  amount, setAmount, config, cryptoAmount, asset, localRate, onContinue,
}: {
  amount: number;
  setAmount: (n: number) => void;
  config: typeof regions.EU;
  cryptoAmount: string;
  asset: CryptoAsset;
  localRate: number;
  onContinue: () => void;
}) {
  return (
    <div className="space-y-5">
      <div className="text-center pt-2">
        <div className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          <span className="text-3xl text-gray-400 dark:text-gray-500">{config.currencySymbol}</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
            className="bg-transparent text-center w-32 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          ≈ {cryptoAmount} {asset.symbol}
        </p>
      </div>

      <div className="flex justify-center gap-2">
        {presetAmounts.map((preset) => (
          <button
            key={preset}
            onClick={() => setAmount(preset)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
              amount === preset
                ? 'border-zota bg-zota/10 text-zota dark:bg-zota/20'
                : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            {config.currencySymbol}{preset.toLocaleString()}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-xl px-4 py-3">
        <span>Rate</span>
        <span>1 {asset.symbol} ≈ {config.currencySymbol}{localRate.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
      </div>

      <button
        onClick={onContinue}
        disabled={amount <= 0}
        className="w-full py-3.5 rounded-xl font-semibold text-white bg-zota hover:bg-zota-dark disabled:opacity-40 transition-all"
      >
        Continue
      </button>
    </div>
  );
}

/* ---------- Method Step ---------- */
function MethodStep({
  methods, onSelect,
}: {
  methods: PaymentMethod[];
  onSelect: (m: PaymentMethod) => void;
}) {
  return (
    <div className="space-y-2 pt-1">
      {methods.map((m) => (
        <button
          key={m.id}
          onClick={() => onSelect(m)}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-zota/50 dark:hover:border-zota/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all group"
        >
          <PaymentIcon id={m.id} />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
            {m.name}
          </span>
          <svg className="w-4 h-4 ml-auto text-gray-300 dark:text-gray-600 group-hover:text-zota transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      ))}
    </div>
  );
}

/* ---------- Pay Step (with form) ---------- */
function PayStep({
  amount, config, cryptoAmount, asset, method, processing, onPay,
}: {
  amount: number;
  config: typeof regions.EU;
  cryptoAmount: string;
  asset: CryptoAsset;
  method: PaymentMethod;
  processing: boolean;
  onPay: () => void;
}) {
  return (
    <div className="space-y-4">
      {/* Mini summary */}
      <div className="flex items-center justify-between text-sm bg-gray-50 dark:bg-gray-800/50 rounded-xl px-4 py-3">
        <div>
          <span className="text-gray-500 dark:text-gray-400">You pay </span>
          <span className="font-semibold text-gray-900 dark:text-white">{config.currencySymbol}{amount.toLocaleString()}</span>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">You get </span>
          <span className="font-semibold text-gray-900 dark:text-white">{cryptoAmount} {asset.symbol}</span>
        </div>
      </div>

      {/* Payment form */}
      <PaymentForm
        formType={method.formType}
        methodName={method.name}
        amount={`${config.currencySymbol}${amount.toLocaleString()}`}
        onPay={onPay}
        processing={processing}
      />

      {/* Wallet address */}
      <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 pt-1">
        <span>Recipient</span>
        <span className="font-mono">{getMockWallet(asset.networks[0])}</span>
      </div>
    </div>
  );
}

/* ---------- Success Step ---------- */
function SuccessStep({
  cryptoAmount, asset, onReset,
}: {
  cryptoAmount: string;
  asset: CryptoAsset;
  onReset: () => void;
}) {
  return (
    <div className="text-center py-8 space-y-4">
      <div className="w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">Payment Successful</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {cryptoAmount} {asset.symbol} will be credited shortly
        </p>
      </div>
      <button
        onClick={onReset}
        className="text-sm text-zota hover:text-zota-dark font-medium"
      >
        Make another payment
      </button>
    </div>
  );
}
