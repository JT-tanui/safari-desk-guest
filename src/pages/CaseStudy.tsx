import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Search, ArrowRight, TrendingUp, Users, Clock } from "lucide-react";

const CaseStudy = () => {
  // Mock case study data
  const caseStudies = [
    {
      id: 1,
      title: "TechStart Scales from 10 to 100 Employees with SafariDesk",
      summary: "Learn how TechStart used SafariDesk to manage rapid growth while maintaining team productivity and project visibility.",
      company: "TechStart Inc.",
      industry: "Technology",
      companySize: "100+ employees",
      challenge: "Rapid scaling and team coordination",
      results: {
        productivity: "+250%",
        timeToMarket: "-40%",
        teamSatisfaction: "95%"
      },
      image: "/api/placeholder/400/240",
      featured: true,
      readTime: "8 min read",
      tags: ["Scaling", "Productivity", "Team Management"]
    },
    {
      id: 2,
      title: "Marketing Agency Improves Client Delivery by 40%",
      summary: "Discover how Creative Solutions streamlined their client project management and improved delivery times using SafariDesk.",
      company: "Creative Solutions",
      industry: "Marketing",
      companySize: "25-50 employees",
      challenge: "Client project coordination",
      results: {
        delivery: "+40%",
        clientSatisfaction: "98%",
        efficiency: "+60%"
      },
      image: "/api/placeholder/400/240",
      featured: false,
      readTime: "6 min read",
      tags: ["Marketing", "Client Management", "Efficiency"]
    },
    {
      id: 3,
      title: "Remote-First Company Achieves 95% Team Satisfaction",
      summary: "See how DistributedCorp built a thriving remote culture using SafariDesk's collaboration features.",
      company: "DistributedCorp",
      industry: "Software",
      companySize: "50-75 employees",
      challenge: "Remote team collaboration",
      results: {
        satisfaction: "95%",
        communication: "+80%",
        projectSuccess: "+35%"
      },
      image: "/api/placeholder/400/240",
      featured: true,
      readTime: "7 min read",
      tags: ["Remote Work", "Collaboration", "Culture"]
    },
    {
      id: 4,
      title: "E-commerce Startup Reduces Time-to-Market by 50%",
      summary: "Learn how QuickCommerce streamlined their product development process and accelerated go-to-market strategies.",
      company: "QuickCommerce",
      industry: "E-commerce",
      companySize: "15-25 employees",
      challenge: "Product development speed",
      results: {
        timeToMarket: "-50%",
        featureDelivery: "+120%",
        bugReduction: "-70%"
      },
      image: "/api/placeholder/400/240",
      featured: false,
      readTime: "5 min read",
      tags: ["Product Development", "E-commerce", "Speed"]
    },
    {
      id: 5,
      title: "Healthcare Startup Ensures HIPAA Compliance",
      summary: "Discover how HealthTech managed sensitive healthcare projects while maintaining strict compliance requirements.",
      company: "HealthTech Solutions",
      industry: "Healthcare",
      companySize: "30-40 employees",
      challenge: "HIPAA compliance and security",
      results: {
        compliance: "100%",
        security: "+300%",
        auditPass: "Perfect"
      },
      image: "/api/placeholder/400/240",
      featured: false,
      readTime: "9 min read",
      tags: ["Healthcare", "Compliance", "Security"]
    },
    {
      id: 6,
      title: "Design Agency Streamlines Creative Workflows",
      summary: "See how PixelPerfect improved their creative process and client collaboration using SafariDesk's visual tools.",
      company: "PixelPerfect Design",
      industry: "Design",
      companySize: "10-20 employees",
      challenge: "Creative workflow management",
      results: {
        clientApproval: "+85%",
        revisionCycles: "-60%",
        projectMargin: "+30%"
      },
      image: "/api/placeholder/400/240",
      featured: false,
      readTime: "6 min read",
      tags: ["Design", "Creative", "Workflow"]
    }
  ];

  const industries = ["All", "Technology", "Marketing", "Software", "E-commerce", "Healthcare", "Design"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Case Studies
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Real results from real customers
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how companies of all sizes use SafariDesk to streamline their workflows, 
            improve team collaboration, and achieve remarkable results.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search case studies..."
              className="pl-10 pr-4 py-2"
            />
          </div>
        </div>
      </section>

      {/* Industry Filters */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {industries.map((industry) => (
              <Badge
                key={industry}
                variant={industry === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Featured Success Stories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {caseStudies.filter(study => study.featured).map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted"></div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline">{study.industry}</Badge>
                    <Badge variant="outline">{study.companySize}</Badge>
                    <span className="text-sm text-muted-foreground">{study.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.summary}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-primary">{study.company}</span>
                    <div className="flex space-x-4 text-sm">
                      {Object.entries(study.results).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-green-600">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {study.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/case-study/${study.id}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">All Case Studies</h2>
            <Button variant="outline" size="sm">Filter Results</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.filter(study => !study.featured).map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32 bg-muted"></div>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline" className="text-xs">{study.industry}</Badge>
                    <span className="text-xs text-muted-foreground">{study.readTime}</span>
                  </div>
                  
                  <h3 className="font-semibold mb-2 line-clamp-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{study.summary}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary">{study.company}</span>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-600">
                        {Object.values(study.results)[0]}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {Object.keys(study.results)[0].replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {study.tags.slice(0, 1).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/case-study/${study.id}`} className="text-xs">
                        Read More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The numbers speak for themselves</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the impact SafariDesk has made across different industries and company sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Average productivity increase</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Faster project delivery</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Team satisfaction rate</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Reduction in missed deadlines</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to write your success story?</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of companies that have transformed their workflows with SafariDesk. 
                Start your free trial today and see the results for yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Start Free Trial</Button>
                <Button size="lg" variant="outline">Schedule Demo</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;
