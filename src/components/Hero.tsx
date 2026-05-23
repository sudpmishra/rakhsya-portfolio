"use client";
import { Mail, Phone, MapPin, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";

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
  contact: { phone: string; email: string; location: string };
}

export default function Hero({ hero, contact }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen bg-[#414535] flex flex-col justify-center overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(62,180,137,0.18)_0%,transparent_70%)]" />
      <div className="absolute bottom-[15%] left-[3%] w-[350px] h-[350px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(204,90,113,0.15)_0%,transparent_70%)]" />
      <div className="hero-grid" />

      <div className="max-w-[1200px] mx-auto px-8 pt-[120px] pb-20 w-full relative z-[1]">
        <div className="max-w-[720px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#3EB489]/[0.12] border border-[#3EB489]/30 rounded-full py-[7px] px-[18px] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3EB489] block" />
            <span className="text-[#3EB489] text-[0.7rem] font-bold tracking-[0.12em] uppercase">
              Nepal Bar Council · Licensed Advocate
            </span>
          </div>

          <h1 className="hero-name mb-4">{hero.name}</h1>

          <p className="hero-title mb-2">{hero.title}</p>

          <p className="text-white/35 text-[0.82rem] mb-8 tracking-[0.03em]">{hero.licenseNo}</p>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-gradient-to-r from-[#3EB489] to-transparent" />
            <span className="text-white/45 text-[0.75rem] tracking-[0.2em] uppercase">{hero.tagline}</span>
          </div>

          <p className="text-white/70 leading-[1.8] text-[1.05rem] max-w-[620px] mb-11">{hero.summary}</p>

          <div className="flex flex-wrap gap-4 mb-[52px]">
            <a
              href={hero.ctaLink}
              className="inline-flex items-center gap-2 bg-[#3EB489] hover:bg-[#2d9a72] text-white px-7 py-[14px] rounded-full font-bold text-[0.9rem] no-underline shadow-[0_8px_24px_rgba(62,180,137,0.45)] hover:shadow-[0_12px_32px_rgba(62,180,137,0.55)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail size={15} />
              {hero.ctaText}
            </a>
            <a
              href={hero.secondaryCtaLink}
              className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-white px-7 py-[14px] rounded-full font-semibold text-[0.9rem] no-underline transition-all duration-200"
            >
              {hero.secondaryCtaText}
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: <Phone size={12} />, text: contact.phone, href: `tel:${contact.phone}` },
              { icon: <Mail size={12} />, text: contact.email, href: `mailto:${contact.email}` },
              { icon: <MapPin size={12} />, text: contact.location, href: "#" },
            ].map(item => (
              <a
                key={item.text}
                href={item.href}
                className="inline-flex items-center gap-1.5 text-white/45 hover:text-[#3EB489] no-underline text-[0.82rem] transition-colors duration-200"
              >
                <span className="text-[#3EB489]">{item.icon}</span>
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Portrait image — hidden below lg breakpoint */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:block">
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute -inset-12 bg-[radial-gradient(circle,rgba(62,180,137,0.11)_0%,transparent_65%)] pointer-events-none" />

            {/* Layered rotated frames */}
            <div className="absolute inset-0 rounded-[26px] border border-[#3EB489]/30 rotate-3 scale-105" />
            <div className="absolute inset-0 rounded-[26px] border border-[#EFCEFA]/25 -rotate-2 scale-[1.09]" />

            {/* Main portrait card */}
            <div className="relative w-100 h-130 rounded-[22px] overflow-hidden shadow-[0_28px_80px_rgba(0,0,0,0.55)] border border-white/15">
              <Image
                src="/headshot.jpg"
                alt="Rakshya Singh"
                fill
                sizes="270px"
                className="object-cover object-top"
              />
              {/* Bottom fade so image blends into the dark section */}
              <div className="absolute inset-0 bg-linear-to-t from-[#414535]/65 via-[#414535]/10 to-transparent" />
            </div>

            {/* Floating years badge */}
            <div className="absolute -bottom-4 -left-5 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_28px_rgba(65,69,53,0.22)] border border-[#EFCEFA]">
              <div className="font-playfair text-[1.55rem] font-extrabold bg-linear-to-br from-[#3EB489] to-[#CC5A71] bg-clip-text text-transparent leading-none">5+</div>
              <div className="text-[#414535]/55 text-[0.62rem] font-bold uppercase tracking-widest mt-0.5">Years</div>
            </div>

            {/* Decorative dot cluster */}
            <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-[#CC5A71]" />
            <div className="absolute -top-5 right-4 w-2 h-2 rounded-full bg-[#3EB489]/55" />
            <div className="absolute top-2 -right-5 w-1.5 h-1.5 rounded-full bg-[#EFCEFA]/65" />
          </div>
        </div>
      </div>

      <div className="animate-float absolute bottom-9 left-1/2 flex flex-col items-center gap-1 text-white/25">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
