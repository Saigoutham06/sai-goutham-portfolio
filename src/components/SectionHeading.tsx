import React from 'react'
import { motion } from 'motion/react'
import { fadeUp } from '../lib/motion'

interface SectionHeadingProps {
  prefix?: string
  title: string
  watermark?: string
  subtitle?: string
  counter?: string
  isDark?: boolean
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  prefix = '/',
  title,
  watermark,
  subtitle,
  counter,
  isDark = false,
  className = '',
}) => {
  return (
    <div className={`relative mb-16 md:mb-24 select-none ${className}`}>
      {/* Background Watermark */}
      {watermark && (
        <span
          aria-hidden="true"
          className={`absolute -top-12 md:-top-20 left-0 text-7xl sm:text-9xl md:text-[14rem] font-black tracking-tighter watermark-text z-0 opacity-100 ${
            isDark ? 'text-white/[0.03]' : 'text-[#0A0909]/[0.035]'
          }`}
        >
          {watermark}
        </span>
      )}

      {/* Main Section Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative z-10 flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b pb-6 border-current/10"
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#707070]">
              {prefix}
            </span>
            <h2
              className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase ${
                isDark ? 'text-[#FDFDFD]' : 'text-[#0A0909]'
              }`}
            >
              {title}
            </h2>
            {counter && (
              <span className="font-mono text-xs md:text-sm font-normal text-[#707070] ml-2">
                [{counter}]
              </span>
            )}
          </div>
          {subtitle && (
            <p
              className={`mt-3 text-sm md:text-base max-w-xl ${
                isDark ? 'text-[#A8A8A8]' : 'text-[#707070]'
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  )
}
