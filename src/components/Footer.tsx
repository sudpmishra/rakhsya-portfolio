import { Scale } from "lucide-react";

export default function Footer({ name, licenseNo }: { name: string; licenseNo: string }) {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0c1a3d, #1e3a8a)",
        padding: "48px 32px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 10, marginBottom: 12,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            background: "rgba(139,92,246,0.2)",
            border: "1px solid rgba(196,181,253,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Scale size={14} color="#c4b5fd" />
          </div>
          <span style={{
            fontFamily: "var(--font-playfair, serif)",
            fontSize: "1.05rem", fontWeight: 700,
            color: "#ffffff",
          }}>
            {name}
          </span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginBottom: 6 }}>
          {licenseNo}
        </p>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
