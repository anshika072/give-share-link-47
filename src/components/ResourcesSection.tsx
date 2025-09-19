import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ResourceCard from "./ResourceCard";

const ResourcesSection = () => {
  const resources = [
    {
      title: "Winter Clothes for Children",
      description: "Warm jackets, sweaters, and boots for kids aged 5-12. All items are clean and in good condition.",
      category: "Clothing",
      location: "Downtown Community Center",
      provider: "Sarah Johnson",
      timeAgo: "2 hours ago"
    },
    {
      title: "School Supplies & Books",
      description: "Notebooks, pencils, erasers, and textbooks for elementary students. Perfect for the new school year.",
      category: "Education",
      location: "East Side Library",
      provider: "Education First NGO",
      timeAgo: "5 hours ago",
      urgent: true
    },
    {
      title: "Fresh Groceries & Meals",
      description: "Weekly food packages including vegetables, fruits, and ready-to-eat meals for families in need.",
      category: "Food",
      location: "Central Food Bank",
      provider: "Food Share Community",
      timeAgo: "1 day ago"
    },
    {
      title: "Medical Equipment",
      description: "Wheelchairs, walking aids, and basic medical supplies available for elderly community members.",
      category: "Healthcare",
      location: "Health Care Center",
      provider: "Dr. Michael Chen",
      timeAgo: "2 days ago"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-pulse-glow">
              Latest Resources
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the newest resources shared by our community members and find what you need most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/resources">
              View All Resources
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;