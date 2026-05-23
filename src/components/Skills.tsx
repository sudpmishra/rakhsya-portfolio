"use client";
import { Briefcase, MessageSquare, Scale, FileText, Globe, Star, Megaphone, BookOpen, Shield, Search } from "lucide-react";
import type { ReactNode } from "react";

interface Skill {
  name: string;
  category: string;
}

const PALETTE: Record<string, { bg: string; text: string; border: string; stripe: string }> = {
  Corporate: { bg: "#f0faf6", text: "#2d9a72", border: "#b5e8d4", stripe: "#3EB489" },
  Regulatory: { bg: "#fdf5ff", text: "#9333ea", border: "#EFCEFA", stripe: "#EFCEFA" },
  Advisory: { bg: "#fff2f5", text: "#CC5A71", border: "#f5c0cb", stripe: "#CC5A71" },
  Litigation: { bg: "#f0faf6", text: "#3EB489", border: "#b5e8d4", stripe: "#3EB489" },
  Drafting: { bg: "#fdf5ff", text: "#414535", border: "#EFCEFA", stripe: "#CC5A71" },
  Research: { bg: "#f0faf6", text: "#2d9a72", border: "#b5e8d4", stripe: "#3EB489" },
  Language: { bg: "#fff2f5", text: "#CC5A71", border: "#f5c0cb", stripe: "#CC5A71" },
  "Soft Skills": { bg: "#f8f8f6", text: "#414535", border: "#d8d9d1", stripe: "#414535" },
  Advocacy: { bg: "#f0faf6", text: "#3EB489", border: "#b5e8d4", stripe: "#3EB489" },
  Policy: { bg: "#fdf5ff", text: "#414535", border: "#EFCEFA", stripe: "#EFCEFA" },
};

const ICONS: Record<string, ReactNode> = {
  Corporate: <Briefcase size={17} />,
  Regulatory: <Shield size={17} />,
  Advisory: <MessageSquare size={17} />,
  Litigation: <Scale size={17} />,
  Drafting: <FileText size={17} />,
  Research: <Search size={17} />,
  Language: <Globe size={17} />,
  "Soft Skills": <Star size={17} />,
  Advocacy: <Megaphone size={17} />,
  Policy: <BookOpen size={17} />,
};

export default function Skills({ skills }: { skills: Skill[] }) {
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, s) => {
    (acc[s.category] ??= []).push(s);
    return acc;
  }, {});

  return (
    <section id="skills" className="bg-white py-25">
      <div className="max-w-300 mx-auto px-8">

        {/* Split header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-3">Expertise</p>
            <h2 className="section-heading mb-4">Areas of Practice</h2>
            <div className="accent-bar" />
          </div>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
          {Object.entries(grouped).map(([category, items]) => {
            const c = PALETTE[category] ?? PALETTE["Soft Skills"];
            const icon = ICONS[category] ?? ICONS["Soft Skills"];
            return (
              <div
                key={category}
                className="bg-white rounded-[20px] overflow-hidden border border-[#e8ede8] hover:border-transparent hover:shadow-[0_16px_48px_rgba(65,69,53,0.13)] hover:-translate-y-1 transition-all duration-200"
              >
                {/* Colored accent stripe */}
                <div style={{ background: `linear-gradient(90deg, ${c.stripe}, ${c.border})` }} className="h-0.75" />

                <div className="p-6">
                  {/* Icon row */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      style={{ background: c.bg, borderColor: c.border, color: c.text }}
                      className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0"
                    >
                      {icon}
                    </div>
                    <span
                      style={{ background: c.bg, color: c.text }}
                      className="text-[0.65rem] font-extrabold tabular-nums w-6 h-6 rounded-full flex items-center justify-center"
                    >
                      {items.length}
                    </span>
                  </div>

                  {/* Category heading */}
                  <h3 className="font-playfair text-[1.05rem] font-bold text-[#414535] mb-4">{category}</h3>

                  {/* Skill pill tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {items.map(s => (
                      <span
                        key={s.name}
                        style={{ background: c.bg, color: c.text, borderColor: c.border }}
                        className="inline-flex text-[0.74rem] font-semibold px-2.5 py-1 rounded-full border leading-snug"
                      >
                        {s.name}
                      </span>
                    ))}
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
