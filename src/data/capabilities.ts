export interface CapabilityItem {
  name: string
  scoreDisplay: string
  scorePercent: number
  isRange?: boolean
  description: string
  status?: string
}

export interface CapabilityGroup {
  id: string
  number: string
  title: string
  summary: string
  items: CapabilityItem[]
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: 'data',
    number: '01',
    title: 'DATA REASONING & STATISTICS',
    summary:
      'Understanding dataset anatomy, distribution behaviors, statistical inference, and database normalization before touching model code.',
    items: [
      {
        name: 'Dataset Understanding & Exploration',
        scoreDisplay: '7.5 / 10',
        scorePercent: 75,
        description:
          'Reasoning about feature columns, targets, missingness patterns, skewness, outliers, and data hygiene.',
      },
      {
        name: 'Mathematical Statistics',
        scoreDisplay: '7.5 / 10',
        scorePercent: 75,
        description:
          'Comfortable deriving and reasoning through probability distributions, hypothesis testing, and variance properties on paper.',
      },
      {
        name: 'SQL & Relational Databases (MySQL / SQLite)',
        scoreDisplay: '6.0 / 10',
        scorePercent: 60,
        description:
          'Designing normalized schemas, complex joins, indexing strategies, and database query optimization.',
      },
    ],
  },
  {
    id: 'algorithms-ml',
    number: '02',
    title: 'ALGORITHMS & MACHINE LEARNING',
    summary:
      'Strong theoretical algorithmic problem-solving paired with hands-on fundamental ML modeling workflows.',
    items: [
      {
        name: 'Algorithmic Problem Solving',
        scoreDisplay: '8.0 / 10',
        scorePercent: 80,
        description:
          'Theoretical understanding of time/space complexity, graph theory, dynamic programming, and optimal data structure choices.',
      },
      {
        name: 'ML Modeling Fundamentals',
        scoreDisplay: '6.0 – 6.5 / 10',
        scorePercent: 62.5,
        isRange: true,
        description:
          'Supervised and unsupervised models (regression, trees, clustering), metric selection, and cross-validation hygiene.',
      },
      {
        name: 'Mathematical Foundations of ML',
        scoreDisplay: '5.5 – 6.0 / 10',
        scorePercent: 57.5,
        isRange: true,
        status: 'Active Area of Study',
        description:
          'Currently advancing knowledge in linear algebra transformations, multivariate calculus, and loss surfaces.',
      },
      {
        name: 'ML Engineering',
        scoreDisplay: '4.0 / 10',
        scorePercent: 40,
        status: 'Foundational',
        description:
          'Honest assessment: baseline understanding of model deployment pipelines and containerization; actively expanding.',
      },
    ],
  },
  {
    id: 'ai-orchestration',
    number: '03',
    title: 'AI ORCHESTRATION & LLMS',
    summary:
      'Leveraging state-of-the-art AI systems as cognitive accelerators and developing intelligent application workflows.',
    items: [
      {
        name: 'AI-Assisted Software Development',
        scoreDisplay: '8.5 / 10',
        scorePercent: 85,
        description:
          'Orchestrating agentic AI copilots, structuring context prompts, iterative refactoring, and AI-accelerated development cycles.',
      },
      {
        name: 'AI Tool Orchestration',
        scoreDisplay: '8.5 / 10',
        scorePercent: 85,
        description:
          'Connecting CLI tools, automated task runners, LSP agents, and multi-model routing into cohesive developer pipelines.',
      },
      {
        name: 'LLM Fundamentals & Application Dev',
        scoreDisplay: '6.0 / 10',
        scorePercent: 60,
        description:
          'Building applications around foundation models, token mechanics, structured output parsing, and tool calling.',
      },
      {
        name: 'Multimodal AI',
        scoreDisplay: '6.0 / 10',
        scorePercent: 60,
        description:
          'Integrating vision-language models, document parsing, and multi-modal input processing into software flows.',
      },
      {
        name: 'RAG Concepts (Retrieval-Augmented Generation)',
        scoreDisplay: '3.0 / 10',
        scorePercent: 30,
        status: 'Core Concept Familiarity',
        description:
          'Solid theoretical grasp of the pipeline (data/docs → chunking → vector retrieval → context → LLM); not claiming advanced specialization.',
      },
    ],
  },
  {
    id: 'software',
    number: '04',
    title: 'SOFTWARE & SYSTEMS PROBLEM SOLVING',
    summary:
      'Decomposing real-world systems, experimenting systematically, and building clean, responsive applications.',
    items: [
      {
        name: 'Problem Decomposition',
        scoreDisplay: '8.0 / 10',
        scorePercent: 80,
        description:
          'Breaking ambiguous, multi-layered requirements into modular, testable, and incrementally solvable sub-problems.',
      },
      {
        name: 'Experimental Problem Solving',
        scoreDisplay: '8.0 / 10',
        scorePercent: 80,
        description:
          'Hypothesis-driven iteration across tools, model parameters, architectural configurations, and benchmark evaluations.',
      },
      {
        name: 'Python Development',
        scoreDisplay: '7.0 / 10',
        scorePercent: 70,
        description:
          'Idiomatic Python, scientific stack (NumPy, Pandas, Scikit-learn), scripting, API integration, and clean data pipelines.',
      },
      {
        name: 'Full-Stack Foundations (React, TypeScript, FastAPI)',
        scoreDisplay: '6.0 / 10',
        scorePercent: 60,
        description:
          'Modern responsive frontends with React and TypeScript backed by typed REST endpoints built with FastAPI.',
      },
      {
        name: 'Git & Version Control Workflows',
        scoreDisplay: '7.0 / 10',
        scorePercent: 70,
        description:
          'Structured atomic commits, branching hygiene, merge resolution, and collaborative GitHub repository practices.',
      },
    ],
  },
]
