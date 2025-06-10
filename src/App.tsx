
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import UseCases from "./pages/UseCases";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FirstRunExperience from "./pages/case-studies/FirstRunExperience";
import SaaSDashboard from "./pages/case-studies/SaaSDashboard";
import HealthcareApp from "./pages/case-studies/HealthcareApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/usecases" element={<UseCases />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies/first-run-experience" element={<FirstRunExperience />} />
            <Route path="/case-studies/saas-dashboard" element={<SaaSDashboard />} />
            <Route path="/case-studies/healthcare-app" element={<HealthcareApp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
