"use client";
import { ExternalLink, FileText } from "lucide-react";

interface Publication {
  title: string;
  url: string;
}

export default function Publications({ publications }: { publications: Publication[] }) {
  return (
    <section
      id="publications"
      style={{
        background: "linear-gradient(135deg, #0f1e3d 0%, #1e3a8a 50%, #2d1b69 100%)",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#c4b5fd", marginBottom: 12 }}>
          Thought Leadership
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair, serif)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800, color: "#ffffff",
          lineHeight: 1.15, letterSpacing: "-0.02em",
          marginBottom: 16,
        }}>
          Published Editorials
        </h2>
        <div style={{
          width: 48, height: 4,
          background: "linear-gradient(90deg, #c4b5fd, #a5b4fc)",
          borderRadius: 4, marginBottom: 56,
        }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="md:grid-cols-2 grid-cols-1">
          {publications.map((pub, i) => (
            <a
              key={i}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "flex-start", gap: 20,
                padding: "32px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 16, textDecoration: "none",
                transition: "background 0.2s, border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.13)";
                el.style.borderColor = "rgba(196,181,253,0.5)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.07)";
                el.style.borderColor = "rgba(255,255,255,0.15)";
                el.style.transform = "";
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                background: "rgba(139,92,246,0.25)",
                border: "1px solid rgba(196,181,253,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <FileText size={22} color="#c4b5fd" />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "var(--font-playfair, serif)",
                  fontSize: "1.1rem", fontWeight: 700,
                  color: "#ffffff", lineHeight: 1.4, marginBottom: 16,
                }}>
                  {pub.title}
                </h3>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  color: "#c4b5fd", fontSize: "0.78rem", fontWeight: 700,
                  letterSpacing: "0.05em",
                }}>
                  Read Article <ExternalLink size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
