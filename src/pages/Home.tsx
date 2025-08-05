import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Users, 
  Calendar, 
  BarChart3,
  Zap,
  Shield,
  Clock,
  Target,
  TrendingUp,
  Globe,
  PlayCircle
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Enhanced */}
      <section className="relative pt-32 pb-24 px-4 text-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 text-left lg:text-left">
              <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700">
                🚀 New: AI-Powered Task Management
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your go-to 
                <span className="text-blue-600"> productivity </span>
                powerhouse for 
                <span className="text-purple-600"> remote teams</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Streamline your workflow, manage projects, and empower your team with 
                SafariDesk - the all-in-one task management solution trusted by 10,000+ teams worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" asChild>
                  <Link to="/signup">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
                  <Link to="/demo">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <Avatar key={i} className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-blue-100">U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span>10,000+ happy users</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-t-lg mb-4"></div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Today's Tasks</h3>
                      <span className="text-sm text-gray-500">12 tasks</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { title: "Design new homepage", status: "completed", color: "bg-green-100" },
                        { title: "Review marketing campaign", status: "in-progress", color: "bg-blue-100" },
                        { title: "Team standup meeting", status: "pending", color: "bg-yellow-100" }
                      ].map((task, index) => (
                        <div key={index} className={`p-3 rounded-lg ${task.color} flex items-center gap-3`}>
                          <CheckCircle className="h-4 w-4" />
                          <span className="text-sm">{task.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">72%</div>
                    <div className="text-xs text-gray-600">Productivity Boost</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">25+</div>
                    <div className="text-xs text-gray-600">Integrations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600">10,000+</div>
              <div className="text-sm text-gray-600">Active Users</div>
              <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +25% this month
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-green-600">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
              <div className="text-xs text-gray-500">Last 12 months</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600">150+</div>
              <div className="text-sm text-gray-600">Integrations</div>
              <div className="text-xs text-gray-500">And growing</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600">4.9/5</div>
              <div className="text-sm text-gray-600">User Rating</div>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase - Enhanced */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What makes SafariDesk unique</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to boost productivity and streamline collaboration 
              for modern remote teams.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Feature 1 */}
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700">Team Collaboration</Badge>
              <h3 className="text-3xl font-bold mb-4">Real-time collaboration that just works</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Keep your team connected with real-time updates, seamless communication tools, 
                and shared workspaces that boost productivity by 40%.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Real-time updates and notifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Shared workspaces and projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Integrated chat and video calls</span>
                </li>
              </ul>
              <Button variant="outline" asChild>
                <Link to="/features">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Team Activity</h4>
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="space-y-3">
                      {[
                        { user: "Sarah", action: "completed task", time: "2m ago", avatar: "S" },
                        { user: "Mike", action: "added comment", time: "5m ago", avatar: "M" },
                        { user: "Alex", action: "updated project", time: "8m ago", avatar: "A" }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 bg-white rounded">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{activity.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <span className="text-sm">{activity.user} {activity.action}</span>
                            <div className="text-xs text-gray-500">{activity.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Image/Demo */}
            <div className="order-2 lg:order-1">
              <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Seamless Integrations</h4>
                      <Globe className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {['Slack', 'Gmail', 'Figma', 'GitHub', 'Zoom', 'Drive', 'Notion', '+140'].map((tool, index) => (
                        <div key={index} className="bg-white p-3 rounded text-center text-xs font-medium">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-green-100 text-green-700">Integrations</Badge>
              <h3 className="text-3xl font-bold mb-4">Connect with your favorite tools</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Seamlessly integrate with 150+ tools your team already uses. From Slack to GitHub, 
                from Figma to Google Drive - we've got you covered.
              </p>
              <Button asChild>
                <Link to="/integration">
                  View All Integrations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Productivity Toolkit */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Your essential productivity toolkit</h2>
            <p className="text-muted-foreground">Everything you need to manage tasks and boost team collaboration</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-purple-100 hover:bg-purple-200 transition-colors">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-200 rounded-lg mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Team Collaboration</h3>
                <p className="text-sm text-gray-600 mb-4">Keep your team connected and aligned with real-time updates and communication tools.</p>
                <Button size="sm" variant="outline">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-yellow-100 hover:bg-yellow-200 transition-colors">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-yellow-200 rounded-lg mb-4 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-2">Smart Scheduling</h3>
                <p className="text-sm text-gray-600 mb-4">Manage deadlines with visual calendar integration and intelligent timeline planning.</p>
                <Button size="sm" variant="outline">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-green-100 hover:bg-green-200 transition-colors">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-200 rounded-lg mb-4 flex items-center justify-center">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Task Management</h3>
                <p className="text-sm text-gray-600 mb-4">Organize, prioritize, and track tasks with our intuitive project management system.</p>
                <Button size="sm" variant="outline">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Progress Tracking Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-12">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-4">Complete view of your team's progress</h2>
              <p className="text-xl text-gray-700 mb-6">A personalized workspace for every team member</p>
              <p className="text-gray-600 mb-8">
                Get a bird's eye view of all your projects, track progress in real-time, and make data-driven decisions 
                with comprehensive analytics and reporting tools that scale with your team.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/features">Explore Features</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/demo">Try Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What our users say</h2>
            <p className="text-muted-foreground">
              See what people are saying about SafariDesk
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Project Manager",
                company: "TechCorp",
                testimonial: "SafariDesk has transformed how our team collaborates and manages projects. It's intuitive and very flexible.",
                avatar: "SJ"
              },
              {
                name: "Mike Chen",
                role: "Startup Founder",
                company: "InnovateLab",
                testimonial: "The best investment we made for our productivity. Our team efficiency increased by 40% since we started using SafariDesk.",
                avatar: "MC"
              },
              {
                name: "Emily Davis",
                role: "Operations Director",
                company: "GrowthCo",
                testimonial: "Simple yet powerful. SafariDesk helps us stay organized and hit our deadlines consistently. Highly recommended!",
                avatar: "ED"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 bg-slate-900 text-white">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm mb-6 leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-blue-600 text-white">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Trusted by leading companies worldwide</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-lg font-semibold">Webflow</span>
            <span className="text-lg font-semibold">Dropbox</span>
            <span className="text-lg font-semibold">Notion</span>
            <span className="text-lg font-semibold">Zapier</span>
            <span className="text-lg font-semibold">Figma</span>
            <span className="text-lg font-semibold">Slack</span>
          </div>
        </div>
      </section>

      {/* Integration Preview */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">SafariDesk Integrations</h2>
          <p className="text-muted-foreground mb-8">Connect to Your Favorite Tools</p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-12">
            Seamlessly integrate SafariDesk with 150+ tools your team already uses. 
            From communication platforms to file storage solutions, we've got you covered.
          </p>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12 max-w-4xl mx-auto">
            {[
              'Slack', 'Gmail', 'Figma', 'GitHub', 'Zoom', 'Drive', 'Notion', 'Trello',
              'Asana', 'Teams', 'Dropbox', 'Linear', 'Jira', 'Discord', 'Calendly', '+135'
            ].map((tool, i) => (
              <div key={i} className="aspect-square bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-medium text-center px-1">{tool}</span>
              </div>
            ))}
          </div>
          
          <Button asChild>
            <Link to="/integration">
              View All Integrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-muted-foreground">
              Get quick answers to the most common questions about SafariDesk
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What is SafariDesk?",
                answer: "SafariDesk is a comprehensive task management platform designed for startups and growing teams to help you manage projects, collaborate effectively, and boost productivity."
              },
              {
                question: "Can I integrate SafariDesk with other tools?",
                answer: "Yes! SafariDesk integrates with 150+ popular tools including Slack, GitHub, Figma, Google Drive, and many more to streamline your workflow."
              },
              {
                question: "Is SafariDesk mobile-friendly?",
                answer: "Absolutely! SafariDesk works seamlessly across all devices with responsive design and dedicated mobile apps for iOS and Android."
              },
              {
                question: "What kind of support does SafariDesk offer?",
                answer: "We provide 24/7 customer support via chat, email, and video calls. Plus access to our comprehensive knowledge base and community forums."
              },
              {
                question: "Can I try SafariDesk for free?",
                answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-12 text-center text-white">
            <Badge variant="secondary" className="mb-4 bg-white text-blue-600">Get Started Today</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Supercharge your team's productivity today!
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Join 10,000+ teams who trust SafariDesk to manage their projects and boost productivity. 
              Start your free trial today - no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link to="/demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;