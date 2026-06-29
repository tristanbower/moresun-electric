"use client";

import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";

const mono = "var(--font-mono), monospace";

function fadeUp(delay: number): CSSProperties {
  return {
    opacity: 0,
    animation: `msFadeUp .85s var(--ease) ${delay}s both`,
  };
}

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const vh = () => window.innerHeight || 800;
    const onScroll = () => {
      const y =
        (document.scrollingElement && document.scrollingElement.scrollTop) ||
        window.pageYOffset ||
        0;
      if (bgRef.current && y < vh() * 1.3) {
        bgRef.current.style.transform = `translateY(${y * 0.22}px)`;
      }
      if (contentRef.current && y < vh() * 1.1) {
        contentRef.current.style.transform = `translateY(${y * -0.06}px)`;
        contentRef.current.style.opacity = String(Math.max(0, 1 - y / 760));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        paddingTop: "clamp(140px,18vh,210px)",
        overflow: "hidden",
      }}
    >
      {/* animated background / video placeholder layer */}
      <div
        ref={bgRef}
        style={{ position: "absolute", inset: 0, zIndex: 0, willChange: "transform" }}
      >
        <div style={{ position: "absolute", inset: 0, background: "var(--slate-900)" }} />
        {/* Replace this layer with a muted autoplay <video> (poster + playsInline);
            keep the dark overlays below on top for legibility. */}
        <div
          className="drift"
          style={{
            position: "absolute",
            width: "65vw",
            height: "65vw",
            left: "-12vw",
            top: "-14vw",
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(255,77,28,.5),transparent 62%)",
            filter: "blur(30px)",
            animation: "msDrift 18s ease-in-out infinite",
          }}
        />
        <div
          className="drift-2"
          style={{
            position: "absolute",
            width: "55vw",
            height: "55vw",
            right: "-10vw",
            top: "8vh",
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(255,210,10,.32),transparent 64%)",
            filter: "blur(36px)",
            animation: "msDrift2 22s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(135deg,rgba(255,255,255,.018) 0 2px,transparent 2px 9px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top,rgba(10,13,18,.96) 4%,rgba(10,13,18,.55) 42%,rgba(10,13,18,.42) 70%,rgba(10,13,18,.7) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(120% 90% at 70% 20%,transparent 40%,rgba(10,13,18,.7) 100%)",
          }}
        />
      </div>

      {/* video placeholder chip */}
      <div
        style={{
          position: "absolute",
          right: "clamp(18px,4vw,46px)",
          top: "calc(50% + 6px)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: 9,
          fontFamily: mono,
          fontSize: 11,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: "var(--text-mono)",
          border: "1px solid var(--border-3)",
          padding: "7px 12px",
          borderRadius: 4,
          background: "rgba(10,13,18,.4)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      >
        <span
          style={{
            width: 0,
            height: 0,
            borderLeft: "8px solid var(--accent)",
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            display: "block",
          }}
        />
        Full-screen background video — placeholder
      </div>

      <div ref={contentRef} style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            width: "100%",
            padding: "0 clamp(24px,5vw,64px) clamp(56px,8vw,104px)",
          }}
        >
          <div
            className="fadeup"
            style={{
              ...fadeUp(0.1),
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontFamily: mono,
              fontSize: 13,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 26,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--solar-dot)",
              }}
            />
            MoreSun Electric · Licensed Electrical Contractor
          </div>
          <h1
            className="fadeup"
            style={{
              ...fadeUp(0.18),
              fontWeight: 800,
              fontSize: "clamp(46px,8.6vw,138px)",
              lineHeight: 0.9,
              letterSpacing: "-.035em",
              margin: "0 0 28px",
              maxWidth: "15ch",
            }}
          >
            Wired for the <span className="solar-text">energy era</span>.
          </h1>
          <p
            className="fadeup"
            style={{
              ...fadeUp(0.26),
              fontSize: "clamp(17px,1.7vw,23px)",
              lineHeight: 1.5,
              color: "var(--text-muted)",
              maxWidth: "60ch",
              margin: "0 0 38px",
            }}
          >
            MoreSun Electric installs EV charging, solar, and Tesla Powerwall
            systems built to last — and we&apos;re one of the only local pros
            doing bidirectional vehicle-to-home charging.
          </p>
          <div
            className="fadeup"
            style={{
              ...fadeUp(0.34),
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link
              href="/contact"
              className="btn-primary"
              style={{ fontSize: 16, padding: "18px 30px" }}
            >
              Get a free consultation →
            </Link>
            <Link
              href="/solutions"
              className="btn-outline"
              style={{ fontSize: 16, padding: "18px 28px" }}
            >
              See our solutions
            </Link>
          </div>
          <div
            className="fadeup"
            style={{
              ...fadeUp(0.42),
              display: "flex",
              gap: "clamp(20px,3vw,44px)",
              flexWrap: "wrap",
              marginTop: 44,
              fontFamily: mono,
              fontSize: 12.5,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--text-faint)",
            }}
          >
            {[
              "ESA Licensed #7018909",
              "Tesla & ChargePoint Certified",
              "Bidirectional V2H Ready",
            ].map((t) => (
              <span
                key={t}
                style={{ display: "flex", alignItems: "center", gap: 9 }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent)",
                  }}
                />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
