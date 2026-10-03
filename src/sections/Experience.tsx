import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { SectionHeading } from '../components/SectionHeading'
import { experienceData } from '../data/experience'
import { fadeUp } from '../lib/motion'

export const Experience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="experience" className="py-24 md:py-36 relative bg-[#242424] text-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          prefix="/"
          title="EXPERIENCE"
          watermark="TIMELINE"
          counter="01"
          isDark={true}
          subtitle="Chronological track record of academic research, technical builds, and engineering development."
        />

        {/* Experience Rows */}
        <div className="flex flex-col border-t border-white/10 mt-8">
          {experienceData.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={shouldReduceMotion ? undefined : { x: 4 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="py-10 md:py-14 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group hover:bg-white/[0.02] transition-all px-2 md:px-4 rounded-xl"
            >
              {/* Organization & Role */}
              <div className="lg:col-span-5 flex flex-col">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
                  {item.organization}
                </span>
                <span className="text-sm md:text-base text-[#A8A8A8] mt-1 font-mono">
                  {item.role}
                </span>
                <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-white/15 text-[#A8A8A8] w-max group-hover:border-white/30 transition-colors">
                  {item.type}
                </span>
              </div>

              {/* Description */}
              <div className="lg:col-span-5 flex flex-col gap-2.5 text-sm md:text-base text-[#A8A8A8] leading-relaxed">
                {item.description?.map((bullet, idx) => (
                  <p key={idx} className="flex items-start gap-2">
                    <span className="text-white/40 font-mono mt-1 text-xs">▸</span>
                    <span>{bullet}</span>
                  </p>
                ))}

                {item.technologies && (
                  <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-white/80 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 hover:border-white/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Period */}
              <div className="lg:col-span-2 lg:text-right font-mono text-xs sm:text-sm text-[#A8A8A8]">
                {item.period}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Factual Integrity Subtext */}
        <div className="mt-8 text-xs font-mono text-[#A8A8A8]/60 flex items-center justify-between">
          <span>* Factual timeline. Corporate internship milestones will be incorporated following official verification.</span>
          <span className="hidden sm:inline">NO FABRICATED METRICS</span>
        </div>
      </div>
    </section>
  )
}
