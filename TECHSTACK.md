# Portfolio Tech Stack

## 1. Purpose

This document defines the technology stack, tooling, architecture boundaries, and implementation rules for the personal portfolio website.

The portfolio is a frontend-first personal website.

The stack is intentionally lightweight and maintainable.

---

# 2. Core Stack

| Layer | Technology | Purpose |
|---|---|---|
| UI | React | Component-based user interface |
| Language | TypeScript | Type safety and maintainable application code |
| Build Tool | Vite | Fast local development and production bundling |
| Styling | Tailwind CSS | Utility-first responsive styling |
| Animation | Motion | Hero, scroll, hover, accordion, and page interactions |
| Icons | Lucide React | Consistent editorial iconography |
| Version Control | Git | Local source control |
| Remote Repository | GitHub | Repository hosting and collaboration |
| Build / Deployment Environment | Replit | Implementation and testing environment |

---

# 3. Frontend

## React

React is the primary UI framework.

Use React for:

- page composition
- reusable components
- section components
- interactive states
- project rendering
- service accordions
- navigation state
- responsive UI behavior

Use functional components and modern React patterns.

Do not create unnecessary abstraction for simple static elements.

---

# 4. Programming Language

## TypeScript

TypeScript is required throughout the application.

Use TypeScript for:

- components
- data models
- props
- utility functions
- animation configuration
- project schemas
- experience schemas
- social link schemas

Avoid `any` unless there is a clearly justified external-library requirement.

Prefer explicit interfaces/types.

Example:

```ts
export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  type: "real" | "exploration";
  description: string;
  coverImage?: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  technologies?: string[];
};
```

---

# 5. Build Tool

## Vite

Use Vite with the React + TypeScript template.

Initialize with:

```powershell
npm create vite@latest . -- --template react-ts
```

Vite is responsible for:

- development server
- TypeScript/JS bundling
- production builds
- fast development feedback

Do not introduce another build system.

---

# 6. Styling

## Tailwind CSS

Use Tailwind CSS for the primary styling system.

Install:

```powershell
npm install tailwindcss @tailwindcss/vite
```

Use Tailwind for:

- layout
- spacing
- responsive behavior
- typography sizing
- borders
- positioning
- flex/grid
- visual states

Custom CSS should be reserved for situations where Tailwind is less appropriate, such as:

- design tokens
- complex typography effects
- text outlines
- custom keyframes
- special editorial details
- atmospheric effects

Do not create a second competing design system.

---

# 7. Animation

## Motion

Use the `motion` package for intentional interface animation.

Install:

```powershell
npm install motion
```

Use it for:

- hero entrance
- section reveal
- staggered content
- project hover transitions
- accordion expansion
- experience previews
- mobile menu transitions
- subtle page transitions

Preferred easing:

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

Motion should support hierarchy and interaction.

Do not animate everything.

---

# 8. Icon System

## Lucide React

Use Lucide React for interface icons.

Install:

```powershell
npm install lucide-react
```

Use for:

- arrows
- external links
- menu
- close
- navigation indicators
- directional controls
- lightweight social/interface icons where appropriate

Keep the icon style consistent.

Do not mix multiple icon libraries unless there is a specific requirement.

Recommended icon sizes:

```text
Navigation: 14–16px
Buttons: 15–18px
Social links: 14–16px
```

---

# 9. Version Control

## Git

Git is the local source-control system.

Initialize:

```powershell
git init
```

Initial stable commit:

```powershell
git add .
git commit -m "Initialize portfolio"
```

Use meaningful commits during development.

Recommended milestone commits:

```text
Initialize portfolio
Build design system
Build navigation and hero
Build content sections
Build work section
Add interactions
Add responsive layouts
Add accessibility and performance polish
```

---

# 10. GitHub

GitHub is the remote repository/source-control bridge.

The portfolio should eventually be connected to a GitHub repository for:

- version history
- backup
- remote development
- Replit integration
- deployment workflows
- future collaboration

GitHub is not the content database.

Portfolio content remains inside the project's typed data layer.

---

# 11. Replit

Replit is the implementation/build environment.

Role of Replit:

```text
Implement
Run
Test
Debug
Iterate
```

