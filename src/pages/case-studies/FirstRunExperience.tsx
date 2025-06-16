
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

const FirstRunExperience = () => {
  const heroContent = (
    <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary to-purple-600 mx-auto mb-4"></div>
        <p className="text-muted-foreground">Getting Started with Studio Web</p>
      </div>
    </div>
  );

  const sections = [
    {
      title: "Challenge",
      content: "Our enterprise users have specific expectations when engaging with Cloud products, set by their daily interactions with tools like Slack, Zoom, and Atlassian. These products are approachable, easy to try out and require minimal effort to adopt. For successful adoption, Studio Web — UiPath's latest product for building automations — must enable users to start using it right away and understand its value from Day 1."
    },
    {
      title: "The Design Process",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Discovery</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This challenge was part of a broader platform initiative aimed at defining our Cloud strategy for onboarding new users. To align on our mission, we organized a design sprint with multiple stakeholders, including PMs, engineers, designers, and automation developers. During the sprint, we engaged in various exercises such as Crazy 8's, story mapping, and diagramming to generate ideas and sketch the user flow.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By the end of the design sprint, each team was tasked with taking the general approach, particularize it and implement it within their specific products.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "The Solution",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I was the owner for driving the Studio Web design efforts. The solution centered around the creation and utilization of templates. These templates would serve as reusable building blocks, designed to address common automation scenarios and showcase the best practices of our platform.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Each template needed to provide a clear description and an easy mechanism for users to customize it. To achieve this, I created a dedicated template configuration page. This page allows users to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-1">
            <li>See the template details: description, author, number of usages, and applications used.</li>
            <li>Customize the template: provide user credentials and fill in any mandatory data if needed.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Responsiveness",
      content: "Incorporating responsive design meant our templates had to be adaptable, allowing users to fully engage with the content regardless of their screen size. This involved researching the most common screen resolutions and defining breakpoints to ensure the design could seamlessly adjust to various screen sizes."
    },
    {
      title: "Profiling & Walkthrough Guide",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            To provide a tailored experience, we needed a way to recommend templates suited to users' specific needs. We introduced a profiling mechanism that asks users about their department and the applications they use in their daily routine. This allowed us to offer more relevant and useful templates, enhancing the overall user experience.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We also introduced a guided experience to teach first-time users about the automation building process, providing coachmarks and celebrating their milestones (such as publishing the first automation).
          </p>
        </div>
      )
    },
    {
      title: "Hiding Complexity",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            After multiple rounds of usability testing, we discovered user preferred minimal configuration and favored seeing how the automation works directly on the canvas. Participants also valued clear and concise titles and descriptions that accurately conveyed each template's purpose.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As a result, we adopted a minimal design that only showcases the essential information. Advanced configuration is handled behind the scenes.
          </p>
        </div>
      )
    }
  ];

  return (
    <CaseStudyLayout
      title="Getting Started with Studio Web"
      subtitle="Designing an intuitive onboarding experience for UiPath's automation platform to enable enterprise users to understand and adopt the product from Day 1"
      tags={["Enterprise UX", "Onboarding", "Design Sprint", "Automation Platform", "Templates"]}
      heroContent={heroContent}
      sections={sections}
    />
  );
};

export default FirstRunExperience;
