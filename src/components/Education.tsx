"use client";
import { GraduationCap, BookOpen } from "lucide-react";

interface EduItem {
  institution: string;
  location: string;
  degree: string;
  from: string;
  to: string;
  dissertation: string;
}

export default function Education({ education }: { education: EduItem[] }) {
  return (
    <section
      id="education"
      style={{
        background: "#f5f3ff",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <p className="eyebrow" style={{ marginBottom: 12 }}>Academic Background</p>
        <h2 className="section-heading" style={{ marginBottom: 16 }}>Education</h2>
        <div className="accent-bar" style={{ marginBottom: 56 }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
          gap: 24,
        }}>
          {education.map((edu, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 16,
                padding: "32px",
                transition: "box-shadow 0.25s, transform 0.25s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(30,58,138,0.1)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "";
                (e.currentTarget as HTMLElement).style.transform = "";
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                  background: "linear-gradient(135deg, #1e3a8a, #6d28d9)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <GraduationCap size={20} color="#fff" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{
                    display: "inline-flex",
                    padding: "4px 12px", borderRadius: 100,
                    background: "linear-gradient(135deg, #ede9fe, #dbeafe)",
                    color: "#4c1d95", fontSize: "0.72rem", fontWeight: 700,
                    marginBottom: 10,
                  }}>
                    {edu.from}{edu.to !== edu.from ? ` — ${edu.to}` : ""}
                  </span>
                  <h3 style={{
                    fontFamily: "var(--font-playfair, serif)",
                    fontSize: "1.1rem", fontWeight: 700,
                    color: "#0f172a", lineHeight: 1.3, marginBottom: 4,
                  }}>
                    {edu.degree}
                  </h3>
                  <p style={{ fontWeight: 700, fontSize: "0.85rem", color: "#1e3a8a", marginBottom: 2 }}>
                    {edu.institution}
                  </p>
                  <p style={{ color: "#94a3b8", fontSize: "0.78rem" }}>{edu.location}</p>

                  {edu.dissertation && (
                    <div style={{
                      marginTop: 18, paddingTop: 18,
                      borderTop: "1px dashed #e2e8f0",
                      display: "flex", alignItems: "flex-start", gap: 8,
                    }}>
                      <BookOpen size={13} color="#8b5cf6" style={{ flexShrink: 0, marginTop: 2 }} />
                      <p style={{ color: "#64748b", fontSize: "0.82rem", fontStyle: "italic", lineHeight: 1.6 }}>
                        "{edu.dissertation}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
