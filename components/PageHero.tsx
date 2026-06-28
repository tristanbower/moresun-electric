import type { CSSProperties, ReactNode } from "react";

const mono = "var(--font-mono), monospace";

type Blob = {
  size: string; // e.g. "60vw"
  pos: CSSProperties; // left/right/top
  color: string; // radial inner color
  blur: number;
  anim: "msDrift" | "msDrift2";
  dur: number;
};

type PageHeroProps = {
  eyebrow: string;
  titleBefore?: string;
  titleAccent: string;
  titleAfter?: string;
  subhead: ReactNode;
  paddingBottom: string;
  blobs: [Blob, Blob];
  titleMaxWidth?: string;
  subheadMaxWidth?: string;
};

function fadeUp(delay: number): CSSProperties {
  return { opacity: 0, animation: `msFadeUp .85s var(--ease) ${delay}s both` };
}

export default function PageHero({
  eyebrow,
  titleBefore,
  titleAccent,
  titleAfter,
  subhead,
  paddingBottom,
  blobs,
  titleMaxWidth = "16ch",
  subheadMaxWidth = "62ch",
}: PageHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: `clamp(140px,18vh,210px) 0 ${paddingBottom}`,
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {blobs.map((b, i) => (
          <div
            key={i}
            className={b.anim === "msDrift" ? "drift" : "drift-2"}
            style={{
              position: "absolute",
              width: b.size,
              height: b.size,
              borderRadius: "50%",
              background: `radial-gradient(circle,${b.color},transparent ${
                b.anim === "msDrift" ? "62%" : "64%"
              })`,
              filter: `blur(${b.blur}px)`,
              animation: `${b.anim} ${b.dur}s ease-in-out infinite`,
              ...b.pos,
            }}
          />
        ))}
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
              "linear-gradient(to bottom,rgba(10,13,18,.55),rgba(10,13,18,.92))",
          }}
        />
      </div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            ...fadeUp(0.05),
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
          {eyebrow}
        </div>
        <h1
          style={{
            ...fadeUp(0.13),
            fontWeight: 800,
            fontSize: "clamp(44px,7.4vw,104px)",
            lineHeight: 0.92,
            letterSpacing: "-.035em",
            margin: "0 0 26px",
            maxWidth: titleMaxWidth,
          }}
        >
          {titleBefore}
          {titleBefore ? " " : ""}
          <span className="solar-text">{titleAccent}</span>
          {titleAfter}
        </h1>
        <p
          style={{
            ...fadeUp(0.21),
            fontSize: "clamp(17px,1.7vw,22px)",
            lineHeight: 1.55,
            color: "var(--text-muted)",
            maxWidth: subheadMaxWidth,
            margin: 0,
          }}
        >
          {subhead}
        </p>
      </div>
    </section>
  );
}
