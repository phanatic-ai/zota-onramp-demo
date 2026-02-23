import { useState } from 'react';
import Widget from './Widget';
import DemoControls from './DemoControls';
import { cryptoAssets, type Region, type CryptoAsset } from '../data';

export default function Hero() {
  const [region, setRegion] = useState<Region>('EU');
  const [asset, setAsset] = useState<CryptoAsset>(cryptoAssets[0]);

  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zota/5 dark:bg-zota/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-zota/10 dark:bg-zota/20 text-zota rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-zota animate-pulse" />
              Now Available
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Fiat to Crypto.{' '}
              <span className="text-zota">Anywhere.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              Let your users buy crypto with their preferred local payment method. One integration, every market, instant settlement.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#features" className="px-6 py-3 rounded-xl bg-zota hover:bg-zota-dark text-white font-semibold transition-all shadow-lg shadow-zota/25 hover:shadow-zota/40">
                Learn More
              </a>
              <a href="#cta" className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                Contact Sales
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                6 Regions
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                1000+ Methods
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Instant Settlement
              </div>
            </div>
          </div>

          {/* Right: Widget + Controls */}
          <div className="space-y-6">
            <div className="bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                ✨ Interactive Demo
              </p>
              <DemoControls region={region} setRegion={setRegion} asset={asset} setAsset={setAsset} />
            </div>
            <Widget region={region} asset={asset} />
          </div>
        </div>
      </div>
    </section>
  );
}