Replit is not responsible for inventing:

- architecture
- visual design
- portfolio content
- project information
- personal claims

The source-of-truth documents remain:

```text
DESIGN_DOC.md
portfolio_working_spec.md
TECHSTACK.md
```

The workflow is:

```text
User / Specifications
        ↓
Architecture + Design + Content Rules
        ↓
Replit implementation
        ↓
Testing / debugging
        ↓
GitHub version control
```

---

# 12. Project Structure

Recommended structure:

```text
D:\Portfolio
│
├── DESIGN_DOC.md
├── portfolio_working_spec.md
├── TECHSTACK.md
│
├── docs/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── portrait/
│   │
│   ├── components/
│   │
│   ├── data/
│   │   ├── profile.ts
│   │   ├── capabilities.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── social.ts
│   │   └── projects.ts
│   │
│   ├── lib/
│   │
│   ├── sections/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Capabilities.tsx
│   │   ├── Work.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   │
│   └── styles/
│       └── globals.css
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── index.html
```

---

# 13. Architecture Responsibilities

## `src/sections/`

Page-level sections.

Examples:

```text
Hero
About
Capabilities
Work
Experience
Education
Contact
```

These components compose the page.

---

## `src/components/`

Reusable UI components.

Examples:

```text
Button
AvailabilityPill
SocialLinks
SectionHeading
ProjectCard
ServiceAccordion
```

Do not put entire pages inside this directory.

---

## `src/data/`

All portfolio content.

Use this directory for:

- identity
- projects
- capabilities
- education
- experience
- social links

This keeps content separate from presentation.

---

## `src/lib/`

Shared utilities.

Possible contents:

```text
motion.ts
scroll.ts
formatting.ts
```

Keep utilities small and reusable.

---

## `src/assets/`

Local visual assets.

Current important asset:

```text
src/assets/portrait/
```

The hero portrait should be a genuine transparent subject cutout, not a crop of the composite Dribbble-style preview.

---

# 14. No Backend Required for V1

The current portfolio does not require:

- FastAPI
- Node backend
- MySQL
- SQLite
- MongoDB
- Firebase
- Supabase

The portfolio is a static/frontend application unless a future feature explicitly requires backend functionality.

Do not add a backend merely because the user's broader technical projects use one.

---

# 15. No AI Runtime Required

The portfolio itself is **not an AI application**.

Do not add:

- LLM APIs
- Gemini API
- OpenAI API
- Claude API
- RAG pipelines
- vector databases
- model inference
- chatbot functionality

The user's AI-assisted development workflow is separate from the portfolio's runtime architecture.

AI tools may be used during development, but they are not required by the website.

---

# 16. No Python Runtime Required

Python is not part of the portfolio application's runtime stack.

Do not add:

```text
Python
FastAPI
Flask
Django
```

unless a future requirement specifically introduces backend functionality.

The current site is a JavaScript/TypeScript frontend application.

---

# 17. Data Strategy

The portfolio should be data-driven without requiring a database.

Use local TypeScript data modules:

```text
src/data/profile.ts
src/data/projects.ts
src/data/capabilities.ts
src/data/experience.ts
src/data/education.ts
src/data/social.ts
```

This provides:

- easy updates
- type safety
- centralized content
- no runtime database dependency
- predictable builds

---

# 18. Routing

The homepage should use section anchors:

```text
/about
/capabilities
/work
/experience
/education
/contact
```

The exact implementation may use hash anchors on a single-page portfolio.

For future project detail pages, the architecture should be ready for:

```text
/work/:slug
```

Do not introduce a routing library until route-based pages are actually required.

If project detail routes become necessary, use a lightweight React-compatible routing solution.

---

# 19. Responsive Technology Strategy

Use Tailwind responsive utilities.

Primary breakpoints:

```text
< 640px       Mobile
640–1023px    Tablet
1024px+       Desktop
```

Responsive behavior should be designed intentionally.

Do not simply scale desktop down.

Important responsive elements:

- navigation
- hero typography
- portrait positioning
- project grid
- capabilities accordion
- experience rows
- social pills
- contact CTA

---

# 20. Accessibility Technology Strategy

