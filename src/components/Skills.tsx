"use client";

interface Skill {
  name: string;
  category: string;
}

const PALETTE: Record<string, { bg: string; text: string; border: string }> = {
  Corporate:   { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe" },
  Regulatory:  { bg: "#f0fdf4", text: "#15803d", border: "#bbf7d0" },
  Advisory:    { bg: "#f5f3ff", text: "#6d28d9", border: "#ddd6fe" },
  Litigation:  { bg: "#fff7ed", text: "#c2410c", border: "#fed7aa" },
  Drafting:    { bg: "#fefce8", text: "#a16207", border: "#fef08a" },
  Research:    { bg: "#f0f9ff", text: "#0369a1", border: "#bae6fd" },
  Language:    { bg: "#fdf4ff", text: "#a21caf", border: "#f0abfc" },
  "Soft Skills": { bg: "#f8fafc", text: "#475569", border: "#cbd5e1" },
};

export default function Skills({ skills }: { skills: Skill[] }) {
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, s) => {
    (acc[s.category] ??= []).push(s);
    return acc;
  }, {});

  return (
    <section
      id="skills"
      style={{
        background: "#f5f3ff",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Expertise</p>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>Areas of Practice</h2>
          <div className="accent-bar" style={{ margin: "0 auto" }} />
        </div>

        {/* Big pill cloud */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center",
          gap: 12, marginBottom: 64,
        }}>
          {skills.map(skill => {
            const c = PALETTE[skill.category] ?? PALETTE["Soft Skills"];
            return (
              <span
                key={skill.name}
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "10px 22px", borderRadius: 100,
                  background: c.bg, color: c.text,
                  border: `1.5px solid ${c.border}`,
                  fontSize: "0.875rem", fontWeight: 600,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(139,92,246,0.18)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {skill.name}
              </span>
            );
          })}
        </div>

        {/* Category cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 20,
        }}>
          {Object.entries(grouped).map(([category, items]) => {
            const c = PALETTE[category] ?? PALETTE["Soft Skills"];
            return (
              <div
                key={category}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 16,
                  padding: "24px",
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
                <span style={{
                  display: "inline-flex",
                  padding: "4px 12px", borderRadius: 100,
                  background: c.bg, color: c.text,
                  border: `1px solid ${c.border}`,
                  fontSize: "0.7rem", fontWeight: 700,
                  letterSpacing: "0.06em", marginBottom: 16,
                }}>
                  {category.toUpperCase()}
                </span>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {items.map(s => (
                    <li key={s.name} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.85rem", color: "#334155" }}>
                      <span style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: c.text, flexShrink: 0, marginTop: 6,
                      }} />
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
