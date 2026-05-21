"use client";
import { Trophy, Star } from "lucide-react";

interface AchievementsProps {
  achievements: string[];
  certifications: {
    title: string;
    organizer: string;
    date: string;
  }[];
}

export default function Achievements({ achievements, certifications }: AchievementsProps) {
  return (
    <section style={{ background: "#f5f3ff", padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="md:grid-cols-2 grid-cols-1">
          {/* Achievements */}
          <div>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Highlights</p>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>Achievements</h2>
            <div className="accent-bar" style={{ marginBottom: 40 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {achievements.map((a, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 16,
                  padding: "20px 24px", borderRadius: 14,
                  background: "linear-gradient(135deg, #faf5ff, #eff6ff)",
                  border: "1px solid #ddd6fe",
                }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                    background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Trophy size={15} color="#fff" />
                  </div>
                  <p style={{ color: "#1e293b", fontSize: "0.88rem", lineHeight: 1.7, paddingTop: 8 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Continued Learning</p>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>Certifications & Events</h2>
            <div className="accent-bar" style={{ marginBottom: 40 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxHeight: 480, overflowY: "auto", paddingRight: 8 }}>
              {certifications.map((c, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 14,
                  padding: "18px 20px", borderRadius: 12,
                  background: "#f8f9ff", border: "1px solid #e2e8f0",
                }}>
                  <Star size={14} color="#8b5cf6" style={{ flexShrink: 0, marginTop: 3 }} />
                  <div>
                    <p style={{ color: "#1e293b", fontSize: "0.85rem", fontWeight: 600, lineHeight: 1.5, marginBottom: 3 }}>
                      {c.title}
                    </p>
                    {c.organizer && (
                      <p style={{ color: "#94a3b8", fontSize: "0.75rem", marginBottom: 4 }}>{c.organizer}</p>
                    )}
                    <p style={{ color: "#6d28d9", fontSize: "0.75rem", fontWeight: 700 }}>{c.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
