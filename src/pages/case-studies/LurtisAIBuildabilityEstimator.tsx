import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
const LurtisAIBuildabilityEstimator = () => {
  const heroContent = <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary to-purple-600 mx-auto mb-4"></div>
        <p className="text-muted-foreground">AI-Powered Buildability Tool for Real Estate Feasibility</p>
      </div>
    </div>;
  const sections = [{
    title: "Overview",
    content: <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Role:</p>
              <p className="text-muted-foreground">UX/UI Designer</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Timeline:</p>
              <p className="text-muted-foreground">6 months</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Team:</p>
              <p className="text-muted-foreground">1 PM, 2 engineers, 3 architects</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Tools:</p>
              <p className="text-muted-foreground">Figma, Miro</p>
            </div>
          </div>
        </div>
  }, {
    title: "The Challenge",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">Construction and real estate are industrial sectors with a significant economic value, but they are also quite conventional in adopting new technologies. Despite the growing demand, feasibility analysis for property development is still a manual process, often involving time-intensive consultations and fragmented datasets.</p>
          <p className="text-muted-foreground leading-relaxed">This inefficiency is amplified by:</p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>A lack of digitalization in early-stage planning</li>
            <li>Difficulty in estimating buildable potential and profitability</li>
            <li>Regulatory factors that vary by region</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            We saw an opportunity to simplify this with an AI-driven tool that would empower professionals to make faster, smarter decisions early in the design phase.
          </p>
        </div>
  }, {
    title: "The Solution",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">We designed an AI-based buildability assessment tool that allows developers, architects, and consultants to quickly estimate:</p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>What can be built on a given plot</li>
            <li>The expected profitability of different project scenarios</li>
            <li>The optimal use of land, based on zoning, market trends, and user-defined constraints</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            The tool aims to significantly reduce the time spent on pre-design analysis and eliminate guesswork in the decision-making process.
          </p>
        </div>
  }, {
    title: "Design Process",
    content: <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">1. Market Research</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              To understand the opportunity space, I first analyzed key real estate trends, focusing on post-pandemic shifts and the emerging Build-to-Rent (BTR) sector in Europe.
            </p>
            <p className="font-semibold text-primary mb-2">Key insights:</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>COVID-19 accelerated remote work and e-commerce, reducing demand for office and retail spaces.</li>
              <li>Residential markets saw delays due to economic uncertainty and property viewing restrictions.</li>
              <li>The BTR model gained traction in the UK, where investors are prioritizing long-term rental returns. In contrast, Spain's BTR market remained underdeveloped, offering a promising ground for innovation.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">These insights helped me identify a growing need: flexible tools that support early investment decisions focusing on the BTR market in Spain.</p>
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
              
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">I also created a stakeholder map, focusing on users with both high power and interest — primarily architects, urban planners, and property developers.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">3. Surveys & Interviews</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">To validate assumptions, I designed and distributed surveys targeting the main stakeholders identified in the previous stage. Key questions covered:</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>Familiarity with AI in real estate</li>
              <li>Job-related best practices</li>
              <li>Desired features in a new tool</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3 py-[3px]">
              I followed up with 1:1 interviews to gain deeper qualitative insights. These revealed recurring pain points:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              
              <li className="py-0">Difficulty in aggregating data from multiple sources</li>
              <li>Manual checking of regulations</li>
              <li>Update artefacts and sync work with other colleagues</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              From this, I created user personas and a customer journey map, which highlighted critical decision-making moments and emotional pain points.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">4. Defining the Architecture</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">I created a navigation map to clearly visualize all the features and the relationships between them. The navigation map built on the scenario explored in the customer journey. Each of the actions previously identified became features allowing users to accomplish a goal. 
        </p>
            <p className="text-muted-foreground leading-relaxed">Using the navigation map, I started sketching the main screens to establish a layout that everyone in the team would agree with. The wireframes provided a stimulating artifact for discussion and gave everyone an idea of how the interface could look like. ​​​​​​​​​​​​​​​​​​​​​</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">5. Prototyping & Iteration</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">The high-fidelity prototype incorporated:</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>Smart selection of land</li>
              <li>Customize preferences</li>
              <li>Automatic check of regulations</li>
              <li>Generation of solutions</li>
              <li>Comparison between solution</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              The design went through multiple iterations based on stakeholder reviews and usability testing. I used cognitive walkthroughs to identify usability friction points and refined the flows accordingly.
            </p>
          </div>
        </div>
  }, {
    title: "Results & Reflections",
    content: <div className="space-y-4">
          <div>
            
            
          </div>
          <div>
            
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>Real estate professionals are open to digital tools—but only if they clearly reduce risk and save time.</li>
              <li>Early stakeholder involvement helped avoid overdesigning features no one needed.</li>
              <li>Iteration is essential. Usability testing uncovered navigation issues that weren't visible during internal reviews.</li>
            </ul>
          </div>
        </div>
  }, {
    title: "Product Demo",
    content: <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Watch the product in action and see how the AI-powered buildability estimator transforms real estate feasibility analysis:
          </p>
          <a href="https://www.youtube.com/watch?v=41Q5jUUWEaM" target="_blank" rel="noopener noreferrer" className="block relative aspect-video bg-muted rounded-lg overflow-hidden mb-4 hover:opacity-90 transition-opacity cursor-pointer">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop&crop=center" alt="Product Demo Thumbnail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
              </div>
            </div>
          </a>
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            
          </Button>
        </div>
  }];
  return <CaseStudyLayout title="Lurtis AI Buildability Estimator" subtitle="AI-Powered Buildability Tool for Real Estate Feasibility" tags={["AI/ML", "Real Estate", "Feasibility Analysis", "Product Design", "UX Research"]} heroContent={heroContent} sections={sections} />;
};
export default LurtisAIBuildabilityEstimator;