
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

const UnifiedDeveloperExperience = () => {
  const heroContent = (
    <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary to-purple-600 mx-auto mb-4"></div>
        <p className="text-muted-foreground">Unified Developer Experience</p>
      </div>
    </div>
  );

  const sections = [
    {
      title: "Project Overview",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            The Unified Developer Experience project aimed to create a cohesive development platform that brings together disparate tools and workflows into a single, streamlined developer environment. This initiative focused on reducing context switching and improving productivity for development teams working across multiple tools and platforms.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Status:</p>
              <p className="text-muted-foreground">Project completed and delivered</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Timeline:</p>
              <p className="text-muted-foreground">8 months</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Role:</p>
              <p className="text-muted-foreground">Senior UX Designer</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Collaborators:</p>
              <p className="text-muted-foreground">Product Managers, Frontend Engineers, DevOps Team</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Challenge",
      content: "Development teams were struggling with fragmented workflows across multiple tools, leading to decreased productivity and increased cognitive load. Context switching between different platforms, inconsistent interfaces, and disconnected data sources were creating significant friction in the development process."
    },
    {
      title: "Research & Discovery",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Through extensive user research with development teams, we identified key pain points:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Developers were using 8-12 different tools daily</li>
            <li>30% of development time was lost to context switching</li>
            <li>Inconsistent data and notifications across platforms</li>
            <li>Steep learning curves for new team members</li>
          </ul>
        </div>
      )
    },
    {
      title: "Solution Design",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The unified platform design focused on three core principles:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li><strong>Centralized Dashboard:</strong> Single view of all development activities</li>
            <li><strong>Integrated Workflows:</strong> Seamless connections between tools</li>
            <li><strong>Consistent Interface:</strong> Unified design system across all components</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Key features included cross-platform notifications, unified search, collaborative workspaces, and customizable dashboards tailored to different roles and workflows.
          </p>
        </div>
      )
    },
    {
      title: "Results",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The unified developer experience delivered significant improvements:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>35% reduction in development time</li>
            <li>50% decrease in context switching incidents</li>
            <li>40% improvement in developer satisfaction scores</li>
            <li>60% faster onboarding for new team members</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <CaseStudyLayout
      title="Unified Developer Experience"
      subtitle="Creating a cohesive development platform that brings together disparate tools and workflows into a single, streamlined developer environment"
      tags={["Developer Tools", "Platform Design", "Workflow Optimization", "UX Research", "Dashboard Design"]}
      heroContent={heroContent}
      sections={sections}
    />
  );
};

export default UnifiedDeveloperExperience;
