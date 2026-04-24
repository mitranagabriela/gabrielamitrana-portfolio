import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { FullBleedBanner } from "@/components/FullBleedBanner";
import { InsightCard } from "@/components/InsightCard";
import { ProcessDiagram } from "@/components/ProcessDiagram";
import { ProjectDetails } from "@/components/ProjectDetails";
import { ShowcaseFrame } from "@/components/ShowcaseFrame";
import { StatCard } from "@/components/StatCard";
import userFlowsImage from "@/assets/agents-monitoring-user-flows.png";
import { Search, Cpu, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EMERGING_THEMES = [
  {
    title: "Performance metrics",
    description: "Track latency, throughput, and success rates to understand how agents perform.",
  },
  {
    title: "Cost and token usage visibility",
    description: "Monitor token consumption and cost per execution to manage spend.",
  },
  {
    title: "Trace-level debugging",
    description: "Drill into traces to investigate failures and unexpected behavior.",
  },
  {
    title: "Error transparency",
    description: "See how often errors happen and where problems come from.",
  },
];

const TRACE_SUBFEATURES = [
  {
    title: "Timeline view",
    description:
      "Introduced a chronological timeline that makes it easy to follow how an agent executed step by step, spot slow segments, and understand the order of tool calls and reasoning.",
    image: "/images/timeline.png",
  },
  {
    title: "Filtering",
    description:
      "Implemented filtering so users can quickly isolate the exact aspects of an execution they need to inspect without scanning through noise.",
    image: "/images/filter.png",
  },
  {
    title: "Searching",
    description:
      "Added search across both step names and step content, helping users quickly locate a specific tool invocation, prompt, or output within long traces.",
    image: "/images/search.png",
  },
  {
    title: "Feedback annotations",
    description:
      "Built feedback annotations and custom tagging so teams can capture issues and noteworthy behaviors in context, making follow-up and collaboration more effective.",
    image: "/images/annotate.png",
  },
];

const IA_PURPLE = "hsl(var(--brand-gradient-end))";

const IA_LINEAR = ["Agents Landing Page", "Agents Library", "Agent Details"];
const IA_BRANCHES: { title: string; child?: string }[] = [
  { title: "Design Artifacts", child: "Edit the Agent" },
  { title: "Deployed Runs", child: "Debug the Trace" },
  { title: "Feedback & Memory" },
];

const IAPill = ({
  children,
  equalWidth = false,
}: {
  children: ReactNode;
  equalWidth?: boolean;
}) => (
  <div
    className={`inline-flex h-10 items-center justify-center rounded-full border border-border/70 bg-white px-4 text-sm font-medium leading-none tracking-tight text-muted-foreground shadow-ambient-strong whitespace-nowrap ${
      equalWidth ? "min-w-[9rem]" : ""
    }`}
  >
    {children}
  </div>
);

const IADownArrow = () => (
  <svg
    width="14"
    height="32"
    viewBox="0 0 14 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="block"
    aria-hidden
  >
    <path d="M7 0V26" stroke={IA_PURPLE} strokeWidth="1.5" />
    <path d="M1 26L7 32L13 26Z" fill={IA_PURPLE} />
  </svg>
);

const IADiagram = () => (
  <div className="flex flex-col items-center">
    {IA_LINEAR.map((title, i) => (
      <div key={title} className="flex flex-col items-center">
        {i > 0 ? <IADownArrow /> : null}
        <IAPill>{title}</IAPill>
      </div>
    ))}
    <div
      style={{ width: "1.5px", height: 16, backgroundColor: IA_PURPLE }}
      aria-hidden
    />
    <div className="relative grid w-full grid-cols-3 gap-x-6 pt-4">
      <svg
        className="absolute top-0"
        style={{ left: "calc(16.6667% - 15px)", overflow: "visible" }}
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        aria-hidden
      >
        <path
          d="M14 0.75 A 7 7 0 0 0 7 7.75 L 7 16"
          stroke={IA_PURPLE}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <svg
        className="absolute top-0"
        style={{ right: "calc(16.6667% - 15px)", overflow: "visible" }}
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 0.75 A 7 7 0 0 1 7 7.75 L 7 16"
          stroke={IA_PURPLE}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <div
        className="absolute top-0"
        style={{
          left: "calc(16.6667% - 1px)",
          right: "calc(16.6667% - 1px)",
          height: "1.5px",
          backgroundColor: IA_PURPLE,
        }}
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-0"
        style={{
          width: "1.5px",
          height: 16,
          backgroundColor: IA_PURPLE,
          transform: "translateX(-0.75px)",
        }}
        aria-hidden
      />
      {IA_BRANCHES.map((col) => (
        <div key={col.title} className="flex flex-col items-center">
          <IADownArrow />
          <IAPill equalWidth>{col.title}</IAPill>
          {col.child ? (
            <>
              <IADownArrow />
              <IAPill equalWidth>{col.child}</IAPill>
            </>
          ) : null}
        </div>
      ))}
    </div>
  </div>
);

const COMPETITOR_GROUPS = [
  {
    name: "Braintrust",
    logo: "/images/braintrust-logo.png",
    logoClass: "h-6 w-6 rounded-sm object-contain",
    images: ["/images/braintrust.png"],
  },
  {
    name: "LangSmith",
    logo: "/images/langsmith-color.svg",
    logoClass: "h-6 w-auto object-contain",
    images: ["/images/langsmith1.png", "/images/langsmith2.png"],
  },
  {
    name: "Langfuse",
    logo: "/images/langfuse-color.svg",
    logoClass: "h-6 w-auto object-contain",
    images: ["/images/langfuse1.png", "/images/langfuse2.png"],
  },
];

const GatheringInsights = () => {
  const themesRef = useRef<HTMLDivElement>(null);
  const [matchedHeight, setMatchedHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = themesRef.current;
    if (!el) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => {
      setMatchedHeight(mq.matches ? el.getBoundingClientRect().height : null);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    mq.addEventListener("change", update);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground leading-relaxed">
        Agents were still in their early adoption phase, so there was no settled answer on which metrics would bring the most value to enterprises running them in production. To navigate that ambiguity, I analysed how leading platforms were approaching agent monitoring and observability.
      </p>
      <p className="font-semibold text-foreground mb-4">Key Insights:</p>
            <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:items-start md:gap-14">
        <div ref={themesRef} className="space-y-4">
          {EMERGING_THEMES.map((theme) => (
            <div
              key={theme.title}
              className="rounded-xl border border-border/60 bg-muted/30 p-5"
            >
              <p className="text-foreground font-semibold leading-snug">{theme.title}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{theme.description}</p>
            </div>
          ))}
        </div>

        <div
          className="rounded-showcase border border-border/60 bg-muted/30 p-6 md:overflow-y-auto"
          style={matchedHeight ? { maxHeight: matchedHeight } : undefined}
        >
          <div className="space-y-10">
            {COMPETITOR_GROUPS.map((group) => (
              <div key={group.name}>
                <div className="flex items-center gap-2 mb-4">
                  <img src={group.logo} alt={`${group.name} logo`} className={group.logoClass} />
                  <span className="text-sm font-semibold text-foreground">{group.name}</span>
                </div>
                <div className="space-y-4">
                  {group.images.map((src, i) => (
                    <div
                      key={src}
                      className="w-full overflow-hidden rounded-lg bg-background border border-border/70 shadow-ambient"
                    >
                      <img src={src} alt={`${group.name} screenshot ${i + 1}`} className="w-full h-auto block" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="!mt-10 text-muted-foreground leading-relaxed">
        These insights helped identify the most critical capabilities users expect when managing AI agents at scale and allowed us to prioritize the features with the highest impact.
      </p>
    </div>
  );
};

const AgentsMonitoring = () => {
  const heroContent = <div className="space-y-6"></div>;

  const designProcessSteps = [
    { title: "Discover", bullets: ["Competitive analysis", "Pain points"] },
    { title: "Frame problem", bullets: ["Define goals", "User flows"] },
    { title: "Ideate & Sketch", bullets: ["Rapid prototyping", "Co-create with PMs", "Brainstorming"] },
    { title: "Design & Test", bullets: ["High-fidelity screens", "Internal validation"] },
    { title: "Implement & Measure", bullets: ["Engineering handoff", "KPI setup & monitoring"] },
  ];

  const sections: {
    title?: string;
    content: string | ReactNode;
    variant?: "default" | "fullBleed";
  }[] = [
    {
      title: "Project Details",
      content: (
        <ProjectDetails
          items={[
            { label: "Status", value: "Completed" },
            { label: "Timeline", value: "6 months" },
            { label: "Role", value: "Lead Product Designer" },
            { label: "Collaborators", value: "1 PM, 8 Engineers" },
          ]}
        />
      ),
    },
    {
      title: "Challenge",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">UiPath had just launched AI Agents, autonomous systems that perceive, reason, act, and learn. To help enterprises, the team introduced a dedicated space to monitor agents executions in production.</p>
          <p className="text-muted-foreground leading-relaxed">As adoption grew, the monitoring experience quickly became fragmented. Agent executions lived across design, evaluation, and production, with no clear connection between them. Enterprises struggled to see the full picture: how agents were performing, where issues originated, and what could be optimized.</p>
        </div>
      ),
    },
    {
      variant: "fullBleed",
      content: (
        <FullBleedBanner
          label="PROBLEM TO SOLVE"
          headline="Enterprise teams couldn’t get a single, trustworthy view of how agents were performing in production, where issues originated, and what could be optimized."
        />
      ),
    },
    {
      title: "Design Process",
      content: <ProcessDiagram steps={designProcessSteps} />,
    },
    {
      title: "Gathering Insights",
      content: <GatheringInsights />,
    },
    {
      variant: "fullBleed",
      content: (
        <FullBleedBanner
          label="HOW MIGHT WE"
          headline="How might we unify the agent lifecycle into a monitoring experience that’s easy to scan, fast to debug, and clear about performance and cost?"
        />
      ),
    },
    {
      title: "User Journeys & Information Architecture",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            I mapped the end-to-end journey of developers and operators: from discovering agents in the library, to assessing health at a glance, to drilling into specific agents for deeper investigation. This helped establish an information hierarchy driven by real user goals.
          </p>
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div className="rounded-showcase border border-border/60 bg-muted/30 p-6 md:p-8">
              <IADiagram />
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-3">
              <p>
                I created the user flow guided by four core design principles that made the monitoring experience easier to navigate and scale.
              </p>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  <strong className="text-foreground">Consistency:</strong> Same trace format and interaction patterns across all stages.
                </li>
                <li>
                  <strong className="text-foreground">Context:</strong> Always show where you are in the agent lifecycle.
                </li>
                <li>
                  <strong className="text-foreground">Discoverability:</strong> Multiple ways to find related traces (search, filters, links).
                </li>
                <li>
                  <strong className="text-foreground">Progressive Disclosure:</strong> Start with overview, drill down to details.
                </li>
              </ol>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Rapid Iterations & Testing",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            To quickly validate the new information architecture, I built an interactive prototype using Figma Make and tested it with internal developers and AI engineers who design and deploy agents daily.
            These sessions helped validate our assumptions and uncover insights about how teams monitor and debug agents in real-world scenarios.
          </p>
          <div className="mt-8">
            <p className="font-semibold text-foreground mb-4">Key Insights:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <InsightCard icon={Search}>
                Users needed clear visibility into design artifacts and their connection to runtime data.
              </InsightCard>
              <InsightCard icon={Cpu}>
                Teams needed optimization insights and clear attribution for errors.
              </InsightCard>
              <InsightCard icon={TrendingUp}>
                Signals such as ROI, AI unit usage, and efficiency metrics were essential for evaluating agent performance.
              </InsightCard>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-muted/30 rounded-showcase p-3 overflow-hidden shadow-lifted">
              <video className="w-full h-auto block rounded-xl" autoPlay loop muted playsInline>
                <source src="/videos/figma-make-prototype.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Iterations & High Fidelity Screens",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            With the insights validated, I focused on designing the runtime monitoring experience. 
            One of the main challenges was organizing a large volume of monitoring data while keeping the interface easy to scan. I focused on structuring the information in a clear way, while still highlighting critical signals such as errors and degraded agent health.
          </p>

          <ShowcaseFrame className="mt-10">
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {[
                { label: "Iteration 1", src: "/images/agent-iteration-1.png" },
                { label: "Iteration 2", src: "/images/agent-iteration-2.png" },
                { label: "Iteration 3", src: "/images/agent-iteration-3.png" },
              ].map((item) => (
                <figure key={item.label} className="flex flex-col items-center">
                  <figcaption className="text-meta uppercase tracking-wider text-muted-foreground mb-5">
                    {item.label}
                  </figcaption>
                  <div className="w-full overflow-hidden rounded-lg bg-background border border-border/70 shadow-ambient">
                    <img
                      src={item.src}
                      alt={`${item.label} of the agent monitoring dashboard`}
                      className="w-full h-auto block"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </ShowcaseFrame>

          <p className="text-muted-foreground leading-relaxed">After multiple rounds of internal validation and iteration, I delivered high-fidelity flows that enable users to quickly understand agent health, investigate failures, monitor performance and consumption.</p>
          <div className="mt-8">
            <img src={userFlowsImage} alt="Agent monitoring user interface showing overview and detailed performance metrics" className="w-full" />
          </div>
        </div>
      ),
    },
    {
      title: "Enhancing the Agent Trace",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Once the new monitoring experience was established, we focused on improving the agent trace experience, enabling users to debug executions and quickly identify errors or unexpected behaviors.
          </p>

          <div className="mt-8">
            <div className="bg-muted/30 rounded-showcase p-3 overflow-hidden shadow-lifted">
              <video className="w-full h-auto block rounded-xl" autoPlay loop muted playsInline>
                <source src="/videos/agent-trace-enhancing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="h-12" aria-hidden="true" />

          <div className="space-y-16">
            {TRACE_SUBFEATURES.map((feature, index) => {
              const imageFirst = index % 2 === 1;
              return (
                <div
                  key={feature.title}
                  className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-center md:gap-12"
                >
                  <div className={imageFirst ? "md:order-1" : "md:order-2"}>
                    <ShowcaseFrame>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto block rounded-lg"
                      />
                    </ShowcaseFrame>
                  </div>
                  <div className={imageFirst ? "md:order-2" : "md:order-1"}>
                    <h3 className="text-h3 text-foreground">{feature.title}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      title: "Results",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Over a 6-month period, our results show enterprises are moving from build to production with greater confidence, with more organizations completing the full deployment journey. This trend highlights how critical it has become to provide monitoring capabilities across the entire agent lifecycle, empowering teams to oversee production usage and maximize value at scale.
       
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <StatCard label="Deployed run rate" value="+95%" />
            <StatCard label="Deployment breadth" value="+34%" />
            <StatCard label="Creation-to-deployment velocity" value="1.3 days (-78%)" />
          </div>
        </div>
      ),
    },
    {
      title: "Next Steps",
      content: (
        <div className="space-y-4">
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
      ),
    },
  ];

  return (
    <CaseStudyLayout
      title="Improving Runtime Monitoring for Agents"
      subtitle="Redesigned how enterprises monitor and optimize AI agents"
      tags={["Information Architecture", "AI Monitoring", "Enterprise UX", "Data Visualization"]}
      heroContent={heroContent}
      sections={sections}
      currentPath="/case-studies/agents-monitoring"
    />
  );
};

export default AgentsMonitoring;
