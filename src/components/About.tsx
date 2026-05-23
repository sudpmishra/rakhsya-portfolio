"use client";
import { Scale, Award, Globe } from "lucide-react";

interface AboutProps {
  about: { heading: string; body: string; memberships: string[] };
  personalTraits: string[];
  languages: string[];
}

export default function About({ about, personalTraits, languages }: AboutProps) {
  return (
    <section id="about" className="bg-[#fdf5ff] py-25">
      <div className="max-w-300 mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 items-start">

          {/* Left */}
          <div>
            <p className="eyebrow mb-3">Who I Am</p>
            <h2 className="section-heading mb-4">{about.heading}</h2>
            <div className="accent-bar mb-8" />
            <p className="text-[#414535]/80 leading-[1.85] text-[1.05rem] mb-9">
              {about.body}
            </p>
            <div className="flex flex-col gap-4">
              {about.memberships.map((m, i) => (
                <div key={i} className="flex items-start gap-3.5 p-4 px-5 rounded-xl bg-white border border-[#EFCEFA]">
                  <div className="w-9 h-9 rounded-full bg-[#3EB489] flex items-center justify-center shrink-0">
                    <Scale size={15} color="#fff" />
                  </div>
                  <p className="text-[#414535] text-[0.9rem] leading-relaxed pt-1.5 font-medium">{m}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "5+", label: "Years of Practice" },
                { value: "LL.M", label: "Human Rights & Gender Justice" },
                { value: "32nd", label: "Bar Exam Rank" },
              ].map(stat => (
                <div key={stat.label} className="bg-white border-2 border-[#EFCEFA] rounded-2xl p-6 text-center">
                  <div className="font-playfair text-[1.8rem] font-extrabold bg-linear-to-br from-[#3EB489] to-[#CC5A71] bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#414535]/60 text-[0.72rem] leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Traits */}
            <div className="bg-white border border-[#EFCEFA] rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-5">
                <Award size={16} color="#CC5A71" />
                <span className="font-bold text-[0.9rem] text-[#414535]">Personal Traits</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalTraits.map(t => (
                  <span key={t} className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#EFCEFA]/30 border border-[#EFCEFA] text-[#414535] text-[0.8rem] font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white border border-[#EFCEFA] rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-5">
                <Globe size={16} color="#3EB489" />
                <span className="font-bold text-[0.9rem] text-[#414535]">Languages</span>
              </div>
              <div className="flex gap-4">
                {languages.map(lang => (
                  <div key={lang} className="flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-[#3EB489]/20 to-[#EFCEFA]/40 border border-[#3EB489]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3EB489] block" />
                    <span className="text-[#414535] font-bold text-[0.9rem]">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
