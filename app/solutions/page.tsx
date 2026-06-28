import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Bidirectional V2H charging, turnkey EV programs for dealerships and developers, plus EV charging, solar, and Powerwall for homeowners.",
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

const V2H_STATS = [
  { h: "Backup", s: "Power outages covered" },
  { h: "Peak shift", s: "Dodge expensive hours" },
  { h: "Resilient", s: "Solar + Powerwall ready" },
];

const B2B = [
  {
    photo: "PHOTO — EV on dealership lot",
    label: "Dealership Partnerships",
    title: "Charger install, built into the sale.",
    body: "Bundle a home charger install into every EV you sell. Your customer drives off knowing their garage is ready before the car even arrives — we handle the site visit, permit, and install on your timeline.",
    bullets: [
      "Co-branded quote at point of sale",
      "Scheduled around delivery dates",
      "One licensed crew, every region",
    ],
    cta: "Become a partner →",
  },
  {
    photo: "PHOTO — new-build garage with charger",
    label: "Home Developer Program",
    title: "An EV charger in every home you build.",
    body: "Include a charger with the sale of the home. We rough-in during construction and commission at handover, so buyers move into an EV-ready house — a feature that sells, with none of the retrofit headache later.",
    bullets: [
      "Rough-in during construction",
      "Volume pricing per development",
      "A selling feature, move-in ready",
    ],
    cta: "Talk to our team →",
  },
];

const RESIDENTIAL = [
  {
    title: "EV Charging",
    body: "Level 2 home chargers sized to your panel and your commute. Hardwired, weather-rated, and app-connected.",
  },
  {
    title: "Solar",
    body: "Rooftop solar designed for your roof and your bill — generate your own power and feed the rest of the system.",
  },
  {
    title: "Powerwall",
    body: "Tesla battery storage that banks solar by day and backs up your home by night — seamless, silent, certified.",
  },
];

