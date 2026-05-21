"use client";
import { useState } from "react";
import { ChevronDown, Briefcase, MapPin, Calendar } from "lucide-react";

interface Role {
  title: string;
  type: string;
  from: string;
  to: string;
  responsibilities: string[];
}

interface ExperienceItem {
  company: string;
  location: string;
  roles: Role[];
}

export default function Experience({ experience }: { experience: ExperienceItem[] }) {
  const [expanded, setExpanded] = useState<string | null>(experience[0]?.company ?? null);

  return (
    <section id="experience" style={{ background: "#f5f3ff", padding: "100px 0" }}>
      {/* Grid-row animation keyframe injected once */}
      <style>{`
        .exp-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .exp-body.open {
          grid-template-rows: 1fr;
        }
        .exp-body-inner {
          overflow: hidden;
        }
        .exp-content {
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s;
        }
        .exp-body.open .exp-content {
          opacity: 1;
          transform: translateY(0);
        }
        .exp-chevron {
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .exp-chevron.open {
          transform: rotate(180deg);
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <p className="eyebrow" style={{ marginBottom: 12 }}>Career</p>
        <h2 className="section-heading" style={{ marginBottom: 16 }}>Work Experience</h2>
        <div className="accent-bar" style={{ marginBottom: 56 }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {experience.map((item, idx) => {
            const isOpen = expanded === item.company;
            return (
              <div
                key={idx}
                style={{
                  border: isOpen ? "1.5px solid #c4b5fd" : "1.5px solid #e2e8f0",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#ffffff",
                  boxShadow: isOpen ? "0 8px 32px rgba(109,40,217,0.08)" : "none",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Header button */}
                <button
                  onClick={() => setExpanded(isOpen ? null : item.company)}
                  style={{
                    width: "100%", textAlign: "left",
                    padding: "24px 28px",
                    background: isOpen ? "linear-gradient(135deg, #faf5ff, #eff6ff)" : "transparent",
                    border: "none", cursor: "pointer",
                    display: "flex", alignItems: "flex-start",
                    justifyContent: "space-between", gap: 16,
                    transition: "background 0.3s",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
                      <div style={{
                        width: 42, height: 42, borderRadius: 12,
                        background: isOpen
                          ? "linear-gradient(135deg, #8b5cf6, #6d28d9)"
                          : "linear-gradient(135deg, #1e3a8a, #1d4ed8)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                        transition: "background 0.3s",
                      }}>
                        <Briefcase size={16} color="#fff" />
                      </div>
                      <div>
                        <h3 style={{
                          fontFamily: "var(--font-playfair, serif)",
                          fontSize: "1.15rem", fontWeight: 700,
                          color: "#0f172a", margin: 0,
                        }}>
                          {item.company}
                        </h3>
                        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 3 }}>
                          <MapPin size={11} color="#94a3b8" />
                          <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginLeft: 56 }}>
                      {item.roles.map((r, ri) => (
                        <span key={ri} style={{
                          display: "inline-flex", alignItems: "center",
                          padding: "4px 12px", borderRadius: 100,
                          background: isOpen ? "#ede9fe" : "#f1f5f9",
                          color: isOpen ? "#6d28d9" : "#475569",
                          border: `1px solid ${isOpen ? "#ddd6fe" : "#e2e8f0"}`,
                          fontSize: "0.75rem", fontWeight: 600,
                          transition: "background 0.3s, color 0.3s, border-color 0.3s",
                        }}>
                          {r.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Animated chevron */}
                  <ChevronDown
                    size={20}
                    className={`exp-chevron${isOpen ? " open" : ""}`}
                    style={{ color: isOpen ? "#8b5cf6" : "#94a3b8", flexShrink: 0, marginTop: 4, transition: "color 0.3s" }}
                  />
                </button>

                {/* Animated body — always mounted, height driven by CSS grid */}
                <div className={`exp-body${isOpen ? " open" : ""}`}>
                  <div className="exp-body-inner">
                    <div
                      className="exp-content"
                      style={{ borderTop: "1px solid #f1f5f9" }}
                    >
                      {item.roles.map((role, ri) => (
                        <div
                          key={ri}
                          style={{
                            padding: "28px 28px",
                            borderBottom: ri < item.roles.length - 1 ? "1px dashed #e2e8f0" : "none",
                          }}
                        >
                          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 20 }}>
                            <h4 style={{ fontWeight: 700, color: "#1e3a8a", fontSize: "0.95rem", margin: 0 }}>
                              {role.title}
                            </h4>
                            <span style={{
                              padding: "3px 10px", borderRadius: 100,
                              background: role.type === "Full-Time" ? "#dcfce7" : "#fef9c3",
                              color: role.type === "Full-Time" ? "#15803d" : "#854d0e",
                              fontSize: "0.72rem", fontWeight: 700,
                            }}>
                              {role.type}
                            </span>
                            <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#94a3b8", fontSize: "0.78rem" }}>
                              <Calendar size={12} />
                              {role.from} — {role.to}
                            </div>
                          </div>
                          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                            {role.responsibilities.map((r, i) => (
                              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                                <span style={{
                                  width: 6, height: 6, borderRadius: "50%",
                                  background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                                  flexShrink: 0, marginTop: 7,
                                }} />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
