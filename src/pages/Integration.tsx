import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Search, Star, ExternalLink, Zap, Users, Shield } from "lucide-react";

const Integration = () => {
  // Mock integration data
  const integrations = [
    {
      id: 1,
      name: "Slack",
      description: "Get real-time notifications and manage tasks directly from Slack channels",
      category: "Communication",
      rating: 4.9,
      reviews: 2150,
      logo: "/api/placeholder/60/60",
      featured: true,
      popular: true
    },
    {
      id: 2,
      name: "Google Workspace",
      description: "Sync with Google Calendar, Drive, and Gmail for seamless workflow",
      category: "Productivity",
      rating: 4.8,
      reviews: 1890,
      logo: "/api/placeholder/60/60",
      featured: true,
      popular: true
    },
    {
      id: 3,
      name: "Microsoft Teams",
      description: "Collaborate with your team and manage projects within Microsoft Teams",
      category: "Communication",
      rating: 4.7,
      reviews: 1654,
      logo: "/api/placeholder/60/60",
      featured: false,
      popular: true
    },
    {
      id: 4,
      name: "Zapier",
      description: "Automate workflows by connecting SafariDesk with 5000+ apps",
      category: "Automation",
      rating: 4.9,
      reviews: 982,
      logo: "/api/placeholder/60/60",
      featured: true,
      popular: false
    },
    {
      id: 5,
      name: "GitHub",
      description: "Link commits, pull requests, and issues to your project tasks",
      category: "Development",
      rating: 4.8,
      reviews: 1240,
      logo: "/api/placeholder/60/60",
      featured: false,
      popular: true
    },
    {
      id: 6,
      name: "Figma",
      description: "Attach design files and prototypes directly to your project tasks",
      category: "Design",
      rating: 4.6,
      reviews: 876,
      logo: "/api/placeholder/60/60",
      featured: false,
      popular: false
    },
    {
      id: 7,
      name: "Dropbox",
      description: "Sync files and folders with your SafariDesk projects automatically",
      category: "File Storage",
      rating: 4.5,
      reviews: 743,
      logo: "/api/placeholder/60/60",
      featured: false,
      popular: false
    },
    {
      id: 8,
      name: "Salesforce",
      description: "Connect your CRM data with project management for better insights",
      category: "CRM",
      rating: 4.7,
      reviews: 567,
      logo: "/api/placeholder/60/60",
      featured: false,
      popular: false
    }
  ];

  const categories = ["All", "Communication", "Productivity", "Automation", "Development", "Design", "File Storage", "CRM"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Integrations
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Connect with your favorite tools
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Integrate SafariDesk with over 150+ popular apps and services to streamline 
            your workflow and boost productivity.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search integrations..."
              className="pl-10 pr-4 py-2"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Available Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5M+</div>
              <div className="text-sm text-muted-foreground">Tasks Synced Daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Integrations */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Integrations</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {integrations.filter(integration => integration.featured).map((integration) => (
              <Card key={integration.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-muted rounded-lg"></div>
                      <div>
                        <CardTitle className="text-lg">{integration.name}</CardTitle>
                        <Badge variant="outline" className="text-xs mt-1">{integration.category}</Badge>
                      </div>
                    </div>
                    {integration.popular && (
                      <Badge className="bg-orange-100 text-orange-800">Popular</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= Math.floor(integration.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {integration.rating} ({integration.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1" asChild>
                      <Link to={`/integration/${integration.id}`}>
                        Learn More
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Integrations */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">All Integrations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {integrations.filter(integration => !integration.featured).map((integration) => (
              <Card key={integration.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-muted rounded-lg"></div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold">{integration.name}</h3>
                      {integration.popular && (
                        <Badge variant="outline" className="text-xs">Popular</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{integration.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-muted-foreground">
                          {integration.rating} ({integration.reviews})
                        </span>
                      </div>
                      <Badge variant="outline" className="text-xs">{integration.category}</Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link to={`/integration/${integration.id}`}>View</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Integrations */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why choose SafariDesk integrations?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our integrations are built with security, reliability, and ease-of-use in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">One-Click Setup</h3>
              <p className="text-sm text-muted-foreground">
                Connect your favorite tools in seconds with our simplified setup process.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">
                All integrations use industry-standard security protocols and encryption.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Team Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Keep your entire team in sync across all your connected platforms.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need a custom integration?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find the integration you need? Our team can help you build custom 
                connections to fit your unique workflow requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Contact Sales</Button>
                <Button size="lg" variant="outline">View API Docs</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integration;
