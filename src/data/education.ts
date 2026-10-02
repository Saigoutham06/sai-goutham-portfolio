export interface EducationItem {
  id: string
  degree: string
  specialization: string
  status: string
  expectedGraduation: string
  institution?: string
  highlights?: string[]
}

export const educationData: EducationItem[] = [
  {
    id: 'btech-ds',
    degree: 'Bachelor of Technology (B.Tech)',
    specialization: 'Data Science',
    status: '3-1 Undergraduate',
    expectedGraduation: '2028',
    highlights: [
      'Core foundation in Algorithms, Data Structures, and Database Management Systems',
      'Applied Mathematical Statistics, Probability Theory, and Linear Algebra',
      'Machine Learning Modeling and Exploratory Data Analysis Pipelines',
    ],
  },
]
