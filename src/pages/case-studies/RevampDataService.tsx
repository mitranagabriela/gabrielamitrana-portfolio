import { CaseStudyLayout } from "@/components/CaseStudyLayout";
const RevampDataService = () => {
  const heroContent = null;
  const sections = [{
    title: "Project Overview",
    content: <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">Data Fabric is UiPath's low-code data modeling and management layer — a lightweight database designed for automation developers. It simplifies how data is stored and accessed without requiring backend expertise.</p>
          <p className="text-muted-foreground leading-relaxed">Despite its technical strengths, the product suffered from poor discoverability, interaction difficulties, and lacked critical access control. As the Lead Product Designer, I revamped the UX to improve usability, trust, and adoption.</p>
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
          <p className="text-muted-foreground leading-relaxed">
            Our vision was to make Data Fabric the default system of record within UiPath.
            Design objectives were driven by two key business goals:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Improve discoverability and simplify the development experience.</li>
            <li>Drive platform stickiness through seamless integration and secure data management.</li>
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
            <li>Mapping UI behaviors to Jakob Nielsen's usability heuristics.</li>
          </ul>
          <div className="mt-6">
            <p className="font-semibold text-primary mb-2">Top Insights:</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>Schema creation was isolated from the development workflow.</li>
              <li>There was no data access control, creating risks for enterprise use.</li>
              <li>The UI lacked clarity around key actions, making features hard to discover.</li>
            </ul>
          </div>
        </div>
  }, {
    title: "Prioritizing Quick Wins",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">Given limited engineering bandwidth, I worked with the PM to define quick wins — changes that required low dev effort but delivered noticeable UX improvements. These included:</p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            
            
            
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">These changes were shipped in the first few sprints  and immediately improved usability metrics from internal QA and pilot users.</p>
          <div className="w-full mt-8">
            <img src="/src/assets/revamp-data-service-anatomy.png" alt="Data fabric anatomy showing improved interface structure" className="w-full rounded-lg" />
          </div>
        </div>
  }, {
    title: "Designing for Security: Access Control",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">One of the most critical upgrades was introducing access control — a top customer request and a blocker for adoption in the enterprise environment.</p>
          <p className="text-muted-foreground leading-relaxed">
            I designed a role-based permission model that balanced simplicity and scalability:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Admins could define granular access policies at entity and field level.</li>
            <li>The UI guided users with smart defaults.</li>
            <li>Consumers had a clear summary of their permissions.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            This design was validated through usability tests with key enterprise customers and contributed directly to several deals moving forward.
          </p>
          
          <div className="mt-8">
            <div className="flex justify-center gap-4 mb-4">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-muted-foreground bg-accent/50 rounded-full">
                BEFORE
              </span>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-muted-foreground bg-accent/50 rounded-full">
                AFTER
              </span>
            </div>
            <div className="w-full">
              <img src="/src/assets/revamp-data-service-access-control.png" alt="Access control interface showing before and after states of role management" className="w-full rounded-lg" />
            </div>
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
          <p className="text-muted-foreground leading-relaxed mt-4">
            To eliminate this friction, I proposed and designed a unified schema editor directly within Studio. Features included:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Inline schema creation and editing.</li>
            <li>Drag-and-drop entity consumption.</li>
            <li>Automatic synchronization.</li>
            <li>Generation of mock data.</li>
          </ul>
          
          <div className="w-full mt-8">
            <img src="/src/assets/revamp-data-service-unified-experience.png" alt="Unified experience workflow showing integrated development interface" className="w-full rounded-lg" />
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