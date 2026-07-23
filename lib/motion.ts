/**
 * Signature motion constants. One easing curve and three durations,
 * used by every animated component so the whole site moves as one system.
 */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DUR = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
} as const;
