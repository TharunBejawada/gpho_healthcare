"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { ContactIcon } from "./Icons";
import { ADDRESS, EMAIL, PHONE } from "@/lib/content";

const input = "box-border w-full rounded-[10px] border border-line px-[13px] py-[11px] font-[inherit] outline-none transition-shadow focus:border-green focus:shadow-[0_0_0_3px_rgba(36,181,116,0.2)]";
const label = "mb-[6px] block text-[15px] font-semibold";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // UI-only for now: no backend is wired up yet.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-x-16 gap-y-12 px-6 py-[88px]">
        <Reveal className="flex-[1_1_360px]">
          <h2 className="font-lexend text-[40px] font-semibold leading-[1.6]">Get in touch</h2>
          <p className="mb-7 mt-[14px] text-[18px] text-muted">Tell us about your facility and what you buy. We’ll show you where the group can save you money.</p>
          <div className="flex flex-col gap-[18px]">
            <div className="flex gap-[14px]"><ContactIcon name="pin" /><div><p className="font-lexend font-medium">Office</p><p className="text-muted">{ADDRESS}</p></div></div>
            <div className="flex gap-[14px]"><ContactIcon name="mail" /><div><p className="font-lexend font-medium">Email</p><p><a href={`mailto:${EMAIL}`} className="font-semibold">{EMAIL}</a></p></div></div>
            <div className="flex gap-[14px]"><ContactIcon name="phone" /><div><p className="font-lexend font-medium">Phone</p><p className="text-muted">{PHONE}</p></div></div>
          </div>
        </Reveal>
        <Reveal delay={150} className="box-border flex-[1_1_460px] rounded-[18px] border border-line bg-white p-8">
          {sent ? (
            <div role="status" className="py-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-mint">
                <svg aria-hidden viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#137A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>
              </div>
              <h3 className="font-lexend text-[22px] font-semibold">Thank you for your enquiry</h3>
              <p className="mt-2 text-muted">Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-wrap gap-4">
              <div className="flex-[1_1_200px]"><label htmlFor="r-name" className={label}>Your name</label><input id="r-name" name="name" type="text" required autoComplete="name" className={input} /></div>
              <div className="flex-[1_1_200px]"><label htmlFor="r-org" className={label}>Organisation</label><input id="r-org" name="organisation" type="text" autoComplete="organization" className={input} /></div>
              <div className="flex-[1_1_200px]"><label htmlFor="r-phone" className={label}>Phone</label><input id="r-phone" name="phone" type="tel" required autoComplete="tel" className={input} /></div>
              <div className="flex-[1_1_200px]">
                <label htmlFor="r-type" className={label}>Interested in</label>
                <select id="r-type" name="interest" className={`${input} bg-white`}>
                  <option>Surgicals</option><option>Injections</option><option>Oral drugs</option><option>Implants</option><option>Membership</option>
                </select>
              </div>
              <div className="flex-[1_1_100%]"><label htmlFor="r-msg" className={label}>Message</label><textarea id="r-msg" name="message" placeholder="What do you buy most often, and roughly how much each month?" className={`${input} min-h-[120px]`} /></div>
              <div className="flex-[1_1_100%]">
                <button type="submit" className="cursor-pointer rounded-full border-0 bg-green px-[26px] py-[14px] font-body text-[16px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#1e9e63] hover:shadow-lg hover:shadow-green/30">Send enquiry</button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
