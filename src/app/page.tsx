import { About } from "@/components/about";
import { CaseStudies } from "@/components/case-studies";
import { ContactCta } from "@/components/contact-cta";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Solutions } from "@/components/solutions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <CaseStudies />
        <About />
        <ContactCta />
      </main>
    </>
  );
}
