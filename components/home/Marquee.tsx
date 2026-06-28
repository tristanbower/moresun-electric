const ITEMS = [
  "ESA Contractor Licence #7018909",
  "ChargePoint Certified",
  "Tesla Certified",
  "SWTCH Certified",
];

function Group({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      aria-hidden={ariaHidden || undefined}
    >
      {ITEMS.map((item) => (
        <span key={item} style={{ display: "contents" }}>
          <span
            style={{
              fontWeight: 700,
              fontSize: "clamp(20px,2.4vw,34px)",
              letterSpacing: "-.01em",
              color: "#EEF2F6",
              padding: "0 30px",
            }}
          >
            {item}
          </span>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "var(--solar-dot)",
            }}
          />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      style={{
        position: "relative",
        background: "var(--slate-950)",
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
        padding: "clamp(30px,4vw,50px) 0",
        overflow: "hidden",
      }}
      aria-label="Certifications"
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "14vw",
          background: "linear-gradient(90deg,#06080C,transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "14vw",
          background: "linear-gradient(270deg,#06080C,transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        className="marquee-track"
        style={{
          display: "flex",
          width: "max-content",
          animation: "msMarquee 30s linear infinite",
          willChange: "transform",
        }}
      >
        <Group />
        <Group ariaHidden />
      </div>
    </section>
  );
}
