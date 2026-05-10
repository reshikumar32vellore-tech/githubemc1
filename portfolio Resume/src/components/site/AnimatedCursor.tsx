"use client";
import { useEffect, useState } from "react";

export function AnimatedCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let rx = 0, ry = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      setPos({ x: tx, y: ty });
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor]"));
    };
    const loop = () => {
      rx += (tx - rx) * 0.18; ry += (ty - ry) * 0.18;
      setRingPos({ x: rx, y: ry });
      raf = requestAnimationFrame(loop);
    };
    let raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] hidden md:block"
        style={{ left: pos.x, top: pos.y, transform: "translate(-50%,-50%)" }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-white" />
      </div>
      <div
        className="pointer-events-none fixed z-[100] hidden md:block transition-[width,height,border-color] duration-200"
        style={{
          left: ringPos.x, top: ringPos.y, transform: "translate(-50%,-50%)",
          width: hover ? 56 : 32, height: hover ? 56 : 32,
        }}
      >
        <div className="h-full w-full rounded-full border border-white/40" />
      </div>
    </>
  );
}
