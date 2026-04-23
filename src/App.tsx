import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ease, durations } from "@/lib/motion";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import UseCases from "./pages/UseCases";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FirstRunExperience from "./pages/case-studies/FirstRunExperience";
import RevampDataService from "./pages/case-studies/RevampDataService";
import AgentsMonitoring from "./pages/case-studies/AgentsMonitoring";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: durations.base, ease }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/case-studies" element={<UseCases />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies/first-run-experience" element={<FirstRunExperience />} />
          <Route path="/case-studies/revamp-data-service" element={<RevampDataService />} />
          <Route path="/case-studies/agents-monitoring" element={<AgentsMonitoring />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Navigation />
          <AnimatedRoutes />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
