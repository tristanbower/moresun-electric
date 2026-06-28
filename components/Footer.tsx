import Link from "next/link";

const mono = "var(--font-mono), monospace";

const colHead: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: ".18em",
  textTransform: "uppercase",
  color: "var(--text-mono)",
  marginBottom: 16,
};

const chip: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 12,
  letterSpacing: ".06em",
  color: "var(--text-faint)",
  border: "1px solid var(--border)",
  padding: "8px 13px",
  borderRadius: 5,
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        position: "relative",
        background: "var(--slate-950)",
        borderTop: "1px solid var(--hairline)",
        padding: "clamp(56px,7vw,90px) 0 36px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "clamp(32px,4vw,56px)",
            paddingBottom: 48,
            borderBottom: "1px solid var(--hairline-2)",
          }}
        >
          <div style={{ gridColumn: "1/-1", maxWidth: 520 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 13,
                marginBottom: 18,
              }}
            >
              <span
                className="sun-dot"
                style={{ width: 30, height: 30 }}
                aria-hidden="true"
              />
              <span
                style={{ fontWeight: 800, fontSize: 23, letterSpacing: "-.02em" }}
              >
                MoreSun{" "}
                <span style={{ fontWeight: 500, color: "var(--text-dim)" }}>
                  Electric
                </span>
              </span>
            </div>
            <p
              style={{
                color: "var(--text-faint)",
                fontSize: 15,
                lineHeight: 1.6,
                margin: 0,
                maxWidth: "42ch",
              }}
            >
              Licensed electrical contractor specializing in EV charging, solar,
              Powerwall, and bidirectional vehicle-to-home installations.
            </p>
          </div>

          <div>
            <div style={colHead}>Solutions</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              <Link href="/solutions" className="foot-link">
                Bidirectional (V2H)
              </Link>
              <Link href="/solutions" className="foot-link">
                Dealership Partnerships
              </Link>
              <Link href="/solutions" className="foot-link">
                Home Developer Program
              </Link>
            </div>
          </div>

          <div>
            <div style={colHead}>Company</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              <Link href="/shop" className="foot-link">
                Shop
              </Link>
              <Link href="/contact" className="foot-link">
                Contact
              </Link>
              <Link href="/" className="foot-link">
                Home
              </Link>
            </div>
          </div>

          <div>
            <div style={colHead}>Get in touch</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 11,
                color: "var(--text-muted)",
                fontSize: 15,
              }}
            >
              <span>hello@moresunelectric.com</span>
              <span>(000) 000-0000</span>
              <span style={{ color: "var(--text-faint)" }}>
                Serving the Greater Metro Area
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            padding: "28px 0",
            borderBottom: "1px solid var(--hairline-2)",
          }}
        >
          <span style={chip}>ESA Licence #7018909</span>
          <span style={chip}>ChargePoint Certified</span>
          <span style={chip}>Tesla Certified</span>
          <span style={chip}>SWTCH Certified</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            paddingTop: 24,
            fontSize: 13,
            color: "var(--text-mono)",
            fontFamily: mono,
            letterSpacing: ".04em",
          }}
        >
          <span>© {year} MoreSun Electric. All rights reserved.</span>
          <span>Powered by the sun ☀</span>
        </div>
      </div>
    </footer>
  );
}
