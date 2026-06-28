"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** transition-delay in seconds, matching the staggered reveals in the design */
  delay?: number;
};

/**
 * Scroll-reveal wrapper. Mirrors the design's IntersectionObserver pattern:
 * threshold 0.1, rootMargin "0px 0px -7% 0px", plus a 2.5s safety-net timeout
 * that force-reveals so content can never get stuck hidden.
 * prefers-reduced-motion is handled in globals.css (.reveal is shown instantly).
 */
export default function Reveal({
  children,
  as = "div",
  className,
  style,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setShown(true);
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -7% 0px" }
      );
      io.observe(el);
    } else {
      setShown(true);
    }

    // Safety net: never leave content invisible.
    const safety = window.setTimeout(() => setShown(true), 2500);

    return () => {
      if (io) io.disconnect();
      window.clearTimeout(safety);
    };
  }, [shown]);

  const delayStyle: CSSProperties =
    delay > 0
      ? { transitionDelay: `${delay}s, ${delay}s` }
      : {};

  return createElement(
    as,
    {
      ref,
      className: `reveal${shown ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`,
      style: { ...delayStyle, ...style },
    },
    children
  );
}
