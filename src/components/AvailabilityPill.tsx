import React from 'react'
import { motion } from 'motion/react'

interface AvailabilityPillProps {
  label?: string
  className?: string
}

export const AvailabilityPill: React.FC<AvailabilityPillProps> = ({
  label = '3-1 DATA SCIENCE UNDERGRADUATE',
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E8E8] shadow-xs text-xs font-medium tracking-wider uppercase text-[#0A0909] select-none ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <motion.span
          animate={{ scale: [1, 1.6, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inline-flex h-full w-full rounded-full bg-[#0A0909] opacity-75"
        />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A0909]" />
      </span>
      <span>{label}</span>
    </div>
  )
}
