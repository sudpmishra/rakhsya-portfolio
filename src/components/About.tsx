"use client";
import { Scale, Award, Globe } from "lucide-react";

interface AboutProps {
  about: {
    heading: string;
    body: string;
    memberships: string[];
  };
  personalTraits: string[];
  languages: string[];
}

export default function About({ about, personalTraits, languages }: AboutProps) {
  return (
    <section
      id="about"
      style={{ background: "#f5f3ff", padding: "100px 0" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }} className="md:grid-cols-2 grid-cols-1">
          {/* Left */}
          <div>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Who I Am</p>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>{about.heading}</h2>
            <div className="accent-bar" style={{ marginBottom: 32 }} />
            <p style={{
              color: "#334155", lineHeight: 1.85, fontSize: "1.05rem",
              marginBottom: 36,
            }}>
              {about.body}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {about.memberships.map((m, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 14,
                  padding: "16px 20px", borderRadius: 12,
                  background: "#f5f3ff",
                  border: "1px solid #ede9fe",
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Scale size={15} color="#fff" />
                  </div>
                  <p style={{ color: "#4c1d95", fontSize: "0.9rem", lineHeight: 1.6, paddingTop: 6, fontWeight: 500 }}>{m}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              {[
                { value: "5+", label: "Years of Practice" },
                { value: "LL.M", label: "Human Rights & Gender Justice" },
                { value: "32nd", label: "Bar Exam Rank" },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: "white",
                  border: "1.5px solid #ddd6fe",
                  borderRadius: 16, padding: "24px 16px", textAlign: "center",
                }}>
                  <div style={{
                    fontFamily: "var(--font-playfair, serif)",
                    fontSize: "1.8rem", fontWeight: 800,
                    background: "linear-gradient(135deg, #1e3a8a, #7c3aed)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    marginBottom: 4,
                  }}>{stat.value}</div>
                  <div style={{ color: "#64748b", fontSize: "0.72rem", lineHeight: 1.4 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Traits */}
            <div style={{
              background: "#f8f9ff", border: "1px solid #e2e8f0",
              borderRadius: 16, padding: "28px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <Award size={16} color="#8b5cf6" />
                <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0f172a" }}>Personal Traits</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {personalTraits.map(t => (
                  <span key={t} style={{
                    display: "inline-flex", alignItems: "center",
                    padding: "6px 14px", borderRadius: 100,
                    background: "white", border: "1px solid #c4b5fd",
                    color: "#6d28d9", fontSize: "0.8rem", fontWeight: 600,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div style={{
              background: "#f8f9ff", border: "1px solid #e2e8f0",
              borderRadius: 16, padding: "28px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <Globe size={16} color="#8b5cf6" />
                <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0f172a" }}>Languages</span>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                {languages.map(lang => (
                  <div key={lang} style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "8px 20px", borderRadius: 100,
                    background: "linear-gradient(135deg, #ede9fe, #dbeafe)",
                    border: "1px solid #c4b5fd",
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#8b5cf6", display: "block" }} />
                    <span style={{ color: "#4c1d95", fontWeight: 700, fontSize: "0.9rem" }}>{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
