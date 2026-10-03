import type { Variants, Transition } from 'motion/react'

/**
 * Editorial Motion Principles (Portfolio V2)
 *
 * Curve: Smooth, restrained, decelerating editorial curve.
 * No bouncy oscillations or rubber-banding.
 * Strictly GPU-accelerated transforms (transform, opacity).
 */
export const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const
export const EASE_SNAPPY = [0.16, 1, 0.3, 1] as const

export const transitionEditorial: Transition = {
  duration: 0.7,
  ease: EASE_EDITORIAL,
}

export const transitionFast: Transition = {
  duration: 0.35,
  ease: EASE_SNAPPY,
}

/**
 * Standard Fade Up
 * Ideal for section headings, copy blocks, and cards entering the viewport.
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_EDITORIAL,
    },
  },
}

/**
 * Pure Fade In
 * Ideal for backdrops, overlays, and atmospheric elements.
 */
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

/**
 * Text Reveal Variant
 * Masks text upward with dignity.
 */
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

/**
 * Stagger Container
 * Orchestrates child element entries progressively.
 */
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

/**
 * Hero Portrait Reveal
 * Sits at Layer 20 (in front of CircleStage and live Typography).
 */
export const heroPortraitVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 24,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: EASE_EDITORIAL,
      delay: 0.3,
    },
  },
}

/**
 * Hero Name Reveal (Layer 10)
 * Sits between CircleStage (Layer 0) and Portrait (Layer 20).
 */
export const heroNameVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: EASE_EDITORIAL,
      delay: 0.15,
    },
  },
}

/**
 * CircleStage Entrance (Layer 0)
 * Emerges gently behind typography and portrait.
 */
export const heroCircleVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 0.95,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: EASE_EDITORIAL,
      delay: 0.05,
    },
  },
}

/**
 * Card / Item Hover Lift
 * Subtle physical elevation response.
 */
export const hoverLift = {
  y: -2,
  transition: {
    duration: 0.25,
    ease: EASE_SNAPPY,
  },
}

/**
 * Watermark Subtle Entrance & Float
 */
export const watermarkVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: EASE_EDITORIAL,
    },
  },
}

/**
 * Hairline Divider Growth
 */
export const hairlineGrow: Variants = {
  hidden: {
    scaleX: 0,
    transformOrigin: 'left',
  },
  visible: {
    scaleX: 1,
    transformOrigin: 'left',
    transition: {
      duration: 0.85,
      ease: EASE_EDITORIAL,
    },
  },
}
