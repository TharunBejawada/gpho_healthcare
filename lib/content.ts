export const NAV = [
  { href: "#about", label: "About us" },
  { href: "#partners", label: "Partners" },
  { href: "#products", label: "Products" },
  { href: "#how", label: "How it works" },
  { href: "#tiers", label: "Membership" },
] as const;

export const ADDRESS =
  "D.No. 3-4-809/1, First Floor, Near Bhaktapur Chaman, Kachiguda, Hyderabad – 500027";
export const EMAIL = "purchase@gpho.com";
export const PHONE = "[+91 00000 00000]";

export const PARTNER_LOGOS: { name: string; src?: string; w?: number; h?: number }[] = [
  { name: "Cipla", src: "/images/partners/cipla.png", w: 275, h: 77 },
  { name: "Dr. Reddy’s", src: "/images/partners/dr-reddys.png", w: 275, h: 59 },
  { name: "Emcure", src: "/images/partners/emcure.png", w: 275, h: 77 },
  { name: "Mankind Pharma", src: "/images/partners/mankind.png", w: 183, h: 112 },
  { name: "Glenmark", src: "/images/partners/glenmark.png", w: 193, h: 112 },
  { name: "Partner logo" },
  { name: "Partner logo" },
  { name: "Partner logo" },
  { name: "Partner logo" },
  { name: "Partner logo" },
];

export const PARTNER_STATS = [
  { value: 100, suffix: "+", title: "Direct channel partners", body: "Pharmaceutical companies we buy from directly, under rate contracts negotiated by GPHO for our members." },
  { value: 500, suffix: "+", title: "Indirect partnerships", body: "Companies whose products we source through their authorised distributors and stockists." },
  { value: 1000, suffix: "+", title: "Supporting partners", body: "Distributors, logistics and service partners that keep our supply network running." },
];

export const PRODUCTS = [
  { title: "Surgicals", icon: "surgical", items: ["General surgicals", "Surgical kits", "Catheters", "Sutures", "OT products", "Speciality surgicals", "Surgical drapes"] },
  { title: "Injections", icon: "injection", items: ["Antibiotics", "Analgesics", "Anaesthesia drugs", "General injections", "Nutrition injections"] },
  { title: "Oral drugs", icon: "pill", items: ["Antibiotics", "Analgesics", "Anti-diabetic", "Anti-hypertensive", "Super-speciality drugs", "Others"] },
  { title: "Implants", icon: "implant", items: ["Ortho trauma implants", "Neuro implants", "Spine implants", "Arthroscopy implants", "Stents and stent materials"] },
] as const;

export const STEPS = [
  { title: "Join the group", body: "Register your hospital, clinic or pharmacy and share your current purchase list." },
  { title: "We pool the demand", body: "Your requirements are combined with other members’ to form larger purchase volumes." },
  { title: "We negotiate", body: "Our team negotiates rates, quality terms and delivery times with verified companies." },
  { title: "You order and save", body: "Place orders at the group’s contracted prices and track your savings each month." },
  { title: "Delivery to your doorstep", body: "Your products are delivered directly to your hospital, clinic or pharmacy." },
];

export const TIERS = [
  { tier: "Tier 1", badge: "Buying Club", accent: "slate", title: "Small and medium independent pharmacies", body: "Protects margins for retail chemists and standalone clinics competing with corporate pharmacy chains.", member: "Clinics, 1–5 retail outlets, community pharmacies" },
  { tier: "Tier 2", badge: "Hospital Formulary", accent: "green", title: "Mid-size hospitals and nursing homes", body: "Rationalises drug lists, stabilises high-volume surgical supplies and frees up locked working capital.", member: "30–150 bed hospitals, day-care surgical centres" },
  { tier: "Tier 3", badge: "Enterprise GPO", accent: "blue", title: "Enterprise networks and diagnostic chains", body: "End-to-end tender management, cold-chain tracking and direct-from-manufacturer volume rebates.", member: "200+ bed multi-speciality networks, diagnostic chains" },
] as const;

export const MEMBERS = [
  "Multi-speciality hospitals", "Nursing homes", "Clinics and polyclinics", "Retail pharmacies",
  "Diagnostic centres", "Dental and eye care chains", "Day-care surgery centres",
];
export const CATEGORIES = [
  "Prescription medicines", "Generics", "Surgical consumables", "Implants",
  "Diagnostic reagents", "Medical devices", "Hospital equipment", "Housekeeping and linen",
];
