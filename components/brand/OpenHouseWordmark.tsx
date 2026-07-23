type OpenHouseWordmarkProps = {
  compact?: boolean;
  className?: string;
};

export function OpenHouseWordmark({ compact = false, className = "" }: OpenHouseWordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="OpenHouse AI">
      <svg viewBox="0 0 40 40" className="h-8 w-8 flex-none" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 20.5 20 11l9.5 9.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 18.5V29h11V18.5M18 29v-7h4v7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 6.5v4M6.5 20h4M29.5 20h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      {compact ? null : (
        <span className="font-heading text-[0.9375rem] font-semibold tracking-[-0.025em] text-white">
          OpenHouse <span className="text-gold">AI</span>
        </span>
      )}
    </span>
  );
}
