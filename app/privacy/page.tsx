import Link from "next/link";

export const metadata = { title: "Privacy policy – GPHO" };

export default function Page() {
  return (
    <main className="mx-auto max-w-[800px] px-6 py-24">
      <h1 className="font-lexend text-[40px] font-semibold">Privacy policy</h1>
      <p className="mt-4 text-muted">This page is a placeholder. [YOUR LEGAL TEXT]</p>
      <Link href="/" className="mt-8 inline-block font-semibold">← Back to home</Link>
    </main>
  );
}
