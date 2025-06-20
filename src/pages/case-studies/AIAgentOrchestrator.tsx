
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

const AIAgentOrchestrator = () => {
  const heroContent = (
    <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary to-purple-600 mx-auto mb-4"></div>
        <p className="text-muted-foreground">AI Agent Orchestrator</p>
      </div>
    </div>
  );

  const sections = [
    {
      title: "Project Overview",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            The AI Agent Orchestrator project involved designing an intelligent agent management system that enables seamless coordination and deployment of AI-powered automation agents across enterprise workflows. This system allows organizations to efficiently manage multiple AI agents, coordinate their activities, and optimize their performance at scale.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Status:</p>
              <p className="text-muted-foreground">In Progress</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Timeline:</p>
              <p className="text-muted-foreground">12 months (ongoing)</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Role:</p>
              <p className="text-muted-foreground">Lead Product Designer</p>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <p className="font-semibold text-primary">Collaborators:</p>
              <p className="text-muted-foreground">AI Engineers, Product Managers, Backend Developers</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Challenge",
      content: "Enterprise organizations were struggling to manage and coordinate multiple AI agents across different departments and workflows. The lack of centralized control, visibility into agent performance, and coordination mechanisms led to inefficiencies, conflicts, and suboptimal resource utilization."
    },
    {
      title: "Understanding AI Agent Complexity",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Through research with enterprise AI teams, we identified key challenges:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>Lack of visibility into agent activities and performance</li>
            <li>Difficulty in coordinating agents across different systems</li>
            <li>No centralized governance or compliance monitoring</li>
            <li>Complex deployment and scaling processes</li>
            <li>Limited ability to optimize agent interactions</li>
          </ul>
        </div>
      )
    },
    {
      title: "Design Solution",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The orchestrator design focused on creating an intuitive control center that provides:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li><strong>Visual Agent Network:</strong> Interactive map showing agent relationships and data flows</li>
            <li><strong>Performance Dashboard:</strong> Real-time monitoring of agent activities and metrics</li>
            <li><strong>Workflow Designer:</strong> Drag-and-drop interface for creating complex agent orchestrations</li>
            <li><strong>Resource Management:</strong> Intelligent allocation and scaling of computational resources</li>
            <li><strong>Governance Controls:</strong> Compliance monitoring and policy enforcement</li>
          </ul>
        </div>
      )
    },
    {
      title: "Key Features",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li><strong>Agent Marketplace:</strong> Centralized repository for discovering and deploying pre-built agents</li>
            <li><strong>Smart Load Balancing:</strong> Automatic distribution of workloads based on agent capabilities</li>
            <li><strong>Conflict Resolution:</strong> Intelligent handling of competing agent requests</li>
            <li><strong>Audit Trail:</strong> Complete logging and tracking of all agent activities</li>
            <li><strong>Integration Hub:</strong> Seamless connections with existing enterprise systems</li>
          </ul>
        </div>
      )
    },
    {
      title: "Current Results",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Early implementations have shown promising results:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
            <li>50% enhancement in agent deployment speed</li>
            <li>40% reduction in resource conflicts between agents</li>
            <li>65% improvement in overall system efficiency</li>
            <li>30% decrease in manual intervention requirements</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The project is ongoing with continued iterations based on user feedback and expanding enterprise requirements.
          </p>
        </div>
      )
    }
  ];

  return (
    <CaseStudyLayout
      title="AI Agent Orchestrator"
      subtitle="Designing an intelligent agent management system that enables seamless coordination and deployment of AI-powered automation agents across enterprise workflows"
      tags={["AI/ML", "Agent Systems", "Enterprise Automation", "Orchestration", "System Design"]}
      heroContent={heroContent}
      sections={sections}
    />
  );
};

export default AIAgentOrchestrator;
