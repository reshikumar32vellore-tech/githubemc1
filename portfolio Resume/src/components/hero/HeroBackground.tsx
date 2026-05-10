"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

export function HeroBackground() {
  const particles = useMemo(
    () => Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      d: 6 + Math.random() * 10,
      s: 1 + Math.random() * 2,
    })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial light */}
      <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      {/* Diagonal black/gray strips */}
      <div className="absolute inset-0">
        {[
          { top: "8%",  w: 35, x: 18, c: "bg-white/[0.04]" },
          { top: "22%", w: 28, x: 52, c: "bg-white/[0.07]" },
          { top: "44%", w: 40, x: 8,  c: "bg-white/[0.03]" },
          { top: "62%", w: 30, x: 44, c: "bg-white/[0.06]" },
          { top: "78%", w: 24, x: 22, c: "bg-white/[0.04]" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.1 * i, ease: [0.2, 0.8, 0.2, 1] }}
            className={`absolute h-[10vmin] ${s.c}`}
            style={{
              top: s.top,
              left: `${s.x}%`,
              width: `${s.w}%`,
              transform: "rotate(-9deg)",
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute right-[10%] top-[15%] h-32 w-32 border border-white/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute left-[8%] bottom-[18%] h-24 w-24 rounded-full border border-white/10"
      />

      {/* Particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/40"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#000_95%)]" />
    </div>
  );
}
