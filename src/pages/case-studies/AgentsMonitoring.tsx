import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { ImageMagnifier } from "@/components/ImageMagnifier";
import userFlowsImage from "@/assets/agents-monitoring-user-flows.png";
import traceAgentSpanImage from "@/assets/trace-agent-span.png";
import designSystemChartsImage from "@/assets/design-system-charts.png";
const AgentsMonitoring = () => {
  const heroContent = <div className="space-y-6">
    </div>;
  const sections = [{
    title: "Project Overview",
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
    title: "Challenge",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The monitoring experience was fragmented across design, evaluation, and runtime environments. Users couldn't see the full lifecycle of their AI agents or understand how design decisions translated into runtime performance.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Key challenges included:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>No connection between design-time artifacts and deployed agent instances</li>
            <li>Lack of centralized performance data and debugging tools</li>
            <li>Missing visibility into agent behavior, errors, and optimization opportunities</li>
            <li>Difficulty identifying patterns across multiple agent executions</li>
          </ul>
        </div>
  }, {
    title: "Design Process",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I followed a user-centered approach combining rapid prototyping, stakeholder collaboration, and iterative validation:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-accent/30 rounded-lg border border-border">
              <div className="text-2xl mb-3">🔍</div>
              <p className="font-semibold text-foreground mb-2">Research & Discovery</p>
              <p className="text-sm text-muted-foreground">Conducted user interviews with internal teams building and deploying AI agents to understand pain points and workflows.</p>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-border">
              <div className="text-2xl mb-3">⚡</div>
              <p className="font-semibold text-foreground mb-2">Rapid Prototyping</p>
              <p className="text-sm text-muted-foreground">Built interactive prototypes in Figma Make to quickly test concepts and gather feedback.</p>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-border">
              <div className="text-2xl mb-3">🎯</div>
              <p className="font-semibold text-foreground mb-2">Iterative Design</p>
              <p className="text-sm text-muted-foreground">Refined user flows and interfaces through multiple iterations with PM and engineering teams.</p>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-border">
              <div className="text-2xl mb-3">✅</div>
              <p className="font-semibold text-foreground mb-2">Validation</p>
              <p className="text-sm text-muted-foreground">Tested high-fidelity designs with users to ensure technical feasibility and usability.</p>
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
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-6 bg-accent/30 rounded-lg border border-border">
              <div className="text-3xl mb-3">🔗</div>
              <p className="font-semibold text-foreground mb-2">Map Relationships</p>
              <p className="text-sm text-muted-foreground">Connect design artifacts with deployed instances.</p>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-border">
              <div className="text-3xl mb-3">📊</div>
              <p className="font-semibold text-foreground mb-2">Centralize Data</p>
              <p className="text-sm text-muted-foreground">Support debugging and performance analysis in one place.</p>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-border">
              <div className="text-3xl mb-3">💡</div>
              <p className="font-semibold text-foreground mb-2">Surface Insights</p>
              <p className="text-sm text-muted-foreground">Identify trends, deviations, and optimization opportunities.</p>
            </div>
          </div>
        </div>
  }, {
    title: "Discovery: Rapid Iterations with Figma Make",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            To move fast, I built a prototype in Figma Make and tested it with internal users who build and deploy agents daily. Their feedback was invaluable.
          </p>
          <div className="grid md:grid-cols-5 gap-8 items-start mt-8">
            <div className="space-y-4 md:col-span-2">
              <p className="font-bold text-foreground leading-relaxed">Key insights:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Users needed clear visibility into design artifacts and their connection to runtime data.</li>
                <li>They lacked optimization insights and clear attribution for errors.</li>
                <li>ROI signals, AI unit usage, and efficiency data were missing.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                These findings became the foundation for a centralized, insight-rich monitoring experience.
              </p>
            </div>
            <div className="relative md:col-span-3">
              {/* Monitor Frame */}
              <div className="bg-gradient-to-b from-muted/50 to-muted rounded-t-2xl p-3 shadow-2xl">
                {/* Monitor Bezel */}
                <div className="bg-background rounded-t-xl overflow-hidden border-8 border-muted/80">
                  <video className="w-full h-auto" controls playsInline>
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
            <img src={userFlowsImage} alt="Agent monitoring user interface showing overview and detailed performance metrics" className="w-full" />
          </div>
        </div>
  }, {
    title: "Enhancing the Agent Trace",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            To fully support debugging, we also needed to rethink the agent trace experience. The existing trace lacked clarity and depth, making it difficult to understand why an execution failed or behaved unexpectedly.
          </p>
          <p className="font-bold text-foreground leading-relaxed">Key improvements:
      </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><span className="font-semibold text-foreground">Explainability:</span> Added contextual information to help users understand why agents made certain decisions or actions.</li>
            <li><span className="font-semibold text-foreground">Smart Search Patterns:</span> Enabled users to quickly locate specific events, variables, or anomalies within complex traces.</li>
            <li><span className="font-semibold text-foreground">Transparent Token Usage:</span> Visualized token consumption clearly, helping users monitor costs and identify inefficiencies.</li>
          </ul>
          
          <div className="w-full mt-8">
            <ImageMagnifier 
              src={traceAgentSpanImage} 
              alt="Enhanced agent trace interface showing execution trail with detailed spans and metadata" 
              className="w-full rounded-lg shadow-lg" 
              magnifierSize={200}
              zoomLevel={2.5}
            />
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
          <div className="w-full mt-8">
            <img src={designSystemChartsImage} alt="Chart components in light and dark mode showing various visualization styles" className="w-full rounded-lg shadow-lg" />
          </div>
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