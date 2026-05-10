export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3 md:px-10">
        <div>
          <div className="font-display text-2xl tracking-widest">RESHI KUMAR</div>
          <p className="mt-2 max-w-xs font-mono text-xs uppercase tracking-widest text-white/50">
            Machine Learning · AI · Technical Instruction
          </p>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-white/60">
          <div>reshikumar.work@gmail.com</div>
          <div>+91 8870 623 964</div>
          <div>Vellore · Tamil Nadu · IN</div>
        </div>
        <div className="flex flex-wrap items-end gap-4 font-mono text-xs uppercase tracking-widest md:justify-end">
          <a href="https://linkedin.com/in/reshi-kumar-s007" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">LinkedIn ↗</a>
          <a href="https://github.com/reshikumar32vellore-tech" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">GitHub ↗</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">
        ​
      </div>
    </footer>
  );
}
