import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { WORK_PROJECTS } from "@/lib/work";

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

export default function OurWork() {
  return (
    <section
      id="our-work"
      style={{
        position: "relative",
        background: "var(--slate-900)",
        padding: "0 0 clamp(76px,11vw,150px)",
        scrollMarginTop: 72,
      }}
    >
      <div className="container">
        <Reveal style={{ maxWidth: 760, marginBottom: "clamp(36px,5vw,56px)" }}>
          <div style={eyebrowStyle}>
            <span style={dot} />
            Our Work
          </div>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(32px,4.6vw,62px)",
              lineHeight: 1.02,
              letterSpacing: "-.03em",
              margin: "0 0 18px",
            }}
          >
            Recent work.
          </h2>
          <p
            style={{
              fontSize: "clamp(16px,1.45vw,20px)",
              lineHeight: 1.6,
              color: "var(--text-muted)",
              margin: 0,
            }}
          >
            Real installs from real jobs — no stock photos.
          </p>
        </Reveal>

        <div style={{ display: "grid", gap: "clamp(20px,2.4vw,28px)" }}>
          {WORK_PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={0.1 + i * 0.1}>
              <Link href={`/our-work/${project.slug}`} className="work-card">
                {/* 3:2 frame (the Gretzky cover's own ratio) so portrait
                    covers don't stretch the card; the full photos are on
                    the project page. */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "3 / 2",
                    background: "var(--card-2)",
                  }}
                >
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    quality={project.cover.quality}
                    fill
                    sizes="(max-width: 760px) 100vw, 640px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    padding: "clamp(26px,3.4vw,44px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {project.location && (
                    <div
                      style={{
                        fontFamily: mono,
                        fontSize: 12,
                        letterSpacing: ".18em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        marginBottom: 16,
                      }}
                    >
                      {project.location}
                    </div>
                  )}
                  <h3
                    style={{
                      fontWeight: 800,
                      fontSize: "clamp(26px,2.6vw,36px)",
                      lineHeight: 1.08,
                      letterSpacing: "-.02em",
                      margin: "0 0 14px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-dim)",
                      fontSize: 17,
                      lineHeight: 1.6,
                      margin: "0 0 28px",
                    }}
                  >
                    {project.scope}
                  </p>
                  <span
                    className="work-card-cta"
                    style={{ fontWeight: 700, fontSize: 16 }}
                  >
                    View the project →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
