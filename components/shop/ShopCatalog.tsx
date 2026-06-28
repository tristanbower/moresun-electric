"use client";

import Link from "next/link";
import { useMemo, useState, type CSSProperties } from "react";
import { CATALOG, CATEGORIES, type Category } from "@/lib/catalog";

const mono = "var(--font-mono), monospace";

function tabStyle(active: boolean): CSSProperties {
  return {
    fontFamily: "var(--font-archivo), sans-serif",
    fontWeight: 600,
    fontSize: 14.5,
    cursor: "pointer",
    padding: "10px 18px",
    borderRadius: 999,
    whiteSpace: "nowrap",
    transition: "all .25s",
    ...(active
      ? {
          background: "var(--solar)",
          color: "#0A0D12",
          border: "1px solid transparent",
        }
      : {
          background: "transparent",
          color: "var(--text-muted)",
          border: "1px solid var(--border-2)",
        }),
  };
}

function quoteBtnStyle(inQuote: boolean): CSSProperties {
  return {
    fontFamily: "var(--font-archivo), sans-serif",
    fontWeight: 700,
    fontSize: 15,
    cursor: "pointer",
    padding: "14px 18px",
    borderRadius: 6,
    width: "100%",
    transition: "all .25s",
    ...(inQuote
      ? {
          background: "rgba(255,154,14,.12)",
          color: "#FFB347",
          border: "1px solid var(--accent)",
        }
      : {
          background: "#1B232E",
          color: "var(--text)",
          border: "1px solid var(--border-2)",
        }),
  };
}

export default function ShopCatalog() {
  const [filter, setFilter] = useState<Category>("All");
  const [quote, setQuote] = useState<string[]>([]);

  const toggleQuote = (id: string) =>
    setQuote((q) => (q.includes(id) ? q.filter((x) => x !== id) : q.concat(id)));
  const clearQuote = () => setQuote([]);

  const list = useMemo(
    () => CATALOG.filter((p) => filter === "All" || p.category === filter),
    [filter]
  );

  const total = CATALOG.length;
  const countLabel =
    filter === "All"
      ? `${total} products & packages`
      : `${list.length} in ${filter}`;

  const qc = quote.length;
  const hasQuote = qc > 0;
  const quoteItemsLabel = qc === 1 ? "1 item" : `${qc} items`;

  return (
    <section
      style={{
        position: "relative",
        background: "var(--slate-900)",
        padding: "0 0 clamp(80px,11vw,140px)",
      }}
    >
      <div className="container">
        {/* filter tabs */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: "clamp(28px,3.5vw,44px)",
            paddingBottom: 24,
            borderBottom: "1px solid var(--hairline-2)",
          }}
        >
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              style={tabStyle(c === filter)}
              aria-pressed={c === filter}
            >
              {c}
            </button>
          ))}
          <span
            style={{
              marginLeft: "auto",
              fontFamily: mono,
              fontSize: 12.5,
              color: "var(--text-mono)",
              letterSpacing: ".04em",
            }}
          >
            {countLabel}
          </span>
        </div>

        {/* product grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))",
            gap: 20,
          }}
        >
          {list.map((item) => {
            const inQuote = quote.includes(item.id);
            return (
              <div key={item.id} className="product-card">
                <div
                  style={{
                    position: "relative",
                    height: 188,
                    background:
                      "repeating-linear-gradient(135deg,#141A23 0 12px,#10151D 12px 24px)",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "flex-end",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(70% 80% at 75% 20%,rgba(255,154,14,.12),transparent 60%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      display: "flex",
                      gap: 7,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: mono,
                        fontSize: 10.5,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        background: "rgba(6,8,12,.7)",
                        border: "1px solid var(--border-3)",
                        padding: "5px 9px",
                        borderRadius: 999,
                      }}
                    >
                      {item.category}
                    </span>
                    {item.featured && (
                      <span
                        style={{
                          fontFamily: mono,
                          fontSize: 10.5,
                          letterSpacing: ".08em",
                          textTransform: "uppercase",
                          color: "#0A0D12",
                          background: "linear-gradient(100deg,#FF9A0E,#FFD20A)",
                          padding: "5px 9px",
                          borderRadius: 999,
                          fontWeight: 700,
                        }}
                      >
                        ★ Featured
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      margin: 12,
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
                    {item.photo}
                  </div>
                </div>
                <div
                  style={{
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 800,
                      fontSize: 20,
                      letterSpacing: "-.02em",
                      margin: "0 0 9px",
                      lineHeight: 1.15,
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-dim)",
                      fontSize: 14.5,
                      lineHeight: 1.55,
                      margin: "0 0 20px",
                      flex: 1,
                    }}
                  >
                    {item.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 8,
                      marginBottom: 18,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: mono,
                        fontSize: 11,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--text-mono)",
                      }}
                    >
                      {item.pricenote}
                    </span>
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: 23,
                        letterSpacing: "-.02em",
                        color: "var(--text)",
                        marginLeft: "auto",
                      }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleQuote(item.id)}
                    style={quoteBtnStyle(inQuote)}
                  >
                    {inQuote ? "Added to quote ✓" : "Request a quote"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p
          style={{
            margin: "clamp(36px,5vw,56px) 0 0",
            fontFamily: mono,
            fontSize: 12.5,
            color: "var(--text-mono)",
            lineHeight: 1.7,
            maxWidth: "70ch",
          }}
        >
          Prices are estimates including standard installation by our licensed
          crew. Final pricing is confirmed after a site assessment — panel
          capacity, run length, and permits can affect the total. V2H
          availability depends on your vehicle.
        </p>
      </div>

      {/* QUOTE PILL */}
      {hasQuote && (
        <div
          style={{
            position: "fixed",
            right: "clamp(16px,3vw,32px)",
            bottom: "clamp(16px,3vw,32px)",
            zIndex: 300,
            animation: "msPop .35s var(--ease) both",
            display: "flex",
            alignItems: "center",
            gap: 16,
            background: "rgba(16,21,29,.92)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid var(--border-2)",
            borderRadius: 12,
            padding: "14px 16px 14px 20px",
            boxShadow: "0 18px 50px rgba(0,0,0,.5)",
            maxWidth: "calc(100vw - 32px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                background: "var(--solar-dot)",
                color: "#0A0D12",
                fontWeight: 800,
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {qc}
            </span>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontWeight: 700, fontSize: 14.5 }}>
                {quoteItemsLabel} in your quote
              </div>
              <button
                type="button"
                onClick={clearQuote}
                className="quote-clear"
              >
                Clear
              </button>
            </div>
          </div>
          <Link
            href="/contact"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--solar)",
              color: "#0A0D12",
              fontWeight: 700,
              fontSize: 14.5,
              padding: "13px 20px",
              borderRadius: 7,
              whiteSpace: "nowrap",
              boxShadow: "0 8px 22px rgba(255,120,30,.32)",
            }}
          >
            Request quote →
          </Link>
        </div>
      )}
    </section>
  );
}
