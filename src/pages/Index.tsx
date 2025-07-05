
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EdgeSection from '@/components/EdgeSection';
import ServicesSection from '@/components/ServicesSection';
import TechSection from '@/components/TechSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ProcessSection from '@/components/ProcessSection';
import TeamSection from '@/components/TeamSection';
import InsightsSection from '@/components/InsightsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-tactical-dark text-white">
      <Navigation />
      <HeroSection />
      <EdgeSection />
      <ServicesSection />
      <TechSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TeamSection />
      <InsightsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
