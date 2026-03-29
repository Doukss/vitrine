import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
