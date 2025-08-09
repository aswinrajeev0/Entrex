import CertificateSection from "@/components/certificateSection";
import CompaniesSection from "@/components/companiesSection";
import ContactSection from "@/components/contactSection";
import FAQSection from "@/components/faqSection";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import InCarProvisionsSection from "@/components/inCarProvisionsSection";
import NewsAndUodatesSection from "@/components/newsAndUpdatesSection";
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
      <CertificateSection />
      <FAQSection />
      <NewsAndUodatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
