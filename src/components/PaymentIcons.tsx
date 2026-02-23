import type { ReactNode } from 'react';

const icons: Record<string, ReactNode> = {
  visa: (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#1A1F71" />
      <path d="M19.5 21h-2.7l1.7-10.5h2.7L19.5 21zm11.2-10.2c-.5-.2-1.4-.4-2.4-.4-2.7 0-4.5 1.4-4.5 3.4 0 1.5 1.4 2.3 2.4 2.8 1 .5 1.4.8 1.4 1.3 0 .7-.8 1-1.6 1-1.1 0-1.6-.2-2.5-.5l-.3-.2-.4 2.2c.6.3 1.8.5 3 .5 2.8 0 4.7-1.4 4.7-3.5 0-1.2-.7-2.1-2.3-2.8-.9-.5-1.5-.8-1.5-1.3 0-.4.5-.9 1.5-.9.9 0 1.5.2 2 .4l.2.1.3-2.1zm6.8-.3h-2.1c-.6 0-1.1.2-1.4.8L30 21h2.8l.6-1.5h3.5l.3 1.5H40l-2.3-10.5h-2.2zm-2.4 6.8l1.1-3 .3-.8.2.7.6 3.1h-2.2zM16.3 10.5L13.6 18l-.3-1.4c-.5-1.7-2.1-3.6-3.8-4.5l2.4 8.9h2.9l4.3-10.5h-2.8z" fill="#fff" />
      <path d="M11.5 10.5H7.1l0 .2c3.4.9 5.6 2.9 6.5 5.4l-.9-4.7c-.2-.7-.7-.9-1.2-.9z" fill="#F9A533" />
    </svg>
  ),
  mastercard: (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#252525" />
      <circle cx="19" cy="16" r="8" fill="#EB001B" />
      <circle cx="29" cy="16" r="8" fill="#F79E1B" />
      <path d="M24 9.8a8 8 0 0 1 0 12.4 8 8 0 0 1 0-12.4z" fill="#FF5F00" />
    </svg>
  ),
  'bank-transfer': (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#E8EDF2" />
      <path d="M24 6l12 7H12l12-7z" fill="#4A5568" />
      <rect x="15" y="14" width="3" height="8" rx="0.5" fill="#4A5568" />
      <rect x="22.5" y="14" width="3" height="8" rx="0.5" fill="#4A5568" />
      <rect x="30" y="14" width="3" height="8" rx="0.5" fill="#4A5568" />
      <rect x="12" y="23" width="24" height="2.5" rx="0.5" fill="#4A5568" />
    </svg>
  ),
  sepa: (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#2C4FA1" />
      <text x="24" y="18" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="Arial">SEPA</text>
      <rect x="10" y="21" width="28" height="1.5" rx="0.75" fill="#FFD700" />
    </svg>
  ),
  ideal: (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#fff" />
      <rect x="1" y="1" width="46" height="30" rx="3" fill="none" stroke="#CC0066" strokeWidth="1.5" />
      <circle cx="20" cy="14" r="5" fill="#CC0066" />
      <text x="30" y="18" textAnchor="middle" fill="#CC0066" fontSize="7" fontWeight="bold" fontFamily="Arial">iDEAL</text>
      <rect x="10" y="22" width="28" height="1.5" rx="0.75" fill="#CC0066" />
    </svg>
  ),
  sofort: (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#EF809F" />
      <text x="24" y="18" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="Arial">Sofort</text>
    </svg>
  ),
  bancontact: (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#005498" />
      <circle cx="19" cy="16" r="6" fill="#FFD800" />
      <circle cx="29" cy="16" r="6" fill="#005498" stroke="#FFD800" strokeWidth="1.5" />
      <text x="24" y="28" textAnchor="middle" fill="#fff" fontSize="5" fontFamily="Arial">Bancontact</text>
    </svg>
  ),
  'faster-payments': (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#7B2D8E" />
      <path d="M16 22l6-12h4l-6 12h-4zm6 0l6-12h4l-6 12h-4z" fill="#fff" />
    </svg>
  ),
  pix: (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#F0F0F0" />
      <g transform="translate(24,16) scale(0.5)">
        <path d="M7.7-7.7L0-15.4-7.7-7.7l-4.6-4.6L0-24.6l12.3 12.3-4.6 4.6z" fill="#32BCAD" />
        <path d="M-7.7 7.7L0 15.4l7.7-7.7 4.6 4.6L0 24.6-12.3 12.3l4.6-4.6z" fill="#32BCAD" />
        <path d="M7.7 7.7L15.4 0 7.7-7.7l4.6-4.6L24.6 0 12.3 12.3l-4.6-4.6z" fill="#00A1E0" />
        <path d="M-7.7-7.7L-15.4 0l7.7 7.7-4.6 4.6L-24.6 0-12.3-12.3l4.6 4.6z" fill="#00A1E0" />
      </g>
    </svg>
  ),
  spei: (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#004A97" />
      <text x="24" y="18" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="Arial">SPEI</text>
    </svg>
  ),
  grabpay: (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#00B14F" />
      <text x="24" y="18" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="Arial">GrabPay</text>
    </svg>
  ),
  gcash: (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#007DFE" />
      <text x="24" y="18" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="Arial">GCash</text>
    </svg>
  ),
  mpesa: (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#4BA341" />
      <text x="24" y="13" textAnchor="middle" fill="#fff" fontSize="6" fontFamily="Arial">M</text>
      <text x="24" y="22" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold" fontFamily="Arial">PESA</text>
    </svg>
  ),
  'mobile-carrier': (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#FF6B00" />
      <rect x="18" y="6" width="12" height="20" rx="2" fill="none" stroke="#fff" strokeWidth="1.5" />
      <circle cx="24" cy="22" r="1.5" fill="#fff" />
      <rect x="21" y="8" width="6" height="1" rx="0.5" fill="#fff" />
    </svg>
  ),
  alipay: (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#1677FF" />
      <text x="24" y="18" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="Arial">Alipay</text>
    </svg>
  ),
  'wechat-pay': (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#07C160" />
      <g transform="translate(14, 7)">
        <ellipse cx="10" cy="8" rx="9" ry="7" fill="#fff" opacity="0.9" />
        <circle cx="7" cy="7" r="1" fill="#07C160" />
        <circle cx="13" cy="7" r="1" fill="#07C160" />
        <path d="M5 13l-2 3 3-1.5" fill="#fff" opacity="0.9" />
      </g>
      <text x="24" y="27" textAnchor="middle" fill="#fff" fontSize="5" fontFamily="Arial">WeChat Pay</text>
    </svg>
  ),
  unionpay: (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#1E3264" />
      <rect x="8" y="5" width="10" height="22" rx="2" fill="#E21836" />
      <rect x="19" y="5" width="10" height="22" rx="2" fill="#00447C" />
      <rect x="30" y="5" width="10" height="22" rx="2" fill="#007B84" />
      <text x="24" y="19" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold" fontFamily="Arial">UnionPay</text>
    </svg>
  ),
};

export default function PaymentIcon({ id }: { id: string }) {
  return icons[id] ?? (
    <svg viewBox="0 0 48 32" className="w-10 h-7">
      <rect width="48" height="32" rx="4" fill="#E2E8F0" />
      <circle cx="24" cy="16" r="6" fill="#A0AEC0" />
    </svg>
  );
}
