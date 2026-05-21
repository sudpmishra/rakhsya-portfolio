"use client";
import { Mail, Phone, MapPin, ChevronDown, ArrowRight } from "lucide-react";

interface HeroProps {
  hero: {
    name: string;
    title: string;
    licenseNo: string;
    tagline: string;
    summary: string;
    ctaText: string;
    ctaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
  };
  contact: {
    phone: string;
    email: string;
    location: string;
  };
}

export default function Hero({ hero, contact }: HeroProps) {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0c1a3d 0%, #1e3a8a 45%, #2d1b69 100%)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", left: "3%",
        width: 350, height: 350, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "120px 32px 80px",
        width: "100%", position: "relative", zIndex: 1,
      }}>
        <div style={{ maxWidth: 720 }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(196,181,253,0.12)",
            border: "1px solid rgba(196,181,253,0.3)",
            borderRadius: 100, padding: "7px 18px", marginBottom: 32,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#c4b5fd", display: "block",
              boxShadow: "0 0 8px #c4b5fd",
            }} />
            <span style={{ color: "#c4b5fd", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Nepal Bar Council · Licensed Advocate
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "var(--font-playfair, serif)",
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}>
            {hero.name}
          </h1>

          {/* Title */}
          <p style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 500,
            color: "#a5b4fc",
            marginBottom: 8,
          }}>
            {hero.title}
          </p>

          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", marginBottom: 32, letterSpacing: "0.03em" }}>
            {hero.licenseNo}
          </p>

          {/* Divider with tagline */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, #8b5cf6, transparent)" }} />
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              {hero.tagline}
            </span>
          </div>

          {/* Summary */}
          <p style={{
            color: "rgba(255,255,255,0.7)", lineHeight: 1.8,
            fontSize: "1.05rem", maxWidth: 620, marginBottom: 44,
          }}>
            {hero.summary}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 52 }}>
            <a
              href={hero.ctaLink}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                color: "#fff", padding: "14px 28px", borderRadius: 100,
                fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
                boxShadow: "0 8px 24px rgba(109,40,217,0.45)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(109,40,217,0.55)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(109,40,217,0.45)"; }}
            >
              <Mail size={15} />
              {hero.ctaText}
            </a>
            <a
              href={hero.secondaryCtaLink}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", padding: "14px 28px", borderRadius: 100,
                fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
            >
              {hero.secondaryCtaText}
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Contact chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            {[
              { icon: <Phone size={12} />, text: contact.phone, href: `tel:${contact.phone}` },
              { icon: <Mail size={12} />, text: contact.email, href: `mailto:${contact.email}` },
              { icon: <MapPin size={12} />, text: contact.location, href: "#" },
            ].map(item => (
              <a key={item.text} href={item.href} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                color: "rgba(255,255,255,0.45)", textDecoration: "none",
                fontSize: "0.82rem", transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c4b5fd")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                <span style={{ color: "#8b5cf6" }}>{item.icon}</span>
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
        color: "rgba(255,255,255,0.25)", animation: "float 3s ease-in-out infinite",
      }}>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
