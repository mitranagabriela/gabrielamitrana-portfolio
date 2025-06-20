import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const LurtisAIBuildabilityEstimator = () => {
  const heroContent = (
    <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary to-purple-600 mx-auto mb-4"></div>
        <p className="text-muted-foreground">AI-Powered Buildability Tool for Real Estate Feasibility</p>
      </div>
    </div>
  );

  const sections = [
    {
      title: "Overview",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Role:</p>
              <p className="text-muted-foreground">Product Designer</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Timeline:</p>
              <p className="text-muted-foreground">[Insert Duration]</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Team:</p>
              <p className="text-muted-foreground">[Mention roles if relevant, e.g., data scientists, real estate consultants]</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Tools:</p>
              <p className="text-muted-foreground">[Figma, Miro, etc.]</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The Challenge",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Real estate and construction are among the most economically valuable yet technologically conservative sectors. Despite the growing demand for efficient planning tools, feasibility analysis for property development is still a slow, manual process—often involving time-intensive consultations and fragmented datasets.
          </p>
          <p className="text-muted-foreground leading-relaxed">This inefficiency is amplified by:</p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>A lack of digitalization in early-stage planning</li>
            <li>Difficulty in estimating buildable potential and profitability</li>
            <li>Complex zoning and regulatory factors that vary by region</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            We saw an opportunity to simplify this with an AI-driven tool that would empower professionals to make faster, smarter decisions early in the design phase.
          </p>
        </div>
      )
    },
    {
      title: "The Solution",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            We designed an AI-based buildability assessment platform that allows users—developers, architects, and consultants—to quickly estimate:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>What can be built on a given plot</li>
            <li>The expected profitability of different project scenarios</li>
            <li>The optimal use of land, based on zoning, market trends, and user-defined constraints</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            The tool aims to significantly reduce the time spent on pre-design analysis and eliminate guesswork in the decision-making process.
          </p>
        </div>
      )
    },
    {
      title: "Design Process",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">1. Market Research</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              To understand the opportunity space, I first analyzed key real estate trends, focusing on post-pandemic shifts and the emerging Build-to-Rent (BTR) sector in Europe.
            </p>
            <p className="font-semibold text-primary mb-2">Key insights:</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>COVID-19 accelerated remote work and e-commerce, reducing demand for office and retail spaces.</li>
              <li>Residential markets saw delays due to economic uncertainty and property viewing restrictions.</li>
              <li>The BTR model gained traction in the UK, where investors are prioritizing long-term rental returns. In contrast, Spain's BTR market remained underdeveloped, offering fertile ground for innovation.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              These insights helped me identify a growing need: flexible tools that support early investment decisions across changing urban contexts.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">2. Understanding the Context</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Next, I mapped the ecosystem by conducting a competitive analysis. I evaluated existing tools based on:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>Features and pricing</li>
              <li>User experience</li>
              <li>Target markets</li>
              <li>Gaps in automation and predictive modeling</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              I also created a stakeholder map, focusing on users with both high power and interest—primarily architects, urban planners, and property developers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">3. Surveys & Interviews</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              To validate assumptions, I designed and distributed surveys targeting stakeholders. Key questions covered:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>Familiarity with AI in real estate</li>
              <li>Challenges in early feasibility assessments</li>
              <li>Desired features in a new tool</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              I followed up with 1:1 interviews to gain deeper qualitative insights. These revealed recurring pain points:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>Time lost collecting zoning data</li>
              <li>Difficulty comparing multiple project scenarios</li>
              <li>Lack of confidence in ROI estimations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              From this, I created user personas and a customer journey map, which highlighted critical decision-making moments and emotional pain points.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">4. Defining the Architecture</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              With a clearer understanding of the user flow, I built a navigation map to represent the product's functional architecture. Each major user action—such as inputting a land parcel or reviewing profitability—became a feature node.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I translated these actions into screen layouts, starting with low-fidelity wireframes. These served as early artifacts to align the team and get fast feedback on layout, terminology, and interaction patterns.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">5. Prototyping & Iteration</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">The high-fidelity prototype incorporated:</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>Smart data input fields</li>
              <li>Interactive zoning overlays</li>
              <li>Dynamic charts for buildability and ROI scenarios</li>
              <li>Scenario comparison dashboards</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              The design went through multiple iterations based on stakeholder reviews and usability testing. I used cognitive walkthroughs to identify usability friction points and refined the flows accordingly.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Results & Reflections",
      content: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-primary mb-2">Outcomes</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>Reduced feasibility analysis time from weeks to minutes</li>
              <li>Enabled users to compare multiple project scenarios side-by-side</li>
              <li>Created a visual, interactive experience that helped stakeholders better communicate and make faster decisions</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-primary mb-2">What I Learned</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>Real estate professionals are open to digital tools—but only if they clearly reduce risk and save time.</li>
              <li>Early stakeholder involvement helped avoid overdesigning features no one needed.</li>
              <li>Iteration is essential. Usability testing uncovered navigation issues that weren't visible during internal reviews.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Next Steps",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Integrate regional datasets to support expansion beyond initial geographies</li>
            <li>Add more advanced AI simulations (e.g., traffic impact, sustainability scores)</li>
            <li>Build a lighter version of the tool for mobile use in field assessments</li>
          </ul>
        </div>
      )
    },
    {
      title: "Product Demo",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Watch the product in action and see how the AI-powered buildability estimator transforms real estate feasibility analysis:
          </p>
          <a 
            href="https://www.youtube.com/watch?v=41Q5jUUWEaM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative aspect-video bg-muted rounded-lg overflow-hidden mb-4 hover:opacity-90 transition-opacity cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop&crop=center"
              alt="Product Demo Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
              </div>
            </div>
          </a>
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <a 
              href="https://www.youtube.com/watch?v=41Q5jUUWEaM" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Watch Product Demo
            </a>
          </Button>
        </div>
      )
    }
  ];

  return (
    <CaseStudyLayout
      title="Lurtis AI Buildability Estimator"
      subtitle="AI-Powered Buildability Tool for Real Estate Feasibility"
      tags={["AI/ML", "Real Estate", "Feasibility Analysis", "Product Design", "UX Research"]}
      heroContent={heroContent}
      sections={sections}
    />
  );
};

export default LurtisAIBuildabilityEstimator;
