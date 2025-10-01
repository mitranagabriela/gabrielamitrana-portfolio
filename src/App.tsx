
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
import RevampDataService from "./pages/case-studies/RevampDataService";
import SaaSDashboard from "./pages/case-studies/SaaSDashboard";
import HealthcareApp from "./pages/case-studies/HealthcareApp";
import LurtisAIBuildabilityEstimator from "./pages/case-studies/LurtisAIBuildabilityEstimator";
import UnifiedDeveloperExperience from "./pages/case-studies/UnifiedDeveloperExperience";
import AIAgentOrchestrator from "./pages/case-studies/AIAgentOrchestrator";
import UnifiedBuild from "./pages/case-studies/UnifiedBuild";

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
            <Route path="/case-studies/revamp-data-service" element={<RevampDataService />} />
            <Route path="/case-studies/saas-dashboard" element={<SaaSDashboard />} />
            <Route path="/case-studies/healthcare-app" element={<HealthcareApp />} />
            <Route path="/case-studies/lurtis-ai-buildability-estimator" element={<LurtisAIBuildabilityEstimator />} />
            <Route path="/case-studies/unified-developer-experience" element={<UnifiedDeveloperExperience />} />
            <Route path="/case-studies/ai-agent-orchestrator" element={<AIAgentOrchestrator />} />
            <Route path="/case-studies/unified-build" element={<UnifiedBuild />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
