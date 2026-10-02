import React from 'react'
import { motion } from 'motion/react'
import { SectionHeading } from '../components/SectionHeading'
import { educationData } from '../data/education'
import { fadeUp } from '../lib/motion'

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-36 relative bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          prefix="/"
          title="EDUCATION"
          watermark="LEARNING"
          counter="01"
          subtitle="Formal academic foundations in data science, mathematics, and computer science."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#E8E8E8] pt-10">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
            >
              {/* Degree & Specialization */}
              <div className="md:col-span-5">
                <span className="font-mono text-xs uppercase tracking-widest text-[#707070]">
                  {edu.status}
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0909]">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-base text-[#707070] font-medium">
                  Specialization in <span className="text-[#0A0909] font-semibold">{edu.specialization}</span>
                </p>
                {edu.institution && (
                  <p className="text-sm text-[#707070] mt-1">{edu.institution}</p>
                )}
              </div>

              {/* Coursework & Foundations */}
              <div className="md:col-span-5 flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#0A0909] font-semibold">
                  Core Foundations
                </span>
                <ul className="text-sm text-[#707070] space-y-1.5">
                  {edu.highlights?.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0A0909] font-mono text-xs mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graduation Timeline */}
              <div className="md:col-span-2 md:text-right font-mono text-xs sm:text-sm text-[#707070]">
                <span>Graduation</span>
                <span className="block text-base font-semibold text-[#0A0909] mt-0.5">
                  {edu.expectedGraduation}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
