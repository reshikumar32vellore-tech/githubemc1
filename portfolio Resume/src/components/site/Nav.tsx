import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-sm border border-white/20 bg-black/40 backdrop-blur">
            <span className="font-display text-sm font-bold tracking-tighter">RK</span>
          </div>
          <div className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-white">Reshi Kumar</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">ML / AI Dev</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-1.5 backdrop-blur md:flex">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-white text-black" }}
              inactiveProps={{ className: "text-white/70 hover:text-white hover:bg-white/5" }}
              className="rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href="/reshi-kumar-resume.pdf"
          download
          className="hidden rounded-full border border-white/20 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-white transition hover:bg-white hover:text-black md:inline-block"
        >
          Resume ↓
        </a>
      </div>
      <MobileNav />
    </header>
  );
}

function MobileNav() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between gap-1 overflow-x-auto px-6 pb-3 md:hidden">
      {links.map(l => (
        <Link
          key={l.to}
          to={l.to}
          activeOptions={{ exact: l.to === "/" }}
          activeProps={{ className: "text-white border-white" }}
          inactiveProps={{ className: "text-white/50 border-transparent" }}
          className="shrink-0 border-b-2 px-2 py-1 font-mono text-[10px] uppercase tracking-widest"
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
