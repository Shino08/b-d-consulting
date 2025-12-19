import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Experience } from "@/components/landing/Experience";
import { Divisions } from "@/components/landing/Divisions";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Divisions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
