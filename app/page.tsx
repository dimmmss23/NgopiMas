import SequenceScroll from "@/components/SequenceScroll";
import AboutSection from "@/components/sections/AboutSection";
import BentoGrid from "@/components/sections/BentoGrid";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <SequenceScroll />
      <div className="relative z-10 -mt-[100vh] bg-black">
        <AboutSection />
        <BentoGrid />
        <ExperienceSection />
        <Stats />
        <Testimonials />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
