import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Reshi Kumar" },
      { name: "description", content: "Download the resume of S. Reshi Kumar — Technical Instructor and ML/AI developer." },
      { property: "og:title", content: "Resume — Reshi Kumar" },
      { property: "og:description", content: "Read or download Reshi Kumar's CV." },
    ],
  }),
  component: Resume,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h3 className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/50">// {title}</h3>
      <div className="mt-3 text-sm text-white/80">{children}</div>
    </div>
  );
}

function Resume() {
  return (
    <section className="relative bg-black noise px-6 md:px-10">
      <div className="mx-auto max-w-5xl">
        <PageHeader
          kicker="Document"
          title="Resume / CV"
          subtitle="A summarised digital print of my background. Download the PDF for the formal version."
          jp="履歴書"
        />

        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <a href="/reshi-kumar-resume.pdf" download className="rounded-full bg-white px-6 py-3 font-mono text-xs uppercase tracking-widest text-black transition hover:bg-white/90">
              Download PDF ↓
            </a>
            <a href="/reshi-kumar-resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-white transition hover:bg-white hover:text-black">
              Open in new tab ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <article className="mt-12 glass rounded-sm p-8 md:p-12">
            <header>
              <h2 className="font-display text-3xl font-black uppercase tracking-tight md:text-4xl">S. Reshi Kumar</h2>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-white/60">
                Technical Instructor · Computer Systems · AI &amp; Machine Learning
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-white/50">
                +91 8870 623 964 &nbsp;·&nbsp; reshikumar.work@gmail.com &nbsp;·&nbsp; Vellore, IN
              </div>
            </header>

            <Section title="Professional Summary">
              Motivated and detail-oriented technical professional with knowledge in Computer Systems, Python programming, and Machine Learning fundamentals. Passionate about teaching and helping students understand technology in a simple and practical way.
            </Section>

            <Section title="Education">
              <ul className="space-y-2">
                <li><b>B.A. English &amp; Communication (Integrated)</b> — Thiruvalluvar University, Vellore.</li>
                <li><b>Certification in AI &amp; Machine Learning</b> — Python, Data Analysis, ML concepts.</li>
              </ul>
            </Section>

            <Section title="Technical Skills">
              <ul className="space-y-1.5">
                <li><b>Programming:</b> Python, SQL</li>
                <li><b>Computer:</b> Hardware basics, Software install, Troubleshooting</li>
                <li><b>Tools:</b> MS Office, Power BI, VS Code, Jupyter, Google Colab</li>
                <li><b>Data:</b> Cleaning, Visualization, Basic Analysis</li>
              </ul>
            </Section>

            <Section title="Projects">
              <ul className="space-y-3">
                <li>
                  <b>Sales Prediction (ML)</b> — built a basic ML model demonstrating prediction techniques; cleaned and analyzed data using Python; created clear visualizations.
                </li>
                <li>
                  <b>Power BI Dashboard</b> — built interactive dashboards on real datasets to present insights in an easy-to-understand format.
                </li>
              </ul>
            </Section>

            <Section title="System & Lab Management">
              Computer lab setup and maintenance · Software installation · Basic networking · Hardware/software troubleshooting.
            </Section>

            <Section title="Languages">
              Tamil (Native) · English (Proficient) · Hindi (Basic)
            </Section>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
