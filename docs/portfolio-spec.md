# Portfolio Technical & Design Specification

## 1. Visual & Editorial Identity
- **Monochrome Palette:**
  - Primary Background: `#FDFDFD`
  - Primary Text / Black: `#0A0909`
  - Secondary Text / Muted: `#707070`
  - Border Lines: `#E8E8E8`
  - Dark Accent Section: `#242424` / `#FDFDFD` text
  - Deep Warm Accents: `#5E3A30`, `#CEB3A6`, `#9C6455` (used purely for subtle supporting tones)
- **Typography:**
  - Headings: Inter / Manrope bold & extra-bold with tight negative tracking (`-0.05em`)
  - Outlined Display Text: `-webkit-text-stroke: 2px #0A0909; color: transparent;`
  - Body: Modern Grotesk (`15px–18px`, `line-height: 1.6`)
  - Code / Metadata: JetBrains Mono / monospace (`13px`)

## 2. Technical Stack
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animation:** `motion` (Framer Motion)
- **Icons:** `lucide-react`

## 3. Architecture & Modularity
- `src/components/`: Reusable primitives (Buttons, AvailabilityPill, SectionHeading, CapabilityAccordion, ProjectCard, SocialLinks).
- `src/sections/`: Layout sections (Navigation, Hero, About, Capabilities, Work, Experience, Education, Contact, Footer).
- `src/data/`: Structured typed data layer (`profile.ts`, `capabilities.ts`, `experience.ts`, `education.ts`, `social.ts`, `projects.ts`).
- `src/lib/`: Shared utilities & motion variants (`motion.ts`).
- `src/assets/portrait/`: Verified user photographic assets.
