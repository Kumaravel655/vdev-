import { cn } from "@/lib/utils"

/**
 * VelanDev's chat assistant: a small robot head drawn in CSS (no image), sized by `size` in px.
 * Everything inside is in `em`, so it scales cleanly. `animated` adds the blink and a gentle float;
 * both stop for visitors who prefer reduced motion (see .robot-* rules in globals.css).
 */
export function RobotAvatar({ size = 48, animated = false, className }: { size?: number; animated?: boolean; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("robot relative inline-block shrink-0", animated && "robot-float", className)}
      style={{ width: size, height: size, fontSize: size / 10 }}
    >
      {/* antenna */}
      <span className="absolute left-1/2 top-[0.2em] h-[1.1em] w-[2.4em] -translate-x-1/2 rounded-t-[0.8em] bg-[linear-gradient(#ffffff,#d9d4ee)]" />
      {/* ears */}
      <span className="absolute left-[0.15em] top-[3.6em] h-[2.8em] w-[1.3em] rounded-[0.6em] bg-[linear-gradient(135deg,#f5f3ff,#c4b5fd)]" />
      <span className="absolute right-[0.15em] top-[3.6em] h-[2.8em] w-[1.3em] rounded-[0.6em] bg-[linear-gradient(225deg,#f5f3ff,#c4b5fd)]" />
      {/* head */}
      <span className="absolute inset-x-[0.9em] bottom-[0.6em] top-[1.1em] rounded-[45%] bg-[radial-gradient(circle_at_32%_25%,#ffffff_0%,#f1eefb_45%,#cfc8e6_100%)] shadow-[inset_0_-0.35em_0.6em_rgba(76,29,149,0.18),0_0.3em_0.8em_rgba(0,0,0,0.25)]" />
      {/* visor */}
      <span className="absolute inset-x-[2em] top-[3.3em] h-[3.6em] overflow-hidden rounded-[1.8em] bg-[linear-gradient(160deg,#3b1d8f,#140a35_70%)] shadow-[inset_0_0_0.5em_rgba(167,139,250,0.55),0_0_0.6em_rgba(124,58,237,0.45)]">
        {/* glass highlight */}
        <span className="absolute left-[0.6em] top-[0.35em] h-[0.7em] w-[2.2em] rounded-full bg-white/20" />
        {/* happy eyes */}
        <span className={cn("absolute inset-x-0 top-[1.35em] flex justify-center gap-[1.25em]", animated && "robot-blink")}>
          <span className="h-[0.9em] w-[1.35em] rounded-t-full border-[0.32em] border-b-0 border-[#c4b5fd] shadow-[0_-0.1em_0.45em_rgba(196,181,253,0.9)]" />
          <span className="h-[0.9em] w-[1.35em] rounded-t-full border-[0.32em] border-b-0 border-[#c4b5fd] shadow-[0_-0.1em_0.45em_rgba(196,181,253,0.9)]" />
        </span>
      </span>
    </span>
  )
}
