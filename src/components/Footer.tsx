import { Scale } from "lucide-react";

export default function Footer({ name, licenseNo }: { name: string; licenseNo: string }) {
  return (
    <footer className="bg-[#414535] py-12 px-8 text-center">
      <div className="max-w-300 mx-auto">
        <div className="flex items-center justify-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#CC5A71]/20 border border-[#CC5A71]/30 flex items-center justify-center">
            <Scale size={14} color="#EFCEFA" />
          </div>
          <span className="font-playfair text-[1.05rem] font-bold text-white">{name}</span>
        </div>
        <p className="text-white/40 text-[0.78rem] mb-1.5">{licenseNo}</p>
        <p className="text-white/30 text-[0.75rem]">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
