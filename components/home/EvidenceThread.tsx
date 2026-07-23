type EvidenceThreadProps = {
  active?: boolean;
  className?: string;
};

export function EvidenceThread({ active = true, className = "" }: EvidenceThreadProps) {
  return (
    <svg
      viewBox="0 0 720 420"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="evidence-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#D4AF37" stopOpacity="0.15" />
          <stop offset="0.48" stopColor="#F4D77A" stopOpacity="0.95" />
          <stop offset="1" stopColor="#D4AF37" stopOpacity="0.35" />
        </linearGradient>
        <filter id="evidence-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M118 88 C210 88 205 175 312 176 C402 177 406 104 516 105 C612 106 602 207 652 210"
        fill="none"
        stroke="url(#evidence-line)"
        strokeWidth="1.5"
        strokeDasharray="5 7"
        className={active ? "opacity-100" : "opacity-35"}
      />
      <path
        d="M82 300 C188 300 208 244 312 244 C420 244 442 316 604 316"
        fill="none"
        stroke="url(#evidence-line)"
        strokeWidth="1.5"
        strokeDasharray="5 7"
        className={active ? "opacity-90" : "opacity-30"}
      />
      {[
        [118, 88],
        [312, 176],
        [516, 105],
        [652, 210],
        [82, 300],
        [312, 244],
        [604, 316],
      ].map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="3"
          fill="#F4D77A"
          filter="url(#evidence-glow)"
          className={active ? "opacity-100" : "opacity-40"}
        />
      ))}
    </svg>
  );
}
