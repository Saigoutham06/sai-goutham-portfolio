# Personal Portfolio — Design & Interaction Specification
### Reference: Dribbble — “Personal Portfolio Website — Animations”
### Source URL: https://dribbble.com/shots/26995447-Personal-Portfolio-Website-Animations

> **Purpose:** This document translates the referenced Dribbble concept into an implementation-ready design specification for a real personal portfolio website.
>
> **Reference attribution:** Visual direction, section structure, palette, typography approach, layout hierarchy, and visible UI patterns are derived from the referenced Dribbble shot by Dymas Alfin for Mikan Team. Animation timings, responsive breakpoints, accessibility behavior, and implementation details that are not explicitly visible in the reference are marked as recommended implementation decisions rather than claims about the original design.

---

# 1. Design Intent

The portfolio should feel:

- Minimal
- Editorial
- Premium
- Calm
- Typography-led
- Highly readable
- Interactive without becoming visually noisy
- Professional enough for recruiters and clients
- Personal enough to communicate identity

The central design principle is:

> **Use motion to guide attention, not to decorate the page.**

The reference explicitly positions the portfolio around clear communication, selected work, strong hierarchy, generous white space, minimal visual language, and a recruiter/client-friendly structure.

The experience should therefore avoid:

- Excessive gradients
- Large collections of unrelated colors
- Overloaded card grids
- Constant background motion
- Distracting cursor effects
- Excessive glassmorphism
- Heavy 3D scenes
- Long introductory animations that delay content

The visual personality should come primarily from:

1. Oversized typography
2. High-contrast black/white composition
3. Soft atmospheric background imagery
4. Rounded pill controls
5. Subtle hover interactions
6. Large negative space
7. Editorial alignment
8. Carefully controlled transitions

---

# 2. Reference Analysis

## 2.1 Reference Visual Language

The reference uses a mostly monochrome interface:

- Near-white page surfaces
- Near-black primary text
- Mid-gray secondary text
- Very light dividers
- Warm muted brown/beige supporting tones
- Black primary CTA buttons
- White pill controls
- Soft grayscale cloud/background imagery

The page is deliberately restrained so that project imagery and typography carry most of the visual weight.

## 2.2 Reference Color Palette

The Dribbble page exposes the following palette:

| Token | Hex | Intended Role |
|---|---|---|
| Background / White | `#FDFDFD` | Primary page background |
| Secondary Gray | `#707070` | Supporting text |
| Primary Black | `#0A0909` | Main text, strong headings |
| Deep Warm Brown | `#5E3A30` | Optional warm accent |
| Warm Beige | `#CEB3A6` | Soft accent/supporting visual |
| Warm Brown Accent | `#9C6455` | Accent states / imagery |

### Recommended CSS tokens

```css
:root {
  --color-bg: #FDFDFD;
  --color-surface: #FFFFFF;
  --color-text: #0A0909;
  --color-text-secondary: #707070;
  --color-border: #E8E8E8;
  --color-brown-deep: #5E3A30;
  --color-brown-soft: #CEB3A6;
  --color-brown-accent: #9C6455;
  --color-dark-section: #242424;
  --color-dark-text: #FDFDFD;
  --color-dark-muted: #A8A8A8;
}
```

### Color rule

The portfolio should remain visually black, white, and gray by default.

Warm brown/beige tones should behave like supporting accents, not primary brand colors.

---

# 3. Overall Page Architecture

The portfolio should be structured as one continuous scrolling experience with anchor navigation.

Recommended page order:

```text
ROOT
│
├── Persistent Navigation
│
├── HERO / INTRODUCTION
│
├── SELECTED WORK
│
├── SERVICES
│
├── EXPERIENCE
│
├── CONTACT CTA
│
└── FOOTER
```

Recommended URL structure:

```text
/
#work
#services
#experience
#contact
```

Optional project-detail route:

```text
/work/[slug]
```

---

# 4. Global Layout System

## 4.1 Desktop Canvas

Recommended implementation:

