export default function CTA() {
  return (
    <section id="cta" className="py-20 sm:py-28 bg-gray-50 dark:bg-[#0F1218]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Ready to offer crypto on-ramp?
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Join merchants worldwide who trust Zota to power their payments. One integration, every market.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a
            href="mailto:sales@zota.com"
            className="px-8 py-4 rounded-xl bg-zota hover:bg-zota-dark text-white font-semibold transition-all shadow-lg shadow-zota/25 hover:shadow-zota/40 text-lg"
          >
            Contact Sales
          </a>
          <a
            href="https://doc.zota.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-white dark:hover:bg-gray-800 transition-all text-lg"
          >
            View API Docs
          </a>
        </div>
      </div>
    </section>
  );
}
