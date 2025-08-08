import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import WhySection from "@/components/whySection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="relative w-full min-h-[670px]">
        {/* Background Image */}
        <Image
          src="/hero.png"
          alt="hero bg"
          fill
          className="object-cover"
          priority
        />
        
        <div className="relative z-10 h-full">
          <Header />
          <HeroSection />
          <WhySection />  
        </div>
      </main>
    </div>
  );
}