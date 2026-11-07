"use client";

import Image from "next/image";
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
      {/* full-bleed background image (overscanned for parallax) */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: "-20%",
          left: 0,
          right: 0,
          height: "140%",
          zIndex: 0,
          willChange: "transform",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "var(--slate-900)" }} />
        <Image
          src="/hero.png"
          alt="An EV charging at a modern home at dusk — energy flowing from the car to a wall charger, a garage battery, and rooftop solar"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "58% 50%" }}
        />
        {/* subtle warm brand glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(58% 48% at 78% 36%,rgba(255,120,30,.14),transparent 60%)",
            mixBlendMode: "screen",
          }}
        />
        {/* fine texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(135deg,rgba(255,255,255,.016) 0 2px,transparent 2px 9px)",
          }}
        />
        {/* bottom-up legibility scrim */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top,rgba(10,13,18,.95) 2%,rgba(10,13,18,.6) 32%,rgba(10,13,18,.14) 60%,rgba(10,13,18,.4) 100%)",
          }}
        />
        {/* left-to-right legibility scrim */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right,rgba(10,13,18,.82) 0%,rgba(10,13,18,.42) 34%,transparent 64%)",
          }}
        />
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
