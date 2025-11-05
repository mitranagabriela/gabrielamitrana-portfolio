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
          <div className="mt-8">
            <div className="relative mx-auto max-w-4xl">
              {/* iMac Monitor */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-black p-3 shadow-2xl">
                {/* Screen with black bezel */}
                <div className="relative bg-black rounded-lg overflow-hidden border-[12px] border-black">
                  <video 
                    className="w-full h-auto"
                    controls
                    playsInline
                  >
                    <source src="/lovable-uploads/figma-make-prototype.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Aluminum chin with Apple logo */}
                <div className="h-16 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300 rounded-b-xl flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <svg className="w-6 h-6 fill-slate-600/40" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
              </div>
              {/* Aluminum Stand */}
              <div className="flex flex-col items-center -mt-1">
                <div className="w-24 h-20 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300 rounded-b-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
                <div className="w-56 h-3 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300 rounded-full shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
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