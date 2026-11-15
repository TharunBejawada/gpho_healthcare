"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { NAV } from "@/lib/content";

export default function Header() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

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

  // Close the menu on Escape or when the viewport grows to the desktop layout.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && close();
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => { window.removeEventListener("keydown", onKey); mq.removeEventListener("change", onMq); };
  }, [open, close]);

  const linkCls = (on: boolean) =>
    `relative px-3 py-[10px] font-medium no-underline transition-colors duration-200 hover:text-green-dark ${on ? "text-green-dark" : "text-ink"}`;

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-[14px]">
        <a href="#top" className="block" onClick={close}>
          <Image src="/images/gpho-logo.png" alt="GPHO Private Limited – Group Purchase Health Organisation" width={600} height={258} priority className="block h-10 w-auto md:h-[46px]" />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => {
            const on = active === n.href.slice(1);
            return (
              <a
                key={n.href}
                href={n.href}
                aria-current={on ? "true" : undefined}
                className={`${linkCls(on)} after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:rounded after:bg-green after:transition-transform after:duration-300 ${on ? "after:scale-x-100" : "after:scale-x-0"}`}
              >
                {n.label}
              </a>
            );
          })}
          <a href="#contact" className="ml-2 rounded-full bg-green px-[18px] py-[10px] font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-px hover:bg-[#1e9e63] hover:text-white hover:shadow-lg hover:shadow-green/30">
            Contact us
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line bg-white md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden className="relative block h-[14px] w-5">
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${open ? "top-[6px] rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-[6px] h-0.5 w-5 rounded bg-ink transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${open ? "top-[6px] -rotate-45" : "top-[12px]"}`} />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      <div id="mobile-menu" className={`absolute inset-x-0 top-full grid bg-white shadow-lg shadow-ink/10 transition-[grid-template-rows] duration-300 ease-out md:hidden ${open ? "grid-rows-[1fr] border-b border-line" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <nav aria-label="Mobile" inert={!open} className="mx-auto flex max-w-[1200px] flex-col gap-1 border-t border-line px-6 pb-5 pt-3">
            {NAV.map((n) => {
              const on = active === n.href.slice(1);
              return (
                <a key={n.href} href={n.href} onClick={close} aria-current={on ? "true" : undefined} className={`${linkCls(on)} rounded-lg px-3 py-3 text-[18px] ${on ? "bg-mist" : ""}`}>
                  {n.label}
                </a>
              );
            })}
            <a href="#contact" onClick={close} className="mt-2 rounded-full bg-green px-[18px] py-3 text-center font-semibold text-white no-underline hover:text-white">
              Contact us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
