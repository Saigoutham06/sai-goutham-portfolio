import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { ArrowUpRight, X } from 'lucide-react'
import type { CapabilityGroup } from '../data/capabilities'

interface CapabilityAccordionProps {
  groups: CapabilityGroup[]
}

export const CapabilityAccordion: React.FC<CapabilityAccordionProps> = ({ groups }) => {
  const [activeId, setActiveId] = useState<string | null>('ai-orchestration')
  const shouldReduceMotion = useReducedMotion()

  const toggleGroup = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="flex flex-col border-t border-[#E8E8E8]">
      {groups.map((group) => {
        const isOpen = activeId === group.id

        return (
          <div
            key={group.id}
            className="border-b border-[#E8E8E8] transition-colors duration-300"
          >
            {/* Header row */}
            <button
              type="button"
              onClick={() => toggleGroup(group.id)}
              aria-expanded={isOpen}
              className={`w-full py-8 md:py-10 px-4 md:px-8 flex items-center justify-between text-left transition-all duration-300 group cursor-pointer ${
                isOpen ? 'bg-[#242424] text-[#FDFDFD]' : 'hover:bg-[#F4F4F4] text-[#0A0909]'
              }`}
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span
                  className={`font-mono text-xs md:text-sm font-semibold tracking-widest ${
                    isOpen ? 'text-[#A8A8A8]' : 'text-[#707070]'
                  }`}
                >
                  {group.number}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight uppercase">
                  {group.title}
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`text-xs md:text-sm hidden sm:inline-block font-mono ${
                    isOpen ? 'text-[#A8A8A8]' : 'text-[#707070]'
                  }`}
                >
                  {group.items.length} Areas
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isOpen
                      ? 'border-white/20 bg-white/10 text-white'
                      : 'border-[#E8E8E8] bg-white text-[#0A0909] group-hover:border-[#0A0909]'
                  }`}
                >
                  {isOpen ? (
                    <X className="w-4 h-4" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </motion.span>
              </div>
            </button>

            {/* Accordion Content with smooth height transition */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0.05 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden bg-[#242424] text-[#FDFDFD]"
                >
                  <div className="px-4 md:px-8 pb-10 pt-4 border-t border-white/10">
                    <p className="text-sm md:text-base text-[#A8A8A8] max-w-2xl mb-8 leading-relaxed">
                      {group.summary}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      {group.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all duration-300"
                        >
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="text-sm md:text-base font-semibold text-white">
                              {item.name}
                            </span>
                            <span className="font-mono text-xs md:text-sm font-medium text-white/90 whitespace-nowrap">
                              {item.scoreDisplay}
                            </span>
                          </div>

                          {/* Progress Indicator */}
                          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.scorePercent}%` }}
                              transition={{
                                duration: shouldReduceMotion ? 0.05 : 0.75,
                                delay: shouldReduceMotion ? 0 : idx * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="h-full bg-white rounded-full"
                            />
                          </div>

                          <p className="text-xs md:text-sm text-[#A8A8A8] leading-relaxed mt-2">
                            {item.description}
                          </p>

                          {item.status && (
                            <span className="inline-block mt-1 text-[11px] font-mono tracking-wider text-[#A8A8A8] uppercase">
                              [{item.status}]
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
