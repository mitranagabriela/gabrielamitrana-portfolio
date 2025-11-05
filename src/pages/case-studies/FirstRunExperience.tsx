import { CaseStudyLayout } from "@/components/CaseStudyLayout";
const FirstRunExperience = () => {
  const heroContent = null;
  const sections = [{
    title: "Project Overview",
    content: <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">Studio Web is UiPath's latest cloud-based automation platform designed to enable automation building for enterprise users. The challenge was to create an intuitive onboarding experience that would enable users to understand and adopt the product from Day 1, matching the ease-of-use expectations set by popular enterprise tools.</p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Status:</p>
              <p className="text-muted-foreground">Project completed and delivered</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Timeline:</p>
              <p className="text-muted-foreground">6 months</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Role:</p>
              <p className="text-muted-foreground">Lead Designer</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Collaborators:</p>
              <p className="text-muted-foreground">PMs, Engineers, Designers, Automation Developers</p>
            </div>
          </div>
        </div>
  }, {
    title: "Challenge",
    content: "Our enterprise users have specific expectations when engaging with Cloud products, set by their daily interactions with tools like Slack, Zoom, and Atlassian. These products are approachable, easy to try out and require minimal effort to adopt. For successful adoption, Studio Web — UiPath's latest product for building automations — must enable users to start using it right away and understand its value from Day 1."
  }, {
    title: "The Design Process",
    content: <div className="space-y-6">
          <div className="w-full">
            <img src="/lovable-uploads/04643767-84b8-446f-96fc-408c816fb371.png" alt="Design process flow showing discovery, story mapping, feature flows, sketch & design, evaluate, design specs, and implement phases" className="w-full rounded-lg" />
          </div>
        </div>
  }, {
    title: "Discovery",
    content: <div className="space-y-6">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This challenge was part of a broader platform initiative aimed at defining our Cloud strategy for onboarding new users. To align on our mission, we organized a design sprint with multiple stakeholders, including PMs, engineers, designers, and automation developers. During the sprint, we engaged in various exercises such as Crazy 8's, story mapping, and diagramming to generate ideas and sketch the user flow.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              By the end of the design sprint, each team was tasked with taking the general approach, particularize it and implement it within their specific products.
            </p>
          </div>
          <div className="w-full">
            <img src="/lovable-uploads/fbcf841e-f199-48ec-9f2f-fbf5edbef303.png" alt="Design sprint workshop photos showing collaborative exercises, sticky notes, sketching sessions, and team discussions" className="w-full rounded-lg" />
          </div>
        </div>
  }, {
    title: "The Solution",
    content: <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I was the owner for driving the Studio Web design efforts. The solution centered around the creation and utilization of templates. These templates would serve as reusable building blocks, designed to address common automation scenarios and showcase the best practices of our platform.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="w-full">
                <img src="/lovable-uploads/6f841456-1b56-4de9-8765-e03a19dcf88d.png" alt="UiPath Studio templates page showing various automation templates like Data Entry, Lead Generation, Sales Order Processing, and Document Processing" className="w-full rounded-lg" />
              </div>
              <div className="w-full">
                <img src="/lovable-uploads/a510d83f-d8c3-4b00-94ce-f89e1a3bbff7.png" alt="Generate expense report template configuration page showing description, Outlook and Google Drive integrations" className="w-full rounded-lg" />
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Each template needed to provide a clear description and an easy mechanism for users to customize it. To achieve this, I created a dedicated template configuration page. This page allows users to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-1">
              <li>See the template details: description, author, number of usages, and applications used.</li>
              <li>Customize the template: provide user credentials and fill in any mandatory data if needed.</li>
            </ul>
          </div>
  }, {
    title: "Profiling & Walkthrough Guide",
    content: <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              To provide a tailored experience, we needed a way to recommend templates suited to users' specific needs. We introduced a profiling mechanism that asks users about their department and the applications they use in their daily routine. This allowed us to offer more relevant and useful templates, enhancing the overall user experience.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="w-full">
                <img src="/lovable-uploads/954a9a53-6be9-4953-93f3-32f06c61b363.png" alt="Department selection screen for UiPath Studio onboarding with options like Marketing, HR & Legal, Product & Design, Engineering, and Finance" className="w-full rounded-lg" />
              </div>
              <div className="w-full">
                <img src="/lovable-uploads/5189f751-d4e2-4f0f-808e-f4c32257f16f.png" alt="Get started with UiPath Studio screen showing application selection interface with various apps like Google Sheets, Excel, Gmail, Outlook, and others" className="w-full rounded-lg" />
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We also introduced a guided experience to teach first-time users about the automation building process, providing coachmarks and celebrating their milestones (such as publishing the first automation).
            </p>
            <div className="w-full">
              <img src="/lovable-uploads/6732cbe8-1ea1-42b5-9c3c-e4a4434ebe66.png" alt="UiPath Studio guided experience showing step-by-step automation building process with modal dialogs and configuration screens" className="w-full rounded-lg" />
            </div>
          </div>
  }, {
    title: "Hiding Complexity",
    content: <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              After multiple rounds of usability testing, we discovered user preferred minimal configuration and favored seeing how the automation works directly on the canvas. Participants also valued clear and concise titles and descriptions that accurately conveyed each template's purpose.
            </p>
            <div className="w-full">
              
            </div>
            <p className="text-muted-foreground leading-relaxed">
              As a result, we adopted a minimal design that only showcases the essential information. Advanced configuration is handled behind the scenes.
            </p>
            <div className="w-full mt-6">
              <img src="/lovable-uploads/54c95bca-99b8-406a-a275-2fb81b4366b3.png" alt="Template customization interface showing the 'Generate expense report' template with configuration options for Outlook and Google Drive connections" className="w-full rounded-lg" />
            </div>
          </div>
  }, {
    title: "Results",
    content: <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">The redesigned onboarding experience was successfully launched and delivered measurable improvements across key metrics:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-accent/30 p-6 rounded-lg border">
              <p className="text-sm font-semibold mb-2">Time to Build</p>
              <div className="text-3xl font-bold text-foreground">40% lower</div>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <p className="text-sm font-semibold mb-2">NPS Score</p>
              <div className="text-3xl font-bold text-foreground">40+</div>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <p className="text-sm font-semibold mb-2">Monthly Active Users</p>
              <div className="text-3xl font-bold text-foreground">28.6% higher</div>
            </div>
          </div>
        </div>
  }, {
    title: "Reflections & Learnings",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            <strong>Templates accelerate adoption.</strong> Providing ready-to-use automation templates helped users see value instantly, reducing friction and cutting build time by 40%.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>Personalization drives engagement.</strong> Tailoring onboarding through user profiling made the experience more relevant.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>Simplicity wins.</strong> Minimizing configuration and hiding complexity improved usability and confidence, leading to higher satisfaction levels measured through the NPS score.
          </p>
        </div>
  }];
  return <CaseStudyLayout title="Getting Started with Studio Web" subtitle="Designed the onboarding experience for an automation platform to increase adoption and reduce drop-off rates" tags={["Enterprise UX", "Onboarding", "Design Sprint", "Automation Platform", "Templates"]} heroContent={heroContent} sections={sections} />;
};
export default FirstRunExperience;