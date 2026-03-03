import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import userFlowsImage from "@/assets/agents-monitoring-user-flows.png";
import traceAgentSpanImage from "@/assets/trace-agent-span.png";
import traceTimelineImage from "@/assets/trace-timeline-new.png";
import traceFilteringImage from "@/assets/trace-filtering-new.png";
import competitiveAnalysisImage from "@/assets/competitive-analysis.png";
import { Separator } from "@/components/ui/separator";
import { LatencyChart } from "@/components/LatencyChart";
const AgentsMonitoring = () => {
  const heroContent = <div className="space-y-6">
    </div>;
  const designProcessSteps = [{
    title: "Discover & Empathize",
    bullets: ["Competitive analysis", "Pain points synthesis"]
  }, {
    title: "Frame problem",
    bullets: ["Define goals", "User flows"]
  }, {
    title: "Ideate & Sketch",
    bullets: ["Rapid prototyping", "Co-create with PMs", "Brainstorming"]
  }, {
    title: "Design & Test",
    bullets: ["High fidelity screens", "Internal validation"]
  }, {
    title: "Implement & Measure",
    bullets: ["Engineering handoff", "KPI setup & monitor adoption"]
  }];
  const ProcessArrow = () => <div className="-mx-[2px] mt-[21px] flex shrink-0 items-center justify-center" aria-hidden="true">
      <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
        <path d="M0 7H35" stroke="hsl(var(--muted-foreground))" strokeWidth="1.1" />
        <path d="M35 1L42 7L35 13V1Z" fill="hsl(var(--muted-foreground))" />
      </svg>
    </div>;
  const ProcessStep = ({
    title,
    bullets
  }: {
    title: string;
    bullets: string[];
  }) => <div className="min-w-0 flex-1">
      <div className="flex h-14 items-center justify-center rounded-full border border-border/70 bg-white px-4 text-center text-[1rem] font-medium leading-none tracking-tight text-muted-foreground shadow-[0_2px_10px_rgba(2,8,23,0.08)] whitespace-nowrap md:text-[1.1rem]">
        {title}
      </div>
      <div className="mt-3 space-y-1 text-muted-foreground">
        {bullets.map(item => <p key={item} className="text-[0.95rem] leading-tight">
            {item}
          </p>)}
      </div>
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
              <p className="text-muted-foreground">6 months</p>
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
          <p className="text-muted-foreground leading-relaxed">UiPath had just launched AI Agents — autonomous systems that perceive, reason, act, and learn. To help enterprises, the team introduced a dedicated space to register, monitor, and govern AI agents across their lifecycle. 




The monitoring experience quickly became fragmented. Agent executions lived across design, evaluation, and runtime environments, with no clear connection between them. Enterprises struggled to see the full picture — how agents were performing, where issues originated, and what could be optimized.</p>
          
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            
            
            
            
          </ul>
        </div>
  }, {
    title: "Design Process",
    content: <div className="space-y-4">
          <div className="w-full py-6">
            <div className="relative pb-2">
              <div className="mx-auto flex items-start gap-0">
                {designProcessSteps.map((step, index) => <div key={step.title} className="flex min-w-0 flex-1 items-start">
                    <ProcessStep title={step.title} bullets={step.bullets} />
                    {index < designProcessSteps.length - 1 ? <ProcessArrow /> : null}
                  </div>)}
              </div>
            </div>
          </div>
        </div>
  }, {
    title: "Competitive Analysis",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            To inform our design direction, I analyzed how leading platforms approach agent monitoring and observability.
          </p>
          <div className="mt-8">
            <div className="rounded-2xl border border-border/70 bg-background shadow-sm overflow-hidden font-sans">
              <div className="overflow-x-auto">
                <div className="min-w-[760px]">
                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] bg-muted/40 border-b border-border/70">
                    <div className="px-4 py-4 text-sm font-semibold text-foreground">Capability</div>
                    <div className="px-4 py-4 flex items-center justify-center">
                      <img src="/images/langsmith-color.svg" alt="Langsmith logo" className="h-6 w-auto object-contain" />
                    </div>
                    <div className="px-4 py-4 flex items-center justify-center">
                      <img src="/images/langfuse-color.svg" alt="Langfuse logo" className="h-6 w-auto object-contain" />
                    </div>
                    <div className="px-4 py-4 flex items-center justify-center gap-2">
                      <img src="/images/braintrust-logo.png" alt="Braintrust logo" className="h-6 w-6 rounded-sm object-contain" />
                      <span className="text-sm font-semibold text-foreground">Braintrust</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-border/60">
                    <div className="px-4 py-4 text-sm text-muted-foreground">Trace-level debugging</div>
                    <div className="px-4 py-4 text-center text-lg font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-lg font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-lg font-semibold text-muted-foreground">—</div>
                  </div>

                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-border/60">
                    <div className="px-4 py-4 text-sm text-muted-foreground">Prompt and model evaluation workflows</div>
                    <div className="px-4 py-4 text-center text-lg font-semibold text-muted-foreground">—</div>
                    <div className="px-4 py-4 text-center text-lg font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-lg font-semibold text-foreground">✓</div>
                  </div>

                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-border/60">
                    <div className="px-4 py-4 text-sm text-muted-foreground">Cost and token usage visibility</div>
                    <div className="px-4 py-4 text-center text-lg font-semibold text-muted-foreground">—</div>
                    <div className="px-4 py-4 text-center text-lg font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-lg font-semibold text-muted-foreground">—</div>
                  </div>

                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr]">
                    <div className="px-4 py-4 text-sm text-muted-foreground">Enterprise governance and collaboration</div>
                    <div className="px-4 py-4 text-center text-lg font-semibold text-muted-foreground">—</div>
                    <div className="px-4 py-4 text-center text-lg font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-lg font-semibold text-foreground">✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  }, {
    title: "Discovery: Rapid Iterations with Figma Make",
    content: <div className="space-y-4">
          
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
          <p className="text-muted-foreground leading-relaxed">
            I started by mapping the customer journey to understand how different personas interact with agents across the lifecycle — from design and evaluation to deployment and monitoring. This helped identify key pain points and opportunities for a more connected experience.
          </p>
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
          
          
          <div className="w-full mt-8">
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-muted/20">
              <div className="grid md:grid-cols-2">
                <div className="border-b border-border/60 p-8 md:p-10 md:border-r">
                  <h4 className="text-lg md:text-xl font-semibold text-foreground leading-tight mb-6">
                    Surface trace progress with a <span className="text-muted-foreground">clear timeline view.</span>
                  </h4>
                  <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
                    <img src="/images/trace-timeline-option2.png" alt="Timeline view for agent execution trail" className="w-full h-auto" />
                  </div>
                </div>

                <div className="border-b border-border/60 p-8 md:p-10">
                  <h4 className="text-lg md:text-xl font-semibold text-foreground leading-tight mb-6">
                    Show execution depth with <span className="text-muted-foreground">step-by-step hierarchy.</span>
                  </h4>
                  <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
                    <img src="/images/trace-execution-trail.png" alt="Execution trail hierarchy with expandable steps" className="w-full h-auto" />
                  </div>
                </div>

                <div className="border-b border-border/60 p-8 md:p-10 md:border-b-0 md:border-r">
                  <h4 className="text-lg md:text-xl font-semibold text-foreground leading-tight mb-6">
                    Add focused controls for <span className="text-muted-foreground">metrics and verbosity filtering.</span>
                  </h4>
                  <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
                    <img src="/images/trace-filter-view.png" alt="Filter menu for metrics and verbosity" className="w-full h-auto" />
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <h4 className="text-lg md:text-xl font-semibold text-foreground leading-tight mb-6">
                    Make debugging faster with <span className="text-muted-foreground">cross-step search.</span>
                  </h4>
                  <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
                    <img src="/images/trace-search-view.png" alt="Search results across agent execution attributes and tool calls" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  }, {
    title: "Next Steps",
    content: <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-3 ml-2 marker:text-foreground">
          <li>
            <strong className="text-foreground">Alerts.</strong> Introduce real-time notifications when agents hit problems — errors, high resource consumption, or slow response times.
          </li>
          <li>
            <strong className="text-foreground">Runtime trends.</strong> Classify the trajectory of agents into common "paths" the agent has taken.
          </li>
          <li>
            <strong className="text-foreground">Online evaluations.</strong> Run evaluations in real-time using live production data.
          </li>
        </ul>
  }];
  return <CaseStudyLayout title="New IA for Agents Monitoring" subtitle="Redesigning how enterprises monitor and optimize AI agents" tags={["Information Architecture", "AI Monitoring", "Enterprise UX", "Data Visualization"]} heroContent={heroContent} sections={sections} />;
};
export default AgentsMonitoring;