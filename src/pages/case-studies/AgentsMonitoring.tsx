import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import userFlowsImage from "@/assets/agents-monitoring-user-flows.png";
const AgentsMonitoring = () => {
  const heroContent = <div className="space-y-6">
    </div>;
  const userJourneySteps = [{
    title: "Agent Library",
    bullets: [
      "Scan available agents",
      "Search & filter to find specific agents",
      "Click agent card to dive deeper"
    ]
  }, {
    title: "Agent Overview",
    bullets: [
      "Spot recent errors & jump to details",
      "Assess health & performance metrics",
      "Filter by time range"
    ]
  }, {
    title: "Stage Tabs",
    bullets: [
      "Design — config history, prompt & schema changes",
      "Evaluation — test results & accuracy scores",
      "Deployments — executions & failure investigation",
      "Feedback — review feedback on executions"
    ]
  }];
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
    bullets: ["High-fidelity screens", "Internal validation"]
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
              <p className="text-muted-foreground">Completed</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Timeline:</p>
              <p className="text-muted-foreground">6 months</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Role:</p>
              <p className="text-muted-foreground">Lead Product Designer</p>
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
          <p className="text-muted-foreground leading-relaxed">UiPath had just launched AI Agents — autonomous systems that perceive, reason, act, and learn. To help enterprises, the team introduced a dedicated space to monitor agents executions in production.</p>
          <p className="text-muted-foreground leading-relaxed">As adoption grew, the monitoring experience quickly became fragmented. Agent executions lived across design, evaluation, and runtime environments, with no clear connection between them. Enterprises struggled to see the full picture — how agents were performing, where issues originated, and what could be optimized.</p>
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
          To inform our design direction, I analyzed how leading platforms approach agent monitoring and observability. This helped identify the most critical capabilities users expect when managing AI agents at scale and allowed us to prioritize the features with the highest impact.          </p>
          <div className="mt-8">
            <div className="rounded-2xl border border-border/70 bg-background shadow-sm overflow-hidden font-sans">
              <div className="overflow-x-auto">
                <div className="min-w-[760px]">
                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] bg-muted/40 border-b border-border/70">
                    <div className="px-4 py-4 text-sm font-medium tracking-wide text-foreground">Capability</div>
                    <div className="px-4 py-4 flex items-center justify-center gap-2">
                      <img src="/images/langsmith-color.svg" alt="Langsmith logo" className="h-6 w-auto object-contain" />
                      <span className="text-sm font-medium tracking-wide text-foreground">LangSmith</span>
                    </div>
                    <div className="px-4 py-4 flex items-center justify-center gap-2">
                      <img src="/images/langfuse-color.svg" alt="Langfuse logo" className="h-6 w-auto object-contain" />
                      <span className="text-sm font-medium tracking-wide text-foreground">Langfuse</span>
                    </div>
                    <div className="px-4 py-4 flex items-center justify-center gap-2">
                      <img src="/images/braintrust-logo.png" alt="Braintrust logo" className="h-6 w-6 rounded-sm object-contain" />
                      <span className="text-sm font-medium tracking-wide text-foreground">Braintrust</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-border/60">
                    <div className="px-4 py-4 text-sm leading-snug text-muted-foreground">Performance metrics</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">✓</div>
                  </div>

                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-border/60">
                    <div className="px-4 py-4 text-sm leading-snug text-muted-foreground">Cost and token usage visibility</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">✓</div>
                  </div>

                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-border/60">
                    <div className="px-4 py-4 text-sm leading-snug text-muted-foreground">Trace-level debugging</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">✓</div>
                  </div>

                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-border/60">
                    <div className="px-4 py-4 text-sm leading-snug text-muted-foreground">Trace-level annotations</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">—</div>
                  </div>
                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr]">
                    <div className="px-4 py-4 text-sm leading-snug text-muted-foreground">Custom alerts and notifications</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">✓</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">—</div>
                    <div className="px-4 py-4 text-center text-base font-semibold text-foreground">—</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  }, 
  {
    title: "User Journeys & Information Architecture",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I mapped the end-to-end journey of developers and operators — from discovering agents in the library, to assessing health at a glance, to drilling into specific lifecycle stages for deeper investigation. This helped establish an information hierarchy driven by real user goals. 
          </p>
          <div className="mt-8">
            <img src="/images/Flow journey.png" alt="User journey and information architecture diagram" className="w-full rounded-lg" />
          </div>
        </div>
  },
  {
    title: "Rapid Iterations with Figma Make",
    content: <div className="space-y-4">
          
          <p className="text-muted-foreground leading-relaxed">
          To quickly validate the new information architecture, I built an interactive prototype using Figma Make and tested it with internal developers and AI engineers who design and deploy agents daily.
          These sessions helped validate our assumptions and uncover insights about how teams monitor and debug agents in real-world scenarios.          </p>
          {/* Key Insights as Cards */}
          <div className="mt-8">
          <p className="font-semibold text-foreground mb-4">Key Insights:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-accent/30 rounded-lg border border-border">
              <div className="text-3xl mb-3">🔍</div>
              <p className="text-muted-foreground leading-relaxed">Users needed clear visibility into design artifacts and their connection to runtime data.</p>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-border">
              <div className="text-3xl mb-3">🧑‍💻</div>
              <p className="text-muted-foreground leading-relaxed">Teams needed optimization insights and clear attribution for errors.</p>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-border">
              <div className="text-3xl mb-3">📈</div>
              <p className="text-muted-foreground leading-relaxed">Signals such as ROI, AI unit usage, and efficiency metrics were essential for evaluating agent performance.</p>
            </div>
          </div>
        </div>

          {/* Video */}
          <div className="mt-8">
            <div className="bg-gradient-to-b from-muted/50 to-muted rounded-2xl p-3">
              <div className="bg-background rounded-xl overflow-hidden border-8 border-muted/80">
                <video className="w-full h-auto" autoPlay loop muted playsInline>
                  <source src="/videos/figma-make-prototype.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

        </div>
  }, {
    title: "Iterations & High Fidelity Screens",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">With the insights validated, I focused on designing the runtime monitoring experience.
          I created high-fidelity screens that help users quickly understand agent health, investigate failures, and identify opportunities for optimization.
          </p>
          <p className="text-muted-foreground leading-relaxed">One of the main design challenges was organizing a large volume of monitoring data while keeping the interface easy to scan. I focused on structuring the information in a clear way, while still highlighting critical signals such as errors and degraded agent health.</p>
          <div className="mt-8">
            <img src={userFlowsImage} alt="Agent monitoring user interface showing overview and detailed performance metrics" className="w-full" />
          </div>
        </div>
  }, {
    title: "Enhancing the Agent Trace",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
          Once the new monitoring experience was established, we focused on improving the agent trace experience, enabling users to debug executions and quickly identify errors or unexpected behaviors.</p>
          <p className="text-muted-foreground leading-relaxed">
          The existing trace view had poor scanability, making it difficult to find relevant information or customize how data was displayed. In addition, there was no annotation system, preventing users from leaving feedback or documenting issues within a specific execution trajectory.          </p>
          
          
          <div className="w-full mt-8">
            <div className="space-y-3">
              
            {/* Key Decisions as Cards */}
            <div className="mt-8">
            <p className="font-semibold text-foreground mb-4">Key Decisions:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-accent/30 rounded-lg border border-border">
                <div className="text-3xl mb-3">📊</div>
                <p className="text-muted-foreground leading-relaxed">Introduced a timeline view to visualize the progression of agent execution.</p>
              </div>
              <div className="p-6 bg-accent/30 rounded-lg border border-border">
                <div className="text-3xl mb-3">🗂️</div>
                <p className="text-muted-foreground leading-relaxed">Added filters and controls to surface the most relevant trace information.</p>
              </div>
              <div className="p-6 bg-accent/30 rounded-lg border border-border">
                <div className="text-3xl mb-3">💬</div>
                <p className="text-muted-foreground leading-relaxed">Implemented a feedback system with tags and comments, allowing teams to annotate traces.</p>
              </div>
            </div>
          </div>


        </div>
            </div>

          {/* Video */}
          <div className="mt-8">
            <div className="bg-gradient-to-b from-muted/50 to-muted rounded-2xl p-3">
              <div className="bg-background rounded-xl overflow-hidden border-8 border-muted/80">
                <video className="w-full h-auto" autoPlay loop muted playsInline>
                  <source src="/videos/agent-trace-enhancing.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          </div>

  }, {
    title: "Metrics to Monitor",
    content: <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">The redesign is implemented but monitoring its adoption is currently in progress. The team is actively validating impact across key outcomes:</p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-accent/30 p-6 rounded-lg border">
              <p className="text-l font-semibold mb-2">Deployed Run Rate</p>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <p className="text-l font-semibold mb-2">Created to Deployed Rate</p>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <p className="text-l font-semibold mb-2">Paid Units</p>
            </div>
          </div>
        </div>
  }, {
    title: "Next Steps",
    content: <div className="space-y-4">
        <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-3 ml-2 marker:text-foreground">
          <li>
            <strong className="text-foreground">Alerts.</strong> Real-time notifications when agents encounter issues such as high resource consumption, or slow response times.
          </li>
          <li>
            <strong className="text-foreground">Runtime trends.</strong> Identifying common execution paths to understand how agents behave in production.
          </li>
          <li>
            <strong className="text-foreground">Online evaluations.</strong> Running evaluations on live production data to measure agent quality.
          </li> 
          <li>
            <strong className="text-foreground">Enhanced feedback capabilities.</strong> Aggregating user feedback by sentiment and transforming it into actionable product insights.
          </li>
        </ul>
      </div>
  }];

  return <CaseStudyLayout title="Improving Runtime Monitoring for Agents" subtitle="Redesigned how enterprises monitor and optimize AI agents" tags={["Information Architecture", "AI Monitoring", "Enterprise UX", "Data Visualization"]} heroContent={heroContent} sections={sections} />;
};
export default AgentsMonitoring;