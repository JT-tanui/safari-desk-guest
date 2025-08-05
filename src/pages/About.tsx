import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-6">About our company</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            SafariDesk helps teams work more efficiently by providing 
            the right tools and features teams need.
          </p>
          
          <Card className="p-8 bg-slate-900 text-white inline-block">
            <h3 className="text-xl font-semibold mb-2">Empowering teams to achieve more</h3>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our success by the numbers</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-muted-foreground">Happy customers trust SafariDesk to manage their projects and streamline workflows</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95.99%</div>
              <div className="text-muted-foreground">Customer satisfaction rate with our platform's efficiency and ease of use</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-muted-foreground">Available integrations to connect with your favorite productivity tools</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our company's values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Innovation and creativity</h3>
              <p className="text-sm text-muted-foreground">We constantly innovate to provide cutting-edge solutions</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Customer-centric approach</h3>
              <p className="text-sm text-muted-foreground">Our customers are at the heart of everything we do</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Excellence and quality</h3>
              <p className="text-sm text-muted-foreground">We strive for excellence in every aspect of our work</p>
            </Card>
          </div>

          <div className="bg-green-100 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Interactive dashboard</h3>
            <div className="text-2xl font-bold mb-2">72%</div>
            <p className="text-sm text-muted-foreground">increase in team productivity</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet our team</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Sarah M.", role: "Co-Founder" },
              { name: "Mike T.", role: "CTO" },
              { name: "Jessica R.", role: "Lead Designer" },
              { name: "Alex Chen", role: "Product Manager" },
              { name: "Emily Davis", role: "Marketing Director" },
              { name: "David Wilson", role: "Senior Developer" },
              { name: "Lisa Park", role: "UX Designer" },
              { name: "Ryan Brown", role: "Customer Success" }
            ].map((member, index) => (
              <Card key={index} className="p-4 text-center">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;