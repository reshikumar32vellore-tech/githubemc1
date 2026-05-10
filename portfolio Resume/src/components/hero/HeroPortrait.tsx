"use client";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect } from "react";
import heroImg from "@/assets/hero-portrait.png";

function useParallax(strength: number) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 70, damping: 18, mass: 0.6 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * strength);
      my.set((e.clientY / window.innerHeight - 0.5) * strength);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, strength]);
  return { sx, sy };
}

function Layer({ depth, sx, sy, clip, opacity = 1, blur = 0 }: {
  depth: number; sx: MotionValue<number>; sy: MotionValue<number>;
  clip: string; opacity?: number; blur?: number;
}) {
  const x = useTransform(sx, v => v * depth);
  const y = useTransform(sy, v => v * depth);
  return (
    <motion.div
      style={{ x, y, clipPath: clip, opacity, filter: blur ? `blur(${blur}px)` : undefined }}
      className="absolute inset-0"
    >
      <img src={heroImg} alt="" className="h-full w-full object-contain object-center select-none" draggable={false} />
    </motion.div>
  );
}

export function HeroPortrait() {
  const { sx, sy } = useParallax(40);

  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-[520px]">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-white/10 blur-3xl" />

      {/* Back ghost */}
      <Layer depth={-0.6} sx={sx} sy={sy} clip="inset(0)" opacity={0.25} blur={6} />

      {/* Diagonal slices */}
      <Layer depth={0.4} sx={sx} sy={sy} clip="polygon(0 0, 100% 0, 100% 22%, 0 38%)" />
      <Layer depth={0.7} sx={sx} sy={sy} clip="polygon(0 38%, 100% 22%, 100% 42%, 0 58%)" />
      <Layer depth={1.0} sx={sx} sy={sy} clip="polygon(0 58%, 100% 42%, 100% 62%, 0 78%)" />
      <Layer depth={1.3} sx={sx} sy={sy} clip="polygon(0 78%, 100% 62%, 100% 100%, 0 100%)" />

      {/* White separator strokes */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        {[20, 38, 58, 78].map((y, i) => (
          <div
            key={i}
            className="absolute left-[-10%] right-[-10%] h-[2px] bg-white/80"
            style={{ top: `${y}%`, transform: "rotate(-9deg)", transformOrigin: "center" }}
          />
        ))}
      </div>
    </div>
  );
}
