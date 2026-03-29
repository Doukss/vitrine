import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Features from "@/components/sections/Features";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
