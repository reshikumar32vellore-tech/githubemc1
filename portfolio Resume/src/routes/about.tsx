import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Reshi Kumar" },
      { name: "description", content: "About S. Reshi Kumar — technical instructor and ML/AI developer based in Vellore, India." },
      { property: "og:title", content: "About — Reshi Kumar" },
      { property: "og:description", content: "Bio, experience, and education of Reshi Kumar." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2024 →", title: "Technical Instructor", body: "Teaching computer fundamentals, lab management, and Python to students." },
  { year: "2024", title: "Certification — AI & Machine Learning", body: "Hands-on training in Python, data analysis, and ML concepts." },
  { year: "2023", title: "Project: Power BI Dashboard", body: "Interactive dashboards on real datasets for business insight delivery." },
  { year: "2023", title: "Project: Sales Prediction (ML)", body: "Built a regression model with Pandas / Scikit-learn." },
  { year: "→", title: "B.A. English & Communication (Integrated)", body: "Thiruvalluvar University, Vellore." },
];

const soft = ["Communication", "Teaching", "Problem Solving", "Adaptability", "Time Management"];
const langs = [["Tamil", "Native"], ["English", "Proficient"], ["Hindi", "Basic"]];

function About() {
  return (
    <section className="relative bg-black noise px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          kicker="About"
          title="The Operator"
          subtitle="Motivated technical professional with a foundation in computer systems, Python, and machine learning. Passionate about teaching technology in a practical, hands-on way."
          jp="プロフィール"
        />

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/50">// Timeline</h2>
            </Reveal>
            <ol className="mt-6 relative border-l border-white/10 pl-6">
              {timeline.map((t, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <li className="relative pb-10">
                    <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full bg-black ring-1 ring-white/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-white/50">{t.year}</div>
                    <div className="mt-1 font-display text-xl font-bold uppercase">{t.title}</div>
                    <p className="mt-2 max-w-xl text-sm text-white/60">{t.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <aside className="md:col-span-5 space-y-6">
            <Reveal>
              <div className="glass rounded-sm p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/50">// Soft Skills</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {soft.map(s => (
                    <span key={s} className="rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass rounded-sm p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/50">// Languages</div>
                <ul className="mt-4 space-y-2">
                  {langs.map(([l, level]) => (
                    <li key={l} className="flex items-baseline justify-between border-b border-white/5 pb-2 last:border-0">
                      <span className="font-display text-base">{l}</span>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-white/50">{level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="glass rounded-sm p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/50">// Objective</div>
                <p className="mt-3 text-sm text-white/70">
                  To work as a Technical Instructor where I can teach computer fundamentals, manage technical systems, and support students in developing strong digital skills.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
