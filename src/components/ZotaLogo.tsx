export default function ZotaLogo({ className = 'h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 90"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* z */}
      <path d="M0 18h50L2 72h54v16H0l48-54H0V18z" />
      {/* o with eye dot */}
      <g>
        <path d="M88 16c-22 0-38 17-38 38s16 38 38 38 38-17 38-38-16-38-38-38zm0 60c-12 0-21-10-21-22s9-22 21-22 21 10 21 22-9 22-21 22z" />
        <circle cx="88" cy="54" r="8" />
      </g>
      {/* t */}
      <path d="M148 0h17v18h22v16h-22v34c0 8 3 12 11 12h11v12h-14c-16 0-25-9-25-24V34h-14V18h14V0z" />
      {/* a */}
      <path d="M236 16c-24 0-42 17-42 38s18 38 42 38c14 0 26-6 33-16l-13-9c-5 7-12 10-20 10-13 0-23-8-25-20h62v-5c0-20-15-36-37-36zm-24 30c3-11 12-18 24-18s21 7 24 18h-48z" />
    </svg>
  );
}