```text
Viewport
┌───────────────────────────────────────────────────────────────┐
│                      outer background                         │
│                                                               │
│    ┌─────────────────────────────────────────────────────┐    │
│    │                    main page shell                  │    │
│    │                                                     │    │
│    │                       CONTENT                       │    │
│    │                                                     │    │
│    └─────────────────────────────────────────────────────┘    │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

Use a centered max-width layout.

Recommended values:

```css
--page-max-width: 1440px;
--page-side-padding: clamp(20px, 5vw, 72px);
--section-gap: clamp(96px, 12vw, 220px);
```

Do not force every section into an identical rectangular grid. The reference uses editorial spacing and varying content density.

## 4.2 Suggested Container

```css
.container {
  width: min(100% - 40px, 1440px);
  margin-inline: auto;
}
```

For larger desktop:

```css
@media (min-width: 1024px) {
  .container {
    width: min(100% - 96px, 1440px);
  }
}
```

## 4.3 Section Spacing

Use large vertical whitespace.

Recommended range:

```text
Desktop: 140–220px
Tablet: 100–160px
Mobile: 72–120px
```

Whitespace is a major part of the design language. Do not compress sections simply because there is not much content.

---

# 5. Typography System

Typography is the most important visual component.

The reference is typography-driven and uses oversized headings with strong weight contrast.

## 5.1 Recommended Font Direction

Use a modern grotesk / neo-grotesk sans-serif.

Recommended families:

```text
Inter
Manrope
Geist
Neue Montreal-style equivalent
Suisse/Helvetica-style equivalent
```

If a single freely available font is required, use **Inter** or **Manrope**.

Avoid decorative display fonts.

## 5.2 Type Hierarchy

### Display / Hero Name

```text
Desktop:
  font-size: clamp(72px, 10vw, 180px)
  line-height: 0.86–0.95
  font-weight: 700–800
  letter-spacing: -0.055em

Mobile:
  font-size: clamp(48px, 17vw, 88px)
  line-height: 0.9
  letter-spacing: -0.05em
