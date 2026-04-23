import { CaseStudyLayout } from "@/components/CaseStudyLayout";
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
    title: "Trace-level annotations",
    description: "Leave feedback, tag issues, and document findings directly within execution traces.",
  },
];

const TRACE_SUBFEATURES = [
  {
    title: "Timeline view",
    description:
      "A chronological timeline makes it easy to follow how an agent executed step by step, spot slow segments, and understand the order of tool calls and reasoning.",
    image: "/images/timeline.png",
  },
  {
    title: "Filtering",
    description:
      "Users can filter trace steps by type, status, or component to zero in on the slice of execution they care about without scrolling through noise.",
    image: "/images/filter.png",
  },
  {
    title: "Searching",
    description:
      "Search works across both step names and step contents, letting users quickly locate a specific tool invocation, prompt, or output inside long traces.",
    image: "/images/search.png",
  },
  {
    title: "Feedback annotations",
    description:
      "Teams can annotate trace steps with feedback and tags, documenting issues or noteworthy behavior directly where they're observed for later review.",
    image: "/images/annotate.png",
  },
];

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
        To inform our design direction, I analyzed how leading platforms approach agent monitoring and observability. This helped identify the most critical capabilities users expect when managing AI agents at scale and allowed us to prioritize the features with the highest impact.
      </p>
      <h3 className="mt-14 text-h3 text-foreground">Emerging themes</h3>
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
          className="rounded-2xl border border-border/60 bg-muted/30 p-6 md:overflow-y-auto"
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
                      className="w-full overflow-hidden rounded-lg bg-background border border-border/70 shadow-[0_2px_10px_rgba(2,8,23,0.06)]"
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
    </div>
  );
};

const AgentsMonitoring = () => {
  const FullBleedBanner = ({
    label,
    headline,
    bullets
  }: {
    label: string;
    headline: string;
    bullets?: string[];
  }) => (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] border-y border-border/70 bg-muted/25">
      <div className="container-editorial py-10 md:py-14">
        <div className="mx-auto max-w-[70ch] text-center">
          <div className="flex items-center justify-center">
            <span className="rounded-full border border-border/70 bg-background/60 px-5 py-2 text-meta font-medium uppercase tracking-wider text-muted-foreground shadow-[0_2px_10px_rgba(2,8,23,0.06)]">
              {label}
            </span>
          </div>
          <p className="mt-6 text-[1.35rem] leading-snug tracking-tight text-foreground md:text-[1.6rem]">
            {headline}
          </p>
          {bullets?.length ? (
            <ul className="mt-6 space-y-2 text-muted-foreground">
              {bullets.map((item) => (
                <li key={item} className="text-[1.05rem] leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
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
    title: "Discover",
    bullets: ["Competitive analysis", "Pain points"]
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
    bullets: ["Engineering handoff", "KPI setup & monitoring"]
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
        {bullets.map(item => <p key={item} className="!text-[0.95rem] !leading-snug">
            {item}
          </p>)}
      </div>
    </div>;
  const sections: {
    title?: string;
    content: string | ReactNode;
    variant?: "default" | "fullBleed";
  }[] = [{
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
              <p className="text-muted-foreground">1 PM, 8 Engineers</p>
            </div>
          </div>
        </div>
  }, {
    title: "Challenge",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">UiPath had just launched AI Agents, autonomous systems that perceive, reason, act, and learn. To help enterprises, the team introduced a dedicated space to monitor agents executions in production.</p>
          <p className="text-muted-foreground leading-relaxed">As adoption grew, the monitoring experience quickly became fragmented. Agent executions lived across design, evaluation, and runtime environments, with no clear connection between them. Enterprises struggled to see the full picture: how agents were performing, where issues originated, and what could be optimized.</p>
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
    variant: "fullBleed",
    content: <FullBleedBanner
      label="PROBLEM TO SOLVE"
      headline="Enterprise teams couldn’t get a single, trustworthy view of how agents were performing in productio, where issues originated, and what could be optimized."
      
    />
  }, {
    title: "Gathering Insights",
    content: <GatheringInsights />
  },
  {
    variant: "fullBleed",
    content: <FullBleedBanner
      label="HOW MIGHT WE"
      headline="How might we unify the agent lifecycle into a monitoring experience that’s easy to scan, fast to debug, and clear about performance and cost?"
      
    />
  }, {
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
    title: "Rapid Iterations & Testing",
    content: <div className="space-y-4">
          
          <p className="text-muted-foreground leading-relaxed">
          To quickly validate the new information architecture, I built an interactive prototype using Figma Make and tested it with internal developers and AI engineers who design and deploy agents daily.
          These sessions helped validate our assumptions and uncover insights about how teams monitor and debug agents in real-world scenarios.          </p>
          {/* Key Insights as Cards */}
          <div className="mt-8">
          <p className="font-semibold text-foreground mb-4">Key Insights:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-accent/30 rounded-lg border border-border">
              <Search className="h-8 w-8 text-foreground mb-3" aria-hidden="true" />
              <p className="text-muted-foreground leading-relaxed">Users needed clear visibility into design artifacts and their connection to runtime data.</p>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-border">
              <Cpu className="h-8 w-8 text-foreground mb-3" aria-hidden="true" />
              <p className="text-muted-foreground leading-relaxed">Teams needed optimization insights and clear attribution for errors.</p>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-border">
              <TrendingUp className="h-8 w-8 text-foreground mb-3" aria-hidden="true" />
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

          {/* Iterations visual */}
          <div className="mt-10 rounded-2xl bg-muted/40 border border-border/60 p-6 md:p-10">
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
                  <div className="w-full overflow-hidden rounded-lg bg-background border border-border/70 shadow-[0_2px_10px_rgba(2,8,23,0.06)]">
                    <img
                      src={item.src}
                      alt={`${item.label} of the agent monitoring dashboard`}
                      className="w-full h-auto block"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>

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
          
          <div className="w-full mt-8">
            <div className="space-y-3">
            


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

          <div className="mt-16 space-y-16">
            {TRACE_SUBFEATURES.map((feature, index) => {
              const imageFirst = index % 2 === 1;
              return (
                <div
                  key={feature.title}
                  className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-center md:gap-12"
                >
                  <div className={imageFirst ? "md:order-1" : "md:order-2"}>
                    <div className="rounded-2xl bg-muted/40 border border-border/60 p-6 md:p-8">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto block rounded-lg"
                      />
                    </div>
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