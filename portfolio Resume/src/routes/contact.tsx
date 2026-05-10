import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Reshi Kumar" },
      { name: "description", content: "Get in touch with Reshi Kumar — email, LinkedIn, GitHub." },
      { property: "og:title", content: "Contact — Reshi Kumar" },
      { property: "og:description", content: "Open a transmission." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:reshikumar.work@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative bg-black noise px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          kicker="Transmission"
          title="Open a Channel"
          subtitle="For collaborations, instruction, or projects — drop a signal. Replies usually within 24 hrs."
          jp="お問い合わせ"
        />

        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <form onSubmit={onSubmit} className="glass rounded-sm p-8 space-y-5">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/50">Name</label>
                <input
                  required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 outline-none focus:border-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/50">Email</label>
                <input
                  required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 outline-none focus:border-white"
                  placeholder="you@domain.com"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/50">Message</label>
                <textarea
                  required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="mt-2 w-full resize-none border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 outline-none focus:border-white"
                  placeholder="Tell me about the project…"
                />
              </div>
              <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-mono text-xs uppercase tracking-widest text-black transition hover:bg-white/90">
                Send Transmission
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <a href="mailto:reshikumar.work@gmail.com" className="block glass rounded-sm p-6 hover-lift">
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">// Email</div>
                <div className="mt-2 font-display text-xl uppercase tracking-tight">reshikumar.work@gmail.com</div>
              </a>
              <a href="tel:+918870623964" className="block glass rounded-sm p-6 hover-lift">
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">// Phone</div>
                <div className="mt-2 font-display text-xl uppercase tracking-tight">+91 8870 623 964</div>
              </a>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://linkedin.com/in/reshi-kumar-s007" target="_blank" rel="noreferrer" className="glass rounded-sm p-6 hover-lift">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">// LinkedIn</div>
                  <div className="mt-2 font-display text-base">reshi-kumar-s007 ↗</div>
                </a>
                <a href="https://github.com/reshikumar32vellore-tech" target="_blank" rel="noreferrer" className="glass rounded-sm p-6 hover-lift">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">// GitHub</div>
                  <div className="mt-2 font-display text-base">reshikumar32 ↗</div>
                </a>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">
                Vellore · Tamil Nadu · India · UTC+5:30
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
