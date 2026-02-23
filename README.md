# Zota On-Ramp

Interactive demo landing page for Zota's crypto on-ramp product. Fiat to crypto, anywhere.

## Features

- 🌍 **6 Regions** — EU, UK, LATAM, SEA, Africa, China
- 💳 **Region-specific payment methods** — Visa/Mastercard globally + local methods (PIX, M-Pesa, Alipay, etc.)
- ₿ **7 Crypto assets** — BTC, ETH, USDT (Ethereum/Tron/BSC), USDC (Ethereum/BSC)
- 🎨 **Dark & Light mode** — Toggle with localStorage persistence
- 📱 **Mobile-first** — Responsive design, works on all screen sizes
- ⚡ **Interactive widget** — 3-step flow: Amount → Payment Method → Confirmation

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS v4

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/phanatic-ai/zota-onramp-demo.git
cd zota-onramp-demo
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
```

Output in `dist/` — deploy to any static hosting (Vercel, Netlify, S3, etc.)

### Preview Production Build

```bash
npm run preview
```
