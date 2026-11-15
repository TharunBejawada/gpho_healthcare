import Image from "next/image";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { AboutIcon, ProductIcon } from "./Icons";
import { CATEGORIES, MEMBERS, PARTNER_LOGOS, PARTNER_STATS, PRODUCTS, STEPS, TIERS } from "@/lib/content";

const wrap = "mx-auto max-w-[1200px] px-6";
const h2 = "font-lexend font-semibold text-[30px] leading-[1.25] md:text-[40px] md:leading-[1.6]";
const card = "rounded-2xl border border-line bg-white";

export function Hero() {
  return (
    <section id="top" className="bg-mist">
      <div className={`${wrap} flex flex-wrap items-center gap-12 py-10 md:py-14`}>
        <Reveal className="min-w-0 flex-[1_1_440px]">
          <p className="mb-[14px] font-lexend font-medium text-green-dark">Group Purchase Health Organisation</p>
          <h1 className="font-lexend text-[36px] font-semibold leading-[1.1] sm:text-[44px] md:text-[50px] tracking-[-0.01em]">Pharmaceutical purchasing, made powerful by the group.</h1>
          <p className="mt-[18px] max-w-[48ch] text-[17px] text-muted md:text-[18px]">Hospitals, clinics and pharmacies buy surgicals, injections, oral drugs and implants together through GPHO, at better prices and delivered to their doorstep.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="inline-block rounded-full bg-green px-6 py-[14px] font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1e9e63] hover:text-white hover:shadow-lg hover:shadow-green/30">Join the group</a>
            <a href="#products" className="inline-block rounded-full border-2 border-blue px-[22px] py-3 font-semibold text-blue no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue hover:text-white">View our products</a>
          </div>
        </Reveal>
        <Reveal delay={150} className="flex min-w-0 flex-[1_1_420px] justify-center">
          <Image src="/images/hero.webp" alt="A smiling customer holding a GPHO-branded bag at a pharmacy counter" width={662} height={567} priority sizes="(max-width: 640px) 100vw, 580px" className="block h-auto w-full max-w-[580px] rounded-[22px] shadow-[0_30px_60px_-30px_rgba(2,50,152,0.4)]" />
        </Reveal>
      </div>
    </section>
  );
}

const ABOUT = [
  { icon: "users", title: "Collective bargaining power", body: "Members’ combined demand is negotiated as a single volume, which brings unit prices down for everyone." },
  { icon: "shield", title: "Quality you can verify", body: "Only licensed manufacturers and distributors with documented quality systems are admitted to our supplier panel." },
  { icon: "truck", title: "Delivered to your doorstep", body: "Orders placed at group prices arrive directly at your hospital, clinic or pharmacy." },
] as const;

