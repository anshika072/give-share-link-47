const StatsSection = () => {
  const stats = [
    { value: "10,000+", label: "Resources Shared", color: "text-primary" },
    { value: "500+", label: "NGOs Connected", color: "text-accent" },
    { value: "25,000+", label: "Lives Impacted", color: "text-primary-glow" },
  ];

  return (
    <section className="py-16 bg-stats-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-white/20 rounded-lg rotate-12"></div>
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-primary-glow/30 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent/20 rounded-full"></div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-lg rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 group-hover:scale-105">
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color} animate-scale-in`} style={{animationDelay: `${index * 0.1 + 0.5}s`}}>
                  {stat.value}
                </div>
                <div className="text-white/80 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;