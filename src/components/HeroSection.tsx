import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, HandHeart, Globe, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-donation.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 animate-float">
          <Heart className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1s'}}>
          <Users className="w-10 h-10 text-accent" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{animationDelay: '2s'}}>
          <HandHeart className="w-9 h-9 text-primary-glow" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float" style={{animationDelay: '0.5s'}}>
          <Globe className="w-7 h-7 text-accent" />
        </div>
        <div className="absolute bottom-1/3 right-10 animate-float" style={{animationDelay: '1.5s'}}>
          <Shield className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-60 left-1/3 animate-float" style={{animationDelay: '3s'}}>
          <Sparkles className="w-6 h-6 text-primary-glow" />
        </div>
      </div>

      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-stats-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium mb-6 border border-white/20">
            💙 Connecting Communities
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="flex flex-col">
            <span className="text-white">Connecting Hearts,</span>
            <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
              Sharing Resources
            </span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Bridge the gap between those who need help and those who can provide it. 
          Connect with NGOs and individuals to share resources and make a difference.
        </p>
        
        <div className="flex flex-col items-center gap-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button asChild size="lg" className="bg-button-gradient hover:opacity-90 hover:scale-105 text-lg px-8 py-6 rounded-full transition-all duration-300">
            <Link to="/signup">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          {/* Feature boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Heart className="w-6 h-6 text-primary mb-2 mx-auto" />
              <span className="text-white/80 text-sm font-medium block text-center">Donate</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Users className="w-6 h-6 text-accent mb-2 mx-auto" />
              <span className="text-white/80 text-sm font-medium block text-center">Connect</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <HandHeart className="w-6 h-6 text-primary-glow mb-2 mx-auto" />
              <span className="text-white/80 text-sm font-medium block text-center">Volunteer</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Globe className="w-6 h-6 text-accent mb-2 mx-auto" />
              <span className="text-white/80 text-sm font-medium block text-center">Impact</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;