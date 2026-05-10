import { createFileRoute } from "@tanstack/react-router";
import Tilt from "react-parallax-tilt";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Reshi Kumar" },
      { name: "description", content: "Machine Learning and Data projects: Sales Prediction, Power BI Dashboards, and more." },
      { property: "og:title", content: "Projects — Reshi Kumar" },
      { property: "og:description", content: "AI / ML project showcase." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    n: "01",
    title: "Sales Prediction Engine",
    tag: "Machine Learning · Python",
    desc: "Regression model trained on retail sales data using Pandas and Scikit-learn. Visualized predictions with Matplotlib for interpretable output.",
    stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    live: "#", code: "https://github.com/reshikumar32vellore-tech",
  },
  {
    n: "02",
    title: "Power BI Insight Dashboard",
    tag: "Data Visualization",
    desc: "Interactive multi-page dashboard turning raw datasets into clean, filterable insights for business decision-making.",
    stack: ["Power BI", "DAX", "Excel"],
    live: "#", code: "https://github.com/reshikumar32vellore-tech",
  },
  {
    n: "03",
    title: "Lab Systems Toolkit",
    tag: "Systems · Education",
    desc: "Lightweight scripts and SOPs to set up, maintain, and troubleshoot student computer labs efficiently.",
    stack: ["Bash", "Windows", "Networking"],
    live: "#", code: "https://github.com/reshikumar32vellore-tech",
  },
  {
    n: "04",
    title: "Data Cleaning Pipeline",
    tag: "Data Engineering",
    desc: "Reusable Python utilities for cleaning, transforming, and validating tabular datasets before analysis.",
    stack: ["Python", "Pandas", "NumPy"],
    live: "#", code: "https://github.com/reshikumar32vellore-tech",
  },
];

function Projects() {
  return (
    <section className="relative bg-black noise px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          kicker="Builds"
          title="AI / ML Projects"
          subtitle="A curated selection of intelligence and data work — each card hovers in real space."
          jp="プロジェクト"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                glareEnable
                glareMaxOpacity={0.18}
                glareColor="#ffffff"
                glarePosition="all"
                transitionSpeed={1200}
                className="rounded-sm"
              >
                <article className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8">
                  <div className="absolute -inset-px rounded-sm bg-gradient-to-br from-white/30 via-transparent to-white/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", maskComposite: "exclude", WebkitMaskComposite: "xor", padding: 1 }} />
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">PRJ — {p.n}</div>
                      <h3 className="mt-3 font-display text-3xl font-black uppercase leading-tight">{p.title}</h3>
                      <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-white/50">{p.tag}</div>
                    </div>
                    <div className="vert-text font-jp text-[10px] tracking-[0.3em] text-white/30">プロジェクト</div>
                  </div>
                  <p className="mt-6 max-w-md text-sm text-white/70">{p.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map(s => (
                      <span key={s} className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white/70">{s}</span>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-3">
                    <a href={p.live} className="rounded-full bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-black transition hover:bg-white/90">
                      Live ↗
                    </a>
                    <a href={p.code} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-white transition hover:bg-white hover:text-black">
                      GitHub ↗
                    </a>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
