import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-card via-background to-card border-t border-primary/20 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent rounded-full filter blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-button-gradient p-3 rounded-xl shadow-glow-primary">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ShareCare</span>
            </div>
            <p className="text-muted-foreground/90 leading-relaxed">
              Connecting hearts and sharing resources to make a positive difference in communities worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/resources" className="block text-muted-foreground hover:text-primary transition-colors">
                Resources
              </Link>
              <Link to="/ngos" className="block text-muted-foreground hover:text-primary transition-colors">
                NGOs
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Support</h3>
            <div className="space-y-2">
              <Link to="/help" className="block text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-glow">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group">
                <Mail className="h-4 w-4 text-primary group-hover:text-primary-glow transition-colors" />
                <span>contact@sharecare.in</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors group">
                <Phone className="h-4 w-4 text-accent group-hover:text-primary-glow transition-colors" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary-glow transition-colors group">
                <MapPin className="h-4 w-4 text-primary-glow group-hover:text-primary transition-colors" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-primary/30 via-accent/20 to-primary/30 mt-8 pt-8 text-center bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-lg">
          <p className="text-muted-foreground">
            © 2024 <span className="text-primary font-medium">ShareCare</span>. All rights reserved. Made with <span className="text-red-500 animate-pulse">❤️</span> for communities worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;