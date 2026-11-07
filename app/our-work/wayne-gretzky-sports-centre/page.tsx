import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import LoopVideo from "@/components/work/LoopVideo";
import { WAYNE_GRETZKY as project, type WorkImage } from "@/lib/work";

export const metadata: Metadata = {
  title: `${project.title} — Our Work`,
  description: `EV charging installation at the ${project.title}, ${project.location}. ${project.scope}`,
  openGraph: {
    title: `${project.title} · MoreSun Electric`,
    description: project.scope,
    type: "article",
    images: [
      {
        url: project.cover.src,
        width: project.cover.width,
        height: project.cover.height,
        alt: project.cover.alt,
      },
    ],
  },
};

const mono = "var(--font-mono), monospace";

const eyebrowStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  fontFamily: mono,
  fontSize: 12,
  letterSpacing: ".22em",
  textTransform: "uppercase",
  color: "var(--accent)",
  marginBottom: 22,
};

const dot: React.CSSProperties = {
  width: 7,
  height: 7,
  borderRadius: "50%",
  background: "var(--solar-dot)",
};

function fadeUp(delay: number): React.CSSProperties {
  return { opacity: 0, animation: `msFadeUp .85s var(--ease) ${delay}s both` };
}

// Gallery order wg-02 → wg-06 → wg-07, laid out as rows whose
// items share a height so every photo keeps its full frame.
const [g02, g06, g07] = project.gallery;
const ROWS: WorkImage[][] = [[g02], [g06, g07]];

// Gallery content width is capped at 1152px (1280px container minus gutters).
function sizesFor(img: WorkImage, row: WorkImage[]) {
  const total = row.reduce((sum, r) => sum + r.width / r.height, 0);
  const share = img.width / img.height / total;
  return `(max-width: 767px) 100vw, (max-width: 1280px) ${Math.ceil(
    share * 100,
  )}vw, ${Math.ceil(share * 1152)}px`;
}

export default function WayneGretzkyPage() {
  return (
    <div style={{ position: "relative" }}>
      <Nav />

      {/* PROJECT HEADER — muted loop behind the title */}
      <section
        style={{
          position: "relative",
          minHeight: "clamp(560px,78vh,820px)",
          display: "flex",
          alignItems: "flex-end",
          paddingTop: "clamp(140px,18vh,210px)",
          overflow: "hidden",
          background: "var(--slate-900)",
        }}
      >
        <LoopVideo src={project.heroVideo} poster={project.poster}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top,rgba(10,13,18,.96) 4%,rgba(10,13,18,.62) 42%,rgba(10,13,18,.4) 70%,rgba(10,13,18,.7) 100%)",
            }}
          />
        </LoopVideo>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ paddingBottom: "clamp(48px,7vw,88px)" }}>
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
              className="fadeup"
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--solar-dot)",
                }}
              />
              Our Work · EV charging
            </div>
            <h1
              className="fadeup"
              style={{
                ...fadeUp(0.13),
                fontWeight: 800,
                fontSize: "clamp(42px,7vw,98px)",
                lineHeight: 0.94,
                letterSpacing: "-.035em",
                margin: "0 0 22px",
                maxWidth: "14ch",
              }}
            >
              Wayne Gretzky <span className="solar-text">Sports Centre</span>
            </h1>
            <p
              className="fadeup"
              style={{
                ...fadeUp(0.21),
                fontFamily: mono,
                fontSize: 13,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                margin: "0 0 18px",
              }}
            >
              {project.location}
            </p>
            <p
              className="fadeup"
              style={{
                ...fadeUp(0.27),
                fontSize: "clamp(17px,1.7vw,22px)",
                lineHeight: 1.55,
                color: "var(--text-muted)",
                maxWidth: "68ch",
                margin: 0,
              }}
            >
              {project.scope}
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        style={{
          position: "relative",
          background: "var(--slate-900)",
          padding: "0 0 clamp(76px,11vw,150px)",
        }}
      >
        <div className="container">
          <Reveal
            style={{ maxWidth: 760, marginBottom: "clamp(32px,4vw,48px)" }}
          >
            <div style={eyebrowStyle}>
              <span style={dot} />
              Photos
            </div>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(30px,4.2vw,56px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
                margin: 0,
              }}
            >
              On site.
            </h2>
          </Reveal>
          <div className="work-gallery">
            {ROWS.map((row, i) => (
              <Reveal key={i} className="work-gallery-row">
                {row.map((img) => (
                  <figure
                    key={img.src}
                    style={{
                      flex: `${img.width / img.height} 1 0%`,
                      borderRadius: 10,
                      overflow: "hidden",
                      border: "1px solid var(--border)",
                      background: "var(--card-2)",
                    }}
                  >
                    <Image
                      src={img.src}
                      width={img.width}
                      height={img.height}
                      alt={img.alt}
                      quality={img.quality}
                      sizes={sizesFor(img, row)}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </figure>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BACK / CTA */}
      <section
        style={{
          position: "relative",
          background: "var(--slate-900)",
          padding: "clamp(60px,8vw,110px) 0",
          borderTop: "1px solid var(--hairline)",
        }}
      >
        <Reveal
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/#our-work"
            className="btn-outline"
            style={{ fontSize: 16, padding: "18px 28px" }}
          >
            ← Back to Our Work
          </Link>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ fontSize: 16, padding: "18px 30px" }}
          >
            Get a free consultation →
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
