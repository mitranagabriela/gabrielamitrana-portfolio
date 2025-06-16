
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
            <p className="text-muted-foreground leading-relaxed mb-6">
              By the end of the design sprint, each team was tasked with taking the general approach, particularize it and implement it within their specific products.
            </p>
            <div className="w-full">
              <img 
                src="/lovable-uploads/04643767-84b8-446f-96fc-408c816fb371.png" 
                alt="Design process flow showing discovery, story mapping, feature flows, sketch & design, evaluate, design specs, and implement phases"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The Solution",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            I was the owner for driving the Studio Web design efforts. The solution centered around the creation and utilization of templates. These templates would serve as reusable building blocks, designed to address common automation scenarios and showcase the best practices of our platform.
          </p>
          <div className="w-full">
            <img 
              src="/lovable-uploads/6f841456-1b56-4de9-8765-e03a19dcf88d.png" 
              alt="UiPath Studio templates page showing various automation templates like Data Entry, Lead Generation, Sales Order Processing, and Document Processing"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
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
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            To provide a tailored experience, we needed a way to recommend templates suited to users' specific needs. We introduced a profiling mechanism that asks users about their department and the applications they use in their daily routine. This allowed us to offer more relevant and useful templates, enhancing the overall user experience.
          </p>
          <div className="w-full">
            <img 
              src="/lovable-uploads/5189f751-d4e2-4f0f-808e-f4c32257f16f.png" 
              alt="Get started with UiPath Studio screen showing application selection interface with various apps like Google Sheets, Excel, Gmail, Outlook, and others"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We also introduced a guided experience to teach first-time users about the automation building process, providing coachmarks and celebrating their milestones (such as publishing the first automation).
          </p>
        </div>
      )
    },
    {
      title: "Hiding Complexity",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            After multiple rounds of usability testing, we discovered user preferred minimal configuration and favored seeing how the automation works directly on the canvas. Participants also valued clear and concise titles and descriptions that accurately conveyed each template's purpose.
          </p>
          <div className="w-full">
            <img 
              src="/lovable-uploads/efa0e2a5-7d22-4167-8626-99774a3e538a.png" 
              alt="Template configuration screens showing step-by-step setup process with modal dialogs for trigger configuration and activity setup"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            As a result, we adopted a minimal design that only showcases the essential information. Advanced configuration is handled behind the scenes.
          </p>
          <div className="w-full mt-6">
            <img 
              src="/lovable-uploads/54c95bca-99b8-406a-a275-2fb81b4366b3.png" 
              alt="Template customization interface showing the 'Generate expense report' template with configuration options for Outlook and Google Drive connections"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
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
