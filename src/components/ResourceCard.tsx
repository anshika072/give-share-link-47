import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, User, Clock } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  location: string;
  provider: string;
  timeAgo: string;
  urgent?: boolean;
}

const ResourceCard = ({ 
  title, 
  description, 
  category, 
  location, 
  provider, 
  timeAgo, 
  urgent = false 
}: ResourceCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'clothing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'education':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'food':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'healthcare':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-glow-primary transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group animate-fade-in-up">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <Badge className={`${getCategoryColor(category)} transition-all duration-300 group-hover:scale-105`}>
            {category}
          </Badge>
          {urgent && (
            <Badge variant="destructive" className="animate-pulse">
              Urgent
            </Badge>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
          <MapPin className="h-4 w-4 mr-2" />
          {location}
        </div>
        <div className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
          <User className="h-4 w-4 mr-2" />
          {provider}
        </div>
        <div className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
          <Clock className="h-4 w-4 mr-2" />
          {timeAgo}
        </div>
      </div>
      
      <Button className="w-full bg-button-gradient hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-glow-accent">
        View Details
      </Button>
    </div>
  );
};

export default ResourceCard;