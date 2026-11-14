import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { About, Hero, HowItWorks, Members, Partners, Products, Tiers } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Partners />
        <Products />
        <HowItWorks />
        <Tiers />
        <Members />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