```

### Section Heading

```text
Desktop: 64–96px
Mobile: 44–64px
Weight: 600–700
Tracking: -0.045em
```

### Project Title

```text
Desktop: 30–44px
Mobile: 26–34px
Weight: 500–650
```

### Body

```text
Desktop: 16–18px
Mobile: 15–17px
Line-height: 1.45–1.65
Color: #707070
```

### Metadata

```text
12–14px
Weight: 400–500
Color: #707070
```

### Navigation

```text
13–15px
Weight: 450–550
```

---

# 6. Global Navigation

The reference uses a compact horizontal navigation.

## 6.1 Navigation Layout

Recommended structure:

```text
┌───────────────────────────────────────────────────────────────┐
│ [ ● Available for New Project ]                               │
│                                                               │
│              Work   Service   Experience   Contact            │
│                                      [ Let's Talk ↗ ]          │
└───────────────────────────────────────────────────────────────┘
```

Desktop:

- Left: availability status pill
- Center/right: section links
- Far right: primary CTA
- Navigation should remain visually lightweight
- No large filled navigation bar

## 6.2 Availability Pill

Visual specification:

```text
white background
rounded full-pill
thin border
small green status dot
compact text
subtle shadow
```

Example:

```text
● Available for New Project
```

The dot should subtly pulse.

Recommended animation:

```text
opacity: 1 → 0.55 → 1
duration: 1.8–2.2s
ease: ease-in-out
repeat: infinite
```

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  animation: none;
}
```

## 6.3 Navigation Counters

The reference visually indicates counts next to items such as Work, Service, and Experience.

Recommended format:

```text
Work [04]
Service [03]
Experience [05]
```

Use smaller, lighter numerals.

These counts should be dynamic where practical.

Example:

```jsx
{projects.length}
{services.length}
{experiences.length}
```

## 6.4 Navigation Behavior

Clicking:

```text
Work       → scroll to #work
Service    → scroll to #services
Experience → scroll to #experience
Contact    → scroll to #contact
Let's Talk → scroll to #contact
```

Use smooth scrolling.

Recommended:

```css
html {
  scroll-behavior: smooth;
}
```

For SPA routing, use a scroll-aware navigation utility rather than forcing full page reloads.

---

# 7. Hero Section

The hero is the main identity statement.

## 7.1 Hero Composition

The reference shows:

- Large name typography spanning much of the viewport
- One outlined name component
- One solid/filled name component
- A large centered portrait
- Profession/title on the lower-left
- Social links on the lower-right
- Primary collaboration CTA

Approximate composition:

```text
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│ DYMAS ALFIN                                                     │
│                                                                │
│                ┌───────────────────┐                           │
│                │                   │                           │
│                │      PORTRAIT     │                           │
│                │                   │                           │
│                └───────────────────┘                           │
│                                                                │
│ UI/UX Designer                              ○ Dribbble          │
│ Designing digital products...              ○ Instagram         │
│ [ Let's collaborate ↗ ]                    ○ LinkedIn          │
│                                            ○ Behance            │
└────────────────────────────────────────────────────────────────┘
```

Replace all sample identity content with the actual portfolio owner's information.

## 7.2 Name Treatment

A defining feature is contrast between outlined and filled text.

Recommended implementation:

```css
.name-outline {
  color: transparent;
  -webkit-text-stroke: 2px var(--color-text);
}

.name-filled {
  color: var(--color-text);
}
```

Desktop outline stroke:

```text
1.5–3px
```

Mobile:

```text
1–2px
```

Avoid using a font weight so heavy that the outline becomes visually clogged.

## 7.3 Hero Portrait

The image should feel integrated with typography rather than placed in a conventional card.

Recommended:

- Grayscale or low-saturation portrait
- Transparent background preferred
- Person positioned from approximately chest/shoulder level
- Bottom of portrait may visually overlap the lower hero boundary
- Avoid decorative image frames

Recommended treatment:

```css
.hero-image {
  filter: grayscale(100%);
  object-fit: contain;
}
```

Do not over-process the image.

## 7.4 Hero Copy

Format:

```text
[Role]

[Short one-sentence positioning statement]

[Primary CTA]
```

Example:

```text
Data Science Student & Developer

I build data-driven products and practical software
with a strong focus on clarity and execution.

[ Let's collaborate ↗ ]
```

The real copy should be concise.

No paragraph longer than approximately 2–3 lines on desktop.

---

# 8. Hero Social Links

The reference uses vertically stacked pill-shaped social links.

Recommended items:

```text
Dribbble
Instagram
LinkedIn
Behance
GitHub
Email
```

Only show networks that actually exist.

## Visual

Each social link:

- White background
- Thin light border
- Full pill radius
- Small icon
- Compact text
- Slight hover translation/scale

Hover:

```text
translateX(-4px)
border-color slightly darker
shadow slightly stronger
```

Do not create dramatic hover effects.

---

# 9. Selected Work Section

The work section is the portfolio's primary proof of capability.

The reference uses:

```text
Large background word
Section title
Filter row
Project grid
View All Work button
```

## 9.1 Heading

Use editorial slash-prefix:

```text
/SELECTED WORK
```

A giant, ultra-low-contrast word can sit behind it:

```text
PORTFOLIO
```

Recommended:

```css
.section-watermark {
  position: absolute;
  font-size: clamp(120px, 22vw, 340px);
  color: rgba(10, 9, 9, 0.035);
  pointer-events: none;
}
```

The watermark must never reduce readability.

## 9.2 Project Filters

Reference includes:

```text
All
Real Project
Exploration
```

Recommended filters:

```text
All
Projects
Experiments
```

or based on real portfolio data:

```text
All
Production
Academic
Experiments
```

Filters should be lightweight text controls rather than large buttons.

Active state:

```text
darker text
slightly heavier weight
optional tiny underline
```

## 9.3 Project Grid

Desktop:

```text
2-column grid
```

Recommended gap:

```text
24–40px
```

Mobile:

```text
1-column
```

Project cards should feel like editorial blocks rather than standard UI cards.

## 9.4 Project Card

Structure:

```text
┌─────────────────────────────────┐
│                                 │
│         PROJECT IMAGE           │
│                                 │
├─────────────────────────────────┤
│ Project Name                    │
│                                 │
│ [Category] [Organization]       │
└─────────────────────────────────┘
```

Use:

- Large project image
- Minimal border
- Soft background
- Rounded corners
- Generous spacing

## 9.5 Project Hover Interaction

Recommended interaction based on the animation-oriented reference:

On hover:

```text
Image scale: 1.00 → 1.025
Card translateY: 0 → -4px
Metadata opacity: 0.75 → 1
Arrow visibility: fade in
```

Duration:

```text
350–500ms
```

Easing:

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

Do not exaggerate project movement.

## 9.6 Project Cursor Interaction

Optional enhancement:

A small circular cursor indicator can appear over the project image:

```text
↗
```

However, this should only be enabled on pointer-capable devices.

Never replace the normal cursor on touch devices.

---

# 10. Project Detail Page

The reference also shows a project detail composition in mockup form.

Recommended route:

```text
/work/:slug
```

## 10.1 Detail Header

Structure:

```text
← Back

[Category] [Project Type]

Project Name

Short project description

[Live Overview ↗]
[Contact Me]

Project information:
- Discipline
- Timeline
- Tools
```

## 10.2 Project Metadata

Right-side or secondary column:

```text
Services
UI/UX Design, Web Design

Timeline
4 Weeks

Tools
Figma
Development stack / relevant tools
```

Use large whitespace.

## 10.3 Project Visual

Show the primary project screenshot immediately below the header.

Recommended width:

```text
100%
```

Avoid tiny screenshots.

## 10.4 Project Case Study Sections

For a real portfolio, use:

```text
01 — Overview
02 — Problem
03 — Research
04 — Approach
05 — Design
06 — Implementation
07 — Outcome
08 — Learnings
```

The reference is clean enough that these details should remain visually simple.

---

# 11. Services Section

The reference uses a list/accordion approach instead of traditional three-card service boxes.

Header:

```text
/SERVICE
```

Then expandable service rows:

```text
UI/UX DESIGN
WEB DESIGN & DEV
BRANDING
MOTIONS & ANIMATIONS
```

## 11.1 Service Row

Collapsed:

```text
SERVICE NAME                                      ↗
───────────────────────────────────────────────────
```

Expanded:

```text
SERVICE NAME                              ×

Description
...

[Supporting project image/mockup]
```

## 11.2 Active Service

The first/selected service can open as a dark horizontal panel.

Visual pattern:

```text
┌──────────────────────────────────────────────────────────┐
│ UI/UX DESIGN                                 [ image ]  │
│                                                          │
│ Designing clear and scalable interfaces for             │
│ dashboards, mobile apps, and websites.        [  ×  ]   │
└──────────────────────────────────────────────────────────┘
```

Dark panel:

```text
background: #242424
text: #FDFDFD
secondary: #A8A8A8
```

## 11.3 Accordion Behavior

Only one service should be expanded at a time.

Animation:

```text
height: 0 → auto
opacity: 0 → 1
image: opacity + translateY
```

Duration:

```text
450–600ms
```

Use layout-safe animation libraries if necessary.

Recommended approach:

```text
Framer Motion
or CSS grid-template-rows technique
```

---

# 12. Experience Section

The reference introduces a high-contrast dark section.

This creates a visual break from the predominantly white page.

## 12.1 Section Composition

```text
┌──────────────────────────────────────────────────────────────┐
│ /EXPERIENCE                     9+ years of experience       │
│                                                              │
│ Company / Role                             Date Range        │
│ ───────────────────────────────────────────────────────────  │
│ Company / Role                             Date Range        │
│ ───────────────────────────────────────────────────────────  │
│ Company / Role                             Date Range        │
└──────────────────────────────────────────────────────────────┘
```

## 12.2 Background Watermark

A huge word:

```text
EXPERIENCE
```

sits behind the content with low opacity.

Recommended opacity:

```text
0.025–0.06
```

## 12.3 Experience Row

Each row should contain:

```text
Company
Role / Position
Date range
Optional floating preview
```

Example:

```text
Company
Product Designer

                       Jan 2024 — Present
```

## 12.4 Experience Hover Preview

The reference visibly uses an image/mockup preview around an active experience row.

Recommended behavior:

When hovering a row:

```text
Preview image appears
Preview moves with pointer or stays aligned near center
Row text becomes brighter
Cursor changes to interactive state
```

Suggested animation:

```text
opacity: 0 → 1
scale: 0.94 → 1
rotate: -2deg → 0deg
duration: 350–450ms
```

A very small amount of rotation can make the preview feel physical.

Avoid large cursor-following movement.

## 12.5 Accessibility

Experience previews must not contain essential information that is unavailable in the text.

On mobile:

```text
disable cursor-follow behavior
```

Tap can optionally reveal the preview beneath the selected row.

---

# 13. Contact Section

The reference uses a large, centered CTA.

Structure:

```text
● Available for New Project

HAVE A PROJECT IN MIND?

Together, we can create something clear and impactful.
Let's collaborate to bring the idea to life.

[ Contact Me ↗ ]

[Profile]
[Dribbble]
[Instagram]
[LinkedIn]
[Behance]
```

## 13.1 Primary Heading

Very large but not as large as the hero name.

Recommended:

```text
font-size: clamp(48px, 6vw, 88px)
```

Centered alignment.

## 13.2 CTA

The primary CTA is a black pill button.

```text
background: #0A0909
color: #FDFDFD
border-radius: 999px
padding: 14px 22px
```

Hover:

```text
translateY(-2px)
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.14)
```

## 13.3 Contact Action

The contact button should open one of:

```text
mailto:
contact form
Calendly / scheduling page
LinkedIn message
```

Do not use a dead CTA.

---

# 14. Atmospheric Background

One of the defining visual aspects is the soft grayscale cloud/atmospheric imagery.

It appears around major sections and behind the white content shell.

## Recommended treatment

Use a grayscale image or subtle generated texture:

```css
background:
  linear-gradient(
    rgba(255,255,255,0.72),
    rgba(255,255,255,0.72)
  ),
  url("/images/clouds.jpg");
```

Then:

```css
filter: grayscale(100%);
background-size: cover;
background-position: center;
```

The background should remain subordinate.

## Motion

Recommended:

```text
very slow parallax:
20–40px over the full scroll range
```

or

```text
slow background-position drift
```

Do not use fast cloud animation.

For reduced motion:

```text
static background
```

---

# 15. Borders, Radius & Surfaces

## Radius

Use one coherent radius family.

Recommended:

```text
Pills: 999px
Buttons: 999px
Project cards: 16–24px
Large shells: 20–28px
Images: 12–20px
```

## Borders

Use very light borders:

```text
#E8E8E8
```

Border thickness:

```text
1px
```

Avoid dark outlines except where explicitly part of the visual identity.

## Shadows

Use extremely subtle shadows.

Recommended:

```css
box-shadow:
  0 8px 30px rgba(0, 0, 0, 0.05);
```

Do not create heavy floating-card effects.

---

# 16. Motion Design System

Animation is important but should remain restrained.

## 16.1 Global Timing

| Interaction | Duration |
|---|---:|
| Micro hover | 180–250ms |
| Button hover | 200–300ms |
| Card hover | 300–500ms |
| Accordion | 450–600ms |
| Page reveal | 500–800ms |
| Large section transition | 700–1200ms |
| Background drift | 8–20s |

## 16.2 Preferred Easing

Primary:

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

Use ease-in-out for looping ambient animations.

Avoid:

```text
linear movement for UI transitions
```

unless the animation is continuous/environmental.

---

# 17. Scroll Reveal System

Recommended section entrance behavior:

```text
Initial:
opacity: 0
transform: translateY(30px)

Final:
opacity: 1
transform: translateY(0)
```

Duration:

```text
650–850ms
```

Stagger children:

```text
50–100ms
```

Example order:

```text
section heading
→ filter
→ project cards
```

Do not make every individual line animate independently.

The page should still feel fast.

---

# 18. Page Load Animation

Recommended sequence:

```text
0ms       page shell visible
100ms     navigation fades in
200ms     large hero typography enters
350ms     portrait reveals
500ms     role/copy reveals
650ms     social pills appear
```

Do not create a long logo/preloader sequence.

The user should see meaningful content almost immediately.

---

# 19. Cursor Interactions

Optional desktop enhancement.

Cursor interactions should be limited to:

- Project image hover
- Experience preview
- Service hover
- Small directional cursor indicators

Do not make the whole page cursor-reactive.

Avoid:

```text
huge custom cursor
trailing blobs
magnetic cursor everywhere
cursor distortion over text
```

The reference's personality comes from composition and hierarchy, not gimmicky effects.

---

# 20. Buttons

## Primary Button

```text
Black background
White text
Pill radius
Arrow icon
```

Examples:

```text
Let's Talk ↗
Let's collaborate ↗
Contact Me ↗
Live Overview ↗
```

## Secondary Button

```text
White background
Black text
Thin border
Pill radius
```

Use for non-primary actions.

## Arrow Motion

On hover:

```text
arrow translateX(3px)
arrow translateY(-3px)
```

Duration:

```text
200–250ms
```

---

# 21. Icons

Use a consistent icon library.

Recommended:

```text
Lucide
Phosphor
Heroicons
```

Use stroke-based icons.

Do not mix icon styles.

Suggested sizes:

```text
Navigation: 14–16px
Buttons: 15–18px
Socials: 14–16px
```

---

# 22. Responsive Design

The reference is designed to scale across desktop and mobile. The implementation must therefore be responsive from the beginning.

## 22.1 Breakpoints

Recommended:

```text
Mobile: < 640px
Tablet: 640–1023px
Desktop: 1024px+
Large desktop: 1440px+
```

## 22.2 Mobile Navigation

Do not preserve the full desktop navigation row.

Use:

```text
[Status]
[Menu]
```

or:

```text
[Logo/Name]
[Menu]
```

Open a fullscreen or large overlay navigation.

Navigation links:

```text
Work
Service
Experience
Contact
```

Use large typography.

## 22.3 Mobile Hero

Desktop:

```text
large horizontal name
centered portrait
side copy / social
```

Mobile:

```text
name stacked/wrapped
portrait
role
description
CTA
social links
```

Do not force horizontal composition on a narrow viewport.

## 22.4 Mobile Project Grid

```text
1 column
```

Project card image aspect ratio:

```text
16:10
4:3
```

depending on actual project screenshots.

## 22.5 Mobile Experience

Convert the desktop rows into a vertical list:

```text
Company
Role
Date
[Preview image if expanded]
```

Disable cursor-follow behavior.

## 22.6 Mobile Services

Use full-width accordion cards.

Expanded content should stack:

```text
Heading
Description
Image
Close icon
```

---

# 23. Accessibility Requirements

The visual reference must not override usability.

Required:

- Semantic `<nav>`
- Proper heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible accordion buttons
- ARIA state for expanded services
- Alt text for meaningful images
- Empty alt for decorative images
- Sufficient text contrast
- `prefers-reduced-motion` support
- Touch-friendly controls
- No essential information hidden exclusively behind hover

## Focus style

Recommended:

```css
:focus-visible {
  outline: 2px solid var(--color-text);
  outline-offset: 4px;
}
```

---

# 24. Performance Requirements

The animation-heavy visual style should not make the portfolio heavy.

## Images

Use:

```text
WebP
AVIF
responsive srcset
lazy loading below the fold
```

Hero portrait can be eagerly loaded if it is visible immediately.

## Animation

Prefer:

```text
transform
opacity
filter
```

Avoid animating:

```text
width
height
top
left
box-shadow excessively
```

when a transform can produce the same result.

## Large Backgrounds

Compress cloud/background assets heavily.

Recommended target:

```text
single background image < 300–500KB
```

where visual quality permits.

---

# 25. Recommended Technical Architecture

This is a visual design specification, but the following implementation architecture fits the design.

## Frontend

Recommended:

```text
React
TypeScript
Vite
Tailwind CSS
Framer Motion
Lucide React
```

Alternative:

```text
Next.js
Tailwind CSS
Framer Motion
```

## Suggested component tree

```text
App
│
├── SiteNavigation
│
├── HeroSection
│   ├── AvailabilityPill
│   ├── HeroName
│   ├── HeroPortrait
│   ├── HeroIntro
│   └── SocialLinks
│
├── SelectedWork
│   ├── SectionHeader
│   ├── ProjectFilters
│   ├── ProjectGrid
│   │   └── ProjectCard
│   └── ViewAllButton
│
├── ServicesSection
│   └── ServiceAccordion
│
├── ExperienceSection
│   └── ExperienceRow
│       └── ExperiencePreview
│
├── ContactSection
│   ├── AvailabilityPill
│   ├── ContactCTA
│   └── SocialLinks
│
└── Footer
```

---

# 26. Suggested Data Model

Do not hardcode every project directly into JSX.

Use structured data.

## Project

```ts
type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  type: "real" | "exploration";
  organization?: string;
  description: string;
  coverImage: string;
  featured?: boolean;
  liveUrl?: string;
  technologies?: string[];
};
```

## Service

```ts
type Service = {
  id: string;
  title: string;
  description: string;
  image?: string;
};
```

## Experience

```ts
type Experience = {
  id: string;
  organization: string;
  role: string;
  start: string;
  end?: string;
  previewImage?: string;
};
```

---

# 27. Interaction States

Every interactive element should have explicit states.

## Button states

```text
Default
Hover
Pressed
Focus
Disabled
```

## Project states

```text
Default
Hover
Focus
```

## Service states

```text
Collapsed
Hover
Expanded
Focus
```

## Navigation states

```text
Default
Current section
Hover
Focus
```

---

# 28. Scroll-Aware Navigation

Recommended enhancement:

As the user scrolls:

```text
Work section visible     → Work becomes active
Service section visible  → Service becomes active
Experience visible       → Experience active
Contact visible          → Contact active
```

Use `IntersectionObserver`.

Do not introduce heavy scroll libraries just for this.

---

# 29. Section Watermarks

The reference uses huge words in the background.

Examples:

```text
PORTFOLIO
EXPERIENCE
```

Recommended pattern:

```css
.watermark {
  position: absolute;
  inset: 0;
  pointer-events: none;
  user-select: none;
  font-weight: 700;
  line-height: 0.8;
  letter-spacing: -0.07em;
}
```

Important:

The watermark must remain subordinate to the content.

---

# 30. Visual Rhythm

The design should alternate between:

```text
high-density information
```

and

```text
large empty space
```

Example:

```text
Hero
↓
large space
↓
Selected Work
↓
dense project grid
↓
large space
↓
Services
↓
structured list
↓
large space
↓
dark Experience section
↓
large space
↓
Contact
```

This rhythm prevents the page from feeling like a generic stacked landing page.

---

# 31. Dark Experience Section as Contrast Anchor

The dark experience section is especially important.

It functions as a visual reset.

Do not repeat multiple dark sections throughout the page unless there is a strong content reason.

Recommended:

```text
White/light
→ White/light
→ White/light
→ DARK
→ White/light
```

This makes the experience section feel intentional.

---

# 32. Background Layer Architecture

Recommended z-index stack:

```text
z-index 0   → atmospheric background
z-index 1   → watermarks
z-index 2   → section content
z-index 3   → floating previews
z-index 10  → navigation
z-index 20  → menu overlays
```

Never allow decorative layers to capture pointer events.

---

# 33. Image Direction

Project images should be presented as actual work.

Good:

- Website mockups
- Product UI
- App screens
- Dashboards
- Branding systems
- Research artifacts
- Data visualizations
- Real implementation screenshots

Avoid filling the portfolio with decorative stock images.

The project image should answer:

> “What did this person actually make?”

---

# 34. Copywriting Rules

The site should remain concise.

## Hero

One identity statement.

## Project

One-line summary.

## Service

One short description.

## Experience

Role + organization + dates.

## Contact

One short invitation.

Avoid:

- Long personal essays on the homepage
- Generic buzzwords
- Repeating “passionate”, “innovative”, “creative” unnecessarily
- Corporate mission statements

The page should communicate through evidence.

---

# 35. Content Priority

When visitors arrive, the information priority should be:

```text
1. Who are you?
2. What do you do?
3. What have you built?
4. What can you help with?
5. What experience do you have?
6. How can someone contact you?
```

Every visual decision should support this sequence.

---

# 36. SEO / Metadata

Recommended document metadata:

```html
<title>Your Name — Portfolio</title>

<meta
  name="description"
  content="Portfolio of Your Name — projects, experience, services and contact."
/>
```

Open Graph:

```text
og:title
og:description
og:image
og:url
```

Use meaningful project titles and headings for indexing.

---

# 37. Suggested Folder Structure

```text
src/
├── components/
│   ├── navigation/
│   │   └── SiteNavigation.tsx
│   ├── hero/
│   │   ├── HeroSection.tsx
│   │   ├── AvailabilityPill.tsx
│   │   └── SocialLinks.tsx
│   ├── work/
│   │   ├── SelectedWork.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ProjectFilters.tsx
│   ├── services/
│   │   ├── ServicesSection.tsx
│   │   └── ServiceAccordion.tsx
│   ├── experience/
│   │   ├── ExperienceSection.tsx
│   │   └── ExperienceRow.tsx
│   └── contact/
│       └── ContactSection.tsx
│
├── data/
│   ├── projects.ts
│   ├── services.ts
│   └── experience.ts
│
├── pages/
│   ├── Home.tsx
│   └── ProjectDetail.tsx
│
├── assets/
│   ├── images/
│   └── icons/
│
├── lib/
│   └── motion.ts
│
└── styles/
    └── globals.css
```

---

# 38. Reusable Motion Primitives

Create shared animation variants instead of reinventing motion for every element.

Example:

```ts
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
```

And:

```ts
export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
```

Use a shared motion vocabulary throughout the site.

---

# 39. Anti-Patterns to Avoid

Do **not** turn this reference into:

### Generic SaaS landing page

Avoid:

```text
hero card
three feature cards
pricing table
testimonials
huge gradient
```

### Over-animated Awwwards-style site

Avoid:

```text
full-screen loaders
WebGL everywhere
continuous distortion
large cursor effects
```

### Generic developer portfolio

Avoid:

```text
dark GitHub-style theme
code snippets everywhere
terminal animation as hero
neon gradients
```

### Generic resume website

Avoid:

```text
dense CV paragraphs
timeline-heavy interface
small thumbnails
```

The desired experience is editorial and portfolio-first.

---

# 40. Recommended Animation Inventory

The final site should contain approximately these motion behaviors:

```text
1. Availability dot pulse
2. Initial hero reveal
3. Hero portrait reveal
4. Navigation hover
5. Social pill hover
6. Smooth anchor scrolling
7. Section scroll reveal
8. Project card hover
9. Project image micro-zoom
10. Project cursor/arrow indicator
11. Service accordion expand/collapse
12. Service image reveal
13. Experience hover preview
14. Experience preview micro-rotation
15. CTA hover
16. Background atmospheric drift/parallax
17. Mobile navigation overlay animation
18. Optional page transition for project details
```

Every animation should have a clear purpose.

---

# 41. Reduced Motion

The site must remain fully functional without non-essential motion.

When:

```css
@media (prefers-reduced-motion: reduce)
```

Then:

- Remove parallax
- Remove cursor-follow previews
- Remove looping animations
- Reduce transforms
- Use instant or short fades
- Preserve layout and content

The portfolio must never depend on animation to communicate essential meaning.

---

# 42. Implementation Priority

Build in this order.

## Phase 1 — Structure

```text
Navigation
Hero
Selected Work
Services
Experience
Contact
Footer
```

## Phase 2 — Visual system

```text
Typography
Spacing
Colors
Borders
Radii
Watermarks
Dark section
```

## Phase 3 — Interactions

```text
Hover
Filters
Accordion
Scroll reveal
Experience previews
Smooth navigation
```

## Phase 4 — Responsive

```text
Mobile nav
Mobile hero
1-column project layout
Mobile services
Mobile experience
```

## Phase 5 — Polish

```text
Image optimization
Reduced motion
Focus states
SEO
Performance
Final spacing pass
```

---

# 43. Acceptance Criteria

The implementation should be considered complete only when:

## Visual

- Overall look clearly follows the provided reference
- Typography is the dominant visual element
- Black/white palette is preserved
- Warm muted accents remain secondary
- Sections have generous whitespace
- Hero feels oversized and editorial
- Selected work is the main content focus
- Services use expandable rows rather than generic cards
- Experience uses a distinct dark section
- Contact ends with a strong centered CTA

## Interaction

- Navigation scrolls correctly
- Project filters work
- Project cards respond to hover/focus
- Services expand/collapse smoothly
- Experience previews work on desktop
- Mobile does not depend on hover
- CTAs actually navigate somewhere
- Social links work

## Accessibility

- Full keyboard navigation
- Focus states visible
- Semantic headings
- Alt text present
- Reduced-motion support
- No hover-only essential information

## Performance

- Images optimized
- No unnecessary large animation libraries
- GPU-friendly transforms
- Fast initial rendering
- Lazy loading below-the-fold media

---

# 44. Final Visual Summary

The resulting portfolio should feel like a polished editorial portfolio rather than a traditional resume site.

### Primary characteristics

```text
Minimal
Typography-first
Monochrome
Large-scale
Editorial
Airy
Professional
Interactive
Subtle motion
Portfolio-focused
```

### Signature elements to preserve

```text
✓ Huge outlined + filled hero name
✓ Integrated portrait
✓ Compact availability pill
✓ Minimal top navigation with counters
✓ Selected Work section with oversized watermark
✓ Clean 2-column project grid
✓ Expandable service rows
✓ Dark Experience section
✓ Floating project/experience previews
✓ Large centered contact CTA
✓ Pill-shaped social links
✓ Soft grayscale/cloud atmosphere
```

---

# 45. Reference Assets / Source Images

The source page presents multiple visual states including:

1. Hero / landing composition
2. Selected Work grid
3. Services / accordion composition
4. Experience section
5. Contact CTA
6. Laptop mockup of the portfolio
7. Laptop mockup of a project detail page

These should be treated as **visual references**, not assets to copy into the final site.

Use original portfolio-owner content and properly licensed assets in the implementation.

---

# 46. Source Notes

Primary source:

**Dribbble — Personal Portfolio Website — Animations**  
Designer: **Dymas Alfin 🌵** for **Mikan Team**  
URL: https://dribbble.com/shots/26995447-Personal-Portfolio-Website-Animations

The source page describes the concept as a clear, focused portfolio emphasizing selected work, large typography, strong hierarchy, generous white space, minimal visual language, readability, and recruiter/client-friendly structure.

The visible source palette is:

```text
#FDFDFD
#707070
#0A0909
#5E3A30
#CEB3A6
#9C6455
```

---

# 47. Important Implementation Instruction

**Do not copy the designer's exact personal identity, project content, imagery, or text.**

Recreate the **design system and interaction language**:

```text
layout
hierarchy
spacing
typography scale
color relationships
component patterns
interaction patterns
animation principles
responsive behavior
```

Then replace the content with the actual portfolio owner's information.

The objective is to produce a portfolio that is clearly inspired by the supplied reference while remaining an original implementation.

---

# 48. One-Line Design Direction

> **A calm, typography-driven personal portfolio where oversized editorial type, generous whitespace, monochrome surfaces, subtle atmospheric imagery, and restrained micro-interactions make the work—not the effects—the hero.**
