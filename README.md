# GPHO Healthcare

Single-page marketing site for GPHO (Group Purchase Health Organisation), built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Develop
```bash
npm install
npm run dev
```

## Deploy (AWS Amplify Hosting)
1. Amplify console → Host web app → connect this repo and branch.
2. Amplify detects Next.js and uses `amplify.yml`. Node 20+ build image.
3. No environment variables are needed yet (contact form is UI-only).

## Structure
- `components/Sections.tsx` – Hero, About, Partners, Products, How it works, Tiers, Members
- `components/Contact.tsx` – enquiry form (client-side only; backend TBD)
- `lib/content.ts` – all copy/data
- Animations: scroll reveals (`Reveal`), count-up stats, partner marquee, smooth anchor scroll; all honour `prefers-reduced-motion`.
