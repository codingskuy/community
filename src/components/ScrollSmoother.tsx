import { useEffect } from "react";

const SCROLL_MULTIPLIER = 1.08;
const LERP_FACTOR = 0.12;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ScrollSmoother() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (reduceMotion || !finePointer) return;

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let rafId: number | null = null;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

    const animate = () => {
      currentY += (targetY - currentY) * LERP_FACTOR;
      if (Math.abs(targetY - currentY) < 0.1) {
        currentY = targetY;
      }

      window.scrollTo(0, currentY);

      if (Math.abs(targetY - currentY) > 0.1) {
        rafId = window.requestAnimationFrame(animate);
      } else {
        rafId = null;
      }
    };

    const startAnimation = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(animate);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      event.preventDefault();

      targetY = clamp(targetY + event.deltaY * SCROLL_MULTIPLIER, 0, maxScroll());
      startAnimation();
    };

    const onResize = () => {
      targetY = clamp(targetY, 0, maxScroll());
      currentY = clamp(currentY, 0, maxScroll());
    };

    const onScrollSync = () => {
      if (rafId !== null) return;
      currentY = window.scrollY;
      targetY = window.scrollY;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScrollSync, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScrollSync);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
