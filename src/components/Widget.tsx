import { useState, useEffect } from 'react';
import { regions, presetAmounts, mockWalletAddress, type Region, type CryptoAsset, type PaymentMethod } from '../data';

type Step = 'amount' | 'method' | 'confirm';

interface WidgetProps {
  region: Region;
  asset: CryptoAsset;
}

export default function Widget({ region, asset }: WidgetProps) {
  const [step, setStep] = useState<Step>('amount');
  const [amount, setAmount] = useState(100);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const config = regions[region];
  const cryptoAmount = (amount / asset.price).toFixed(asset.price >= 100 ? 6 : 2);

  // Reset when region or asset changes
  useEffect(() => {
    setStep('amount');
    setSelectedMethod(null);
    setProcessing(false);
    setSuccess(false);
  }, [region, asset]);

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };

  const handleReset = () => {
    setStep('amount');
    setSelectedMethod(null);
    setProcessing(false);
    setSuccess(false);
    setAmount(100);
  };

  return (
    <div className="w-full max-w-[400px] mx-auto">
      <div className="rounded-2xl overflow-hidden bg-white dark:bg-[#1C1C1E] shadow-xl dark:shadow-2xl dark:shadow-black/40 border border-gray-100 dark:border-gray-800">
        {/* Header */}
        <div className="px-6 pt-5 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {step !== 'amount' && (
              <button
                onClick={() => {
                  if (step === 'method') setStep('amount');
                  if (step === 'confirm') setStep('method');
                  setProcessing(false);
                  setSuccess(false);
                }}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {step === 'amount' && 'Enter Amount'}
              {step === 'method' && 'Payment Method'}
              {step === 'confirm' && 'Confirm'}
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
              onContinue={() => setStep('method')}
            />
          )}
          {step === 'method' && (
            <MethodStep
              methods={config.methods}
              onSelect={(m) => {
                setSelectedMethod(m);
                setStep('confirm');
              }}
            />
          )}
          {step === 'confirm' && (
            <ConfirmStep
              amount={amount}
              config={config}
              cryptoAmount={cryptoAmount}
              asset={asset}
              method={selectedMethod!}
              processing={processing}
              success={success}
              onPay={handlePay}
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

function AmountStep({
  amount, setAmount, config, cryptoAmount, asset, onContinue,
}: {
  amount: number;
  setAmount: (n: number) => void;
  config: typeof regions.EU;
  cryptoAmount: string;
  asset: CryptoAsset;
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
        <span>1 {asset.symbol} = {config.currencySymbol}{asset.price.toLocaleString()}</span>
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
          <span className="text-xl">{m.icon}</span>
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

function ConfirmStep({
  amount, config, cryptoAmount, asset, method, processing, success, onPay, onReset,
}: {
  amount: number;
  config: typeof regions.EU;
  cryptoAmount: string;
  asset: CryptoAsset;
  method: PaymentMethod;
  processing: boolean;
  success: boolean;
  onPay: () => void;
  onReset: () => void;
}) {
  if (success) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center animate-[scale-in_0.3s_ease-out]">
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

  return (
    <div className="space-y-4 pt-2">
      <div className="space-y-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">You pay</span>
          <span className="font-semibold text-gray-900 dark:text-white">{config.currencySymbol}{amount.toLocaleString()} {config.currency}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">You receive</span>
          <span className="font-semibold text-gray-900 dark:text-white">{cryptoAmount} {asset.symbol}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Network</span>
          <span className="text-gray-700 dark:text-gray-300">{asset.networks[0]}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Method</span>
          <span className="text-gray-700 dark:text-gray-300">{method.icon} {method.name}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Recipient</span>
          <span className="text-gray-700 dark:text-gray-300 font-mono text-xs">{mockWalletAddress}</span>
        </div>
      </div>

      <button
        onClick={onPay}
        disabled={processing}
        className="w-full py-3.5 rounded-xl font-semibold text-white bg-zota hover:bg-zota-dark disabled:opacity-70 transition-all flex items-center justify-center gap-2"
      >
        {processing ? (
          <>
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing...
          </>
        ) : (
          `Pay ${config.currencySymbol}${amount.toLocaleString()}`
        )}
      </button>
    </div>
  );
}
