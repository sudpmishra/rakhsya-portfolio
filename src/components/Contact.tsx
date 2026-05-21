"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactProps {
  contact: {
    phone: string;
    email: string;
    location: string;
    showContactForm: boolean;
  };
  name: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "13px 16px", borderRadius: 10,
  border: "1.5px solid #e2e8f0", background: "#f8f9ff",
  fontSize: "0.9rem", color: "#0f172a", outline: "none",
  fontFamily: "inherit", transition: "border-color 0.2s",
};

export default function Contact({ contact }: ContactProps) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: "#f5f3ff", padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <p className="eyebrow" style={{ marginBottom: 12 }}>Get In Touch</p>
        <h2 className="section-heading" style={{ marginBottom: 16 }}>Contact</h2>
        <div className="accent-bar" style={{ marginBottom: 56 }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }} className="md:grid-cols-2 grid-cols-1">
          {/* Info side */}
          <div>
            <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: 40, fontSize: "1rem" }}>
              For legal consultations, corporate matters, or any professional inquiries, feel free to reach out. I typically respond within 24 hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: <Phone size={18} />, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
                { icon: <Mail size={18} />, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
                { icon: <MapPin size={18} />, label: "Location", value: contact.location, href: "#" },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: "flex", alignItems: "center", gap: 18,
                    padding: "20px 24px", borderRadius: 14,
                    background: "#ffffff", border: "1.5px solid #e2e8f0",
                    textDecoration: "none",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#c4b5fd";
                    el.style.boxShadow = "0 8px 24px rgba(139,92,246,0.1)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#e2e8f0";
                    el.style.boxShadow = "";
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg, #ede9fe, #dbeafe)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    color: "#6d28d9",
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ color: "#94a3b8", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>
                      {item.label}
                    </p>
                    <p style={{ color: "#1e293b", fontWeight: 600, fontSize: "0.9rem" }}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          {contact.showContactForm && (
            <div style={{
              background: "#ffffff", border: "1.5px solid #e2e8f0",
              borderRadius: 20, padding: "40px",
              boxShadow: "0 4px 24px rgba(30,58,138,0.06)",
            }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%", margin: "0 auto 20px",
                    background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Send size={26} color="#fff" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair, serif)", fontSize: "1.3rem", fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: 24 }}>
                    Your email client should have opened. Thank you for reaching out.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    style={{ color: "#6d28d9", fontSize: "0.85rem", fontWeight: 700, background: "none", border: "none", cursor: "pointer" }}
                  >
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{
                    fontFamily: "var(--font-playfair, serif)",
                    fontSize: "1.3rem", fontWeight: 700,
                    color: "#0f172a", marginBottom: 28,
                  }}>
                    Send a Message
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    {[
                      { id: "name", label: "Your Name", type: "text", placeholder: "Jane Doe" },
                      { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
                      { id: "subject", label: "Subject", type: "text", placeholder: "Legal Consultation" },
                    ].map(f => (
                      <div key={f.id}>
                        <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          required
                          placeholder={f.placeholder}
                          value={form[f.id as keyof typeof form]}
                          onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                          style={inputStyle}
                          onFocus={e => (e.target.style.borderColor = "#8b5cf6")}
                          onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
                        />
                      </div>
                    ))}
                    <div>
                      <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe your legal matter..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        style={{ ...inputStyle, resize: "none" }}
                        onFocus={e => (e.target.style.borderColor = "#8b5cf6")}
                        onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
                      />
                    </div>
                    <button
                      type="submit"
                      style={{
                        width: "100%", padding: "15px",
                        borderRadius: 12, border: "none", cursor: "pointer",
                        background: "linear-gradient(135deg, #1e3a8a, #6d28d9)",
                        color: "#fff", fontWeight: 700, fontSize: "0.9rem",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        fontFamily: "inherit",
                        boxShadow: "0 6px 20px rgba(109,40,217,0.3)",
                        transition: "opacity 0.2s, transform 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    >
                      <Send size={15} />
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
