import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Reshi Kumar" },
      { name: "description", content: "Technical skills: Python, Machine Learning, Deep Learning, TensorFlow, PyTorch, SQL, Power BI, and more." },
      { property: "og:title", content: "Skills — Reshi Kumar" },
      { property: "og:description", content: "Holographic skill stack of an ML/AI developer." },
    ],
  }),
  component: Skills,
});

const skills = [
  { name: "Python", level: 88, kana: "パイソン" },
  { name: "Machine Learning", level: 80, kana: "マシン" },
  { name: "Deep Learning", level: 70, kana: "ディープ" },
  { name: "TensorFlow", level: 72, kana: "テンソル" },
  { name: "PyTorch", level: 68, kana: "パイトーチ" },
  { name: "Pandas", level: 90, kana: "パンダス" },
  { name: "NumPy", level: 88, kana: "ナンパイ" },
  { name: "SQL", level: 80, kana: "エスキューエル" },
  { name: "Power BI", level: 82, kana: "パワービーアイ" },
  { name: "Tableau", level: 65, kana: "タブロー" },
  { name: "Data Science", level: 78, kana: "データサイエンス" },
  { name: "Jupyter", level: 90, kana: "ジュピター" },
];

const orbit = ["Python", "ML", "DL", "TF", "PT", "SQL", "BI", "Pandas"];

function Skills() {
  return (
    <section className="relative bg-black noise px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          kicker="Stack"
          title="Holographic Skills"
          subtitle="A monochrome readout of the tools and disciplines used to ship intelligent products."
          jp="スキル · 技術"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <article className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 hover-lift">
                <div className="absolute right-3 top-3 vert-text font-jp text-[10px] tracking-[0.3em] text-white/30">{s.kana}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">// {String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase">{s.name}</h3>
                <div className="mt-6">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/40">
                    <span>Mastery</span><span>{s.level}%</span>
                  </div>
                  <div className="mt-2 h-px w-full bg-white/10">
                    <div
                      className="h-px bg-white transition-all duration-1000 group-hover:bg-white"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-y-full" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Orbit */}
        <div className="mt-32">
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/50">// Tech Orbit</div>
            <h2 className="mt-3 font-display text-3xl font-black uppercase md:text-5xl">Stack in motion</h2>
          </Reveal>
          <div className="relative mx-auto mt-12 mb-24 grid h-[420px] w-full max-w-[420px] place-items-center">
            <div className="absolute h-full w-full rounded-full border border-white/10" />
            <div className="absolute h-3/4 w-3/4 rounded-full border border-white/10" />
            <div className="absolute h-1/2 w-1/2 rounded-full border border-white/10" />
            <div className="absolute h-full w-full animate-spin-slow">
              {orbit.map((t, i) => {
                const a = (i / orbit.length) * Math.PI * 2;
                const r = 195;
                return (
                  <div
                    key={t}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: `translate(${Math.cos(a) * r - 22}px, ${Math.sin(a) * r - 22}px)` }}
                  >
                    <div className="grid h-12 w-12 animate-counter-spin place-items-center rounded-full border border-white/30 bg-black/60 font-mono text-[10px] uppercase tracking-widest text-white">
                      {t}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-black">
              <span className="font-display text-sm font-black">RK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
