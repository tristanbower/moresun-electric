import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";

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

const STEPS = [
  {
    n: "01",
    title: "Consultation",
    body: "We walk your property, look at your panel and usage, and tell you honestly what's possible — with a clear written estimate and no pressure.",
  },
  {
    n: "02",
    title: "Install",
    body: "Our licensed electricians handle permits, clean wiring, and ESA inspection. Most residential installs wrap in a single day, tidy and to code.",
  },
  {
    n: "03",
    title: "Power up",
    body: "We commission the system, set up the app, and show you how it all works — charging, monitoring, and backup power — before we leave.",
  },
];

const V2H_CHECKS = [
  "Keep the lights on during outages",
  "Shift usage off peak-rate hours",
  "Pair with solar + Powerwall for full resilience",
];

const TESTIMONIALS = [
  {
    quote:
      "Clean install, fair price, and they actually explained how everything worked. Our EV charger was up and running the same afternoon.",
    name: "Homeowner",
    tag: "EV charger install",
  },
  {
    quote:
      "We bundle MoreSun's charger installs into our vehicle sales. Customers get a turnkey setup and we close deals faster. Reliable every time.",
    name: "Dealership Partner",
    tag: "B2B program",
  },
  {
    quote:
      "They set up solar, a Powerwall, and bidirectional charging together. During the last outage our house didn't even flicker. Worth every penny.",
    name: "Homeowner",
    tag: "Solar + V2H",
  },
];

