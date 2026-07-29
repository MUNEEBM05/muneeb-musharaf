import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

// Animates a number from 0 to `target` once it scrolls into view.
// Uses requestAnimationFrame (not setInterval) for a smooth easing curve,
// and falls back to showing the final value immediately if IntersectionObserver
// isn't available or the user has reduced motion enabled.
const CountUp = ({ target, prefix = "", suffix = "", duration = 1200, className }: CountUpProps) => {
  const [value, setValue] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const runCountUp = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      if (prefersReducedMotion) {
        setValue(target);
        return;
      }

      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    if (typeof IntersectionObserver === "undefined") {
      runCountUp();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCountUp();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={spanRef} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

export default CountUp;
