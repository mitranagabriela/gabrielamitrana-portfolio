import type { Variants, Transition } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

export const durations = {
  fast: 0.2,
  base: 0.4,
  slow: 0.8,
} as const;

export const baseTransition: Transition = {
  duration: durations.base,
  ease,
};

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeUpItem: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: durations.base, ease } },
};

export const stagger = (delay = 0.08): Variants => ({
  initial: {},
  animate: { transition: { staggerChildren: delay } },
});

export const viewportOnce = { once: true, margin: "-10%" } as const;
