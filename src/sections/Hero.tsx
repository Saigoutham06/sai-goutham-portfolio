import React from 'react'
import { motion } from 'motion/react'
import { profileData } from '../data/profile'
import { Button } from '../components/Button'
import { SocialLinks } from '../components/SocialLinks'
import portraitAsset from '../assets/portrait/sai-goutham-hero.png'
import { heroPortraitVariant, heroNameVariant, fadeUp } from '../lib/motion'

/**
 * CircleStage (Layer 0)
 * Visual stage/atmosphere sitting strictly behind typography and portrait.
 * Subtle, GPU-accelerated atmospheric breathing animation.
 */
const CircleStage: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    aria-hidden="true"
    initial={{ scale: 0.94, opacity: 0 }}
    animate={{
      scale: [1, 1.025, 1],
      opacity: [0.85, 0.95, 0.85],
    }}
    transition={{
      scale: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
      opacity: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
      default: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    }}
    className={`aspect-square rounded-full bg-[#ECECEC] pointer-events-none z-0 select-none ${className}`}
  />
)

/**
 * PortraitRenderer (Layer 20)
 * Sits in front of the circle (Layer 0) and live typography (Layer 10).
 * Structured as an isolated renderer for easy future 3D model substitution.
 */
const PortraitRenderer: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    variants={heroPortraitVariant}
    initial="hidden"
    animate="visible"
    className={`aspect-square pointer-events-none z-20 flex items-center justify-center select-none ${className}`}
  >
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="w-full h-full flex items-center justify-center"
    >
      <img
        src={portraitAsset}
        alt="Sai Goutham"
        className="w-full h-full object-contain filter contrast-105 drop-shadow-sm select-none pointer-events-none"
        loading="eager"
      />
    </motion.div>
  </motion.div>
)

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-12 sm:pb-20 flex flex-col justify-between overflow-hidden bg-[#FDFDFD]"
    >
      {/* Editorial Decorative Crosshairs (Layer 30) */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-28 right-8 sm:right-16 text-[#0A0909] font-mono text-2xl select-none z-30"
      >
        +
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="pointer-events-none absolute bottom-36 left-8 sm:left-24 text-[#0A0909] font-mono text-2xl select-none z-30"
      >
        +
      </motion.div>

      {/* Main Visual Canvas Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative my-auto">
        {/* ========================================================
            HERO VISUAL COMPOSITION
            Layer 0  (z-0):  CircleStage (Backdrop)
            Layer 10 (z-10): Live HTML Typography (SAI GOUTHAM)
            Layer 20 (z-20): PortraitRenderer (Cutout in front)
        ======================================================== */}
        <div className="relative w-full flex items-center justify-center select-none pt-4 sm:pt-6 min-h-[340px] sm:min-h-[460px] md:min-h-[540px]">
          
          {/* LAYER 0 — CircleStage (Behind typography and behind portrait) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] z-0 pointer-events-none">
            <CircleStage className="w-[min(80vw,310px)] sm:w-[410px] md:w-[470px] lg:w-[530px] xl:w-[570px]" />
          </div>

          {/* LAYER 10 — Live HTML Typography (In front of circle, behind portrait) */}
          <motion.div
            variants={heroNameVariant}
            initial="hidden"
            animate="visible"
            className="relative z-10 w-full flex flex-col sm:flex-row flex-nowrap items-center sm:items-baseline justify-center whitespace-nowrap gap-x-[3vw] leading-none text-center select-none"
          >
            {/* Outlined SAI */}
            <h1 className="font-display name-outline text-[20vw] sm:text-[clamp(4.25rem,11.5vw,12.5rem)] uppercase tracking-normal leading-[0.84] select-none">
              SAI
            </h1>

            {/* Solid GOUTHAM */}
            <span className="font-display text-[#0A0909] text-[20vw] sm:text-[clamp(4.25rem,11.5vw,12.5rem)] uppercase tracking-normal leading-[0.84] select-none">
              GOUTHAM
            </span>
          </motion.div>

          {/* LAYER 20 — PortraitRenderer (In front of circle AND typography) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] z-20 pointer-events-none">
            <PortraitRenderer className="w-[min(80vw,310px)] sm:w-[410px] md:w-[470px] lg:w-[530px] xl:w-[570px]" />
          </div>
        </div>

        {/* ========================================================
            LAYER 30 — UI Controls, Positioning Copy & Socials
        ======================================================== */}
        <div className="mt-12 sm:mt-20 md:mt-24 pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end relative z-30">
          {/* Lower-Left Positioning Statement & CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
            className="flex flex-col gap-4 max-w-md"
          >
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1px] bg-[#0A0909]/40" />
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#707070]">
                {profileData.role}
              </span>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#0A0909] leading-snug">
              {profileData.statement}
            </p>

            <div className="pt-4">
              <Button href="#work" variant="circle-arrow">
                EXPLORE MY WORK
              </Button>
            </div>
          </motion.div>

          {/* Lower-Right Metadata & Stacked Social Pills */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
            className="flex flex-col md:items-end gap-5 relative"
          >
            {/* Subtle editorial vertical accent line matching reference */}
            <div className="hidden md:block absolute -left-8 bottom-6 w-[1px] h-14 bg-[#0A0909]/20 pointer-events-none" />
            <SocialLinks showMetadata={true} direction="vertical" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Editorial Hairline Rule (Layer 30) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 relative z-30">
        <div className="w-full h-[1px] bg-[#E8E8E8]" />
      </div>
    </section>
  )
}
