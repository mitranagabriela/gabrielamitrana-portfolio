import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import userFlowsImage from "@/assets/agents-monitoring-user-flows.png";
import traceAgentSpanImage from "@/assets/trace-agent-span.png";
import designProcessImage from "@/assets/agents-monitoring-design-process.png";
import traceTimelineImage from "@/assets/trace-timeline.png";
import traceFilteringImage from "@/assets/trace-filtering.png";
import { LatencyChart } from "@/components/LatencyChart";
const AgentsMonitoring = () => {
  const heroContent = <div className="space-y-6">
    </div>;
  const sections = [{
    title: "Project Details",
    content: <div className="space-y-4">
          
          
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
          <p className="text-muted-foreground leading-relaxed">UiPath had just launched AI Agents — autonomous systems that perceive, reason, act, and learn. To help enterprises, the team introduced a dedicated space to register, monitor and govern AI agents across their lifecycle. 




The monitoring experience quickly became fragmented. Agent executions lived across design, evaluation, and runtime environments, with no clear connection between them. Enterprises struggled to see the full picture — how agents were performing, where issues originated, and what could be optimized.</p>
          
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            
            
            
            
          </ul>
        </div>
  }, {
    title: "Design Process",
    content: <div className="space-y-4">
          <div className="mt-8">
            <img src={designProcessImage} alt="Design process workflow showing discover, frame, ideate, design, and implement stages" className="w-full" />
          </div>
        </div>
  }, {
    title: "Competitive Analysis",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            To inform our design direction, I analyzed how leading platforms approach agent monitoring and observability.
          </p>
        </div>
  }, {
    title: "Discovery: Rapid Iterations with Figma Make",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I started by mapping the customer journey to understand how different personas interact with agents across the lifecycle — from design and evaluation to deployment and monitoring. This helped identify key pain points and opportunities for a more connected experience.
          </p>
          
          <div className="mt-6">
            <img src="/placeholder.svg" alt="Customer journey map placeholder" className="w-full rounded-lg border border-border" />
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            To move fast, I built a prototype in Figma Make and tested it with internal users who build and deploy agents daily. Their feedback was invaluable.
          </p>
          
          {/* Video */}
          <div className="mt-8">
            <div className="bg-gradient-to-b from-muted/50 to-muted rounded-t-2xl p-3">
              <div className="bg-background rounded-t-xl overflow-hidden border-8 border-muted/80">
                <video className="w-full h-auto" autoPlay loop muted playsInline>
                  <source src="/lovable-uploads/figma-make-prototype.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Key Insights as Cards */}
          <div className="mt-8">
            <p className="font-semibold text-foreground mb-4">Key insights:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-accent/30 rounded-lg border border-border">
                <div className="text-3xl mb-3">🔍</div>
                <p className="text-muted-foreground leading-relaxed">Users needed clear visibility into design artifacts and their connection to runtime data.</p>
              </div>
              <div className="p-6 bg-accent/30 rounded-lg border border-border">
                <div className="text-3xl mb-3">   🧑‍💻  </div>
                <p className="text-muted-foreground leading-relaxed">They lacked optimization insights and clear attribution for errors.</p>
              </div>
              <div className="p-6 bg-accent/30 rounded-lg border border-border">
                <div className="text-3xl mb-3">📈</div>
                <p className="text-muted-foreground leading-relaxed">ROI signals, AI unit usage, and efficiency data were missing.</p>
              </div>
            </div>
          </div>
        </div>
  }, {
    title: "User Flows & Iterations",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">With validated insights, I mapped end-to-end user flows from design to runtime monitoring and built high-fidelity screens for each stage. Each iteration was validated with the PM and engineers to balance technical feasibility with clarity and usability.




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
          <p className="font-bold text-foreground leading-relaxed">Key decisions:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground marker:text-foreground">
            <li><span className="font-semibold text-foreground">Explainability:</span> Added contextual information to help users understand why agents made certain decisions or actions.</li>
            
            
          </ul>
          
          {/* Two-column feature cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-8 bg-accent/30 rounded-xl p-8">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden bg-background border border-border">
                <img src={traceTimelineImage} alt="Execution trail timeline showing agent run stages" className="w-full" />
              </div>
              <p className="text-muted-foreground leading-relaxed">Added a <span className="font-semibold text-foreground">step-by-step timeline</span> to show where time is spent during agent execution, helping users quickly identify bottlenecks.</p>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden bg-background border border-border p-6 inline-flex items-center justify-center">
                <img src={traceFilteringImage} alt="Settings panel with metrics, timeline toggles and verbosity filter" className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-muted-foreground leading-relaxed">Added <span className="font-semibold text-foreground">detailed filtering</span> so users can customize the information they want to see.</p>
            </div>
          </div>
          
          {/* Laptop Frame */}
          <div className="w-full mt-8 flex justify-center">
            <div className="relative w-full max-w-4xl">
              {/* Screen */}
              <div className="bg-muted rounded-t-xl p-3 pb-0">
                <div className="bg-background rounded-t-lg overflow-hidden">
                  <video className="w-full h-auto" autoPlay loop muted playsInline>
              <source src="/lovable-uploads/trace-agent-span-video.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
                </div>
              </div>
              {/* Laptop Base */}
              <div className="bg-muted h-4 rounded-b-sm"></div>
              <div className="bg-muted/80 h-2 mx-auto w-1/3 rounded-b-lg"></div>
            </div>
          </div>
        </div>
  }, {
    title: "Evolving the Design System",
    content: <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">As part of this redesign, we also introduced a new chart visualization style to better communicate performance trends and relationships. The integration of these charts into our platform-adopted design system is work in progress.</p>
          
          <div className="mt-6">
            <LatencyChart />
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