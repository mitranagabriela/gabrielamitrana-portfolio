import { CaseStudyLayout } from "@/components/CaseStudyLayout";
const AgentsMonitoring = () => {
  const heroContent = <div className="space-y-6">
    </div>;
  const sections = [{
    title: "Overview",
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
    title: "Goal",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Create a unified, insight-driven monitoring experience that helps users understand the lifecycle of their agents from design to production.
          </p>
        </div>
  }, {
    title: "Vision & Business Goals",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Our goal was to connect the dots between design-time agent artifacts and their deployed instances, giving users visibility into the full lifecycle of agent executions.
          </p>
          <p className="font-bold text-foreground leading-relaxed">Key business objectives included:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Map the relationships between design artifacts and deployed instances.</li>
            <li>Centralize agent execution data to support debugging and performance analysis.</li>
            <li>Surface trends, deviations, and opportunities for optimization—all in one place.</li>
          </ul>
        </div>
  }, {
    title: "Discovery: Rapid Iterations with Figma Make",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            To move fast, I built a prototype in Figma Make and tested it with internal users who build and deploy agents daily. Their feedback was invaluable.
          </p>
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