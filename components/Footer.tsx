import Image from "next/image";
import Link from "next/link";
import { ADDRESS, EMAIL, NAV } from "@/lib/content";

export default function Footer() {
  const links = [...NAV, { href: "#contact", label: "Contact us" }];
  return (
    <footer className="bg-navy text-pale">
      <div className="mx-auto max-w-[1200px] px-6 pb-8 pt-14">
        <div className="flex flex-wrap items-start justify-between gap-8 border-b border-white/15 pb-9">
          <div className="flex max-w-[360px] flex-col gap-4">
            <div className="self-start rounded-xl bg-white px-[14px] py-[10px]">
              <Image src="/images/gpho-logo.png" alt="GPHO Private Limited" width={600} height={258} className="block h-[52px] w-auto" />
            </div>
            <p className="text-[15px]">{ADDRESS}</p>
            <p className="text-[15px]"><a href={`mailto:${EMAIL}`} className="text-white hover:text-white hover:underline">{EMAIL}</a></p>
          </div>
          <nav aria-label="Footer" className="flex max-w-[480px] flex-wrap gap-x-9 gap-y-3">
            {links.map((l) => <a key={l.href} href={l.href} className="text-pale no-underline transition-colors hover:text-white">{l.label}</a>)}
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-6 text-[15px]">
          <p>© {new Date().getFullYear()} GPHO Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-pale no-underline hover:text-white">Privacy policy</Link>
            <Link href="/terms" className="text-pale no-underline hover:text-white">Terms and conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
