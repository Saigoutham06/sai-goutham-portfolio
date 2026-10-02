export interface Project {
  id: string
  title: string
  slug: string
  category: string
  type: 'real' | 'exploration'
  organization?: string
  description: string
  coverImage?: string
  featured?: boolean
  liveUrl?: string
  technologies?: string[]
  githubUrl?: string
}

/**
 * Projects Collection
 * In accordance with Section 5 (Zero Fabrication Rule) and Section 20 (Work):
 * Real projects will be populated only from verified Git repositories and implementation evidence.
 */
export const projectsData: Project[] = []

export const projectFilters = ['All', 'Real Projects', 'Explorations'] as const
export type ProjectFilter = (typeof projectFilters)[number]
