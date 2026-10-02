import type { Variants } from 'motion/react'

export const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: EASE_EDITORIAL,
    },
  },
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: EASE_EDITORIAL,
    },
  },
}

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export const heroPortraitVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: EASE_EDITORIAL,
      delay: 0.2,
    },
  },
}

export const heroNameVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: EASE_EDITORIAL,
      delay: 0.1,
    },
  },
}
