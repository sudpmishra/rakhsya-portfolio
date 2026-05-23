"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Only this dynamic rgba value stays as inline style
  const navBg = scrolled ? "rgba(65,69,53,0.97)" : "rgba(65,69,53,0.45)";

  return (
    <header
      style={{ background: navBg }}
      className={`fixed top-0 left-0 right-0 z-100 backdrop-blur-lg transition-all duration-350 ${scrolled ? "border-b border-white/7" : "border-b border-transparent"
        }`}
    >
      <nav className="max-w-300 mx-auto px-8 h-17 flex items-center justify-between">
        <a
          href="#hero"
          className="font-playfair text-[1.1rem] font-bold text-white no-underline tracking-[0.01em]"
        >
          <Image
            src="/signature.png"
            alt={`${name} logo`}
            width={280}
            height={64}
            className="inline-block filter-beige"
          />
        </a>

        <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/80 hover:text-[#3EB489] no-underline text-[0.75rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden bg-transparent border-none text-white cursor-pointer p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="bg-[rgba(65,69,53,0.98)] border-t border-white/8 px-8 pb-6 pt-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3.25 text-white/80 hover:text-[#3EB489] no-underline text-[0.8rem] font-semibold tracking-widest uppercase border-b border-white/7 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
