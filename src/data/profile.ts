export interface Profile {
  displayName: string
  fullName: string
  academicStatus: string
  role: string
  headline: string
  statement: string
  expectedGraduation: number
  metadata: {
    curious: boolean
    builder: boolean
    learner: boolean
    data_driven: boolean
  }
  about: {
    summary: string
    approach: string
    focus: string
  }
}

export const profileData: Profile = {
  displayName: 'SAI GOUTHAM',
  fullName: 'Burka Sai Goutham',
  academicStatus: '3-1 DATA SCIENCE UNDERGRADUATE',
  role: 'DATA SCIENCE STUDENT',
  headline: 'DATA SCIENCE UNDERGRADUATE',
  statement: 'Building with data, algorithms, and modern AI-assisted development.',
  expectedGraduation: 2028,
  metadata: {
    curious: true,
    builder: true,
    learner: true,
    data_driven: true,
  },
  about: {
    summary:
      'Third-year Data Science undergraduate focused on dataset reasoning, mathematical statistics, and algorithms, paired with modern AI-assisted software workflows.',
    approach:
      'My engineering philosophy centers on problem decomposition, rigorous mathematical thinking, and leveraging AI tools to build and iterate with high velocity and architectural clarity.',
    focus:
      'Comfortable exploring raw dataset distributions, structuring ML pipelines, developing full-stack prototypes with Python, React, and FastAPI, and orchestrating developer tools.',
  },
}
