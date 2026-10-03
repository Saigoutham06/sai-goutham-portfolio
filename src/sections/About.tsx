import React from 'react'
import { motion } from 'motion/react'
import { SectionHeading } from '../components/SectionHeading'
import { profileData } from '../data/profile'
import { fadeUp, staggerContainer } from '../lib/motion'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 relative bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          prefix="/"
          title="ABOUT"
          watermark="ABOUT"
          subtitle="Engineering philosophy, problem-solving mindset, and academic focus."
        />

        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Left Column: Editorial Summary */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#707070]">
                01 // BACKGROUND
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0A0909] leading-tight">
                Data Science student bridging analytical rigor with modern software development.
              </h3>
            </div>

            <div className="mt-8 pt-8 border-t border-[#E8E8E8]">
              <div className="grid grid-cols-2 gap-6 font-mono text-xs text-[#707070]">
                <div>
                  <span className="block text-[#0A0909] font-semibold uppercase">Degree</span>
                  <span>B.Tech in Data Science</span>
                </div>
                <div>
                  <span className="block text-[#0A0909] font-semibold uppercase">Graduation</span>
                  <span>Expected {profileData.expectedGraduation}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Factual Copy & Pillars */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-6 flex flex-col gap-6 text-[#707070] text-base md:text-lg leading-relaxed"
          >
            <p>{profileData.about.summary}</p>
            <p>{profileData.about.approach}</p>
            <p>{profileData.about.focus}</p>

            {/* Core Tenets Cards with subtle interactive hover */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-[#E8E8E8] bg-white transition-all duration-300 hover:border-[#0A0909] hover:-translate-y-1 hover:shadow-xs group">
                <span className="font-mono text-xs font-semibold text-[#0A0909] uppercase block mb-1 group-hover:text-black">
                  Problem Decomposition
                </span>
                <span className="text-xs text-[#707070] leading-relaxed block">
                  Breaking opaque challenges down to mathematical and structural primitives before writing code.
                </span>
              </div>
              <div className="p-5 rounded-xl border border-[#E8E8E8] bg-white transition-all duration-300 hover:border-[#0A0909] hover:-translate-y-1 hover:shadow-xs group">
                <span className="font-mono text-xs font-semibold text-[#0A0909] uppercase block mb-1 group-hover:text-black">
                  AI Tool Orchestration
                </span>
                <span className="text-xs text-[#707070] leading-relaxed block">
                  Pairing LLMs and agentic tools with rigorous human verification to construct production-ready software.
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
