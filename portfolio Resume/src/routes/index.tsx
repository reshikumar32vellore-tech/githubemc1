import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HeroPortrait } from "@/components/hero/HeroPortrait";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { JapaneseAccent } from "@/components/site/JapaneseAccent";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reshi Kumar — ML & AI Developer" },
      { name: "description", content: "Cyberpunk-styled personal portfolio of S. Reshi Kumar, Machine Learning Engineer & AI Developer based in Vellore, India." },
      { property: "og:title", content: "Reshi Kumar — ML & AI Developer" },
      { property: "og:description", content: "Futuristic anime portfolio showcasing ML, AI projects, and resume." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Hero />
      <Featured />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black noise">
      <HeroBackground />
      <JapaneseAccent side="left" text="アマテラス · NEGATIVE SPACE" />
      <JapaneseAccent side="right" text="スピードハンター · ILLUSTRATION" />

      {/* Outline backdrop title */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-4vw] flex justify-center overflow-hidden">
        <h2 aria-hidden className="text-outline whitespace-nowrap font-display text-[26vw] font-black leading-none tracking-tighter">
          KAMINARI
        </h2>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-28 pb-20 md:grid-cols-12 md:px-10 md:pt-32">
        {/* Top-left meta card */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute left-6 top-24 hidden max-w-[260px] glass rounded-sm p-4 md:block md:left-10 md:top-28"
        >
          <div className="font-display text-base font-bold tracking-widest">MUEZZAHERO</div>
          <p className="mt-2 font-mono text-[10px] leading-relaxed text-white/60">
            Personal portfolio focused on negative-space style design — cyberpunk anime energy
            wrapped in a clean monochrome system.
          </p>
          <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-white/50">// NEGATIVE SPACE / INK B&amp;W</div>
        </motion.div>

        {/* Top-right since */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute right-6 top-24 hidden text-right md:block md:right-10 md:top-28"
        >
          <div className="font-display text-sm font-bold tracking-widest">KAMINARI RACE</div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-white/50">Since 2024</div>
        </motion.div>

        {/* Left content */}
        <div className="relative z-10 md:col-span-5">
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/50">
              // S. Reshi Kumar — IN/Vellore
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
              Machine
              <br />
              <span className="text-silver">Learning</span>
              <br />
              Engineer
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-sm text-white/60 md:text-base">
              AI developer &amp; technical instructor crafting intelligent systems
              and teaching the next wave of engineers. Built on Python, ML, and a love for clean signal.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-mono text-xs uppercase tracking-widest text-black transition hover:bg-white/90"
              >
                View Projects
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="/reshi-kumar-resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
              >
                Download Resume ↓
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs uppercase tracking-widest text-white/70 transition hover:text-white"
              >
                Contact Me
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Portrait */}
        <div className="relative z-10 md:col-span-7">
          <HeroPortrait />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.5em] text-white/40">
        ↓ Scroll
      </div>
    </section>
  );
}

const teasers = [
  { title: "Sales Prediction", tag: "Machine Learning", k: "01" },
  { title: "Power BI Dashboard", tag: "Data Viz", k: "02" },
  { title: "Lab Automation", tag: "Systems", k: "03" },
];

function Featured() {
  return (
    <section className="relative bg-black noise px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/50">// Featured Work</div>
            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight md:text-6xl">
              Selected <span className="text-outline">Projects</span>
            </h2>
          </div>
          <Link to="/projects" className="hidden font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white md:inline">
            All Projects ↗
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {teasers.map((t, i) => (
            <Reveal key={t.k} delay={i * 0.08}>
              <Link
                to="/projects"
                className="group relative block aspect-[4/5] overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 hover-lift"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-white/40">{t.k} / {t.tag}</div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-display text-2xl font-bold uppercase">{t.title}</div>
                  <div className="mt-2 h-px w-12 bg-white/40 transition-all group-hover:w-full" />
                </div>
                <div className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-white/30 transition group-hover:bg-white group-hover:text-black">↗</div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
