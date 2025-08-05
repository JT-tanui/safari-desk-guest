import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  // Mock blog data - this would come from a CMS or API in a real app
  const blogPosts = [
    {
      id: 1,
      title: "10 Project Management Tips for Remote Teams",
      excerpt: "Learn how to effectively manage remote teams with these proven project management strategies that increase productivity and collaboration.",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      category: "Project Management",
      readTime: "5 min read",
      image: "/api/placeholder/400/240",
      featured: true
    },
    {
      id: 2,
      title: "The Future of Team Collaboration Tools",
      excerpt: "Explore the latest trends in team collaboration technology and how they're shaping the future of remote work.",
      author: "Mike Chen",
      date: "Dec 12, 2024",
      category: "Technology",
      readTime: "8 min read",
      image: "/api/placeholder/400/240",
      featured: false
    },
    {
      id: 3,
      title: "Boosting Productivity with Task Automation",
      excerpt: "Discover how to automate repetitive tasks and free up time for more strategic work using SafariDesk's automation features.",
      author: "Emily Davis",
      date: "Dec 10, 2024",
      category: "Productivity",
      readTime: "6 min read",
      image: "/api/placeholder/400/240",
      featured: false
    },
    {
      id: 4,
      title: "Building Better Team Communication",
      excerpt: "Essential strategies for improving team communication and reducing miscommunication in distributed teams.",
      author: "Alex Rodriguez",
      date: "Dec 8, 2024",
      category: "Team Management",
      readTime: "7 min read",
      image: "/api/placeholder/400/240",
      featured: false
    },
    {
      id: 5,
      title: "Scaling Your Business with the Right Tools",
      excerpt: "How to choose the right project management tools as your business grows and your team expands.",
      author: "Lisa Park",
      date: "Dec 5, 2024",
      category: "Business Growth",
      readTime: "9 min read",
      image: "/api/placeholder/400/240",
      featured: false
    },
    {
      id: 6,
      title: "Security Best Practices for Remote Work",
      excerpt: "Keep your team and data secure with these essential security practices for remote and hybrid teams.",
      author: "David Wilson",
      date: "Dec 3, 2024",
      category: "Security",
      readTime: "4 min read",
      image: "/api/placeholder/400/240",
      featured: false
    }
  ];

  const categories = ["All", "Project Management", "Technology", "Productivity", "Team Management", "Business Growth", "Security"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Blog
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Insights & Resources
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the latest trends, tips, and best practices for project management, 
            team collaboration, and productivity.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search articles..."
              className="pl-10 pr-4 py-2"
            />
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

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-muted"></div>
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4">{post.category}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button asChild>
                    <Link to={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted"></div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{post.category}</Badge>
                  <h3 className="font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <User className="w-3 h-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="w-3 h-3 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                    <Link to={`/blog/${post.id}`} className="text-primary hover:text-primary/80">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Get the latest insights and tips delivered straight to your inbox. 
                Join thousands of professionals already subscribed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
