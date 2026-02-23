import { regions, type Region } from '../data';
import PaymentIcon from './PaymentIcons';

const regionKeys = Object.keys(regions) as Region[];

export default function PaymentMethods() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Payment Methods by Region
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Local methods that your users already know and trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {regionKeys.map((r) => {
            const config = regions[r];
            return (
              <div
                key={r}
                className="p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1C1C1E]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{config.flag}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{r}</h3>
                  <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">{config.currency}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {config.methods.map((m) => (
                    <span
                      key={m.id}
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-gray-50 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400"
                    >
                      <PaymentIcon id={m.id} /> {m.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
