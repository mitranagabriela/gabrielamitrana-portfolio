import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { useState } from "react";
import userFlowsImage from "@/assets/agents-monitoring-user-flows.png";
import agentTraceImage from "@/assets/agent-trace-interface.png";

const AgentsMonitoring = () => {
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMagnifierPosition({ x, y });
  };
  const heroContent = <div className="space-y-6">
    </div>;
  const sections = [{
    title: "Overview",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">UiPath had just launched AI Agents — autonomous systems that perceive, reason, act, and learn. To help enterprises, the team introduced a dedicated space to register, monitor and govern AI agents across their lifecycle. </p>
          <p className="text-muted-foreground leading-relaxed">
            However, the monitoring experience quickly became fragmented. Agent executions lived across design, evaluation, and runtime environments, with no clear connection between them. Enterprises struggled to see the full picture — how agents were performing, where issues originated, and what could be optimized.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Status:</p>
              <p className="text-muted-foreground">Ongoing</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Timeline:</p>
              <p className="text-muted-foreground">4 months</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Role:</p>
              <p className="text-muted-foreground">Lead Designer</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Collaborators:</p>
              <p className="text-muted-foreground">1 PM, 6 Engineers</p>
            </div>
          </div>
        </div>
  }, {
    title: "Vision & Business Goals",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Our goal was to connect the dots between design-time agent artifacts and their deployed instances, giving users visibility into the full lifecycle of agent executions.
          </p>
          <p className="font-bold text-foreground leading-relaxed">Key business objectives included:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Map the relationships between design artifacts and deployed instances.</li>
            <li>Centralize agent execution data to support debugging and performance analysis.</li>
            <li>Surface trends, deviations, and opportunities for optimization—all in one place.</li>
          </ul>
        </div>
  }, {
    title: "Discovery: Rapid Iterations with Figma Make",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            To move fast, I built a prototype in Figma Make and tested it with internal users who build and deploy agents daily. Their feedback was invaluable.
          </p>
          <p className="font-bold text-foreground leading-relaxed">Key insights:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Users needed clear visibility into design artifacts and their connection to runtime data.</li>
            <li>They lacked optimization insights and clear attribution for errors.</li>
            <li>ROI signals, AI unit usage, and efficiency data were missing.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            These findings became the foundation for a centralized, insight-rich monitoring experience.
          </p>
          <div className="mt-8">
            <div className="relative mx-auto max-w-4xl">
              {/* Monitor Frame */}
              <div className="bg-gradient-to-b from-muted/50 to-muted rounded-t-2xl p-3 shadow-2xl">
                {/* Monitor Bezel */}
                <div className="bg-background rounded-t-xl overflow-hidden border-8 border-muted/80">
                  <video 
                    className="w-full h-auto"
                    controls
                    playsInline
                  >
                    <source src="/lovable-uploads/figma-make-prototype.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
  }, {
    title: "User Flows & Iterations",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            With validated insights, I mapped end-to-end user flows from design to runtime monitoring and built high-fidelity screens for each stage.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Each iteration was validated with the PM and engineers to balance technical feasibility with clarity and usability.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our biggest challenge was simplifying complexity — helping power users to debug, track failures, and identify common patterns without overwhelming them.
          </p>
          <div className="mt-8">
            <img 
              src={userFlowsImage} 
              alt="Agent monitoring user interface showing overview and detailed performance metrics" 
              className="w-full"
            />
          </div>
        </div>
  }, {
    title: "Enhancing the Agent Trace",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            To fully support debugging, we also needed to rethink the agent trace experience. The existing trace lacked clarity and depth, making it difficult to understand why an execution failed or behaved unexpectedly.
          </p>
          <p className="font-bold text-foreground leading-relaxed">We introduced several key improvements:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><span className="font-semibold text-foreground">Explainability:</span> Added contextual information to help users understand why agents made certain decisions or actions.</li>
            <li><span className="font-semibold text-foreground">Smart Search Patterns:</span> Enabled users to quickly locate specific events, variables, or anomalies within complex traces.</li>
            <li><span className="font-semibold text-foreground">Transparent Token Usage:</span> Visualized token consumption clearly, helping users monitor costs and identify inefficiencies.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            These updates transformed the trace from a simple log into a powerful diagnostic and optimization tool, empowering users to uncover root causes faster and act with confidence.
          </p>
          <div className="mt-8 relative">
            <div 
              className="relative rounded-lg overflow-hidden border border-border shadow-2xl cursor-crosshair"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setShowMagnifier(true)}
              onMouseLeave={() => setShowMagnifier(false)}
            >
              <img 
                src={agentTraceImage} 
                alt="Agent trace interface showing execution details and debugging information" 
                className="w-full"
              />
              {/* Interactive Magnifier */}
              {showMagnifier && (
                <div 
                  className="absolute w-64 h-64 rounded-full border-4 border-primary shadow-2xl overflow-hidden bg-background/95 backdrop-blur-sm pointer-events-none transition-opacity duration-200"
                  style={{
                    left: `${magnifierPosition.x}px`,
                    top: `${magnifierPosition.y}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src={agentTraceImage} 
                      alt="Magnified view of agent execution details" 
                      className="absolute"
                      style={{
                        width: '200%',
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% - ${magnifierPosition.x}px), calc(-50% - ${magnifierPosition.y}px))`,
                      }}
                    />
                  </div>
                  {/* Magnifier glass effect */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full border-4 border-primary bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border-2 border-primary"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
  }, {
    title: "Evolving the Design System",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            As part of this redesign, we introduced a new chart visualization style to better communicate performance trends and relationships.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The success of these visuals led to their adoption into the company-wide design system, extending the project's impact beyond this feature.
          </p>
        </div>
  }, {
    title: "Results",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Currently in progress — early feedback suggests the new structure improves clarity, cross-team debugging, and decision-making for enterprise AI teams.
          </p>
        </div>
  }];
  return <CaseStudyLayout title="New IA for Agents Monitoring" subtitle="Redesigning how enterprises monitor and optimize AI agents" tags={["Information Architecture", "AI Monitoring", "Enterprise UX", "Data Visualization"]} heroContent={heroContent} sections={sections} />;
};
export default AgentsMonitoring;