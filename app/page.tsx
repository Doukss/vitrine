import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTAFinal />
      <Footer />
    </div>
  );
}
