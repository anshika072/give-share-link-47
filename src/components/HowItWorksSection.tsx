const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Join the Community",
      description: "Sign up and become part of our caring community of individuals and NGOs working together.",
      icon: "👥"
    },
    {
      number: "2", 
      title: "Find or Share Resources",
      description: "Browse available resources or post what you can share with those in need.",
      icon: "🔍"
    },
    {
      number: "3",
      title: "Connect with Care", 
      description: "Match with people who need help or can provide assistance in your local area.",
      icon: "🤝"
    },
    {
      number: "4",
      title: "Make a Difference",
      description: "Complete the exchange and see the positive impact you've made in someone's life.",
      icon: "✨"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full filter blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full filter blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-glow rounded-full filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-glow via-primary to-accent bg-clip-text text-transparent animate-pulse-glow">
              How ShareCare Works
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Our simple four-step process makes it easy to connect hearts and share resources with those who need them most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
              <div className="relative mb-8">
                {/* Enhanced Step Circle */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-glow-primary group-hover:scale-110 group-hover:shadow-glow-accent transition-all duration-500 animate-pulse-glow border-2 border-white/20">
                  {step.number}
                  {/* Icon overlay */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm shadow-lg group-hover:scale-125 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                
                {/* Enhanced Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary via-primary-glow to-accent transform translate-x-10 opacity-60 animate-pulse"></div>
                )}
              </div>
              
              {/* Enhanced Card Content */}
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-card group-hover:shadow-glow-primary/20 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/70">
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 bg-gradient-to-r from-foreground to-primary/80 bg-clip-text group-hover:text-transparent">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30 backdrop-blur-sm">
            <span className="text-2xl">🚀</span>
            <span className="text-foreground font-medium">Ready to make a difference?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;