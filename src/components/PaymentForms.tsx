import type { PaymentFormType } from '../data';

interface PaymentFormProps {
  formType: PaymentFormType;
  methodName: string;
  amount: string;
  onPay: () => void;
  processing: boolean;
}

export default function PaymentForm({ formType, methodName, amount, onPay, processing }: PaymentFormProps) {
  return (
    <div className="space-y-4">
      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
        <span>Pay with {methodName}</span>
      </div>

      {formType === 'card' && <CardForm />}
      {formType === 'bank' && <BankForm />}
      {formType === 'mobile' && <MobileForm />}
      {formType === 'wallet' && <WalletForm methodName={methodName} />}
      {formType === 'qr' && <QRForm methodName={methodName} />}

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
          `Pay ${amount}`
        )}
      </button>
    </div>
  );
}

function InputField({ label, placeholder, type = 'text', className = '' }: { label: string; placeholder: string; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-zota dark:focus:border-zota transition-colors"
      />
    </div>
  );
}

function CardForm() {
  return (
    <div className="space-y-3">
      <InputField label="Card Number" placeholder="4242 4242 4242 4242" />
      <div className="grid grid-cols-2 gap-3">
        <InputField label="Expiry" placeholder="MM / YY" />
        <InputField label="CVC" placeholder="123" />
      </div>
      <InputField label="Cardholder Name" placeholder="John Doe" />
    </div>
  );
}

function BankForm() {
  return (
    <div className="space-y-3">
      <div>
        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">Select Bank</label>
        <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white outline-none focus:border-zota dark:focus:border-zota transition-colors appearance-none">
          <option>Choose your bank...</option>
          <option>Deutsche Bank</option>
          <option>ING Bank</option>
          <option>ABN AMRO</option>
          <option>Rabobank</option>
          <option>Barclays</option>
          <option>HSBC</option>
          <option>Santander</option>
          <option>BNP Paribas</option>
        </select>
      </div>
      <InputField label="Account Holder Name" placeholder="John Doe" />
    </div>
  );
}

function MobileForm() {
  return (
    <div className="space-y-3">
      <div>
        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">Country Code</label>
        <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white outline-none focus:border-zota dark:focus:border-zota transition-colors appearance-none">
          <option>+254 (Kenya)</option>
          <option>+255 (Tanzania)</option>
          <option>+256 (Uganda)</option>
          <option>+234 (Nigeria)</option>
          <option>+233 (Ghana)</option>
        </select>
      </div>
      <InputField label="Mobile Number" placeholder="712 345 678" type="tel" />
    </div>
  );
}

function WalletForm({ methodName }: { methodName: string }) {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center space-y-2">
        <div className="w-12 h-12 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-2xl">
          📱
        </div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          You will be redirected to {methodName}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Complete the payment in the {methodName} app
        </p>
      </div>
      <InputField label="Phone Number / Account ID" placeholder="Enter your account" />
    </div>
  );
}

function QRForm({ methodName }: { methodName: string }) {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center space-y-3">
        {/* Mock QR code */}
        <div className="w-32 h-32 mx-auto bg-white rounded-lg p-2 border border-gray-100">
          <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-0.5">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-[1px] ${
                  Math.random() > 0.45 ? 'bg-gray-900' : 'bg-white'
                }`}
                style={{ opacity: Math.random() > 0.3 ? 1 : 0.7 }}
              />
            ))}
          </div>
        </div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Scan with {methodName}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Or click Pay below to simulate
        </p>
      </div>
    </div>
  );
}