export default function SolutionsPage() {
  return (
    <div style={{ position: "relative" }}>
      <Nav />

      <PageHero
        eyebrow="What we install"
        titleBefore="Solutions that"
        titleAccent="pay you back"
        titleAfter="."
        paddingBottom="clamp(60px,8vw,96px)"
        blobs={[
          {
            size: "60vw",
            pos: { left: "-16vw", top: "-22vw" },
            color: "rgba(255,77,28,.34)",
            blur: 34,
            anim: "msDrift",
            dur: 20,
          },
          {
            size: "46vw",
            pos: { right: "-12vw", top: "-8vw" },
            color: "rgba(255,210,10,.2)",
            blur: 38,
            anim: "msDrift2",
            dur: 24,
          },
        ]}
        subhead={
          <>
            From whole-home energy resilience to turnkey EV programs for
            dealerships and developers, every system we install is licensed,
            permitted, and built around how you actually use power.
          </>
        }
      />

      {/* FEATURED V2H */}
      <section
        style={{
          position: "relative",
          background: "var(--slate-900)",
          padding: "0 clamp(16px,4vw,48px) clamp(24px,4vw,40px)",
        }}
      >
        <Reveal
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            position: "relative",
            borderRadius: 16,
            overflow: "hidden",
            background: "var(--card-2)",
            border: "1px solid #222C39",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(85% 120% at 10% 0%,rgba(255,90,20,.24),transparent 56%),radial-gradient(80% 120% at 100% 100%,rgba(255,210,10,.13),transparent 55%)",
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
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "clamp(32px,4vw,60px)",
              alignItems: "center",
              padding: "clamp(36px,5vw,76px)",
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
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "#0A0D12",
                  background: "linear-gradient(100deg,#FF9A0E,#FFD20A)",
                  padding: "7px 13px",
                  borderRadius: 999,
                  fontWeight: 700,
                  marginBottom: 24,
                }}
              >
                ★ Our headline solution
              </div>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(34px,4.6vw,64px)",
                  lineHeight: 0.98,
                  letterSpacing: "-.035em",
                  margin: "0 0 12px",
                }}
              >
                Bidirectional Charging
              </h2>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 14,
                  letterSpacing: ".05em",
                  color: "var(--accent)",
                  marginBottom: 22,
                }}
              >
                Vehicle-to-Home (V2H)
              </div>
              <p
                style={{
                  fontSize: "clamp(16px,1.5vw,20px)",
                  lineHeight: 1.65,
                  color: "var(--text-muted)",
                  margin: "0 0 20px",
                  maxWidth: "54ch",
                }}
              >
                Most chargers only push power one way — into your car.
                Bidirectional charging lets it flow both ways. Plug in a
                compatible EV and its battery becomes a backup power source for
                your whole home.
              </p>
              <p
                style={{
                  fontSize: "clamp(16px,1.5vw,20px)",
                  lineHeight: 1.65,
                  color: "var(--text-muted)",
                  margin: "0 0 28px",
                  maxWidth: "54ch",
                }}
              >
                When the grid goes down, your lights stay on. When peak rates
                hit, you run the house off the car instead of the grid. Pair it
                with solar and a Powerwall and you&apos;ve got true energy
                independence.{" "}
                <strong style={{ color: "var(--text)", fontWeight: 700 }}>
                  We&apos;re one of the only installers in the area certified to
                  do it.
                </strong>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
                  gap: 14,
                  marginBottom: 32,
                }}
              >
                {V2H_STATS.map((s) => (
                  <div
                    key={s.h}
                    style={{
                      border: "1px solid var(--border-3)",
                      borderRadius: 8,
                      padding: 16,
                      background: "rgba(6,8,12,.4)",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: 22,
                        letterSpacing: "-.02em",
                      }}
                    >
                      {s.h}
                    </div>
                    <div
                      style={{
                        color: "var(--text-faint)",
                        fontSize: 13.5,
                        marginTop: 3,
                      }}
                    >
                      {s.s}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{
                    fontSize: 16,
                    padding: "16px 28px",
                    boxShadow: "0 10px 30px rgba(255,120,30,.3)",
                  }}
                >
                  Ask about V2H →
                </Link>
                <Link
                  href="/shop"
                  className="btn-outline"
                  style={{ fontSize: 16, padding: "16px 26px" }}
                >
                  See hardware
                </Link>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: 12,
                overflow: "hidden",
                minHeight: "clamp(320px,40vw,520px)",
                background:
                  "repeating-linear-gradient(135deg,#141A23 0 13px,#10151D 13px 26px)",
                border: "1px solid var(--border-3)",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(80% 70% at 70% 25%,rgba(255,154,14,.14),transparent 60%)",
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
                PHOTO — EV powering a home at dusk, charger lit
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* B2B PROGRAMS */}
      <section
        style={{
          position: "relative",
          background: "var(--slate-900)",
          padding: "clamp(56px,8vw,110px) 0 clamp(24px,4vw,40px)",
        }}
      >
        <div className="container">
          <Reveal style={{ maxWidth: 740, marginBottom: "clamp(36px,5vw,56px)" }}>
            <div style={eyebrowStyle}>
              <span style={dot} />
              For business partners
            </div>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(30px,4.4vw,58px)",
                lineHeight: 1.02,
                letterSpacing: "-.03em",
                margin: "0 0 16px",
              }}
            >
              Turnkey EV programs for partners.
            </h2>
            <p
              style={{
                fontSize: "clamp(16px,1.45vw,20px)",
                lineHeight: 1.6,
                color: "var(--text-dim)",
                margin: 0,
              }}
            >
              We make the charger part invisible to your customer — bundled,
              scheduled, and installed by licensed pros, so you close the sale
              and we handle the wiring.
            </p>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 20,
            }}
          >
            {B2B.map((c, i) => (
              <Reveal
                key={c.label}
                delay={i * 0.1}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "clamp(28px,3vw,40px)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: 9,
                    overflow: "hidden",
                    height: 170,
                    marginBottom: 26,
                    background:
                      "repeating-linear-gradient(135deg,#141A23 0 12px,#10151D 12px 24px)",
                    border: "1px solid var(--border-3)",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(70% 80% at 80% 20%,rgba(255,154,14,.1),transparent 60%)",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      margin: 14,
                      fontFamily: mono,
                      fontSize: 11,
                      letterSpacing: ".06em",
                      color: "var(--text-mono)",
                      background: "rgba(6,8,12,.6)",
                      border: "1px solid var(--border-3)",
                      padding: "6px 10px",
                      borderRadius: 5,
                    }}
                  >
                    {c.photo}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 12,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 14,
                  }}
                >
                  {c.label}
                </div>
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: "clamp(24px,2.4vw,32px)",
                    letterSpacing: "-.025em",
                    margin: "0 0 14px",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-dim)",
                    fontSize: 16,
                    lineHeight: 1.6,
                    margin: "0 0 22px",
                    flex: 1,
                  }}
                >
                  {c.body}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginBottom: 26,
                  }}
                >
                  {c.bullets.map((b) => (
                    <div
                      key={b}
                      style={{ display: "flex", alignItems: "center", gap: 11 }}
                    >
                      <span
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: 4,
                          background: "var(--solar-dot)",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ color: "#D6DCE3", fontSize: 15 }}>{b}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="btn-outline"
                  style={{
                    alignSelf: "flex-start",
                    fontSize: 15,
                    padding: "13px 22px",
                  }}
                >
                  {c.cta}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CORE RESIDENTIAL */}
      <section
        style={{
          position: "relative",
          background: "var(--slate-900)",
          padding: "clamp(56px,8vw,110px) 0",
        }}
      >
        <div className="container">
          <Reveal style={{ maxWidth: 740, marginBottom: "clamp(36px,5vw,56px)" }}>
            <div style={eyebrowStyle}>
              <span style={dot} />
              For homeowners
            </div>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(30px,4.4vw,58px)",
                lineHeight: 1.02,
                letterSpacing: "-.03em",
                margin: 0,
              }}
            >
              The full clean-energy stack.
            </h2>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: 20,
            }}
          >
            {RESIDENTIAL.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 0.08}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: 30,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: "var(--solar-dot)",
                    marginBottom: 22,
                  }}
                />
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: 22,
                    letterSpacing: "-.02em",
                    margin: "0 0 10px",
                  }}
                >
                  {r.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-dim)",
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {r.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        style={{
          position: "relative",
          background: "var(--slate-950)",
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
              maxWidth: "20ch",
            }}
          >
            Not sure where to start? We&apos;ll map it out with you.
          </h2>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ fontSize: 17, padding: "20px 34px" }}
          >
            Book a consultation →
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