export default function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      <Nav />
      <Hero />

      {/* MISSION */}
      <section
        style={{
          position: "relative",
          background: "var(--slate-900)",
          padding: "clamp(76px,11vw,160px) 0",
          borderTop: "1px solid var(--hairline)",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "clamp(40px,6vw,90px)",
            alignItems: "start",
          }}
        >
          <Reveal>
            <div style={eyebrowStyle}>
              <span style={dot} />
              Our Mission
            </div>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(32px,4.4vw,60px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
                margin: 0,
                maxWidth: "18ch",
              }}
            >
              Clean energy, done right the first time.
            </h2>
          </Reveal>
          <Reveal delay={0.1} style={{ paddingTop: 8 }}>
            <p
              style={{
                fontSize: "clamp(16px,1.45vw,20px)",
                lineHeight: 1.65,
                color: "var(--text-muted)",
                margin: "0 0 22px",
              }}
            >
              We design and install the systems that power modern homes — EV
              chargers, rooftop solar, and Powerwall battery storage — and we do
              it as a fully licensed electrical contractor, not a sales outfit.
              Every job is permitted, code-compliant, and ESA-inspected.
            </p>
            <p
              style={{
                fontSize: "clamp(16px,1.45vw,20px)",
                lineHeight: 1.65,
                color: "var(--text-muted)",
                margin: "0 0 30px",
              }}
            >
              That means clean wiring, honest estimates, and equipment we&apos;d
              put in our own homes. We show up when we say we will, explain the
              work in plain language, and stand behind it after the truck pulls
              away.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {[
                { h: "Licensed", s: "ESA electrical contractor" },
                { h: "Certified", s: "Tesla · ChargePoint · SWTCH" },
              ].map((b) => (
                <div
                  key={b.h}
                  style={{
                    flex: 1,
                    minWidth: 160,
                    borderLeft: "2px solid var(--accent)",
                    padding: "4px 0 4px 16px",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: 24,
                      letterSpacing: "-.02em",
                    }}
                  >
                    {b.h}
                  </div>
                  <div
                    style={{ color: "var(--text-faint)", fontSize: 14, marginTop: 2 }}
                  >
                    {b.s}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* HOW IT WORKS */}
      <section
        style={{
          position: "relative",
          background: "var(--slate-900)",
          padding: "clamp(76px,11vw,150px) 0",
        }}
      >
        <div className="container">
          <Reveal
            style={{ maxWidth: 760, marginBottom: "clamp(44px,6vw,72px)" }}
          >
            <div style={eyebrowStyle}>
              <span style={dot} />
              How it works
            </div>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(32px,4.6vw,62px)",
                lineHeight: 1.02,
                letterSpacing: "-.03em",
                margin: 0,
              }}
            >
              Three steps from idea to powered up.
            </h2>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 20,
            }}
          >
            {STEPS.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 0.1}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: 32,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    right: 6,
                    fontWeight: 800,
                    fontSize: 96,
                    color: "var(--hairline-2)",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    position: "relative",
                    fontFamily: mono,
                    fontSize: 12,
                    letterSpacing: ".18em",
                    color: "var(--accent)",
                    marginBottom: 60,
                  }}
                >
                  STEP {s.n}
                </div>
                <h3
                  style={{
                    position: "relative",
                    fontWeight: 800,
                    fontSize: 25,
                    letterSpacing: "-.02em",
                    margin: "0 0 12px",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    position: "relative",
                    color: "var(--text-dim)",
                    fontSize: 16,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* V2H FEATURE PANEL */}
      <section
        style={{
          position: "relative",
          background: "var(--slate-900)",
          padding: "0 clamp(16px,4vw,48px) clamp(76px,11vw,150px)",
        }}
      >
        <Reveal
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            position: "relative",
            borderRadius: 14,
            overflow: "hidden",
            background: "var(--card-2)",
            border: "1px solid #20283340",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(90% 120% at 12% 0%,rgba(255,90,20,.22),transparent 55%),radial-gradient(80% 120% at 100% 100%,rgba(255,210,10,.12),transparent 55%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              height: 3,
              background: "var(--solar)",
            }}
          />
          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "clamp(32px,4vw,56px)",
              alignItems: "center",
              padding: "clamp(36px,5vw,72px)",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  fontFamily: mono,
                  fontSize: 12,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "#0A0D12",
                  background: "linear-gradient(100deg,#FF9A0E,#FFD20A)",
                  padding: "7px 13px",
                  borderRadius: 999,
                  fontWeight: 700,
                  marginBottom: 24,
                }}
              >
                ★ Headline innovation
              </div>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(34px,4.8vw,68px)",
                  lineHeight: 0.98,
                  letterSpacing: "-.035em",
                  margin: "0 0 22px",
                }}
              >
                Bidirectional charging is here.
              </h2>
              <p
                style={{
                  fontSize: "clamp(16px,1.5vw,20px)",
                  lineHeight: 1.6,
                  color: "var(--text-muted)",
                  margin: "0 0 26px",
                  maxWidth: "52ch",
                }}
              >
                Plug in your EV and use its battery to power your home — through
                outages, or during peak-rate hours when grid electricity costs
                the most. Vehicle-to-home charging turns the car in your
                driveway into a backup power source. We&apos;re one of the few
                installers in the area offering it.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                {V2H_CHECKS.map((c) => (
                  <div
                    key={c}
                    style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 4,
                        background: "var(--solar-dot)",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                    <span style={{ color: "#D6DCE3", fontSize: 16 }}>{c}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/solutions"
                className="btn-primary"
                style={{ fontSize: 16, padding: "16px 28px", boxShadow: "0 10px 30px rgba(255,120,30,.3)" }}
              >
                Explore V2H →
              </Link>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: 10,
                overflow: "hidden",
                minHeight: "clamp(280px,34vw,440px)",
                background:
                  "repeating-linear-gradient(135deg,#141A23 0 13px,#10151D 13px 26px)",
                border: "1px solid var(--border-3)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(80% 70% at 70% 30%,rgba(255,154,14,.12),transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  margin: 18,
                  fontFamily: mono,
                  fontSize: 12,
                  letterSpacing: ".08em",
                  color: "var(--text-mono)",
                  background: "rgba(6,8,12,.6)",
                  border: "1px solid var(--border-3)",
                  padding: "8px 12px",
                  borderRadius: 5,
                }}
              >
                PHOTO — EV plugged into home, dusk install shot
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section
        style={{
          position: "relative",
          background: "var(--slate-950)",
          borderTop: "1px solid var(--hairline)",
          padding: "clamp(76px,11vw,150px) 0",
        }}
      >
        <div className="container">
          <Reveal
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: "clamp(40px,5vw,64px)",
            }}
          >
            <div>
              <div style={eyebrowStyle}>
                <span style={dot} />
                What clients say
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
                Trusted by homeowners
                <br />
                and partners alike.
              </h2>
            </div>
            <div
              style={{
                fontFamily: mono,
                fontSize: 12,
                color: "var(--text-mono)",
                letterSpacing: ".06em",
              }}
            >
              Placeholder reviews
            </div>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
              gap: 20,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={t.name + i}
                delay={i * 0.1}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: 30,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", gap: 5, marginBottom: 18 }}>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <span
                      key={k}
                      style={{
                        width: 13,
                        height: 13,
                        borderRadius: "50%",
                        background: "var(--solar-dot)",
                      }}
                    />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.6,
                    color: "#E1E6EB",
                    margin: "0 0 24px",
                    flex: 1,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background:
                        "repeating-linear-gradient(135deg,#1A212B 0 6px,#141A23 6px 12px)",
                      border: "1px solid var(--border-3)",
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                    <div
                      style={{
                        color: "var(--text-mono)",
                        fontSize: 13,
                        fontFamily: mono,
                      }}
                    >
                      {t.tag}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
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
            gap: 30,
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(28px,3.8vw,52px)",
              lineHeight: 1.02,
              letterSpacing: "-.03em",
              margin: 0,
              maxWidth: "18ch",
            }}
          >
            Ready to power up? Let&apos;s talk.
          </h2>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ fontSize: 17, padding: "20px 34px" }}
          >
            Get a free consultation →
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
