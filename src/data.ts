export type Region = 'EU' | 'UK' | 'LATAM' | 'SEA' | 'Africa' | 'China';

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  networks: string[];
  icon: string;
  price: number;
}

export interface RegionConfig {
  currency: string;
  currencySymbol: string;
  flag: string;
  methods: PaymentMethod[];
}

const globalMethods: PaymentMethod[] = [
  { id: 'visa', name: 'Visa', icon: '💳' },
  { id: 'mastercard', name: 'Mastercard', icon: '💳' },
  { id: 'bank-transfer', name: 'Online Bank Transfer', icon: '🏦' },
];

export const regions: Record<Region, RegionConfig> = {
  EU: {
    currency: 'EUR',
    currencySymbol: '€',
    flag: '🇪🇺',
    methods: [
      ...globalMethods,
      { id: 'sepa', name: 'SEPA', icon: '🏛️' },
      { id: 'ideal', name: 'iDEAL', icon: '🟠' },
      { id: 'sofort', name: 'Sofort', icon: '🔶' },
      { id: 'bancontact', name: 'Bancontact', icon: '🔵' },
    ],
  },
  UK: {
    currency: 'GBP',
    currencySymbol: '£',
    flag: '🇬🇧',
    methods: [
      ...globalMethods,
      { id: 'faster-payments', name: 'Faster Payments', icon: '⚡' },
    ],
  },
  LATAM: {
    currency: 'BRL',
    currencySymbol: 'R$',
    flag: '🌎',
    methods: [
      ...globalMethods,
      { id: 'pix', name: 'PIX', icon: '💚' },
      { id: 'spei', name: 'SPEI', icon: '🇲🇽' },
    ],
  },
  SEA: {
    currency: 'THB',
    currencySymbol: '฿',
    flag: '🌏',
    methods: [
      ...globalMethods,
      { id: 'grabpay', name: 'GrabPay', icon: '💚' },
      { id: 'gcash', name: 'GCash', icon: '🔵' },
    ],
  },
  Africa: {
    currency: 'KES',
    currencySymbol: 'KSh',
    flag: '🌍',
    methods: [
      ...globalMethods,
      { id: 'mpesa', name: 'M-Pesa', icon: '📱' },
      { id: 'mobile-carrier', name: 'Mobile Carrier', icon: '📲' },
    ],
  },
  China: {
    currency: 'CNY',
    currencySymbol: '¥',
    flag: '🇨🇳',
    methods: [
      ...globalMethods,
      { id: 'alipay', name: 'Alipay', icon: '🔷' },
      { id: 'wechat-pay', name: 'WeChat Pay', icon: '💬' },
      { id: 'unionpay', name: 'China UnionPay', icon: '🔴' },
    ],
  },
};

export const cryptoAssets: CryptoAsset[] = [
  { id: 'btc', symbol: 'BTC', name: 'Bitcoin', networks: ['Bitcoin'], icon: '₿', price: 95000 },
  { id: 'eth', symbol: 'ETH', name: 'Ethereum', networks: ['Ethereum'], icon: 'Ξ', price: 2800 },
  { id: 'usdt-eth', symbol: 'USDT', name: 'Tether', networks: ['Ethereum'], icon: '₮', price: 1.0 },
  { id: 'usdt-tron', symbol: 'USDT', name: 'Tether', networks: ['Tron'], icon: '₮', price: 1.0 },
  { id: 'usdt-bsc', symbol: 'USDT', name: 'Tether', networks: ['BSC'], icon: '₮', price: 1.0 },
  { id: 'usdc-eth', symbol: 'USDC', name: 'USD Coin', networks: ['Ethereum'], icon: '$', price: 1.0 },
  { id: 'usdc-bsc', symbol: 'USDC', name: 'USD Coin', networks: ['BSC'], icon: '$', price: 1.0 },
];

export const presetAmounts = [100, 300, 500, 1000];

export const mockWalletAddress = '0x3f8A...c293d';
