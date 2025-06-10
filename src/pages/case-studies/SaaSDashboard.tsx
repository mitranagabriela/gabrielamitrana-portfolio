
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

const SaaSDashboard = () => {
  const heroContent = (
    <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary to-purple-600 mx-auto mb-4"></div>
        <p className="text-muted-foreground">SaaS Dashboard Design System Preview</p>
      </div>
    </div>
  );

  const sections = [
    {
      title: "My Role",
      content: "I served as the principal designer responsible for creating a comprehensive design system for a B2B software platform. My role included establishing design principles, creating component libraries, documentation, and ensuring consistency across all product touchpoints used by over 10,000 users."
    },
    {
      title: "Challenge",
      content: "The platform had grown organically over several years, resulting in inconsistent UI patterns, duplicated components, and a fragmented user experience. Development teams were spending significant time on design decisions, and users were confused by varying interface patterns across different modules."
    },
    {
      title: "Design Process",
      content: "I conducted a comprehensive audit of existing UI patterns, established design principles based on user needs and business goals, created a modular component system, and developed detailed documentation. The process involved close collaboration with development teams to ensure technical feasibility."
    },
    {
      title: "Ideation",
      content: "Working with stakeholders, I explored different approaches to systematize the design language. We considered atomic design principles, evaluated existing frameworks, and identified core components that could be reused across the platform. The ideation phase included workshops with developers and product managers."
    },
    {
      title: "Solution",
      content: "The final design system included 50+ reusable components, clear guidelines for typography, color, spacing, and interaction patterns. I created a centralized Figma library and worked with developers to implement the system in code. The system emphasized accessibility, scalability, and ease of implementation."
    },
    {
      title: "Research",
      content: "I analyzed user behavior data, conducted interviews with internal teams, and studied industry best practices for B2B design systems. The research helped identify the most frequently used patterns and informed prioritization of components to be included in the initial release."
    },
    {
      title: "Impact",
      content: "The design system reduced development time by 50%, improved design consistency across the platform, and increased user satisfaction scores by 25%. It also enabled faster feature development and reduced QA time by standardizing interaction patterns and visual elements."
    }
  ];

  return (
    <CaseStudyLayout
      title="SaaS Dashboard Design System"
      subtitle="Creating a comprehensive design system for a B2B software platform used by 10,000+ users"
      tags={["Design Systems", "B2B", "Web Design"]}
      heroContent={heroContent}
      sections={sections}
    />
  );
};

export default SaaSDashboard;
