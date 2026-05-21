"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    fn(); // run immediately so state is correct if page loads mid-scroll
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBg = scrolled
    ? "rgba(15, 30, 61, 0.97)"
    : "rgba(15, 30, 61, 0.45)";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: navBg,
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-playfair, serif)",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#fff",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          {name}
        </a>

        {/* Desktop */}
        <ul style={{ display: "flex", alignItems: "center", gap: 36, listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c4b5fd")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 4 }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          style={{
            background: "rgba(15,30,61,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 32px 24px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "13px 0",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
