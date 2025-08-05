import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful tools to enhance productivity
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline your workflow, manage projects, and empower your team with 
            SafariDesk the all-in-one task management solution.
          </p>
          <Button size="lg">Start today</Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">95.99%</div>
              <div className="text-sm text-muted-foreground">Customer satisfaction with our platform efficiency and ease of use</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-sm text-muted-foreground">integrations available to connect your favorite tools</div>
            </div>
            <div>
              <div className="text-muted-foreground text-sm">
                Businesses of all sizes to work smarter with goal and amazing confidence.
              </div>
              <div className="flex justify-center items-center space-x-4 mt-4">
                <span className="text-sm">Webflow</span>
                <span className="text-sm">Dropbox</span>
                <span className="text-sm">Codebase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A smarter way to work */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">A smarter way to work</h2>
            <p className="text-muted-foreground">
              Get things done faster with SafariDesk the ultimate project management solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-2 border-purple-200">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4"></div>
                <h3 className="font-semibold mb-2">Increased productivity</h3>
                <p className="text-sm text-muted-foreground">
                  Boost your team's efficiency with powerful automation and streamlined workflows.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-2 border-blue-200">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
                <h3 className="font-semibold mb-2">Enhanced collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Keep your team connected with real-time updates and seamless communication tools.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-2 border-yellow-200">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg mb-4"></div>
                <h3 className="font-semibold mb-2">Streamlined task management</h3>
                <p className="text-sm text-muted-foreground">
                  Organize, prioritize, and track tasks with our intuitive project management tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Powerful features to boost your workflow */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Powerful features to boost your workflow
            </h2>
            <p className="text-muted-foreground">
              Get things done faster with SafariDesk the ultimate project management solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-purple-100">
              <CardContent className="p-0">
                <Badge className="mb-4">Coming Soon</Badge>
                <h3 className="text-xl font-semibold mb-4">Seamless team collaboration</h3>
                <p className="text-muted-foreground mb-6">
                  Enable your team to work together efficiently with real-time updates, 
                  shared workspaces, and integrated communication tools.
                </p>
                <Button>Start today</Button>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-yellow-100">
              <CardContent className="p-0">
                <Badge className="mb-4">Coming Soon</Badge>
                <h3 className="text-xl font-semibold mb-4">Performance overview</h3>
                <p className="text-muted-foreground mb-6">
                  Get comprehensive insights into your team's performance with detailed 
                  analytics and customizable reporting dashboards.
                </p>
                <Button>Start today</Button>
              </CardContent>
            </Card>
          </div>
          
          <Card className="p-8 bg-green-100 mt-8">
            <CardContent className="p-0">
              <Badge className="mb-4">Coming Soon</Badge>
              <h3 className="text-xl font-semibold mb-4">
                Sync tasks and milestones to your calendar
              </h3>
              <p className="text-muted-foreground mb-6">
                Never miss a deadline with automatic calendar synchronization. 
                Keep track of important milestones and stay organized.
              </p>
              <Button>Start today</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our success by the numbers */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our success by the numbers</h2>
            <p className="text-muted-foreground">
              See the impact SafariDesk has made on businesses and teams worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-muted-foreground">Active users</div>
              <p className="text-sm text-muted-foreground mt-2">
                Join thousands of satisfied users who have improved their productivity with SafariDesk
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95.99%</div>
              <div className="text-muted-foreground">Customer satisfaction</div>
              <p className="text-sm text-muted-foreground mt-2">
                Our customers love using SafariDesk for their project management needs
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-muted-foreground">Integrations available</div>
              <p className="text-sm text-muted-foreground mt-2">
                Connect with your favorite tools and streamline your workflow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Frequently asked questions
              </h2>
              <p className="text-muted-foreground">
                Get quick answers to the most common questions about SafariDesk
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-2">What is SafariDesk?</h3>
                  <p className="text-sm text-muted-foreground">
                    SafariDesk is a task management platform designed for startups 
                    and growing teams to help you manage tasks efficiently.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold">Can I integrate SafariDesk with other tools?</h3>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold">What kind of support does SafariDesk offer?</h3>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold">Can I try SafariDesk for free?</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-yellow-200 rounded-lg p-12 text-center">
            <Badge variant="secondary" className="mb-4">Get Started</Badge>
            <h2 className="text-3xl font-bold mb-4">
              Supercharge your team's productivity today!
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              SafariDesk is the ultimate task management solution designed 
              for startups and fast-growing teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Book a demo</Button>
              <Button size="lg" variant="outline">Start your free trial</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;