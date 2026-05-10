export function PageHeader({ kicker, title, subtitle, jp }: {
  kicker: string; title: string; subtitle?: string; jp?: string;
}) {
  return (
    <div className="relative pt-32 pb-12 md:pt-40 md:pb-16">
      {jp && (
        <div className="pointer-events-none absolute right-4 top-28 vert-text font-jp text-xs tracking-[0.5em] text-white/30 md:right-10">
          {jp}
        </div>
      )}
      <div className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/50">// {kicker}</div>
      <h1 className="mt-3 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base text-white/60 md:text-lg">{subtitle}</p>
      )}
      <div className="mt-8 h-px w-full bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
    </div>
  );
}
