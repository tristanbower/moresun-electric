"use client";

import { useState, type CSSProperties } from "react";

const mono = "var(--font-mono), monospace";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const labelStyle: CSSProperties = {
  display: "block",
  fontFamily: mono,
  fontSize: 11.5,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "var(--text-dim)",
  marginBottom: 9,
};

const errStyle: CSSProperties = {
  color: "var(--error)",
  fontSize: 13,
  marginTop: 7,
  fontFamily: mono,
};

function Required() {
  return <span style={{ color: "var(--accent)" }}>*</span>;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sentName, setSentName] = useState("");

  // Clearing a field's error as the user edits it (mirrors set() in the spec).
  const clearError = (field: keyof Errors) =>
    setErrors((e) => {
      const next = { ...e };
      delete next[field];
      return next;
    });

  const validate = (): Errors => {
    const e: Errors = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      e.email = "That email doesn\u2019t look right.";
    if (phone.trim() && phone.replace(/[^0-9]/g, "").length < 7)
      e.phone = "That phone number looks too short.";
    if (!message.trim()) e.message = "Tell us a little about the job.";
    return e;
  };

  const submit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    // NOTE: the prototype only sets local state. Wire this to a real backend
    // (form API / email service / CRM) before launch.
    setSentName(name.trim().split(/\s+/)[0]);
    setSubmitted(true);
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setErrors({});
    setSubmitted(false);
    setSentName("");
  };

  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: "clamp(28px,3.5vw,44px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
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

      {submitted ? (
        <div
          style={{
            animation: "msPopScale .4s var(--ease) both",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "clamp(12px,3vw,40px) 0",
          }}
        >
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 14,
              background: "var(--solar-dot)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 26,
              color: "#0A0D12",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            ✓
          </div>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(26px,3vw,38px)",
              letterSpacing: "-.025em",
              margin: "0 0 14px",
            }}
          >
            Thanks, {sentName} — we&apos;ve got it.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--text-dim)",
              margin: "0 0 30px",
              maxWidth: "46ch",
            }}
          >
            Your request is in. A MoreSun electrician will reach out within one
            business day to set up your free consultation. Keep an eye on your
            inbox.
          </p>
          <button
            type="button"
            onClick={reset}
            className="btn-outline"
            style={{ fontSize: 15, padding: "14px 24px", borderRadius: 6 }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <div>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(22px,2.4vw,30px)",
              letterSpacing: "-.02em",
              margin: "0 0 6px",
            }}
          >
            Request a consultation
          </h2>
          <p
            style={{
              color: "var(--text-faint)",
              fontSize: 14.5,
              margin: "0 0 30px",
            }}
          >
            Fields marked with <Required /> are required.
          </p>

          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              submit();
            }}
            noValidate
            style={{ display: "flex", flexDirection: "column", gap: 22 }}
          >
            {/* name */}
            <div>
              <label style={labelStyle} htmlFor="name">
                Name <Required />
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  clearError("name");
                }}
                placeholder="Your full name"
                className={`field${errors.name ? " error" : ""}`}
                aria-invalid={!!errors.name}
              />
              {errors.name && <div style={errStyle}>{errors.name}</div>}
            </div>

            {/* email + phone row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
                gap: 18,
              }}
            >
              <div>
                <label style={labelStyle} htmlFor="email">
                  Email <Required />
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clearError("email");
                  }}
                  placeholder="you@email.com"
                  className={`field${errors.email ? " error" : ""}`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <div style={errStyle}>{errors.email}</div>}
              </div>
              <div>
                <label style={labelStyle} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    clearError("phone");
                  }}
                  placeholder="(000) 000-0000"
                  className={`field${errors.phone ? " error" : ""}`}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <div style={errStyle}>{errors.phone}</div>}
              </div>
            </div>

            {/* message */}
            <div>
              <label style={labelStyle} htmlFor="message">
                What can we help with? <Required />
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  clearError("message");
                }}
                rows={5}
                placeholder="e.g. I'd like a Level 2 charger installed, and I'm curious about V2H."
                className={`field${errors.message ? " error" : ""}`}
                style={{ resize: "vertical", minHeight: 120, lineHeight: 1.5 }}
                aria-invalid={!!errors.message}
              />
              {errors.message && <div style={errStyle}>{errors.message}</div>}
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{
                fontSize: 16.5,
                padding: "18px 28px",
                borderRadius: 6,
                boxShadow: "0 10px 30px rgba(255,120,30,.3)",
              }}
            >
              Send request →
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
