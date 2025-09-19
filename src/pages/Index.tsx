import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ResourcesSection from "@/components/ResourcesSection";
import NGOsSection from "@/components/NGOsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ResourcesSection />
      <NGOsSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default Index;
