import CompaniesSection from "@/components/companiesSection";
import HeroSection from "@/components/heroSection";
import InCarProvisionsSection from "@/components/inCarProvisionsSection";
import ServicesSection from "@/components/servicesSection";
import WhyEntrexSection from "@/components/whyEntrexSection";
import WhySection from "@/components/whySection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <InCarProvisionsSection />
      <WhyEntrexSection />
      <CompaniesSection />
    </div>
  );
}
