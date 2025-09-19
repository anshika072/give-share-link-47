import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, CheckCircle, Star } from "lucide-react";

interface NGOCardProps {
  name: string;
  description: string;
  category: string;
  location: string;
  members: string;
  rating: string;
  verified?: boolean;
  icon: string;
}

const NGOCard = ({ 
  name, 
  description,
  category,
  location, 
  members,
  rating,
  verified = false,
  icon 
}: NGOCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-glow-primary transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group animate-fade-in-up">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl animate-float group-hover:scale-110 transition-transform duration-300">{icon}</div>
        {verified && (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 group-hover:scale-105 transition-transform duration-300">
            <CheckCircle className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        )}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">{name}</h3>
      <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
      
      <div className="mb-4">
        <Badge variant="secondary" className="mb-3 group-hover:scale-105 transition-transform duration-300">
          {category}
        </Badge>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
          <MapPin className="h-4 w-4 mr-2" />
          {location}
        </div>
        <div className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
          <Users className="h-4 w-4 mr-2" />
          {members}
        </div>
        <div className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
          <Star className="h-4 w-4 mr-2" />
          {rating}
        </div>
      </div>
      
      <Button className="w-full bg-button-gradient hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-glow-accent">
        Follow
      </Button>
    </div>
  );
};

export default NGOCard;