const steps = [
  {
    number: '01',
    title: 'Choose Amount & Method',
    description: 'User enters how much they want to spend and picks their preferred local payment method.',
    icon: '💰',
  },
  {
    number: '02',
    title: 'Pay in Local Currency',
    description: 'Complete payment using familiar methods — bank transfer, mobile money, cards, or e-wallets.',
    icon: '🔄',
  },
  {
    number: '03',
    title: 'Merchant Receives Crypto',
    description: 'Crypto is automatically credited to the merchant wallet. Fast, secure, and fully settled.',
    icon: '✅',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50 dark:bg-[#0F1218]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Three steps. That's it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-zota/30 to-transparent" />
              )}

              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-gray-100 dark:border-gray-800 shadow-lg flex items-center justify-center text-4xl">
                {step.icon}
              </div>

              <div className="text-xs font-bold text-zota mb-2">{step.number}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
