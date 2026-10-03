import React from 'react'
import { motion } from 'motion/react'
import { AvailabilityPill } from '../components/AvailabilityPill'
import { Button } from '../components/Button'
import { SocialLinks } from '../components/SocialLinks'
import { fadeUp, watermarkVariant, staggerContainer } from '../lib/motion'

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 md:py-44 relative bg-[#FDFDFD] overflow-hidden">
      {/* Background Watermark with subtle entrance */}
      <motion.span
        aria-hidden="true"
        variants={watermarkVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl sm:text-9xl md:text-[18rem] font-black tracking-tighter watermark-text text-[#0A0909]/[0.025] select-none pointer-events-none"
      >
        CONNECT
      </motion.span>

      <motion.div
        variants={staggerContainer(0.12, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center"
      >
        {/* Availability Pill */}
        <motion.div variants={fadeUp} className="mb-8">
          <AvailabilityPill label="OPEN FOR COLLABORATION &amp; INTERNSHIPS" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#0A0909] uppercase leading-[0.95]"
        >
          HAVE A CHALLENGE OR PROJECT IN MIND?
        </motion.h2>

        {/* Message */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#707070] max-w-xl leading-relaxed"
        >
          Let's collaborate on data science pipelines, algorithmic challenges, and AI-accelerated application development.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-10">
          <Button
            href="mailto:contact@saigoutham.dev"
            variant="primary"
            className="!py-4 !px-8 !text-sm"
          >
            LET'S CONNECT
          </Button>
        </motion.div>

        {/* Social Links Row */}
        <motion.div variants={fadeUp} className="mt-14">
          <SocialLinks direction="horizontal" />
        </motion.div>
      </motion.div>
    </section>
  )
}
