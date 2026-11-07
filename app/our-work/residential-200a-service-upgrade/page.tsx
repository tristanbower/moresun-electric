import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { RESIDENTIAL_200A as project, type WorkImage } from "@/lib/work";

// No location, client, date, price or timeline for this job — see lib/work.ts.
export const metadata: Metadata = {
  title: `${project.title} — Our Work`,
  description: `${project.scope} Electrical work from panel to charger.`,
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

const labelStyle: React.CSSProperties = {
  position: "absolute",
  top: 12,
  left: 12,
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "var(--text)",
  background: "rgba(6,8,12,.72)",
  border: "1px solid var(--border-3)",
  padding: "6px 10px",
  borderRadius: 999,
};

// After → Before → service mast, one row of three on desktop so the
// before/after pair sits side by side; every photo keeps its full frame.
const ROW: WorkImage[] = project.gallery;

// Gallery content width is capped at 1152px (1280px container minus gutters).
function sizesFor(img: WorkImage, row: WorkImage[]) {
  const total = row.reduce((sum, r) => sum + r.width / r.height, 0);
  const share = img.width / img.height / total;
  return `(max-width: 767px) 100vw, (max-width: 1280px) ${Math.ceil(
    share * 100,
  )}vw, ${Math.ceil(share * 1152)}px`;
}

export default function Residential200aPage() {
  return (
    <div style={{ position: "relative" }}>
      <Nav />

      {/* PROJECT HEADER — no video for this job */}
      <PageHero
        eyebrow="Our Work · Service upgrade"
        titleBefore="Residential 200A Service Upgrade"
        titleAccent="+ 2 SWTCH Chargers"
        titleMaxWidth="18ch"
        paddingBottom="clamp(48px,7vw,88px)"
        blobs={[
          {
            size: "58vw",
            pos: { left: "-18vw", top: "-24vw" },
            color: "rgba(255,77,28,.3)",
            blur: 34,
            anim: "msDrift",
            dur: 20,
          },
          {
            size: "44vw",
            pos: { right: "-14vw", top: "-10vw" },
            color: "rgba(255,210,10,.18)",
            blur: 38,
            anim: "msDrift2",
            dur: 24,
          },
        ]}
        subhead={
          <>
            The customer had two new EVs on the way and wanted their home
            future-proofed. We upgraded the service from 100A to 200A and
            installed two SWTCH home chargers — the electrical work from panel
            to charger.
          </>
        }
      />

      {/* BEFORE / AFTER */}
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
              Before and after.
            </h2>
          </Reveal>
          <div className="work-gallery">
            <Reveal className="work-gallery-row">
              {ROW.map((img) => (
                <figure
                  key={img.src}
                  style={{
                    position: "relative",
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
                    sizes={sizesFor(img, ROW)}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  {img.label && (
                    <figcaption style={labelStyle}>{img.label}</figcaption>
                  )}
                </figure>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE JOB */}
      <section
        style={{
          position: "relative",
          background: "var(--slate-900)",
          padding: "clamp(60px,8vw,110px) 0 clamp(76px,11vw,150px)",
          borderTop: "1px solid var(--hairline)",
        }}
      >
        <Reveal className="container">
          <div style={{ maxWidth: 760 }}>
            <div style={eyebrowStyle}>
              <span style={dot} />
              The job
            </div>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(30px,4.2vw,56px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
                margin: "0 0 18px",
              }}
            >
              Panel to charger.
            </h2>
            <p
              style={{
                fontSize: "clamp(16px,1.4vw,19px)",
                lineHeight: 1.6,
                color: "var(--text-muted)",
                margin: "0 0 22px",
              }}
            >
              A new 200A service and a new overhead service mast, with a SWTCH
              home charger on each side of the meter. Through SWTCH&apos;s home
              charging program, the charger is free and you get paid to charge.
            </p>
            <dl className="work-facts">
              <div>
                <dt>Service</dt>
                <dd>100A → 200A</dd>
              </div>
              <div>
                <dt>Chargers</dt>
                <dd>2 × SWTCH home chargers</dd>
              </div>
            </dl>
          </div>
        </Reveal>
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
