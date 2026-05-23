"use client";
import { ExternalLink, FileText } from "lucide-react";

interface Publication {
  title: string;
  url: string;
}

export default function Publications({ publications }: { publications: Publication[] }) {
  return (
    <section id="publications" className="bg-[#414535] py-25">
      <div className="max-w-300 mx-auto px-8">
        <p className="eyebrow-light mb-3">Thought Leadership</p>
        <h2 className="section-heading-light mb-4">Published Editorials</h2>
        <div className="accent-bar mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub, i) => (
            <a
              key={i}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 p-8 bg-white/7 hover:bg-white/13 border border-white/15 hover:border-[#EFCEFA]/50 rounded-2xl no-underline hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-13 h-13 rounded-[14px] shrink-0 bg-[#CC5A71]/25 border border-[#CC5A71]/30 flex items-center justify-center">
                <FileText size={22} color="#EFCEFA" />
              </div>
              <div className="flex-1">
                <h3 className="font-playfair text-[1.1rem] font-bold text-white leading-snug mb-4">
                  {pub.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[#3EB489] text-[0.78rem] font-bold tracking-wide">
                  Read Article <ExternalLink size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
