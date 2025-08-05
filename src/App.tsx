import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Integration from "./pages/Integration";
import IntegrationDetails from "./pages/IntegrationDetails";
import CaseStudy from "./pages/CaseStudy";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import RequestDemo from "./pages/RequestDemo";
import Changelog from "./pages/Changelog";
import Dashboard from "./pages/Dashboard";
import Career from "./pages/Career";
import ProtectedRoute from "./components/ProtectedRoute";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/integration/:id" element={<IntegrationDetails />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/case-study/:id" element={<CaseStudyDetails />} />
          <Route path="/demo" element={<RequestDemo />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
