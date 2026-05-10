export function JapaneseAccent({ side = "left", text }: { side?: "left" | "right"; text: string }) {
  return (
    <div
      className={`pointer-events-none absolute top-1/2 ${side === "left" ? "left-4" : "right-4"} hidden -translate-y-1/2 md:block`}
    >
      <div className="vert-text font-jp text-xs tracking-[0.4em] text-white/50">{text}</div>
    </div>
  );
}
