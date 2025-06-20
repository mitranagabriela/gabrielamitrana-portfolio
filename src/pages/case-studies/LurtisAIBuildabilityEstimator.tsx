
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

const LurtisAIBuildabilityEstimator = () => {
  const heroContent = (
    <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary to-purple-600 mx-auto mb-4"></div>
        <p className="text-muted-foreground">Lurtis AI Buildability Estimator</p>
      </div>
    </div>
  );

  const sections = [
    {
      title: "Project Overview",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            The Lurtis AI Buildability Estimator is an innovative tool designed to revolutionize how software development teams approach project estimation. By leveraging advanced AI algorithms and machine learning models, the platform analyzes project requirements, technical specifications, and historical data to provide accurate buildability estimates.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Traditional estimation methods often fall short due to human bias, incomplete information, and varying interpretations of project scope. As the Lead UX Designer, I spearheaded the design of an intuitive interface that makes complex AI-driven insights accessible to both technical and non-technical stakeholders.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Status:</p>
              <p className="text-muted-foreground">Project completed and launched</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Timeline:</p>
              <p className="text-muted-foreground">6 months</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Role:</p>
              <p className="text-muted-foreground">Lead UX Designer</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Collaborators:</p>
              <p className="text-muted-foreground">3 PMs, 12 engineers, 2 data scientists</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Vision & Business Goals",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Our vision was to create the most accurate and user-friendly estimation tool in the market, empowering teams to make data-driven decisions about project feasibility and resource allocation.
          </p>
          <p className="text-muted-foreground leading-relaxed">Key business objectives included:</p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Reduce estimation errors by at least 40% compared to traditional methods</li>
            <li>Increase project planning efficiency and reduce time-to-market</li>
            <li>Establish Lurtis as a leader in AI-powered project management tools</li>
            <li>Generate actionable insights for strategic decision-making</li>
          </ul>
        </div>
      )
    },
    {
      title: "Research & Discovery",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I conducted extensive research to understand the pain points in current estimation practices:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Interviewed 25+ project managers, developers, and stakeholders across various industries</li>
            <li>Analyzed existing estimation tools and identified gaps in user experience</li>
            <li>Studied historical project data to understand common estimation failure patterns</li>
            <li>Collaborated with data scientists to understand AI model capabilities and limitations</li>
          </ul>
          <div className="mt-6">
            <p className="font-semibold text-primary mb-2">Key Research Insights:</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
              <li>Users needed transparency into how AI recommendations were generated</li>
              <li>Estimation confidence levels were as important as the estimates themselves</li>
              <li>Integration with existing project management tools was critical for adoption</li>
              <li>Visual representation of risk factors significantly improved decision-making</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Design Strategy & Information Architecture",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I developed a three-tier information architecture that balanced simplicity with comprehensive functionality:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li><strong>Input Layer:</strong> Streamlined requirement gathering with smart forms and auto-suggestions</li>
            <li><strong>Analysis Layer:</strong> Real-time AI processing with transparent confidence indicators</li>
            <li><strong>Output Layer:</strong> Interactive dashboards with customizable views for different stakeholder needs</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The design strategy focused on progressive disclosure, ensuring that users could access detailed insights without overwhelming the primary workflow.
          </p>
        </div>
      )
    },
    {
      title: "Key Features & Innovations",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I designed several innovative features that set the platform apart:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li><strong>AI Transparency Dashboard:</strong> Visual explanations of how estimates were calculated</li>
            <li><strong>Risk Heat Map:</strong> Interactive visualization of potential project bottlenecks</li>
            <li><strong>Collaborative Estimation:</strong> Real-time team input integration with conflict resolution</li>
            <li><strong>Scenario Planning:</strong> What-if analysis with dynamic estimate adjustments</li>
            <li><strong>Learning Engine:</strong> System that improves accuracy based on actual project outcomes</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Each feature was designed with extensive user testing to ensure intuitive interaction and maximum value delivery.
          </p>
        </div>
      )
    },
    {
      title: "Results & Impact",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The platform launched successfully and delivered significant value to our users:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>45% improvement in estimation accuracy compared to traditional methods</li>
            <li>60% reduction in time spent on project planning activities</li>
            <li>25% increase in project success rates among early adopters</li>
            <li>95% user satisfaction score in post-launch surveys</li>
            <li>Featured in 3 major industry publications as an innovation leader</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The platform's success led to expansion into new market segments and additional AI-powered features.
          </p>
        </div>
      )
    },
    {
      title: "Reflections & Learnings",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>AI transparency is crucial for user trust - users need to understand how decisions are made</li>
            <li>Collaborative features drive adoption more than individual productivity gains</li>
            <li>Visual data representation significantly improves decision-making speed and quality</li>
            <li>Iterative feedback loops with real project outcomes create exponential value improvement</li>
            <li>Balancing automation with human expertise requires careful UX consideration</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <CaseStudyLayout
      title="Lurtis AI Buildability Estimator"
      subtitle="Developed an AI-powered tool that analyzes project requirements and provides accurate buildability estimates for software development projects"
      tags={["AI/ML", "Estimation Tools", "Project Management", "Analytics", "Data Visualization"]}
      heroContent={heroContent}
      sections={sections}
    />
  );
};

export default LurtisAIBuildabilityEstimator;
