"use client";
import { useState } from "react";
import { ChevronDown, Briefcase, MapPin, Calendar } from "lucide-react";

interface Role {
  title: string;
  type: string;
  from: string;
  to: string;
  responsibilities: string[];
}

interface ExperienceItem {
  company: string;
  location: string;
  roles: Role[];
}

export default function Experience({ experience }: { experience: ExperienceItem[] }) {
  const [expanded, setExpanded] = useState<string | null>(experience[0]?.company ?? null);

  return (
    <section id="experience" className="bg-[#fdf5ff] py-25">
      <div className="max-w-300 mx-auto px-8">
        <p className="eyebrow mb-3">Career</p>
        <h2 className="section-heading mb-4">Work Experience</h2>
        <div className="accent-bar mb-14" />

        <div className="flex flex-col gap-4">
          {experience.map((item, idx) => {
            const isOpen = expanded === item.company;
            return (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden bg-white transition-all duration-300 border-[1.5px] ${
                  isOpen
                    ? "border-[#CC5A71]/40 shadow-[0_8px_32px_rgba(204,90,113,0.08)]"
                    : "border-[#e8ede8]"
                }`}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : item.company)}
                  className={`w-full text-left px-7 py-6 border-none cursor-pointer flex items-start justify-between gap-4 transition-colors duration-300 ${
                    isOpen ? "bg-linear-to-br from-[#EFCEFA]/20 to-[#3EB489]/10" : "bg-transparent"
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3.5 mb-2">
                      <div
                        className={`w-10.5 h-10.5 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-linear-to-br from-[#3EB489] to-[#2d9a72]"
                            : "bg-linear-to-br from-[#414535] to-[#2e3025]"
                        }`}
                      >
                        <Briefcase size={16} color="#fff" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-[1.15rem] font-bold text-[#414535] m-0">
                          {item.company}
                        </h3>
                        <div className="flex items-center gap-1 mt-0.5">
                          <MapPin size={11} color="#414535" className="opacity-40" />
                          <span className="text-[#414535]/40 text-[0.78rem]">{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-14">
                      {item.roles.map((r, ri) => (
                        <span
                          key={ri}
                          className={`inline-flex items-center px-3 py-1 rounded-full text-[0.75rem] font-semibold border transition-all duration-300 ${
                            isOpen
                              ? "bg-[#EFCEFA]/30 text-[#414535] border-[#EFCEFA]"
                              : "bg-[#f1f5f1] text-[#414535]/60 border-[#e8ede8]"
                          }`}
                        >
                          {r.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`exp-chevron${isOpen ? " open" : ""} shrink-0 mt-1 transition-colors duration-300 ${
                      isOpen ? "text-[#CC5A71]" : "text-[#414535]/40"
                    }`}
                  />
                </button>

                <div className={`exp-body${isOpen ? " open" : ""}`}>
                  <div className="exp-body-inner">
                    <div className="exp-content border-t border-[#f1f5f1]">
                      {item.roles.map((role, ri) => (
                        <div
                          key={ri}
                          className={`px-7 py-7 ${
                            ri < item.roles.length - 1 ? "border-b border-dashed border-[#e8ede8]" : ""
                          }`}
                        >
                          <div className="flex flex-wrap items-center gap-3 mb-5">
                            <h4 className="font-bold text-[#3EB489] text-[0.95rem] m-0">{role.title}</h4>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[0.72rem] font-bold ${
                                role.type === "Full-Time"
                                  ? "bg-[#3EB489]/15 text-[#2d9a72]"
                                  : "bg-[#CC5A71]/15 text-[#CC5A71]"
                              }`}
                            >
                              {role.type}
                            </span>
                            <div className="flex items-center gap-1 text-[#414535]/40 text-[0.78rem]">
                              <Calendar size={12} />
                              {role.from} — {role.to}
                            </div>
                          </div>
                          <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                            {role.responsibilities.map((r, i) => (
                              <li key={i} className="flex items-start gap-3 text-[0.875rem] text-[#414535]/70 leading-[1.65]">
                                <span className="w-1.5 h-1.5 rounded-full bg-linear-to-br from-[#3EB489] to-[#CC5A71] shrink-0 mt-1.75 block" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
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
