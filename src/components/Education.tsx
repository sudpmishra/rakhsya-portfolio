"use client";
import { GraduationCap, BookOpen } from "lucide-react";

interface EduItem {
  institution: string;
  location: string;
  degree: string;
  from: string;
  to: string;
  dissertation: string;
}

export default function Education({ education }: { education: EduItem[] }) {
  return (
    <section id="education" className="bg-white py-25">
      <div className="max-w-300 mx-auto px-8">
        <p className="eyebrow mb-3">Academic Background</p>
        <h2 className="section-heading mb-4">Education</h2>
        <div className="accent-bar mb-14" />

        <div className="grid grid-cols-[repeat(auto-fill,minmax(480px,1fr))] gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white border border-[#e8ede8] rounded-2xl p-8 hover:shadow-[0_12px_40px_rgba(65,69,53,0.1)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start gap-4.5">
                <div className="w-12 h-12 rounded-[14px] shrink-0 bg-linear-to-br from-[#414535] to-[#3EB489] flex items-center justify-center">
                  <GraduationCap size={20} color="#fff" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-flex px-3 py-1 rounded-full bg-linear-to-r from-[#3EB489]/20 to-[#EFCEFA]/40 text-[#414535] text-[0.72rem] font-bold mb-2.5">
                    {edu.from}{edu.to !== edu.from ? ` — ${edu.to}` : ""}
                  </span>
                  <h3 className="font-playfair text-[1.1rem] font-bold text-[#414535] leading-snug mb-1">
                    {edu.degree}
                  </h3>
                  <p className="font-bold text-[0.85rem] text-[#3EB489] mb-0.5">{edu.institution}</p>
                  <p className="text-[#414535]/40 text-[0.78rem]">{edu.location}</p>

                  {edu.dissertation && (
                    <div className="mt-4.5 pt-4.5 border-t border-dashed border-[#e8ede8] flex items-start gap-2">
                      <BookOpen size={13} color="#CC5A71" className="shrink-0 mt-0.5" />
                      <p className="text-[#414535]/60 text-[0.82rem] italic leading-relaxed">
                        &ldquo;{edu.dissertation}&rdquo;
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
