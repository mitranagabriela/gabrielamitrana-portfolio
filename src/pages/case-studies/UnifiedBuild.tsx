import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import beforeImage from "@/assets/unified-build-before.png";
import afterImage from "@/assets/unified-build-after.png";

const UnifiedBuild = () => {
  const heroContent = null;
  
  const sections = [
    {
      title: "Project Overview",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            [Add your project overview here - describe the context, the product, and what challenge you were solving]
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Status:</p>
              <p className="text-muted-foreground">Project completed and delivered</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Timeline:</p>
              <p className="text-muted-foreground">[Add timeline]</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Role:</p>
              <p className="text-muted-foreground">[Add your role]</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Collaborators:</p>
              <p className="text-muted-foreground">[Add collaborators]</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Challenge",
      content: "[Describe the main challenge or problem you were trying to solve. What pain points did users face? What business goals needed to be addressed?]"
    },
    {
      title: "Discovery & Research",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            [Describe your research process. What methods did you use? What did you discover?]
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>[Key insight 1]</li>
            <li>[Key insight 2]</li>
            <li>[Key insight 3]</li>
          </ul>
        </div>
      )
    },
    {
      title: "Design Process",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            [Describe your design process. How did you approach the solution? What iterations did you go through?]
          </p>
        </div>
      )
    },
    {
      title: "The Solution",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            [Describe the final solution. What did you design? How does it solve the problem?]
          </p>
          
          <BeforeAfterSlider
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeLabel="Before"
            afterLabel="After"
            className="my-8"
          />
          
          <p className="text-muted-foreground leading-relaxed">
            [Add more details about specific features or design decisions]
          </p>
        </div>
      )
    },
    {
      title: "Results",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            [Describe the impact of your work. What changed after the solution was implemented?]
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-accent/30 p-6 rounded-lg border">
              <div className="text-3xl font-bold text-foreground mb-2">[%]</div>
              <p className="text-sm font-semibold">[Metric Title]</p>
              <p className="text-xs text-muted-foreground mt-1">[Description]</p>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <div className="text-3xl font-bold text-foreground mb-2">[%]</div>
              <p className="text-sm font-semibold">[Metric Title]</p>
              <p className="text-xs text-muted-foreground mt-1">[Description]</p>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <div className="text-2xl font-bold text-foreground mb-2">[Value]</div>
              <p className="text-sm font-semibold">[Metric Title]</p>
              <p className="text-xs text-muted-foreground mt-1">[Description]</p>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <div className="text-2xl font-bold text-foreground mb-2">[Value]</div>
              <p className="text-sm font-semibold">[Metric Title]</p>
              <p className="text-xs text-muted-foreground mt-1">[Description]</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Reflections & Learnings",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>[Key learning or reflection 1]</li>
            <li>[Key learning or reflection 2]</li>
            <li>[Key learning or reflection 3]</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <CaseStudyLayout
      title="Unified Build"
      subtitle="Streamlined the build configuration experience by unifying multiple tools and workflows into a single cohesive interface"
      tags={["Developer Tools", "Platform Design", "Workflow Optimization", "Enterprise UX"]}
      heroContent={heroContent}
      sections={sections}
    />
  );
};

export default UnifiedBuild;
