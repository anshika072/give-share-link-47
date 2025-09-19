import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    toast({
      title: "Welcome back!",
      description: "You have been logged in successfully.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-glow to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white/5 rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative z-10">
        {/* Left Side - Branding */}
        <div className="flex items-center justify-center p-8 lg:p-16 relative">
          <div className="max-w-md text-center lg:text-left text-white relative z-10">
            <div className="flex items-center justify-center lg:justify-start mb-12">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                <Heart className="h-10 w-10 text-white fill-white" />
              </div>
              <span className="text-3xl font-bold ml-4">ShareCare</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Welcome Back
            </h1>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Continue your journey of making a difference in your community.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">10,000+</div>
                <div className="text-white/80 text-sm font-medium">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
                <div className="text-white/80 text-sm font-medium">NGOs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">25,000+</div>
                <div className="text-white/80 text-sm font-medium">Lives Impacted</div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-32 left-16 w-16 h-16 bg-white/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center p-8 lg:p-16 bg-background/95 backdrop-blur-xl">
          <div className="w-full max-w-md">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-3 text-foreground">Sign In</h2>
              <p className="text-muted-foreground text-lg">Welcome back to your ShareCare journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-12 py-6 bg-muted/50 border-muted text-foreground placeholder:text-muted-foreground rounded-xl"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-12 pr-12 py-6 bg-muted/50 border-muted text-foreground placeholder:text-muted-foreground rounded-xl"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-foreground transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Eye className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 text-primary bg-muted/50 border-muted rounded focus:ring-primary focus:ring-2"
                  />
                  <Label htmlFor="remember" className="text-sm text-muted-foreground">
                    Remember me
                  </Label>
                </div>
                <Link to="/forgot-password" className="text-sm text-primary hover:text-primary-glow transition-colors">
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-button-gradient hover:opacity-90 hover:scale-105 text-white text-lg py-7 rounded-2xl font-semibold shadow-glow-primary transition-all duration-300 mt-8"
              >
                Sign In
              </Button>
            </form>

            <div className="text-center mt-8">
              <p className="text-muted-foreground text-lg">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:text-primary-glow font-semibold transition-colors">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;