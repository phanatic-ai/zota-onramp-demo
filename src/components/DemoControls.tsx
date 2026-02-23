import { regions, cryptoAssets, type Region, type CryptoAsset } from '../data';

interface DemoControlsProps {
  region: Region;
  setRegion: (r: Region) => void;
  asset: CryptoAsset;
  setAsset: (a: CryptoAsset) => void;
}

const regionKeys = Object.keys(regions) as Region[];

export default function DemoControls({ region, setRegion, asset, setAsset }: DemoControlsProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 block">
          Region
        </label>
        <div className="flex flex-wrap gap-1.5">
          {regionKeys.map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                region === r
                  ? 'bg-zota text-white shadow-md shadow-zota/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {regions[r].flag} {r}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 block">
          Crypto Asset
        </label>
        <div className="flex flex-wrap gap-1.5">
          {cryptoAssets.map((a) => (
            <button
              key={a.id}
              onClick={() => setAsset(a)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                asset.id === a.id
                  ? 'bg-zota text-white shadow-md shadow-zota/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {a.symbol} <span className="text-xs opacity-70">{a.networks[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
