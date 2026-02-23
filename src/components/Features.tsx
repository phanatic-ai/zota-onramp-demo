const features = [
  {
    icon: '🌍',
    title: 'Multi-Region Coverage',
    description: 'Accept payments from EU, UK, LATAM, SEA, Africa, and China with locally relevant payment methods.',
  },
  {
    icon: '💳',
    title: '1000+ Payment Methods',
    description: 'From SEPA and PIX to M-Pesa and WeChat Pay — every market, every method your users expect.',
  },
  {
    icon: '🛡️',
    title: 'Compliance Ready',
    description: 'Built-in KYC/AML checks, regulatory compliance across jurisdictions, and full audit trails.',
  },
  {
    icon: '⚡',
    title: 'Instant Settlement',
    description: 'Crypto hits the merchant wallet as soon as the fiat payment is confirmed. No waiting days.',
  },
  {
    icon: '🎨',
    title: 'Fully Customizable',
    description: 'White-label the widget to match your brand. Colors, logos, payment flows — all configurable.',
  },
  {
    icon: '🔌',
    title: 'API-First Integration',
    description: 'Drop-in widget or full API access. Integrate in hours, not weeks. SDKs for every platform.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Why <span className="text-zota">Zota On-Ramp</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to offer crypto on-ramp to your users, in every market that matters.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-zota/30 dark:hover:border-zota/30 bg-white dark:bg-[#1C1C1E] hover:shadow-lg hover:shadow-zota/5 transition-all"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
