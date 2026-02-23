export type Region = 'EU' | 'UK' | 'LATAM' | 'SEA' | 'Africa' | 'China';

export type PaymentFormType = 'card' | 'bank' | 'mobile' | 'wallet' | 'qr';

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  formType: PaymentFormType;
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
  { id: 'visa', name: 'Visa', icon: '💳', formType: 'card' },
  { id: 'mastercard', name: 'Mastercard', icon: '💳', formType: 'card' },
  { id: 'bank-transfer', name: 'Online Bank Transfer', icon: '🏦', formType: 'bank' },
];

export const regions: Record<Region, RegionConfig> = {
  EU: {
    currency: 'EUR',
    currencySymbol: '€',
    flag: '🇪🇺',
    methods: [
      ...globalMethods,
      { id: 'sepa', name: 'SEPA', icon: '🏛️', formType: 'bank' },
      { id: 'ideal', name: 'iDEAL', icon: '🟠', formType: 'bank' },
      { id: 'sofort', name: 'Sofort', icon: '🔶', formType: 'bank' },
      { id: 'bancontact', name: 'Bancontact', icon: '🔵', formType: 'card' },
    ],
  },
  UK: {
    currency: 'GBP',
    currencySymbol: '£',
    flag: '🇬🇧',
    methods: [
      ...globalMethods,
      { id: 'faster-payments', name: 'Faster Payments', icon: '⚡', formType: 'bank' },
    ],
  },
  LATAM: {
    currency: 'BRL',
    currencySymbol: 'R$',
    flag: '🌎',
    methods: [
      ...globalMethods,
      { id: 'pix', name: 'PIX', icon: '💚', formType: 'qr' },
      { id: 'spei', name: 'SPEI', icon: '🇲🇽', formType: 'bank' },
    ],
  },
  SEA: {
    currency: 'THB',
    currencySymbol: '฿',
    flag: '🌏',
    methods: [
      ...globalMethods,
      { id: 'grabpay', name: 'GrabPay', icon: '💚', formType: 'wallet' },
      { id: 'gcash', name: 'GCash', icon: '🔵', formType: 'wallet' },
    ],
  },
  Africa: {
    currency: 'KES',
    currencySymbol: 'KSh',
    flag: '🌍',
    methods: [
      ...globalMethods,
      { id: 'mpesa', name: 'M-Pesa', icon: '📱', formType: 'mobile' },
      { id: 'mobile-carrier', name: 'Mobile Carrier', icon: '📲', formType: 'mobile' },
    ],
  },
  China: {
    currency: 'CNY',
    currencySymbol: '¥',
    flag: '🇨🇳',
    methods: [
      ...globalMethods,
      { id: 'alipay', name: 'Alipay', icon: '🔷', formType: 'qr' },
      { id: 'wechat-pay', name: 'WeChat Pay', icon: '💬', formType: 'qr' },
      { id: 'unionpay', name: 'China UnionPay', icon: '🔴', formType: 'card' },
    ],
  },
};

export const cryptoAssets: CryptoAsset[] = [
  { id: 'btc', symbol: 'BTC', name: 'Bitcoin', networks: ['Bitcoin'], icon: '₿', price: 64786 },
  { id: 'eth', symbol: 'ETH', name: 'Ethereum', networks: ['Ethereum'], icon: 'Ξ', price: 1863 },
  { id: 'usdt-eth', symbol: 'USDT', name: 'Tether', networks: ['Ethereum'], icon: '₮', price: 1.0 },
  { id: 'usdt-tron', symbol: 'USDT', name: 'Tether', networks: ['Tron'], icon: '₮', price: 1.0 },
  { id: 'usdt-bsc', symbol: 'USDT', name: 'Tether', networks: ['BSC'], icon: '₮', price: 1.0 },
  { id: 'usdc-eth', symbol: 'USDC', name: 'USD Coin', networks: ['Ethereum'], icon: '$', price: 1.0 },
  { id: 'usdc-bsc', symbol: 'USDC', name: 'USD Coin', networks: ['BSC'], icon: '$', price: 1.0 },
];

export const presetAmounts = [100, 300, 500, 1000];

export const mockWalletAddresses: Record<string, string> = {
  Bitcoin: 'bc1qxy2k...gw4h7g',
  Ethereum: '0x3f8A...c293d',
  Tron: 'TJRyWw...X9mBn',
  BSC: '0x7cB2...e91aF',
};

export function getMockWallet(network: string): string {
  return mockWalletAddresses[network] ?? '0x3f8A...c293d';
}
