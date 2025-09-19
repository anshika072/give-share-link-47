import { Button } from "@/components/ui/button";
import NGOCard from "./NGOCard";

const NGOsSection = () => {
  const ngos = [
    {
      name: "Asha Foundation",
      description: "Dedicated to providing education and healthcare to underprivileged children in urban communities.",
      category: "Education & Health",
      location: "Mumbai, Maharashtra",
      members: "2,500+ members",
      rating: "4.9 rating • 15 active projects",
      verified: true,
      icon: "🏫"
    },
    {
      name: "Prakriti Sanrakshan Samiti", 
      description: "Environmental conservation and sustainable living programs for communities across India.",
      category: "Environment",
      location: "Bangalore, Karnataka",
      members: "1,800+ members",
      rating: "4.8 rating • 22 active projects",
      verified: true,
      icon: "🌱"
    },
    {
      name: "Annam Foundation",
      description: "Fighting hunger by distributing meals and groceries to families facing food insecurity.",
      category: "Food Security", 
      location: "Delhi, NCR",
      members: "3,200+ members",
      rating: "4.9 rating • 8 active projects",
      verified: true,
      icon: "🍽️"
    },
    {
      name: "Vriddhashram Seva Samiti",
      description: "Supporting elderly community members with healthcare, companionship, and daily assistance.",
      category: "Elder Care",
      location: "Pune, Maharashtra", 
      members: "900+ members",
      rating: "4.7 rating • 12 active projects",
      verified: true,
      icon: "👴"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent via-primary to-primary-glow bg-clip-text text-transparent animate-pulse-glow">
              Featured NGOs
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with trusted organizations making a real difference in communities around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {ngos.map((ngo, index) => (
            <NGOCard key={index} {...ngo} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            Explore All NGOs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NGOsSection;