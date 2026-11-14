const base = { "aria-hidden": true, viewBox: "0 0 24 24", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function ProductIcon({ name }: { name: string }) {
  const p = { ...base, width: 26, height: 26, stroke: "#137A4B", strokeWidth: 1.7 };
  switch (name) {
    case "surgical":
      return <svg {...p}><path d="M9 2v6M15 2v6M6 8h12l-1 13H7z" /><path d="M10 13h4M12 11v4" /></svg>;
    case "injection":
      return <svg {...p}><path d="m18 2 4 4M17 7l3-3M19 9 8.7 19.3a1 1 0 0 1-1.4 0l-2.6-2.6a1 1 0 0 1 0-1.4L15 5" /><path d="m9 11 4 4M5 19l-3 3M14 4l6 6" /></svg>;
    case "pill":
      return <svg {...p}><path d="M10.5 20.5 3.5 13.5a4.95 4.95 0 1 1 7-7l7 7a4.95 4.95 0 1 1-7 7z" /><path d="m8.5 8.5 7 7" /></svg>;
    default:
      return <svg {...p}><path d="M8 3v4M16 3v4M8 17v4M16 17v4" /><rect x="5" y="7" width="14" height="10" rx="2" /><path d="M9 12h6" /></svg>;
  }
}

export function AboutIcon({ name }: { name: "users" | "shield" | "truck" }) {
  const p = { ...base, width: 40, height: 40, stroke: "#24B574", strokeWidth: 1.6 };
  if (name === "users")
    return <svg {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
  if (name === "shield")
    return <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
  return <svg {...p}><rect x="1" y="7" width="14" height="10" rx="1" /><path d="M15 10h4l3 3v4h-7" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></svg>;
}

export function ContactIcon({ name }: { name: "pin" | "mail" | "phone" }) {
  const p = { ...base, width: 22, height: 22, stroke: "#24B574", strokeWidth: 1.8, className: "mt-[3px] shrink-0" };
  if (name === "pin")
    return <svg {...p}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
  if (name === "mail")
    return <svg {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>;
  return <svg {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>;
}
