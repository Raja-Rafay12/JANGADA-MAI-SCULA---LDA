/**
 * Shared Framer Motion variants and timing configurations
 * Premium, subtle, smooth easing curves ([0.22, 1, 0.36, 1])
 * Strictly transforms and opacity for 60fps performance
 */

export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export const TRANSITION_DEFAULT = {
  duration: 0.6,
  ease: EASE_PREMIUM,
};

export const TRANSITION_SLOW = {
  duration: 0.8,
  ease: EASE_PREMIUM,
};

export const TRANSITION_FAST = {
  duration: 0.35,
  ease: EASE_PREMIUM,
};

export const VIEWPORT_REVEAL = {
  once: true,
  margin: '-80px' as const,
};

// Section Heading & General Fade Up
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: customDelay,
      ease: EASE_PREMIUM,
    },
  }),
};

// Simple Opacity Fade
export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: customDelay,
      ease: EASE_PREMIUM,
    },
  }),
};

// Stagger Container
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Stagger Child Item (Fade Up)
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_PREMIUM,
    },
  },
};

// Scale & Fade In (for Portfolio Cards / Badges)
export const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: EASE_PREMIUM,
    },
  },
};

// Directional slide variant for RTL & LTR
// isRTL ? -1 : 1
export const directionalSlideVariant = (directionMultiplier = 1, distance = 40) => ({
  hidden: {
    opacity: 0,
    x: distance * directionMultiplier,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: EASE_PREMIUM,
    },
  },
});

// Micro-interaction button hover/tap props
export const buttonMotionProps = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: EASE_PREMIUM },
};

// Card Lift on Hover
export const cardHoverMotionProps = {
  whileHover: { y: -4 },
  transition: { duration: 0.25, ease: EASE_PREMIUM },
};
