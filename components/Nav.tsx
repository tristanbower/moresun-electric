"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y =
        (document.scrollingElement && document.scrollingElement.scrollTop) ||
        window.pageYOffset ||
        0;
      setScrolled(y > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <Link href="/" className="nav-brand">
        <span
          className="sun-dot"
          style={{ width: 26, height: 26 }}
          aria-hidden="true"
        />
        <span
          style={{
            fontWeight: 800,
            fontSize: 19,
            letterSpacing: "-.02em",
            whiteSpace: "nowrap",
          }}
        >
          MoreSun{" "}
          <span style={{ fontWeight: 500, color: "var(--text-dim)" }}>
            Electric
          </span>
        </span>
      </Link>
      <div className="nav-links">
        {LINKS.map((l) => {
          const active =
            l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${active ? " active" : ""}`}
            >
              {l.label}
            </Link>
          );
        })}
        <Link href="/contact" className="nav-cta">
          Get a quote
        </Link>
      </div>
    </nav>
  );
}
