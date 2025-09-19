import { ArrowLeft, Heart, MessageCircle, Repeat, Share, MapPin, Clock, User, TrendingUp, UserPlus, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";

const Resources = () => {
  const resourcePosts = [
    {
      id: 1,
      user: {
        name: "Priya Sharma",
        username: "@priyasharma",
        avatar: "/placeholder.svg",
        verified: true
      },
      content: "🧥 Have 200 winter jackets (sizes 5-12 years) in excellent condition available for donation. Perfect for children in need. Free pickup available from my location in Sector 15, Noida. DM for details! #WinterClothes #KidsClothing",
      category: "Clothing",
      location: "Sector 15, Noida",
      availability: "Available now",
      timeAgo: "2h",
      images: [],
      likes: 324,
      comments: 48,
      shares: 67,
      urgent: false
    },
    {
      id: 2,
      user: {
        name: "Rajesh Kumar",
        username: "@rajeshk_delhi",
        avatar: "/placeholder.svg",
        verified: false
      },
      content: "🍚 Fresh groceries available for donation - 500kg rice, dal, vegetables, and fruits. Daily surplus from my grocery store. Perfect for NGOs or families in need. Contact for bulk pickup! #FoodDonation #FreshFood",
      category: "Food",
      location: "Dwarka, New Delhi",
      availability: "Daily 6-8 PM",
      timeAgo: "4h",
      images: [],
      likes: 589,
      comments: 123,
      shares: 234,
      urgent: true
    },
    {
      id: 3,
      user: {
        name: "Sneha Patel",
        username: "@sneha_education",
        avatar: "/placeholder.svg",
        verified: true
      },
      content: "📚 School supplies ready for donation! 1000+ notebooks, textbooks (Class 1-10), pencils, erasers, and geometry sets. All items are new/like-new condition. Great for underprivileged students! #EducationSupport #SchoolSupplies",
      category: "Education",
      location: "Andheri West, Mumbai",
      availability: "Weekends only",
      timeAgo: "6h",
      images: [],
      likes: 445,
      comments: 89,
      shares: 156,
      urgent: false
    },
    {
      id: 4,
      user: {
        name: "Dr. Amit Verma",
        username: "@dramitverma",
        avatar: "/placeholder.svg",
        verified: true
      },
      content: "🏥 Medical equipment available for donation - 20 wheelchairs, walking sticks, blood pressure monitors, and basic medical supplies. All sanitized and in working condition. Ideal for elderly care centers! #MedicalAid #Healthcare",
      category: "Healthcare",
      location: "Koramangala, Bangalore",
      availability: "By appointment",
      timeAgo: "1d",
      images: [],
      likes: 767,
      comments: 134,
      shares: 298,
      urgent: false
    },
    {
      id: 5,
      user: {
        name: "Meera Joshi",
        username: "@meeraj_pune",
        avatar: "/placeholder.svg",
        verified: false
      },
      content: "🛏️ Warm blankets and winter clothing available! 300 blankets, sweaters, and shawls perfect for the homeless or anyone in need during winter. Clean and ready for immediate distribution. #WinterRelief #Blankets",
      category: "Clothing",
      location: "FC Road, Pune",
      availability: "Immediate pickup",
      timeAgo: "1d",
      images: [],
      likes: 1156,
      comments: 267,
      shares: 445,
      urgent: true
    },
    {
      id: 6,
      user: {
        name: "Arjun Singh",
        username: "@arjun_foodbank",
        avatar: "/placeholder.svg",
        verified: true
      },
      content: "🍽️ Fresh cooked meals available for pickup! Dal-chawal, sabzi, roti ready for 500+ people. Our restaurant has daily surplus - perfect for feeding the needy. Available every evening 7-9 PM! #FreshMeals #CookedFood",
      category: "Food",
      location: "Sector 18, Gurgaon",
      availability: "Daily 7-9 PM",
      timeAgo: "2d",
      images: [],
      likes: 1834,
      comments: 289,
      shares: 567,
      urgent: true
    }
  ];

  const suggestedUsers = [
    {
      name: "Ratan Tata",
      username: "@RatanTata",
      avatar: "/placeholder.svg",
      verified: true,
      followers: "2.1M",
      donations: "500+",
      isFollowing: false
    },
    {
      name: "Azim Premji",
      username: "@azimpremji",
      avatar: "/placeholder.svg",
      verified: true,
      followers: "850K",
      donations: "300+",
      isFollowing: false
    },
    {
      name: "Sudha Murty",
      username: "@SudhaMurty",
      avatar: "/placeholder.svg",
      verified: true,
      followers: "1.2M",
      donations: "450+",
      isFollowing: true
    },
    {
      name: "Kiran Mazumdar",
      username: "@kiranshaw",
      avatar: "/placeholder.svg",
      verified: true,
      followers: "680K",
      donations: "280+",
      isFollowing: false
    }
  ];

  const trendingTopics = [
    {
      topic: "#WinterDonation",
      posts: "12.5K posts"
    },
    {
      topic: "#EducationForAll",
      posts: "8.9K posts"
    },
    {
      topic: "#FoodDonation",
      posts: "15.2K posts"
    },
    {
      topic: "#HealthcareForAll",
      posts: "6.7K posts"
    },
    {
      topic: "#HelpTheNeedy",
      posts: "22.1K posts"
    },
    {
      topic: "#ShareAndCare",
      posts: "9.8K posts"
    }
  ];

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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="sticky top-16 bg-background/80 backdrop-blur-md border-b border-border z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Resources</h1>
              <p className="text-sm text-muted-foreground">Available resources ready for donation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="flex gap-6">
          {/* Left Sidebar - Suggested Users */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <Card className="p-4 sticky top-24">
              <h3 className="text-lg font-bold mb-4">Suggested for you</h3>
              <div className="space-y-3">
                {suggestedUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-sm">{user.name}</span>
                          {user.verified && (
                            <div className="w-3 h-3 bg-primary rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {user.followers} followers • {user.donations} donations
                        </div>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant={user.isFollowing ? "outline" : "default"}
                      className="text-xs px-3"
                    >
                      {user.isFollowing ? "Following" : "Follow"}
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-primary">
                Show more
              </Button>
            </Card>
          </div>

          {/* Center Content */}
          <div className="flex-1 max-w-2xl">
            <div className="space-y-6">
              {resourcePosts.map((post) => (
                <Card key={post.id} className="p-6 hover:shadow-lg transition-all duration-300 relative">
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarImage src={post.user.avatar} />
                      <AvatarFallback>{post.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* User Info */}
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="font-semibold hover:underline cursor-pointer">
                          {post.user.name}
                        </span>
                        {post.user.verified && (
                          <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                        <span className="text-muted-foreground">
                          {post.user.username}
                        </span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-muted-foreground">{post.timeAgo}</span>
                      </div>

                      {/* Categories and Urgent Badge */}
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                        {post.urgent && (
                          <Badge variant="destructive" className="animate-pulse">
                            Urgent
                          </Badge>
                        )}
                      </div>

                      {/* Post Content */}
                      <p className="text-foreground leading-relaxed">
                        {post.content}
                      </p>

                      {/* Location and Availability */}
                      <div className="bg-muted/30 rounded-lg p-3 space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2 text-primary" />
                          {post.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          Available: <span className="text-primary ml-1 font-medium">{post.availability}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-1 flex-wrap">
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                            <Repeat className="h-4 w-4 mr-1" />
                            {post.shares}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                            <Heart className="h-4 w-4 mr-1" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                            <Share className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Mail className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>

                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="p-8 text-center">
              <Button variant="outline" size="lg">
                Load More Resources
              </Button>
            </div>
          </div>

          {/* Right Sidebar - Trending Topics */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <Card className="p-4 sticky top-24">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Trending Topics
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="hover:bg-muted/50 p-2 rounded-lg cursor-pointer transition-colors">
                    <div className="font-semibold text-primary">{topic.topic}</div>
                    <div className="text-sm text-muted-foreground">{topic.posts}</div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-primary">
                Show more
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;