import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden bg-ivory text-ink transition-colors duration-500 dark:bg-[#070706] dark:text-ivory">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
