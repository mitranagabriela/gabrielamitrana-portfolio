import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { Link } from "react-router-dom";
import firstRunCover from "@/assets/first-run-experience-cover.png";
const UseCases = () => {
  const projects = [{
    title: "New IA for Agents Monitoring",
    description: "Redesigning how enterprises monitor and optimize AI agents",
    image: "/placeholder.svg",
    tags: ["Information Architecture", "AI Monitoring", "Enterprise UX", "Data Visualization"],
    status: "In progress",
    results: "In progress",
    caseStudyPath: "/case-studies/agents-monitoring"
  }, {
    title: "Revamp Data Fabric",
    description: "Simplified the data management flow for UiPath — from fragmentation to a cohesive experience.",
    image: "/lovable-uploads/revamp-data-fabric-cover.png",
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
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => <Link key={index} to={project.caseStudyPath} className="group">
              <Card className="overflow-hidden transition-all duration-500 ease-out cursor-pointer border-2 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2">
              <div className="aspect-video overflow-hidden relative bg-accent/30">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">{project.title}</CardTitle>
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="whitespace-nowrap transition-transform duration-300 group-hover:scale-110">
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="p-3 bg-accent/50 rounded-lg transition-all duration-300 group-hover:bg-accent group-hover:shadow-md">
                  <p className="text-sm font-medium text-primary">Key Result:</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">{project.results}</p>
                </div>
                
              </CardContent>
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