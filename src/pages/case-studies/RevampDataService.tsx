import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import beforeImage from "@/assets/access-control-before.png";
import afterImage from "@/assets/access-control-after.png";
import unifiedExperienceImage from "@/assets/unified-experience-data-fabric.png";
import quickFixesImage from "@/assets/quick-fixes.png";
const RevampDataService = () => {
  const heroContent = null;
  const sections = [{
    title: "Project Overview",
    content: <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">Data Fabric is UiPath's low-code data modeling and management layer — a lightweight database designed for automation developers. It simplifies how data is stored and accessed without requiring backend expertise.</p>
          <p className="text-muted-foreground leading-relaxed">Despite the product's technical strengths, automation developers struggled to store and manage data without leaving their workflows. On top of this, the lack of access control limited enterprise adoption, while usability issues issues frustrated even advanced users. </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Status:</p>
              <p className="text-muted-foreground">Project completed and delivered</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Timeline:</p>
              <p className="text-muted-foreground">4 months</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Role:</p>
              <p className="text-muted-foreground">Lead Designer (solo)</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Collaborators:</p>
              <p className="text-muted-foreground">2 PMs, 5 engineers</p>
            </div>
          </div>
        </div>
  }, {
    title: "Vision & Business Goals",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">Our aim was to make Data Service the natural place for developers to store and manage their information. To get there, design focused on:</p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Making things easier to find and use → so developers could work faster with fewer mistakes.</li>
            <li>Building confidence in the platform → so enterprises would trust it as their system of record.</li>
          </ul>
        </div>
  }, {
    title: "Discovery: Heuristic Evaluation & Product Audit",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I started with a heuristic audit to identify usability gaps and friction points. This included:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Analyzing both creation and consumption user workflows </li>
            <li>Reviewing previous customer feedback</li>
            <li>Mapping interactions to Jakob Nielsen's usability heuristics.</li>
          </ul>
          <div className="mt-6">
            <p className="font-semibold text-primary mb-2">Top Insights:</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>Schema creation was isolated from the development experience.</li>
              <li>Data access control was poorly handled, creating risks for enterprise use.</li>
              <li>The UI lacked clarity around key actions, making features hard to discover.</li>
            </ul>
          </div>
        </div>
  }, {
    title: "Prioritizing Quick Wins",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">Given limited engineering bandwidth, I worked with the PM to define quick wins — changes that required low dev effort but delivered noticeable UX improvements.</p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            
            
            
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">These changes were shipped in the first few sprints and immediately improved the overall look and feel of the product.</p>
          <div className="w-full mt-8">
            <img src={quickFixesImage} alt="Quick fixes and UI improvements showing before and after states of the data entities interface" className="w-full rounded-lg" />
          </div>
        </div>
  }, {
    title: "Designing for Security: Access Control",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">The next step was to introduce a clear way to manage who owns and who can access data. Previously, there were no restrictions — anyone using an automation could read and edit records without limits. This gap was a major concern for large customers, especially when sensitive business information was involved. Without proper access control, Data Service couldn't be considered a serious option for enterprise use.</p>
          <p className="text-muted-foreground leading-relaxed">
            I designed a role-based permission model that balanced simplicity and scalability:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Admins could define granular access policies at entity and field level.</li>
            <li>The UI guided users with smart defaults.</li>
            <li>Consumers had a clear summary of their permissions.</li>
          </ul>
          
          
          <div className="mt-8">
            <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} beforeLabel="Before" afterLabel="After" />
          </div>
        </div>
  }, {
    title: "Unified Experience: Ending the Context Switch",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Previously, schema editing was siloed in a separate portal. The workflow required users to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Leave UiPath Studio to edit schemas.</li>
            <li>Return and manually sync changes.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">To eliminate this friction, I proposed and designed a unified schema editor directly within Studio.   </p>
          
          
          <div className="w-full mt-8">
            <img src={unifiedExperienceImage} alt="Unified experience workflow showing integrated development interface" className="w-full rounded-lg" />
          </div>
          
        </div>
  }, {
    title: "Results",
    content: <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">The redesign was completed and shipped across one release. Key outcomes:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-accent/30 p-6 rounded-lg border">
              <div className="text-3xl font-bold text-foreground mb-2">35%</div>
              <p className="text-sm font-semibold">Decrease in Support Tickets</p>
              <p className="text-xs text-muted-foreground mt-1">Schema-related issues</p>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <div className="text-3xl font-bold text-foreground mb-2">25%</div>
              <p className="text-sm font-semibold">Faster Development</p>
              <p className="text-xs text-muted-foreground mt-1">Reduced task completion time</p>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <div className="text-2xl font-bold text-foreground mb-2">NPS ↑</div>
              <p className="text-sm font-semibold">Improved Product Rating</p>
              <p className="text-xs text-muted-foreground mt-1">Internal surveys & pilot feedback</p>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <div className="text-2xl font-bold text-foreground mb-2">Enterprise</div>
              <p className="text-sm font-semibold">Increased Adoption</p>
              <p className="text-xs text-muted-foreground mt-1">Driven by access control features</p>
            </div>
          </div>
        </div>
  }, {
    title: "Reflections & Learnings",
    content: <div className="space-y-4">
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Small wins add up. Even simple UI changes can deliver real value under tight constraints.</li>
            <li>Meet users where they are. Embedding tools into existing workflows drove adoption more than feature depth.</li>
            <li>Designing for trust matters. Access control wasn't just a security feature—it unlocked business value and customer confidence.</li>
          </ul>
        </div>
  }];
  return <CaseStudyLayout title="Revamp Data Fabric" subtitle="Transforming the data management experience by redesigning core service interfaces and user workflows for better data accessibility and performance" tags={["Data Management", "Service Design", "Enterprise UX", "Access Control", "Platform Integration"]} heroContent={heroContent} sections={sections} />;
};
export default RevampDataService;