import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { Link } from "react-router-dom";
import agentsMonitoringCover from "@/assets/agents-monitoring-cover.jpg";
import revampDataFabricCover from "@/assets/revamp-data-fabric-cover-generated.jpg";
import firstRunCover from "@/assets/first-run-experience-cover-generated.jpg";
const UseCases = () => {
  const projects = [{
    title: "New IA for Agents Monitoring",
    description: "Redesigning how enterprises monitor and optimize AI agents",
    image: agentsMonitoringCover,
    tags: ["Information Architecture", "AI Monitoring", "Enterprise UX", "Data Visualization"],
    status: "In progress",
    results: "In progress",
    caseStudyPath: "/case-studies/agents-monitoring"
  }, {
    title: "Revamp Data Fabric",
    description: "Simplified the data management flow for UiPath — from fragmentation to a cohesive experience.",
    image: revampDataFabricCover,
    tags: ["Data Management", "Service Design", "Enterprise UX"],
    status: "Completed",
    results: "Increased the data operations by 100%",
    caseStudyPath: "/case-studies/revamp-data-service"
  }, {
    title: "Getting Started with Studio Web",
    description: "Designed the onboarding experience for an automation platform to increase adoption and reduce drop-off rates",
    image: firstRunCover,
    tags: ["Mobile Design", "UX Research", "Fintech", "Onboarding"],
    status: "Completed",
    results: "Reduced the time to build by 40%",
    caseStudyPath: "/case-studies/first-run-experience"
  }];
  return <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest design projects and case studies.<br />
            Each project showcases different aspects of my design process,<br />
            from research and ideation to final implementation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-12 mb-12 max-w-5xl mx-auto">
          {projects.map((project, index) => <Link key={index} to={project.caseStudyPath} className="group">
              <Card className="overflow-hidden transition-all duration-500 ease-out cursor-pointer border-2 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Text Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between bg-accent/30 group-hover:bg-accent/50 transition-colors duration-500">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl lg:text-3xl font-bold transition-colors duration-300 group-hover:text-primary leading-tight">
                        {project.title}
                      </h3>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="whitespace-nowrap transition-transform duration-300 group-hover:scale-110 shrink-0">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-base lg:text-lg text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 p-4 bg-background/60 rounded-lg transition-all duration-300 group-hover:bg-background/80 group-hover:shadow-md">
                    <p className="text-sm font-semibold text-primary mb-1">Key Result:</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                      {project.results}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden relative bg-muted">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/10 to-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </Card>
            </Link>)}
        </div>

        {/* Coming Soon Section */}
        <Card className="text-center p-8 bg-gradient-to-br from-accent/50 to-primary/5">
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-bold">More Projects Coming Soon</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm currently working on several exciting projects that will be added to this portfolio. 
              Check back soon for detailed case studies, process documentation, and project outcomes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default UseCases;