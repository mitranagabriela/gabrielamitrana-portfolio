import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Play } from "lucide-react";
import beforeImage from "@/assets/unified-build-before.png";
import afterImage from "@/assets/unified-build-after.png";
const UnifiedBuild = () => {
  const heroContent = null;
  const sections = [{
    title: "Project Details",
    content: <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            In 2024, we launched a strategic investment into creating a Unified Developer Experience. Our goal was to remove barriers that slowed developers down and to help enterprises unlock value faster from end-to-end automation.
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
  }, {
    title: "Challenge",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Building anything beyond simple task automations is complex and fragmented. Developers are forced to work across multiple disconnected tools and interfaces, making it difficult to stay in flow, collaborate effectively, and manage data and deployments consistently.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our vision is to make UiPath the one-stop shop for Business Process Automation Development — a place where developers, Centers of Excellence (CoEs), and business users can collaborate seamlessly.
          </p>
        </div>
  }, {
    title: "Target audience",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            <strong>Developers:</strong> who need a streamlined, powerful toolset to build and deploy complex solutions without leaving their development environment.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>Centers of Excellence (CoEs):</strong> who are responsible for scaling automation across the enterprise and require repeatability, reusability, and efficient deployment at scale.
          </p>
        </div>
  }, {
    title: "Discovery & Research",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            [Describe your research process. What methods did you use? What did you discover?]
          </p>
          
        </div>
  }, {
    title: "Design Process",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            [Describe your design process. How did you approach the solution? What iterations did you go through?]
          </p>
        </div>
  }, {
    title: "The Solution",
    content: <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            [Describe the final solution. What did you design? How does it solve the problem?]
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            [Add more details about specific features or design decisions]
          </p>
        </div>
  }, {
    title: "Results",
    content: <div className="space-y-6">
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
  }, {
    title: "Reflections & Learnings",
    content: <div className="space-y-4">
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>[Key learning or reflection 1]</li>
            <li>[Key learning or reflection 2]</li>
            <li>[Key learning or reflection 3]</li>
          </ul>
        </div>
  }, {
    title: "Demo",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Watch the demo to see the unified developer experience in action:
          </p>
          <a href="https://www.youtube.com/watch?v=EOpWMmGHIrc" target="_blank" rel="noopener noreferrer" className="block relative aspect-video bg-muted rounded-lg overflow-hidden mb-4 hover:opacity-90 transition-opacity cursor-pointer">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop&crop=center" alt="Product Demo Thumbnail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
              </div>
            </div>
          </a>
        </div>
  }];
  return <CaseStudyLayout title="Unified Developer Experience" subtitle="Streamlined the build configuration experience by unifying multiple tools and workflows into a single cohesive interface" tags={["Developer Tools", "Platform Design", "Workflow Optimization", "Enterprise UX"]} heroContent={heroContent} sections={sections} />;
};
export default UnifiedBuild;