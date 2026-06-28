import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're thinking — a charger, solar, backup power, or a partner program. We reply within one business day.",
};

const mono = "var(--font-mono), monospace";

const detailCard: React.CSSProperties = {
  display: "flex",
  gap: 16,
  alignItems: "flex-start",
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: 24,
};

const iconChip: React.CSSProperties = {
  width: 42,
  height: 42,
  borderRadius: 9,
  background: "rgba(255,154,14,.12)",
  border: "1px solid var(--border-2)",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const iconInner: React.CSSProperties = {
  width: 16,
  height: 16,
  borderRadius: 4,
  background: "var(--solar-dot)",
};

const detailLabel: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color: "var(--text-mono)",
  marginBottom: 7,
};

export default function ContactPage() {
  return (
    <div style={{ position: "relative" }}>
      <Nav />

      <PageHero
        eyebrow="Let's talk"
        titleBefore="Get a"
        titleAccent="free quote"
        titleAfter="."
        paddingBottom="clamp(36px,5vw,56px)"
        titleMaxWidth="15ch"
        subheadMaxWidth="58ch"
        blobs={[
          {
            size: "56vw",
            pos: { left: "-18vw", top: "-24vw" },
            color: "rgba(255,77,28,.3)",
            blur: 34,
            anim: "msDrift",
            dur: 20,
          },
          {
            size: "42vw",
            pos: { right: "-14vw", top: "-10vw" },
            color: "rgba(255,210,10,.16)",
            blur: 38,
            anim: "msDrift2",
            dur: 24,
          },
        ]}
        subhead={
          <>
            Tell us what you&apos;re thinking — a charger, solar, backup power,
            or a partner program. We&apos;ll get back to you within one business
            day. No pressure, no jargon.
          </>
        }
      />

      {/* FORM + DETAILS */}
      <section
        style={{
          position: "relative",
          background: "var(--slate-900)",
          padding: "0 0 clamp(80px,11vw,140px)",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "clamp(28px,4vw,56px)",
            alignItems: "start",
          }}
        >
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal
            delay={0.1}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            {/* Call */}
            <div style={detailCard}>
              <span style={iconChip}>
                <span style={iconInner} />
              </span>
              <div>
                <div style={detailLabel}>Call us</div>
                <div
                  style={{ fontWeight: 700, fontSize: 19, letterSpacing: "-.01em" }}
                >
                  (000) 000-0000
                </div>
                <div
                  style={{ color: "var(--text-faint)", fontSize: 14, marginTop: 3 }}
                >
                  Mon–Fri, 8am–6pm
                </div>
              </div>
            </div>

            {/* Email */}
            <div style={detailCard}>
              <span style={iconChip}>
                <span style={iconInner} />
              </span>
              <div>
                <div style={detailLabel}>Email</div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 19,
                    letterSpacing: "-.01em",
                    wordBreak: "break-word",
                  }}
                >
                  hello@moresunelectric.com
                </div>
                <div
                  style={{ color: "var(--text-faint)", fontSize: 14, marginTop: 3 }}
                >
                  We reply within 1 business day
                </div>
              </div>
            </div>

            {/* Hours */}
            <div style={detailCard}>
              <span style={iconChip}>
                <span style={iconInner} />
              </span>
              <div>
                <div style={detailLabel}>Hours</div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 17,
                    letterSpacing: "-.01em",
                    lineHeight: 1.5,
                  }}
                >
                  Mon–Fri · 8am–6pm
                  <br />
                  Sat · 9am–2pm
                </div>
                <div
                  style={{ color: "var(--text-faint)", fontSize: 14, marginTop: 3 }}
                >
                  Emergency service available
                </div>
              </div>
            </div>

            {/* Service area / map */}
            <div
              style={{
                position: "relative",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: 170,
                  background:
                    "repeating-linear-gradient(135deg,#141A23 0 12px,#10151D 12px 24px)",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(70% 80% at 70% 30%,rgba(255,154,14,.1),transparent 60%)",
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
                  MAP — service-area coverage
                </div>
              </div>
              <div style={{ padding: "22px 24px" }}>
                <div style={detailLabel}>Service area</div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                    letterSpacing: "-.01em",
                    marginBottom: 6,
                  }}
                >
                  Serving the Greater Metro Area
                </div>
                <p
                  style={{
                    color: "var(--text-faint)",
                    fontSize: 14,
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  Residential and commercial installs across the metro and
                  surrounding suburbs. Not sure if you&apos;re in range? Just
                  ask.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
