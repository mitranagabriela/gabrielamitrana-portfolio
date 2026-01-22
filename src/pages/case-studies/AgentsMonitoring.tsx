import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import userFlowsImage from "@/assets/agents-monitoring-user-flows.png";
import traceAgentSpanImage from "@/assets/trace-agent-span.png";
import designSystemChartsImage from "@/assets/design-system-charts.png";
import designProcessImage from "@/assets/agents-monitoring-design-process.png";
const AgentsMonitoring = () => {
  const heroContent = <div className="space-y-6">
    </div>;
  const sections = [{
    title: "Project Details",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">UiPath had just launched AI Agents — autonomous systems that perceive, reason, act, and learn. To help enterprises, the team introduced a dedicated space to register, monitor and govern AI agents across their lifecycle. </p>
          
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
          <p className="text-muted-foreground leading-relaxed">UiPath had just launched AI Agents — autonomous systems that perceive, reason, act, and learn. To help enterprises, the team introduced a dedicated space to register, monitor and govern AI agents across their lifecycle. 




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
    title: "Discovery: Rapid Iterations with Figma Make",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            To move fast, I built a prototype in Figma Make and tested it with internal users who build and deploy agents daily. Their feedback was invaluable.
          </p>
          
          {/* Key Insights as Cards */}
          <div className="mt-8">
            <p className="font-semibold text-foreground mb-4">Key insights:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-accent/30 rounded-lg border border-border">
                <div className="text-3xl mb-3">🔍</div>
                <p className="text-muted-foreground leading-relaxed">Users needed clear visibility into design artifacts and their connection to runtime data.</p>
              </div>
              <div className="p-6 bg-accent/30 rounded-lg border border-border">
                <div className="text-3xl mb-3">   🧑‍💻  </div>
                <p className="text-muted-foreground leading-relaxed">They lacked optimization insights and clear attribution for errors.</p>
              </div>
              <div className="p-6 bg-accent/30 rounded-lg border border-border">
                <div className="text-3xl mb-3">📈</div>
                <p className="text-muted-foreground leading-relaxed">ROI signals, AI unit usage, and efficiency data were missing.</p>
              </div>
            </div>
          </div>

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
          <p className="font-bold text-foreground leading-relaxed">Key improvements:
      </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground marker:text-foreground">
            <li><span className="font-semibold text-foreground">Explainability:</span> Added contextual information to help users understand why agents made certain decisions or actions.</li>
            <li><span className="font-semibold text-foreground">Smart Search Patterns:</span> Enabled users to quickly locate specific events, variables, or anomalies within complex traces.</li>
            <li><span className="font-semibold text-foreground">Transparent Token Usage:</span> Visualized token consumption clearly, helping users monitor costs and identify inefficiencies.</li>
          </ul>
          
          <div className="w-full mt-8">
            <img src={traceAgentSpanImage} alt="Enhanced agent trace interface showing execution trail with detailed spans and metadata" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
  }, {
    title: "Evolving the Design System",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">As part of this redesign, we introduced a new chart visualization style to better communicate performance trends and relationships. The integration of these charts into our platform-adopted design system is work in progress.</p>
          
          <div className="w-full -mb-4">
            <img src={designSystemChartsImage} alt="Design system charts showing single line chart, multi line chart, stats chart, and table chart components" className="w-full" />
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