export function About() {
  return (
    <section id="about" className="bg-blue text-white">
      <div className={`${wrap} py-14 md:py-20`}>
        <Reveal as="h2" className="font-lexend text-[22px] font-normal leading-[1.4] sm:text-[26px] md:text-[32px] md:leading-[1.35]">GPHO brings independent healthcare providers together to purchase pharmaceutical products as a group, so a 20-bed hospital can buy on the same terms as a large chain.</Reveal>
        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-8 border-t border-white/25 pt-8">
          {ABOUT.map((a, i) => (
            <Reveal key={a.title} delay={i * 120} className="flex-[1_1_260px]">
              <AboutIcon name={a.icon} />
              <h3 className="mb-2 mt-[14px] font-lexend text-[20px] font-medium">{a.title}</h3>
              <p className="text-pale">{a.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  const loop = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
  return (
    <section id="partners">
      <div className={`${wrap} pb-10 pt-16 md:pt-[88px] text-center`}>
        <Reveal>
          <p className="font-lexend font-medium text-green-dark">Source of our products</p>
          <h2 className={`${h2} mt-2 text-blue`}>Backed by a network of 1,600+ companies</h2>
        </Reveal>
        <div className="mt-11 flex flex-wrap gap-5 text-left">
          {PARTNER_STATS.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className={`${card} flex-[1_1_300px] p-5 transition md:p-7-shadow duration-300 hover:shadow-xl hover:shadow-blue/10`}>
              <p className="font-lexend text-[44px] md:text-[52px] font-bold leading-none text-green"><CountUp value={s.value} suffix={s.suffix} /></p>
              <h3 className="mb-[6px] mt-[14px] font-lexend text-[21px] font-semibold">{s.title}</h3>
              <p className="text-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="gpho-marquee overflow-hidden pb-16 pt-6 md:pb-[88px]" aria-label="Our partner companies">
        <div className="gpho-track flex w-max gap-5">
          {loop.map((l, i) => (
            <div key={i} aria-hidden={i >= PARTNER_LOGOS.length ? true : undefined} className="box-border flex h-28 flex-[0_0_200px] items-center justify-center rounded-[14px] border border-line bg-white p-[18px]">
              {l.src ? (
                <Image src={l.src} alt={l.name} width={l.w!} height={l.h!} className="block max-h-16 w-auto max-w-full" />
              ) : (
                <span className="rounded-[10px] border border-dashed border-slate px-[14px] py-[18px] text-center text-[15px] font-semibold text-muted">Partner logo</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section id="products" className="bg-mist">
      <div className={`${wrap} py-16 md:py-[88px]`}>
        <Reveal>
          <h2 className={h2}>Products portfolio</h2>
          <p className="mt-3 max-w-[60ch] text-[17px] text-muted md:text-[18px]">Four product categories, sourced from verified manufacturers at group prices.</p>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-6">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 120} className={`${card} flex-[1_1_320px] md:flex-[1_1_500px] p-5 transition md:p-7-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue/10`}>
              <div className="mb-[18px] flex items-center gap-4">
                <div className="flex h-[52px] flex-[0_0_52px] items-center justify-center rounded-full bg-mint"><ProductIcon name={p.icon} /></div>
                <h3 className="font-lexend text-[24px] font-semibold">{p.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.items.map((t) => <span key={t} className="rounded-full bg-mist px-[14px] py-[7px] font-medium">{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how">
      <div className={`${wrap} py-16 md:py-[88px]`}>
        <Reveal>
          <h2 className={h2}>How it works</h2>
          <p className="mt-3 text-[17px] text-muted md:text-[18px]">From joining the group to delivery at your door, in five steps.</p>
        </Reveal>
        <div className="mt-11 flex flex-wrap gap-7">
          {STEPS.map((s, i) => {
            const last = i === STEPS.length - 1;
            return (
              <Reveal key={s.title} delay={i * 110} className="flex-[1_1_190px]">
                <div className={`box-border flex h-14 w-14 items-center justify-center rounded-full border-2 border-green font-lexend text-[22px] font-semibold ${last ? "bg-green text-white" : "bg-white text-green-dark"}`}>{i + 1}</div>
                <h3 className="mb-[6px] mt-[18px] font-lexend text-[19px] font-semibold">{s.title}</h3>
                <p className="text-muted">{s.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const accentBorder = { slate: "border-t-slate", green: "border-t-green", blue: "border-t-blue" } as const;
const accentBadge = {
  slate: "bg-mist border border-line",
  green: "bg-mint text-green-dark",
  blue: "bg-blue text-white",
} as const;

export function Tiers() {
  return (
    <section id="tiers" className="bg-mist">
      <div className={`${wrap} py-16 md:py-[88px]`}>
        <Reveal className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <h2 className={`${h2} max-w-[16ch]`}>The 3-tier GPO engagement matrix</h2>
          <p className="max-w-[46ch] text-muted">Procurement contracts calibrated to each member’s bed strength, dispensing volume and working-capital needs.</p>
        </Reveal>
        <div className="mt-11 flex flex-wrap items-stretch gap-6">
          {TIERS.map((t, i) => (
            <Reveal key={t.tier} delay={i * 130} className={`${card} ${accentBorder[t.accent]} flex flex-[1_1_320px] flex-col border-t-[5px] p-[26px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue/10`}>
              <div className="mb-[14px] flex items-center justify-between gap-3">
                <span className="font-lexend text-[15px] font-semibold text-muted">{t.tier}</span>
                <span className={`rounded-full px-3 py-1 text-[14px] font-semibold ${accentBadge[t.accent]}`}>{t.badge}</span>
              </div>
              <h3 className="mb-[10px] font-lexend text-[23px] font-semibold leading-[1.2]">{t.title}</h3>
              <p className="mb-5 text-muted">{t.body}</p>
              <div className="mt-auto rounded-[10px] bg-mist px-4 py-[14px]">
                <p className="text-[14px] text-muted">Typical member</p>
                <p className="font-lexend text-[16px] font-medium">{t.member}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Members() {
  return (
    <section id="members" className="bg-mist">
      <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-[88px]">
        <Reveal>
          <h2 className={h2}>Who we work with</h2>
          <p className="mt-3 max-w-[60ch] text-[17px] text-muted md:text-[18px]">Providers of every size join GPHO to buy better. Suppliers partner with us to reach them efficiently.</p>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-x-16 gap-y-10">
          <Reveal className="flex-[1_1_400px]">
            <h3 className="mb-4 font-lexend text-[22px] font-semibold">Our members</h3>
            <div className="flex flex-wrap gap-[10px]">
              {MEMBERS.map((m) => <span key={m} className="rounded-full bg-mint px-4 py-[9px] font-medium">{m}</span>)}
            </div>
          </Reveal>
          <Reveal delay={150} className="flex-[1_1_400px]">
            <h3 className="mb-4 font-lexend text-[22px] font-semibold">Categories we source</h3>
            <div className="flex flex-wrap gap-[10px]">
              {CATEGORIES.map((c) => <span key={c} className="rounded-full border border-line bg-white px-[15px] py-2 font-medium">{c}</span>)}
            </div>
            <p className="mt-5 text-muted">Are you a manufacturer or distributor? <a href="#contact" className="font-semibold">Apply to join our supplier panel.</a></p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
