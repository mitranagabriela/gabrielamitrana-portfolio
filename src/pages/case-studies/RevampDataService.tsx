import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import beforeImage from "@/assets/access-control-before.png";
import afterImage from "@/assets/access-control-after.png";
import quickFixesImage from "@/assets/quick-fixes.png";
const RevampDataService = () => {
  const heroContent = null;
  const designProcessSteps = [{
    title: "Discover & Empathize",
    bullets: ["Heuristic evaluation", "Product audit"]
  }, {
    title: "Define goals",
    bullets: ["Problem framing", "Prioritization"]
  }, {
    title: "Ideate & Sketch",
    bullets: ["Brainstorming", "Low-fi sketches", "Co-creation with PMs"]
  }, {
    title: "Prototype & Test",
    bullets: ["Rapid prototyping", "Usability testing"]
  }, {
    title: "Implement & Measure",
    bullets: ["Development handoff", "KPI setup", "Analytics monitoring"]
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
    content: <div className="space-y-6">
          
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Status:</p>
              <p className="text-muted-foreground">Project completed and delivered</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Timeline:</p>
              <p className="text-muted-foreground">4 months</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Role:</p>
              <p className="text-muted-foreground">Lead Product Designer</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Collaborators:</p>
              <p className="text-muted-foreground">2 PMs, 5 engineers</p>
            </div>
          </div>
        </div>
  }, {
    title: "Challenge",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Data Fabric is UiPath’s low-code data modeling and management tool for automation developers. Despite its technical strengths, developers struggled to store and manage data within their workflows, as schema creation and editing lived outside the core automation environment. At the same time, the lack of clear data ownership and access control created significant risk for enterprise customers, limiting trust and broader adoption.
          </p>
          
        </div>
  }, {
    title: "Design Process",
    content: <div className="space-y-6">
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
    title: "Discovery: Heuristic Evaluation & Product Audit",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I started with a heuristic audit to identify usability gaps and friction points. This included:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Analyzing both creation and consumption flows.</li>
            <li>Reviewing previous customer feedback.</li>
            <li>Mapping interactions to Jakob Nielsen's usability heuristics.</li>
          </ul>
          <div className="mt-6">
            <p className="font-semibold text-foreground mb-4">Key Insights:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-accent/30 p-6 rounded-lg border border-border relative">
                <div className="text-4xl mb-3">🛠️</div>
                <p className="text-muted-foreground leading-relaxed">Schema creation was isolated from the development experience.</p>
              </div>
              <div className="bg-accent/30 p-6 rounded-lg border border-border relative">
                <div className="text-4xl mb-3">🔒</div>
                <p className="text-muted-foreground leading-relaxed">Data access control was poorly handled, creating risks for enterprise use.</p>
              </div>
              <div className="bg-accent/30 p-6 rounded-lg border border-border relative">
                <div className="text-4xl mb-3">🎯</div>
                <p className="text-muted-foreground leading-relaxed">The UI lacked clarity around key actions, making features hard to discover.</p>
              </div>
            </div>
          </div>
        </div>
  }, {
    title: "Prioritizing Quick Wins",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">Given limited engineering bandwidth, I worked with the PMs to define quick wins — changes that required low dev effort but delivered noticeable UX improvements. These changes were shipped in the first few sprints and immediately improved the overall look and feel of the product.</p>
          <div className="w-full mt-8">
            <img src={quickFixesImage} alt="Quick fixes and UI improvements showing before and after states of the data entities interface" className="w-full rounded-lg" />
          </div>
        </div>
  }, {
    title: "Designing for Security: Access Control",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed mb-8">The next step was to introduce a clear way to manage who owns and who can access data. Previously, there were no restrictions — anyone using an entity could read and edit records without limits. This gap was a major concern for large customers, especially when sensitive business information was involved. To solve this, I designed a role-based permission model that balanced simplicity and scalability.</p>

          <div className="mt-8">
            <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} beforeLabel="Before" afterLabel="After" />
          </div>
        </div>
  }, {
    title: "Unified Experience: Ending the Context Switch",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">With access control solved, the next step was to make Data Fabric feel seamless within developers' workflows. Schema editing lived in a separate portal — forcing users to leave UiPath Studio, make changes, then manually sync them back. To eliminate this friction, I designed a unified schema editor so developers could create, edit, and use data entities without breaking their flow.</p>
          <div className="mt-8">
            <div className="relative w-full overflow-hidden pt-4 pb-10">
              <div className="relative mx-auto flex w-full max-w-6xl items-center justify-center">
                <div className="pointer-events-none absolute left-0 top-1/2 hidden h-[72%] w-[28%] -translate-x-[45%] -translate-y-1/2 overflow-hidden rounded-2xl border border-border/60 bg-muted/40 shadow-xl md:block">
                  <img src="/images/revamp-side-left.png" alt="" className="h-full w-full object-cover opacity-60 blur-[1px]" />
                </div>

                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[72%] w-[28%] translate-x-[45%] -translate-y-1/2 overflow-hidden rounded-2xl border border-border/60 bg-muted/40 shadow-xl md:block">
                  <img src="/images/revamp-side-right.png" alt="" className="h-full w-full object-cover opacity-60 blur-[1px]" />
                </div>

                <div className="relative z-10 w-full max-w-4xl">
                  <div className="overflow-hidden rounded-2xl border border-border/40 bg-background shadow-2xl">
                    <video className="h-auto w-full" autoPlay loop muted playsInline>
                      <source src="/videos/revamp-unified-experience.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="mx-auto h-5 w-[92%] -translate-y-[2px] rounded-b-2xl bg-gradient-to-b from-border/20 to-transparent blur-[3px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
  }, {
    title: "Results",
    content: <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">The redesign was completed and shipped across one release. Key outcomes:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-accent/30 p-6 rounded-lg border">
              <p className="text-sm font-semibold mb-2">Data Operations</p>
              <div className="text-3xl font-bold text-foreground">+ 100%</div>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <p className="text-sm font-semibold mb-2">Attach Rate</p>
              <div className="text-3xl font-bold text-foreground">+ 19%</div>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <p className="text-sm font-semibold mb-2">Monthly Active Users</p>
              <div className="text-3xl font-bold text-foreground">+ 14%</div>
            </div>
          </div>
        </div>
  }, {
    title: "Reflections & Learnings",
    content: <div className="space-y-4">
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2 marker:text-foreground">
            <li><strong className="text-foreground">Small wins add up.</strong> Even simple UI changes can deliver real value under tight constraints.</li>
            <li><strong className="text-foreground">Meet users where they are.</strong> Embedding tools into existing workflows drove adoption more than feature depth.</li>
            <li><strong className="text-foreground">Designing for trust matters.</strong> Access control wasn't just a security feature — it unlocked business value and customer confidence.</li>
          </ul>
        </div>
  }];
  return <CaseStudyLayout title="Revamp Data Fabric" subtitle="Simplified the data management flow for UiPath — from fragmentation to a cohesive experience" tags={["Data Management", "Service Design", "Enterprise UX", "Access Control", "Platform Integration"]} heroContent={heroContent} sections={sections} />;
};
export default RevampDataService;