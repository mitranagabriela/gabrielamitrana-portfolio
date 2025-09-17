import { CaseStudyLayout } from "@/components/CaseStudyLayout";
const RevampDataService = () => {
  const heroContent = <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary to-purple-600 mx-auto mb-4"></div>
        <p className="text-muted-foreground">Revamp Data Service</p>
      </div>
    </div>;
  const sections = [{
    title: "Project Overview",
    content: <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">Data Service is UiPath's low-code data modeling and management layer — a lightweight database designed for automation developers. It simplifies how data is stored and accessed without requiring backend expertise.</p>
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
            Our vision was to make Data Service the default system of record within UiPath.
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
            <li>Analyzing both creation and consumption user workflows </li>
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
            <li>Simplified CTAs and reduced decision paralysis through cleaner UI hierarchy.</li>
            <li>Contextual tips for first-time users.</li>
            <li>Streamlined sync between entity definitions and Studio.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">These changes were shipped in the first few sprints  and immediately improved usability metrics from internal QA and pilot users.</p>
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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="text-center">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-50 rounded-full border border-red-200">
                    BEFORE
                  </span>
                </div>
                <div className="border rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src="/src/assets/data-service-before.png" 
                    alt="Before: Complex role management interface with cluttered layout and unclear permissions structure"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Complex interface with unclear permissions and cluttered role management
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-center">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-green-600 bg-green-50 rounded-full border border-green-200">
                    AFTER
                  </span>
                </div>
                <div className="border rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src="/src/assets/data-service-after.png" 
                    alt="After: Clean, organized role creation interface with clear permission structure and intuitive layout"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Streamlined interface with clear permission structure and intuitive role creation flow
                </p>
              </div>
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
          
          <div className="mt-8">
            <img 
              src="/src/assets/unified-experience-workflow.png" 
              alt="Unified schema editing workflow showing the integrated development experience within UiPath Studio"
              className="w-full rounded-lg border shadow-sm"
            />
            <p className="text-sm text-muted-foreground text-center mt-2">
              Integrated schema editing workflow eliminating the need for context switching
            </p>
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
  return <CaseStudyLayout title="Revamp Data Service" subtitle="Transforming the data management experience by redesigning core service interfaces and user workflows for better data accessibility and performance" tags={["Data Management", "Service Design", "Enterprise UX", "Access Control", "Platform Integration"]} heroContent={heroContent} sections={sections} />;
};
export default RevampDataService;
