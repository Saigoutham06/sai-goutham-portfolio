export interface ExperienceItem {
  id: string
  organization: string
  role: string
  period: string
  type: 'academic' | 'internship' | 'independent'
  description?: string[]
  previewImage?: string
  technologies?: string[]
}

/**
 * Factual Experience Timeline
 * In strict adherence to the Zero Fabrication Rule:
 * Only verified academic milestones and engineering development are represented.
 * Fictional employers and unverified roles are NEVER fabricated.
 */
export const experienceData: ExperienceItem[] = [
  {
    id: 'academic-projects',
    organization: 'Undergraduate Technical Projects & Applied Systems',
    role: 'Data Science & Algorithm Developer',
    period: '2023 — Present',
    type: 'academic',
    description: [
      'Focusing on dataset exploration, predictive statistical modeling, and experimental algorithms.',
      'Applying modern AI-assisted workflows and tooling to accelerate development, refactoring, and debugging.',
    ],
    technologies: ['Python', 'SQL', 'FastAPI', 'React', 'Git', 'Scikit-learn'],
  },
]
