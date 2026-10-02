import React from 'react'
import { motion } from 'motion/react'
import { profileData } from '../data/profile'
import { Button } from '../components/Button'
import { SocialLinks } from '../components/SocialLinks'
import portraitCutout from '../assets/portrait/sai-goutham-hero.png'
import { heroPortraitVariant, heroNameVariant, fadeUp } from '../lib/motion'

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-12 sm:pb-20 flex flex-col justify-between overflow-hidden bg-[#FDFDFD]"
    >
      {/* Editorial Decorative Crosshairs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 right-8 sm:right-16 text-[#0A0909]/20 font-mono text-2xl select-none z-30"
      >
        +
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-36 left-8 sm:left-24 text-[#0A0909]/20 font-mono text-2xl select-none z-30"
      >
        +
      </div>

      {/* Layer 0: Independent Atmosphere / Aura Circle matching the reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[48%] w-[320px] sm:w-[480px] md:w-[600px] lg:w-[660px] aspect-square rounded-full bg-[#EAEAEA]/80 z-0 select-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative my-auto">
        {/* Layer 10 & 20: Display Typography & Transparent Portrait Composition */}
        <div className="relative w-full flex items-center justify-center select-none pt-4 sm:pt-6 min-h-[340px] sm:min-h-[460px] md:min-h-[540px]">
          {/* Layer 10: Live HTML Condensed Typography — Single Line Baseline on Desktop */}
          <motion.div
            variants={heroNameVariant}
            initial="hidden"
            animate="visible"
            className="relative z-10 w-full flex flex-col sm:flex-row flex-nowrap items-center sm:items-baseline justify-center whitespace-nowrap gap-x-[3.5vw] leading-none text-center select-none"
          >
            {/* Outlined SAI */}
            <h1 className="font-display name-outline text-[22vw] sm:text-[18vw] md:text-[16vw] lg:text-[15.5vw] uppercase tracking-normal leading-[0.84] select-none">
              SAI
            </h1>

            {/* Solid GOUTHAM */}
            <span className="font-display text-[#0A0909] text-[22vw] sm:text-[18vw] md:text-[16vw] lg:text-[15.5vw] uppercase tracking-normal leading-[0.84] select-none">
              GOUTHAM
            </span>
          </motion.div>

          {/* Layer 20: Authentic Transparent Portrait Cutout */}
          <motion.div
            variants={heroPortraitVariant}
            initial="hidden"
            animate="visible"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[38%] w-[300px] sm:w-[420px] md:w-[520px] lg:w-[580px] pointer-events-none z-20 flex items-center justify-center"
          >
            <img
              src={portraitCutout}
              alt="Sai Goutham"
              className="w-full h-auto object-contain filter contrast-105 drop-shadow-md select-none"
              loading="eager"
            />
          </motion.div>
        </div>

        {/* Layer 30: Interactive Controls, Positioning Copy & Socials */}
        <div className="mt-12 sm:mt-20 md:mt-24 pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end relative z-30">
          {/* Lower-Left Positioning Statement */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
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
            transition={{ delay: 0.4 }}
            className="flex flex-col md:items-end gap-5"
          >
            <SocialLinks showMetadata={true} direction="vertical" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Editorial Hairline Rule */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 relative z-30">
        <div className="w-full h-[1px] bg-[#E8E8E8]" />
      </div>
    </section>
  )
}
