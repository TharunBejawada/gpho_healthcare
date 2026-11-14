"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";

export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = [...NAV.map((n) => n.href.slice(1)), "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const onScroll = () => {
      const y = window.scrollY + 140;
      let cur = "";
      for (const el of els) if (el.offsetTop <= y) cur = el.id;
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-[14px]">
        <a href="#top" className="block">
          <Image src="/images/gpho-logo.png" alt="GPHO Private Limited – Group Purchase Health Organisation" width={600} height={258} priority className="block h-[46px] w-auto" />
        </a>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-1">
          {NAV.map((n) => {
            const on = active === n.href.slice(1);
            return (
              <a
                key={n.href}
                href={n.href}
                aria-current={on ? "true" : undefined}
                className={`relative px-3 py-[10px] font-medium no-underline transition-colors duration-200 hover:text-green-dark after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:rounded after:bg-green after:transition-transform after:duration-300 ${
                  on ? "text-green-dark after:scale-x-100" : "text-ink after:scale-x-0"
                }`}
              >
                {n.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-green px-[18px] py-[10px] font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-px hover:bg-[#1e9e63] hover:text-white hover:shadow-lg hover:shadow-green/30"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}
