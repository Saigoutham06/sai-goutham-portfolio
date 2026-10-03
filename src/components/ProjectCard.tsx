import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { fadeUp } from '../lib/motion'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col rounded-2xl border border-[#E8E8E8] bg-white p-4 sm:p-6 transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Media placeholder / preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#F4F4F4]">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6 text-center text-[#707070]">
            <span className="font-mono text-xs uppercase tracking-widest">
              [Repository Architecture Preview]
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-6 flex flex-col flex-1">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#707070]">
          <span>{project.category}</span>
          {project.organization && <span>{project.organization}</span>}
        </div>

        <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-[#0A0909] group-hover:text-[#242424] transition-colors">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-[#707070] leading-relaxed flex-1">
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-[#F4F4F4] text-[#0A0909] border border-[#E8E8E8]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#E8E8E8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#707070] hover:text-[#0A0909] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Source</span>
              </a>
            )}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#0A0909] group-hover:underline"
            >
              <span>View Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
