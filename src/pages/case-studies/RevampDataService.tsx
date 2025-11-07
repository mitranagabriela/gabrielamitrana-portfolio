import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import beforeImage from "@/assets/access-control-before.png";
import afterImage from "@/assets/access-control-after.png";
import unifiedExperienceImage from "@/assets/unified-experience-data-fabric.png";
import quickFixesImage from "@/assets/quick-fixes.png";
import createEntityFlowsImage from "@/assets/create-entity-flows.jpg";
import createEntityDiscoveryImage from "@/assets/create-entity-discovery.jpg";
const RevampDataService = () => {
  const heroContent = null;
  const sections = [{
    title: "Project Overview",
    content: <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">Data Fabric is UiPath's low-code data modeling and management layer — a lightweight database designed for automation developers. It simplifies how data is stored and accessed without requiring backend expertise.</p>
          <p className="text-muted-foreground leading-relaxed">Despite the product's technical strengths, automation developers struggled to store and manage data without leaving their workflows. On top of this, the lack of access control limited enterprise adoption, while usability issues frustrated even advanced users. </p>
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
          <p className="text-muted-foreground leading-relaxed">Our aim was to make Data Fabric the natural place for developers to store and manage their information. To get there, design focused on:</p>
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
            <li>Analyzing both creation and consumption flows.</li>
            <li>Reviewing previous customer feedback.</li>
            <li>Mapping interactions to Jakob Nielsen's usability heuristics.</li>
          </ul>
          <div className="mt-6">
            <p className="font-semibold text-foreground mb-4">Key Insights:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-accent/30 p-6 rounded-lg border border-border relative">
                <div className="text-4xl mb-3">🛠️</div>
                <p className="text-muted-foreground leading-relaxed">Schema creation was isolated from the development experience.</p>
              </div>
              <div className="bg-accent/30 p-6 rounded-lg border border-border relative">
                <div className="text-4xl mb-3">🔒</div>
                <p className="text-muted-foreground leading-relaxed">Data access control was poorly handled, creating risks for enterprise use.</p>
              </div>
              <div className="bg-accent/30 p-6 rounded-lg border border-border relative">
                <div className="text-4xl mb-3">🎯</div>
                <p className="text-muted-foreground leading-relaxed">The UI lacked clarity around key actions, making features hard to discover.</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-8">
            
          </div>
        </div>
  }, {
    title: "Prioritizing Quick Wins",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">Given limited engineering bandwidth, I worked with the PMs to define quick wins — changes that required low dev effort but delivered noticeable UX improvements.</p>
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
          <p className="text-muted-foreground leading-relaxed">The next step was to introduce a clear way to manage who owns and who can access data. Previously, there were no restrictions — anyone using an entity could read and edit records without limits. This gap was a major concern for large customers, especially when sensitive business information was involved. Without proper access control, Data Fabric couldn't be considered a serious option for enterprise use.</p>
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
          <p className="text-muted-foreground leading-relaxed">With access control solved, the next step was to make Data Fabric feel seamless within developers' workflows. At the time, schema editing lived in a separate portal — forcing users to leave UiPath Studio, make changes, then manually sync them back.</p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            
            
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">To eliminate this friction, I proposed and designed a unified schema editor and consumption mechanism directly inside Studio, </p>
          
          
          <div className="w-full mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
            <img src={unifiedExperienceImage} alt="Unified experience workflow showing integrated development interface" className="w-full rounded-lg" />
          </div>
          
        </div>
  }, {
    title: "Results",
    content: <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">The redesign was completed and shipped across one release. Key outcomes:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-accent/30 p-6 rounded-lg border">
              <p className="text-sm font-semibold mb-2">Data Operations</p>
              <div className="text-3xl font-bold text-foreground">100% growth</div>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <p className="text-sm font-semibold mb-2">Attach Rate</p>
              <div className="text-3xl font-bold text-foreground">19% growth</div>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg border">
              <p className="text-sm font-semibold mb-2">Monthly Active Users</p>
              <div className="text-3xl font-bold text-foreground">14% growth</div>
            </div>
          </div>
        </div>
  }, {
    title: "Reflections & Learnings",
    content: <div className="space-y-4">
          <ul className="list-disc list-inside text-foreground leading-relaxed ml-4 space-y-2">
            <li><strong>Small wins add up.</strong> Even simple UI changes can deliver real value under tight constraints.</li>
            <li><strong>Meet users where they are.</strong> Embedding tools into existing workflows drove adoption more than feature depth.</li>
            <li><strong>Designing for trust matters.</strong> Access control wasn't just a security feature — it unlocked business value and customer confidence.</li>
          </ul>
        </div>
  }];
  return <CaseStudyLayout title="Revamp Data Fabric" subtitle="Simplified the data management flow for UiPath — from fragmentation to a cohesive experience." tags={["Data Management", "Service Design", "Enterprise UX", "Access Control", "Platform Integration"]} heroContent={heroContent} sections={sections} />;
};
export default RevampDataService;