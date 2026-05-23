"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactProps {
  contact: {
    description: string;
    phone: string;
    email: string;
    location: string;
    showContactForm: boolean;
  };
  name: string;
}

export default function Contact({ contact }: ContactProps) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.open(
      `mailto:${contact.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white py-25">
      <div className="max-w-300 mx-auto px-8">
        <p className="eyebrow mb-3">Get In Touch</p>
        <h2 className="section-heading mb-4">Contact</h2>
        <div className="accent-bar mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* Info side */}
          <div>
            <p className="text-[#414535]/60 leading-relaxed mb-10 text-[1rem]">{contact.description}</p>
            <div className="flex flex-col gap-4">
              {[
                { icon: <Phone size={18} />, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
                { icon: <Mail size={18} />, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
                { icon: <MapPin size={18} />, label: "Location", value: contact.location, href: "#" },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4.5 p-5 px-6 rounded-[14px] bg-white border-[1.5px] border-[#e8ede8] hover:border-[#3EB489] hover:shadow-[0_8px_24px_rgba(62,180,137,0.1)] no-underline transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-full bg-linear-to-br from-[#3EB489]/20 to-[#EFCEFA]/40 flex items-center justify-center shrink-0 text-[#3EB489]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#414535]/40 text-[0.7rem] font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-[#414535] font-semibold text-[0.9rem]">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          {contact.showContactForm && (
            <div className="bg-white border-[1.5px] border-[#e8ede8] rounded-[20px] p-10 shadow-[0_4px_24px_rgba(65,69,53,0.06)]">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full mx-auto mb-5 bg-linear-to-br from-[#3EB489] to-[#2d9a72] flex items-center justify-center">
                    <Send size={26} color="#fff" />
                  </div>
                  <h3 className="font-playfair text-[1.3rem] font-bold text-[#414535] mb-2">Message Sent!</h3>
                  <p className="text-[#414535]/60 text-[0.9rem] mb-6">
                    Your email client should have opened. <br /> Thank you for reaching out.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-[#3EB489] text-[0.85rem] font-bold bg-transparent border-none cursor-pointer"
                  >
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="font-playfair text-[1.3rem] font-bold text-[#414535] mb-7">Send a Message</h3>
                  <div className="flex flex-col gap-4.5">
                    {[
                      { id: "name", label: "Your Name", type: "text", placeholder: "Jane Doe" },
                      { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
                      { id: "subject", label: "Subject", type: "text", placeholder: "Legal Consultation" },
                    ].map(f => (
                      <div key={f.id}>
                        <label className="block text-[0.72rem] font-bold text-[#414535]/50 uppercase tracking-wide mb-1.5">
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          required
                          placeholder={f.placeholder}
                          value={form[f.id as keyof typeof form]}
                          onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                          className="form-input"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-[0.72rem] font-bold text-[#414535]/50 uppercase tracking-wide mb-1.5">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe your legal matter..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="form-input resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.75 rounded-xl border-none cursor-pointer bg-linear-to-r from-[#414535] to-[#3EB489] text-white font-bold text-[0.9rem] flex items-center justify-center gap-2 font-[inherit] shadow-[0_6px_20px_rgba(62,180,137,0.3)] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
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
