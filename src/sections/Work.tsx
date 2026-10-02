import React, { useState } from 'react'
import { motion } from 'motion/react'
import { GitBranch, Terminal } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { projectsData, projectFilters, type ProjectFilter } from '../data/projects'
import { fadeUp } from '../lib/motion'

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All')

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Real Projects') return p.type === 'real'
    if (activeFilter === 'Explorations') return p.type === 'exploration'
    return true
  })

  return (
    <section id="work" className="py-24 md:py-36 relative bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          prefix="/"
          title="SELECTED WORK"
          watermark="PORTFOLIO"
          counter={String(projectsData.length).padStart(2, '0')}
          subtitle="Curated implementations emphasizing problem-solving rigor, data reasoning, and engineering decisions."
        />

        {/* Filter Controls */}
        <div className="flex items-center gap-6 mb-12 border-b border-[#E8E8E8] pb-4">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`text-xs md:text-sm font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                activeFilter === filter
                  ? 'text-[#0A0909] border-b-2 border-[#0A0909] pb-4 -mb-[18px]'
                  : 'text-[#707070] hover:text-[#0A0909]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid or Future-Ready Pipeline Architecture State */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-14 text-center max-w-3xl mx-auto flex flex-col items-center gap-6"
          >
            <div className="w-14 h-14 rounded-full bg-white border border-[#E8E8E8] flex items-center justify-center text-[#0A0909] shadow-xs">
              <GitBranch className="w-6 h-6" />
            </div>

            <div className="max-w-lg">
              <span className="font-mono text-xs uppercase tracking-widest text-[#707070]">
                Repository Integration Pipeline
              </span>
              <h3 className="mt-2 text-xl md:text-2xl font-bold tracking-tight text-[#0A0909]">
                Verified Project Architecture Ready
              </h3>
              <p className="mt-3 text-sm text-[#707070] leading-relaxed">
                In strict adherence to factual integrity, no fictional projects or placeholder cards are rendered. Active repositories are undergoing technical audits and Git history verification before direct cataloging.
              </p>
            </div>

            <div className="w-full max-w-md bg-white rounded-xl border border-[#E8E8E8] p-4 text-left font-mono text-xs text-[#707070] flex items-start gap-3">
              <Terminal className="w-4 h-4 text-[#0A0909] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#0A0909] font-medium block">
                  Future Entry Schema:
                </span>
                <span className="text-[11px] block mt-1 leading-snug">
                  Problem → Architecture → Contribution → Verified Results → Git Source
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
