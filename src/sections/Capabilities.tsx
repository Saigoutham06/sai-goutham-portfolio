import React from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { CapabilityAccordion } from '../components/CapabilityAccordion'
import { capabilityGroups } from '../data/capabilities'

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 md:py-36 relative bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          prefix="/"
          title="CAPABILITIES"
          watermark="SKILLS"
          counter="04"
          subtitle="Reflective self-assessment across data reasoning, algorithmic foundations, AI orchestration, and systems problem solving."
        />

        {/* Capability Accordion */}
        <div className="mt-8">
          <CapabilityAccordion groups={capabilityGroups} />
        </div>

        {/* Disclaimer / Transparency Note */}
        <div className="mt-8 flex items-center justify-between text-xs font-mono text-[#707070] border-t border-[#E8E8E8] pt-4">
          <span>* Ratings reflect reflective self-assessment and practical comfort, not industry tenure or grades.</span>
          <span className="hidden sm:inline">APPROXIMATE RANGES RESPECTED</span>
        </div>
      </div>
    </section>
  )
}
