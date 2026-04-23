import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { FullBleedBanner } from "@/components/FullBleedBanner";
import { ProcessDiagram } from "@/components/ProcessDiagram";
import { ProjectDetails } from "@/components/ProjectDetails";
import { StatCard } from "@/components/StatCard";
import { type ReactNode } from "react";

const FirstRunExperience = () => {
  const heroContent = null;
  const designProcessSteps = [
    { title: "Discovery", bullets: ["Crazy 8's", "Story mapping", "Diagramming"] },
    { title: "User flows", bullets: ["MVP definition", "Information architecture"] },
    { title: "Ideate & Sketch", bullets: ["Wireframes", "Design critiques"] },
    { title: "Design & Evaluate", bullets: ["Prototype", "Usability testing"] },
    { title: "Implement & Measure", bullets: ["Development handoff", "Telemetry setup"] },
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
            { label: "Timeline", value: "6 months" },
            { label: "Role", value: "Lead Product Designer" },
            { label: "Collaborators", value: "PMs, Engineers, Designers, Automation Developers" },
          ]}
        />
      ),
    },
    {
      title: "Challenge",
      content:
        "Studio Web is UiPath's cloud-based automation builder for enterprise teams, designed to enable automation creation directly in the browser. Enterprise users, accustomed to everyday tools like Slack and Zoom, expect cloud products to be intuitive, easy to try, and productive with minimal setup. Studio Web needed to remove barriers to getting started, enable users to build automations immediately, and clearly communicate its value from the very first interaction.",
    },
    {
      variant: "fullBleed",
      content: (
        <FullBleedBanner
          label="PROBLEM TO SOLVE"
          headline="Enterprise users needed to start building automations quickly, but Studio Web still had too much friction and delayed value."
        />
      ),
    },
    {
      title: "The Design Process",
      content: <ProcessDiagram steps={designProcessSteps} />,
    },
    {
      title: "Discovery",
      content: (
        <div className="space-y-6">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This challenge was part of a broader platform initiative aimed at defining our Cloud strategy for onboarding new users. To align on our mission, we organized a design sprint with multiple stakeholders, including PMs, engineers, designers, and automation developers. During the sprint, we engaged in various exercises such as Crazy 8's, story mapping, and diagramming to generate ideas and sketch the user flow.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">By the end of the design sprint, each team was tasked with adapting the shared approach and implementing it within their specific product area.</p>
          </div>
          <div className="w-full">
            <img src="/images/fre-design-sprint.png" alt="Design sprint workshop photos showing collaborative exercises, sticky notes, sketching sessions, and team discussions" className="w-full rounded-lg" />
          </div>
        </div>
      ),
    },
    {
      variant: "fullBleed",
      content: (
        <FullBleedBanner
          label="HOW MIGHT WE"
          headline="How might we help users to publish their fist automation with clear guidance, and minimal configuration overhead?"
        />
      ),
    },
    {
      title: "The Solution",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            I was the owner for driving the Studio Web design efforts. The solution centered around the creation and utilization of templates. These templates would serve as reusable building blocks, designed to address common automation scenarios and showcase the best practices of our platform.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="w-full">
              <img src="/images/fre-template-library.png" alt="UiPath Studio templates page showing various automation templates like Data Entry, Lead Generation, Sales Order Processing, and Document Processing" className="w-full rounded-lg" />
            </div>
            <div className="w-full">
              <img src="/images/fre-template-config.png" alt="Generate expense report template configuration page showing description, Outlook and Google Drive integrations" className="w-full rounded-lg" />
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Each template needed to provide a clear description and an easy mechanism for users to customize it. To achieve this, I created a dedicated template configuration page. This page allows users to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-1">
            <li><span className="font-semibold">See the template details:</span> description, author, number of usages, and applications used.</li>
            <li><span className="font-semibold">Customize the template:</span> provide user credentials and fill in any mandatory data if needed.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Profiling & Walkthrough Guide",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            To provide a tailored experience, we needed a way to recommend templates suited to users' specific needs. We introduced a profiling mechanism that asks users about their department and the applications they use in their daily routine. This allowed us to offer more relevant and useful templates, enhancing the overall user experience.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="w-full">
              <img src="/images/fre-department-selection.png" alt="Department selection screen for UiPath Studio onboarding with options like Marketing, HR & Legal, Product & Design, Engineering, and Finance" className="w-full rounded-lg" />
            </div>
            <div className="w-full">
              <img src="/images/fre-app-selection.png" alt="Get started with UiPath Studio screen showing application selection interface with various apps like Google Sheets, Excel, Gmail, Outlook, and others" className="w-full rounded-lg" />
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We also introduced a guided experience to teach first-time users about the automation building process, providing coachmarks and celebrating their milestones (such as publishing the first automation).
          </p>
          <div className="w-full">
            <img src="/images/fre-guided-experience.png" alt="UiPath Studio guided experience showing step-by-step automation building process with modal dialogs and configuration screens" className="w-full rounded-lg" />
          </div>
        </div>
      ),
    },
    {
      title: "Hiding Complexity",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            After multiple rounds of usability testing, we discovered user preferred minimal configuration and favored seeing how the automation works directly on the canvas. Participants also valued clear and concise titles and descriptions that accurately conveyed each template's purpose.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As a result, we adopted a minimal design that only showcases the essential information. Advanced configuration is handled behind the scenes.
          </p>
          <div className="w-full mt-6">
            <img src="/images/fre-template-customization.png" alt="Template customization interface showing the 'Generate expense report' template with configuration options for Outlook and Google Drive connections" className="w-full rounded-lg" />
          </div>
        </div>
      ),
    },
    {
      title: "Results",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">The redesigned onboarding experience was successfully launched and delivered measurable improvements across key metrics:</p>
          <div className="grid md:grid-cols-3 gap-4">
            <StatCard label="Time to Build" value="- 40%" />
            <StatCard label="NPS Score" value="44.76" />
            <StatCard label="Monthly Active Users" value="+ 28.6%" />
          </div>
        </div>
      ),
    },
    {
      title: "Reflections & Learnings",
      content: (
        <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-3 ml-2 marker:text-foreground">
          <li>
            <strong className="text-foreground">Templates accelerate adoption.</strong> Providing ready-to-use automation templates helped users see value instantly, reducing friction and cutting build time by 40%.
          </li>
          <li>
            <strong className="text-foreground">Personalization drives engagement.</strong> Tailoring templates through user profiling made the experience more relevant.
          </li>
          <li>
            <strong className="text-foreground">Simplicity wins.</strong> Minimizing configuration and hiding complexity improved usability and confidence, leading to higher satisfaction levels measured through the NPS score.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      title="Getting Started with Studio Web"
      subtitle="Designed the onboarding experience for an automation builder to increase adoption and reduce drop-off rates"
      tags={["Enterprise UX", "Onboarding", "Design Sprint", "Automation Platform", "Templates"]}
      heroContent={heroContent}
      sections={sections}
    />
  );
};

export default FirstRunExperience;
