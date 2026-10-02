# Portfolio & Personal Technical Profile — Working Specification

## 1. Purpose

This document captures the decisions made so far about the user's personal portfolio, technical positioning, and future Replit workflow.

The portfolio should communicate **real capability and usefulness**, not simply a list of technologies or AI-generated projects.

The user is a 3-1 B.Tech Data Science student and wants to build a strong portfolio before the next semester.

---

## 2. Important Portfolio Principle

The portfolio should emphasize:

> **Being able to build something useful for a real end user is more important than merely being able to build a technically impressive project.**

Future portfolio work should therefore prioritize:

1. Clearly identified end user
2. Concrete user problem
3. Useful product outcome
4. Appropriate technology choices
5. Trustworthy system behavior
6. Good UX
7. Real implementation evidence
8. Clear explanation of the user's own contribution

Do not optimize projects merely for technical complexity.

---

## 3. Current Technical Profile

### Stronger areas

- AI-assisted software development
- AI tool orchestration
- Problem decomposition
- Algorithmic problem solving
- Experimental problem solving
- Dataset understanding
- System-level thinking
- Technical debugging
- Mathematical statistics
- Practical Python development

### Developing / working knowledge

- Machine learning fundamentals
- ML modeling
- LLM fundamentals
- LLM application development
- Multimodal AI
- React / TypeScript
- FastAPI / REST APIs
- SQL
- MySQL / SQLite
- Git / GitHub
- Data analysis
- Feature engineering
- Model evaluation

### Early/developing areas

- Advanced RAG
- Advanced LLM engineering
- ML engineering
- MLOps

Do not overstate these areas on the portfolio.

---

## 4. Important Clarifications About Skill Level

### Machine Learning

The user's current strength is **ML modeling and understanding**, not ML engineering.

Do not describe the user as an ML engineer simply because they have built ML-backed applications.

### LLMs

The user understands LLM fundamentals and practical application concepts.

They understand the basic RAG idea:

- data/documents
- chunking
- retrieval
- supplying relevant context to a model

They are **not claiming advanced RAG expertise**.

Do not automatically describe them as an advanced RAG or LLM engineer.

### Algorithms

The user considers theoretical understanding of algorithms an above-average strength.

They can understand an algorithm well when the required conceptual foundation is available.

### Mathematical Statistics

The user is comfortable with mathematical/statistical concepts and working through them on paper.

The fact that they do not always dictate formulas or derivations to an AI does not mean they lack the underlying knowledge.

Do not equate conversational use of mathematics with mathematical ability.

### Experimental Thinking

The user enjoys experimenting with systems, tools, architectures, models, and workflows.

Use the term **experimental problem solving** where appropriate rather than unnecessarily claiming formal experimental methodology.

### Mathematical Foundations of ML

This is currently being learned and should be represented as a developing/average-level area rather than an advanced specialization.

### Statistical Inference

Do not emphasize "rigorous statistical inference" as a portfolio skill at this stage.

---

## 5. How the User Works With AI

The user is particularly comfortable working inside modern AI development environments.

Typical workflow:

User defines problem
→ AI-assisted reasoning
→ implementation
→ testing
→ debugging
→ AI review/audit
→ iteration

Tools the user works with include:

- Gemini
- Antigravity
- Claude Code
- OmniRoute
- Replit
- Git/GitHub

The user understands that different AI systems can have different roles, such as:

- primary implementation
- reasoning
- review
- auditing
- experimentation
- prototyping

This is a genuine strength and should be reflected as **AI-assisted software development / AI tool orchestration**, not exaggerated into advanced AI research.

---

# 6. Portfolio Website — Current Workflow

## Initial goal

Build a personal portfolio website using Replit.

The portfolio itself should be:

- non-AI
- generic enough to remain useful as the user's career develops
- aesthetic
- professional
- responsive
- maintainable
- based on the user's actual resume

The portfolio should **not become an AI demo**.

The user will provide:

1. A design document
2. Their resume

The design document is the source of truth for visual design.

The resume is the source of truth for factual personal information.

Do not fabricate:

- projects
- achievements
- experience
- metrics
- certifications
- employers
- links
- results

---

# 7. Design Document Workflow

When the user says to work with the portfolio design:

### Phase 1 — Wait for the design document

Do not invent the visual direction.

First receive the design document.

### Phase 2 — Convert the design into a precise implementation prompt

Analyze the design document and translate it into:

- layout requirements
- typography
- spacing
- colors
- components
- navigation
- interactions
- animations
- responsive behavior
- page structure
- accessibility expectations
- implementation constraints

### Phase 3 — Combine with resume

After the design document is available, combine it with the verified resume content.

Only then produce the complete Replit build specification.

---

# 8. Replit Workflow

The user wants Replit used as a builder, but does **not** want Replit to be the source of architectural decisions.

The intended relationship is:

**ChatGPT / user → design and architecture**

**Replit → implementation/build execution**

The user is concerned that Replit's AI may consume tokens quickly or make unnecessary decisions.

Therefore:

- Give Replit precise requirements.
- Avoid asking Replit to invent the product.
- Avoid asking Replit to redesign the architecture.
- Avoid letting Replit fabricate portfolio content.
- Do not ask Replit to explain or dump source code into the conversation.
- Let Replit implement and test the specified result.
- Keep the authoritative design/requirements outside Replit.
- Use GitHub as the source-control bridge for the project.

The user wants to connect Replit to GitHub so the resulting portfolio can be versioned and maintained.

---

# 9. Resume Handling

The currently supplied resume file is a LaTeX template containing many placeholders and example content.

Important:

It should NOT be treated as factual evidence for the user's actual:

- projects
- internships
- companies
- achievements
- certifications
- metrics
- university
- CGPA
- links

Those fields must be replaced only when the user provides verified information.

The resume structure itself can inform the portfolio's content architecture.

---

# 10. Future Project Integration

Projects should be added later.

They should be based on verified evidence from:

- GitLens
- actual repositories
- project reviews
- technical documentation
- implementation details
- verified results

Do not create generic project cards before the actual project information is available.

When projects are eventually integrated, each project should ideally explain:

- End user
- Problem
- Why the problem matters
- Solution
- Key features
- Architecture
- Technologies
- User's actual contribution
- Important engineering decisions
- Results/evidence
- GitHub repository
- Demo, when available

The goal is to demonstrate **usefulness and engineering judgment**, not merely technology usage.

---

# 11. Portfolio Positioning

The user's portfolio should not claim:

- Expert Data Scientist
- Expert ML Engineer
- Advanced LLM Engineer
- AI Researcher
- MLOps Engineer
- Advanced RAG Specialist

unless the user's demonstrated work later supports those claims.

A more accurate positioning is:

> Data Science undergraduate with practical experience in Python, machine learning fundamentals, data analysis, AI-assisted software development, modern AI development workflows, and building data-driven applications.

The portfolio should emphasize the combination of:

**Data understanding + algorithmic reasoning + experimentation + AI-assisted development + practical software building.**

---

# 12. Reusable Future Instruction

When the user later asks for a project-specific or portfolio-specific prompt:

- preserve the user's actual skill level
- do not invent expertise
- distinguish ML modeling from ML engineering
- distinguish LLM fundamentals from advanced LLM engineering
- distinguish basic RAG familiarity from advanced RAG
- treat algorithms as an above-average strength
- treat mathematical statistics as a solid strength
- treat mathematical foundations of ML as developing
- treat experimental problem solving as a strength
- prioritize end-user usefulness
- use verified repository/project evidence when available

The portfolio should evolve as the user's real work evolves.