Use native HTML semantics wherever possible.

Required practices:

```text
semantic nav
main
section
header
footer
button
anchor links
proper headings
keyboard navigation
focus-visible
aria-expanded for accordions
```

Support:

```css
@media (prefers-reduced-motion: reduce)
```

Avoid JavaScript-based accessibility behavior when native HTML can provide it.

---

# 21. Performance Strategy

Prioritize a fast first load.

Use:

- Vite production bundling
- optimized images
- responsive image sizing
- lazy loading below the fold
- transform/opacity animations
- minimal dependencies

Avoid:

- unnecessary runtime libraries
- heavy WebGL
- giant background videos
- excessive blur
- continuous expensive scroll calculations
- oversized image assets

---

# 22. Asset Strategy

Recommended formats:

```text
AVIF
WebP
PNG only when transparency is required
JPG only when appropriate
```

Hero portrait:

```text
transparent PNG/WebP
```

Decorative/background imagery:

```text
WebP/AVIF preferred
```

Project screenshots:

```text
WebP/AVIF preferred
```

Do not store duplicate copies of the same asset at multiple resolutions unless there is a real responsive-image requirement.

---

# 23. Design-System Relationship

The technology stack must implement the design described by:

```text
DESIGN_DOC.md
```

Important visual requirements include:

```text
Oversized editorial typography
Outlined + filled hero name
Monochrome base palette
Generous whitespace
Pill controls
Thin rules
Editorial crosshairs
Large section watermarks
Dark experience section
Subtle atmospheric background
Restrained motion
```

Technology choices should serve these design goals.

Do not let framework conventions dictate the visual design.

---

# 24. Development Commands

From:

```text
D:\Portfolio
```

Initialize:

```powershell
git init
npm create vite@latest . -- --template react-ts
npm install
```

Install portfolio dependencies:

```powershell
npm install motion lucide-react
npm install tailwindcss @tailwindcss/vite
```

Start development:

```powershell
npm run dev
```

Production build:

```powershell
npm run build
```

Preview production build:

```powershell
npm run preview
```

---

# 25. Dependency Philosophy

Install dependencies only when they directly support the portfolio.

Current required runtime dependencies:

```text
react
react-dom
motion
lucide-react
```

Styling/build dependencies:

```text
tailwindcss
@tailwindcss/vite
vite
typescript
```

Do not add packages for capabilities that can be implemented cleanly with:

- CSS
- React
- browser APIs
- existing dependencies

---

# 26. Browser APIs

Use native browser APIs where appropriate.

Examples:

### IntersectionObserver

For:

- active navigation
- section visibility
- scroll reveal triggers

### Media Queries

For:

- pointer detection
- reduced motion
- responsive interaction behavior

### `window.matchMedia`

For:

- reduced-motion detection
- desktop/touch interaction decisions

Do not introduce a large library just to replace a simple browser API.

---

# 27. What the Portfolio Stack Does NOT Include

Unless requirements change, the V1 portfolio does not include:

```text
Python
FastAPI
Node backend
Express
MySQL
SQLite
MongoDB
Redis
Firebase
Supabase
GraphQL
REST API backend
LLM APIs
RAG
Vector database
ML inference
AI chatbot
CMS
Authentication
User accounts
Admin dashboard
Payment system
```

The site is intentionally a lightweight frontend portfolio.

---

# 28. Technology Decision Summary

The final stack is:

```text
FRONTEND
React
TypeScript

BUILD
Vite

STYLING
Tailwind CSS
Custom CSS where necessary

MOTION
Motion

ICONS
Lucide React

SOURCE CONTROL
Git
GitHub

IMPLEMENTATION ENVIRONMENT
Replit

RUNTIME
Browser
```

Architecture:

```text
React UI
   ↓
TypeScript data layer
   ↓
Tailwind styling
   ↓
Motion interactions
   ↓
Static client-side portfolio
```

---

# 29. Core Principle

The stack should stay subordinate to the portfolio's goal:

> Build a fast, maintainable, responsive, visually distinctive portfolio that presents real work and accurate information without unnecessary technical complexity.

Use technology because it improves the result—not simply because it can be added.
