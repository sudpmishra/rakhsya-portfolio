"use client";
import { Trophy } from "lucide-react";

interface AchievementsProps {
  achievements: string[];
  certifications: { title: string; organizer: string; date: string }[];
}

export default function Achievements({ achievements, certifications }: AchievementsProps) {
  return (
    <section className="bg-[#fdf5ff] py-25">
      <div className="max-w-300 mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Achievements */}
          <div>
            <p className="eyebrow mb-3">Highlights</p>
            <h2 className="section-heading mb-4">Achievements</h2>
            <div className="accent-bar mb-10" />
            <div className="flex flex-col gap-4">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 px-6 rounded-[14px] bg-linear-to-br from-[#EFCEFA]/30 to-[#3EB489]/10 border border-[#EFCEFA]"
                >
                  <div className="w-9.5 h-9.5 rounded-full shrink-0 bg-linear-to-br from-[#CC5A71] to-[#a8485c] flex items-center justify-center">
                    <Trophy size={15} color="#fff" />
                  </div>
                  <p className="text-[#414535] text-[0.88rem] leading-[1.7] pt-2">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="eyebrow mb-3">Continued Learning</p>
            <h2 className="section-heading mb-4">Certifications & Events</h2>
            <div className="accent-bar mb-10" />
            <div className="max-h-120 overflow-y-auto p-2">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-[#e8ede8]" />
                <div className="flex flex-col gap-6 pl-7">
                  {certifications.map((c, i) => (
                    <div key={i} className="relative">
                      {/* Dot */}
                      <div className="absolute -left-7 top-1.5 w-3 h-3 rounded-full bg-[#3EB489] border-2 border-white ring-2 ring-[#3EB489]/30" />
                      <p className="text-[#CC5A71] text-[0.72rem] font-bold mb-0.5">{c.date}</p>
                      <p className="text-[#414535] text-[0.85rem] font-semibold leading-snug">{c.title}</p>
                      {c.organizer && (
                        <p className="text-[#414535]/40 text-[0.75rem] mt-0.5">{c.organizer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
