import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { FullBleedBanner } from "@/components/FullBleedBanner";
import { InsightCard } from "@/components/InsightCard";
import { ProcessDiagram } from "@/components/ProcessDiagram";
import { ProjectDetails } from "@/components/ProjectDetails";
import { StatCard } from "@/components/StatCard";
import beforeImage from "@/assets/access-control-before.png";
import afterImage from "@/assets/access-control-after.png";
import quickFixesImage from "@/assets/quick-fixes.png";
import { Wrench, Shield, Target } from "lucide-react";
import { type ReactNode } from "react";

const RevampDataService = () => {
  const heroContent = null;
  const designProcessSteps = [
    { title: "Discover & Empathize", bullets: ["Heuristic evaluation", "Product audit"] },
    { title: "Define goals", bullets: ["Problem framing", "Prioritization"] },
    { title: "Ideate & Sketch", bullets: ["Brainstorming", "Low-fi sketches", "Co-creation with PMs"] },
    { title: "Prototype & Test", bullets: ["Rapid prototyping", "Usability testing"] },
    { title: "Implement & Measure", bullets: ["Development handoff", "KPI setup", "Analytics monitoring"] },
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
            { label: "Status", value: "Project completed and delivered" },
            { label: "Timeline", value: "4 months" },
            { label: "Role", value: "Lead Product Designer" },
            { label: "Collaborators", value: "2 PMs, 5 engineers" },
          ]}
        />
      ),
    },
    {
      title: "Challenge",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Data Fabric is UiPath’s low-code data modeling and management tool for automation developers. Despite its technical strengths, developers struggled to store and manage data within their workflows, as schema creation and editing lived outside the core automation environment. At the same time, the lack of clear data ownership and access control created significant risk for enterprise customers, limiting trust and broader adoption.
          </p>
        </div>
      ),
    },
    {
      variant: "fullBleed",
      content: (
        <FullBleedBanner
          label="PROBLEM TO SOLVE"
          headline="Developers faced fragmented data workflows and enterprise customers lacked trustworthy access control, making Data Fabric harder to adopt at scale."
        />
      ),
    },
    {
      title: "Design Process",
      content: <ProcessDiagram steps={designProcessSteps} />,
    },
    {
      title: "Discovery: Heuristic Evaluation & Product Audit",
      content: (
        <div className="space-y-4">
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
              <InsightCard icon={Wrench}>
                Schema creation was isolated from the development experience.
              </InsightCard>
              <InsightCard icon={Shield}>
                Data access control was poorly handled, creating risks for enterprise use.
              </InsightCard>
              <InsightCard icon={Target}>
                The UI lacked clarity around key actions, making features hard to discover.
              </InsightCard>
            </div>
          </div>
        </div>
      ),
    },
    {
      variant: "fullBleed",
      content: (
        <FullBleedBanner
          label="HOW MIGHT WE"
          headline="How might we unify schema management inside the developer workflow while introducing clear ownership and permissions that enterprise teams can trust?"
        />
      ),
    },
    {
      title: "Prioritizing Quick Wins",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Given limited engineering bandwidth, I worked with the PMs to define quick wins — changes that required low dev effort but delivered noticeable UX improvements. These changes were shipped in the first few sprints and immediately improved the overall look and feel of the product.
          </p>
          <div className="w-full mt-8">
            <img src={quickFixesImage} alt="Quick fixes and UI improvements showing before and after states of the data entities interface" className="w-full rounded-lg" />
          </div>
        </div>
      ),
    },
    {
      title: "Designing for Security: Access Control",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed mb-8">
            The next step was to introduce a clear way to manage who owns and who can access data. Previously, there were no restrictions — anyone using an entity could read and edit records without limits. This gap was a major concern for large customers, especially when sensitive business information was involved. To solve this, I designed a role-based permission model that balanced simplicity and scalability.
          </p>
          <div className="mt-8">
            <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} beforeLabel="Before" afterLabel="After" />
          </div>
        </div>
      ),
    },
    {
      title: "Unified Experience: Ending the Context Switch",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            With access control solved, the next step was to make Data Fabric feel seamless within developers' workflows. Schema editing lived in a separate portal — forcing users to leave UiPath Studio, make changes, then manually sync them back. To eliminate this friction, I designed a unified schema editor so developers could create, edit, and use data entities without breaking their flow.
          </p>
          <div className="mt-8">
            <div className="relative w-full overflow-hidden pt-4 pb-10">
              <div className="relative mx-auto flex w-full max-w-6xl items-center justify-center">
                <div className="pointer-events-none absolute left-0 top-1/2 hidden h-[72%] w-[28%] -translate-x-[45%] -translate-y-1/2 overflow-hidden rounded-showcase border border-border/60 bg-muted/30 shadow-xl md:block">
                  <img src="/images/revamp-side-left.png" alt="" className="h-full w-full object-cover opacity-60 blur-[1px]" />
                </div>

                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[72%] w-[28%] translate-x-[45%] -translate-y-1/2 overflow-hidden rounded-showcase border border-border/60 bg-muted/30 shadow-xl md:block">
                  <img src="/images/revamp-side-right.png" alt="" className="h-full w-full object-cover opacity-60 blur-[1px]" />
                </div>

                <div className="relative z-10 w-full max-w-4xl">
                  <div className="bg-muted/30 rounded-showcase p-3 overflow-hidden shadow-lifted">
                    <video className="h-auto w-full block rounded-xl" autoPlay loop muted playsInline>
                      <source src="/videos/revamp-unified-experience.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="mx-auto h-5 w-[92%] -translate-y-[2px] rounded-b-showcase bg-gradient-to-b from-border/20 to-transparent blur-[3px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Results",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">The redesign was completed and shipped across one release. Key outcomes:</p>
          <div className="grid md:grid-cols-3 gap-4">
            <StatCard label="Data Operations" value="+ 100%" />
            <StatCard label="Attach Rate" value="+ 19%" />
            <StatCard label="Monthly Active Users" value="+ 14%" />
          </div>
        </div>
      ),
    },
    {
      title: "Reflections & Learnings",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2 marker:text-foreground">
            <li><strong className="text-foreground">Small wins add up.</strong> Even simple UI changes can deliver real value under tight constraints.</li>
            <li><strong className="text-foreground">Meet users where they are.</strong> Embedding tools into existing workflows drove adoption more than feature depth.</li>
            <li><strong className="text-foreground">Designing for trust matters.</strong> Access control wasn't just a security feature — it unlocked business value and customer confidence.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      title="Revamp Data Fabric"
      subtitle="Simplified the data management flow for UiPath — from fragmentation to a cohesive experience"
      tags={["Data Management", "Service Design", "Enterprise UX", "Access Control", "Platform Integration"]}
      heroContent={heroContent}
      sections={sections}
    />
  );
};

export default RevampDataService;
