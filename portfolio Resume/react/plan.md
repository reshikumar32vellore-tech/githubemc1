## Cyberpunk Anime Portfolio — S. Reshi Kumar

A monochrome, Awwwards-style portfolio with multi-route architecture, smooth Lenis scroll, and Framer Motion + GSAP animations. No Three.js — depth is faked with layered CSS transforms, parallax, and SVG.

### Routes

```text
/              Home (Hero + brief about + featured projects teaser)
/about         Bio, experience timeline, soft skills, languages
/skills        Holographic skill cards + tech stack orbit
/projects      AI/ML project grid with 3D tilt
/resume        Embedded resume + download PDF button
/contact       Contact form + social links
```

Shared layout in `__root.tsx`: fixed top nav with Japanese vertical accents, animated cursor, scroll progress bar, footer.

### Design System (`src/styles.css`)

- Palette: `--background: #000`, `--foreground: #fff`, `--muted: #1A1A1A`, `--silver` gradient, subtle `--glow` white shadow token
- Fonts (Google Fonts via link tag in __root):
  - Display: **Orbitron** / **Bebas Neue** for headings
  - Body: **Inter** / **JetBrains Mono** for code
  - Japanese: **Noto Sans JP** for vertical kana accents
- Tokens: `--gradient-silver`, `--shadow-glow`, `--shadow-elegant`, `--blur-glass`, `--noise-texture` (SVG data URI)
- Glassmorphism utility class: `bg-white/5 backdrop-blur-xl border border-white/10`

### Hero Section

- Full-screen black canvas
- Center: uploaded portrait (`src/assets/hero-portrait.png`) inside a layered stack:
  - 3 duplicated img layers offset on Z with mouse-tracked parallax (Framer `useMotionValue` + `useTransform`)
  - White glow shadow + slight rotateY on hover
- Background:
  - Large diagonal black/gray strips (CSS `clip-path` + transform)
  - Animated geometric shapes (Framer Motion infinite loops)
  - Cyberpunk grid (CSS repeating-linear-gradient)
  - Floating particles (lightweight canvas or pure CSS divs)
  - Noise texture overlay
- Vertical Japanese text on left/right edges: スピードハンター / イラストレーション
- Top-left card: name + role tag (mimics the reference poster typography)
- CTAs: "View Projects" → /projects, "Download Resume" → /resume, "Contact Me" → /contact

### Sections (distributed across routes)

- **About** (`/about`): Bio paragraph, education, experience timeline (vertical with animated line reveal via GSAP ScrollTrigger), soft skills chips, languages
- **Skills** (`/skills`):
  - Holographic cards: Python, ML, Deep Learning, TensorFlow, PyTorch, Pandas, NumPy, SQL, Power BI, Tableau, Data Science
  - Tech stack: floating circular orbit of icons (CSS `@keyframes` rotate on container, counter-rotate on items)
- **Projects** (`/projects`): Sales Prediction ML, Power BI Dashboard — 3D tilt cards (`react-parallax-tilt` or hand-rolled), animated border glow, Live + GitHub buttons
- **Resume** (`/resume`): Stylized on-page resume + Download PDF button (PDF generated via skill into `public/reshi-kumar-resume.pdf`)
- **Contact** (`/contact`): Form (mailto for now), phone, email, LinkedIn, GitHub

### Animation Stack

- `framer-motion` — page transitions, reveal on scroll, hover elastic
- `gsap` + ScrollTrigger — timeline reveals, parallax pinning
- `lenis` — smooth scroll wrapper in __root
- Custom hook `useMouseParallax` for hero layers
- Custom animated cursor component (dot + ring follower)
- Scroll progress bar fixed top using Framer `useScroll`

### Resume PDF

Generate `public/reshi-kumar-resume.pdf` using the pdf skill (reportlab) from the resume content provided. Single page, monochrome styled to match the site.

### File additions

```text
public/reshi-kumar-resume.pdf      (generated)
src/assets/hero-portrait.png       (copied from upload)
src/styles.css                     (extended tokens + utilities)
src/routes/__root.tsx               (nav, footer, Lenis, cursor, progress)
src/routes/index.tsx                (Hero)
src/routes/about.tsx
src/routes/skills.tsx
src/routes/projects.tsx
src/routes/resume.tsx
src/routes/contact.tsx
src/components/site/Nav.tsx
src/components/site/Footer.tsx
src/components/site/AnimatedCursor.tsx
src/components/site/ScrollProgress.tsx
src/components/site/SmoothScroll.tsx           (Lenis)
src/components/site/JapaneseAccent.tsx
src/components/site/NoiseOverlay.tsx
src/components/hero/HeroPortrait.tsx           (parallax layers)
src/components/hero/HeroBackground.tsx         (grid, strips, particles)
src/components/skills/HoloCard.tsx
src/components/skills/TechOrbit.tsx
src/components/projects/TiltCard.tsx
src/components/about/Timeline.tsx
src/hooks/useMouseParallax.ts
```

### Dependencies to add

`framer-motion`, `gsap`, `lenis`, `react-parallax-tilt`

### SEO

Each route gets unique `head()` with title, description, og:title, og:description. Single H1 per page. Semantic HTML.

### Out of scope (per your choices)

- No Three.js / React Three Fiber
- No backend / Cloud features
- No real form submission backend (mailto link only)
