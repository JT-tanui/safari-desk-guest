import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Find your perfect plan</h1>
            <p className="text-muted-foreground mb-8">
              Streamline your workflow, manage projects, and empower your team with 
              SafariDesk the all-in-one task management solution.
            </p>
            <div className="flex justify-center gap-2">
              <Badge variant="outline">Monthly</Badge>
              <Badge>Annually</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="relative">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-lg">Starter Plan</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$19.99</span>
                    <span className="text-muted-foreground">/per month</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Up to 5 users</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Limited Team Projects</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Basic Task Board and Calendar view</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />File Storage 5 GB per workspace</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Basic Team Performance</li>
                </ul>
                <Button className="w-full" variant="outline">Select Plan</Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary">POPULAR</Badge>
              </div>
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-lg">Growth Plan</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$59.99</span>
                    <span className="text-muted-foreground">/per month</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Up to 15 users</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Unlimited Team Projects</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Advanced Task Management & Labels</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />File Storage 50 GB per Board</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Time Tracker</li>
                </ul>
                <Button className="w-full">Select Plan</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-lg">Enterprise Plan</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$129.99</span>
                    <span className="text-muted-foreground">/per month</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Unlimited Users</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Advanced Team Workload Management</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Build and Advanced Manager</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />File Storage & Attachments</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />24/7 Priority Support</li>
                </ul>
                <Button className="w-full" variant="outline">Select Plan</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-8">Trusted by product companies</h2>
            <Card className="max-w-md mx-auto p-6 bg-slate-900 text-white">
              <div className="text-3xl font-bold mb-2">90%</div>
              <p className="text-sm mb-4">of our customers love our services and recommend SafariDesk to their colleagues</p>
              <div className="text-2xl font-bold mb-2">4.9/5</div>
              <p className="text-sm">Average customer satisfaction score based on 2,000+ reviews</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;