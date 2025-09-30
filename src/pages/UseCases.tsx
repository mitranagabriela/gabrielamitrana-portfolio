import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { Link } from "react-router-dom";
const UseCases = () => {
  const projects = [{
    title: "Revamp Data Fabric",
    description: "Transformed the data management experience by addressing core user workflows and data access",
    image: "/lovable-uploads/revamp-data-fabric-cover.png",
    tags: ["Data Management", "Service Design", "Enterprise UX"],
    status: "Completed",
    results: "Improved data processing efficiency by 60%",
    caseStudyPath: "/case-studies/revamp-data-service"
  }, {
    title: "First Run Experience",
    description: "Redesigned the onboarding flow for an automation web app to increase adoption and reduce drop-off rates",
    image: "/lovable-uploads/first-run-experience-cover.png",
    tags: ["Mobile Design", "UX Research", "Fintech", "Onboarding"],
    status: "Completed",
    results: "Reduced onboarding drop-off by 40%",
    caseStudyPath: "/case-studies/first-run-experience"
  }, {
    title: "Lurtis AI Buildability Estimator",
    description: "Developed an AI-powered tool that analyzes a land potential and provides accurate buildability estimates",
    image: "/placeholder.svg",
    tags: ["AI/ML", "Estimation Tools", "Project Management", "Analytics"],
    status: "Completed",
    results: "Improved estimation accuracy by 45%",
    caseStudyPath: "/case-studies/lurtis-ai-buildability-estimator",
    demoLink: "https://www.youtube.com/watch?v=41Q5jUUWEaM"
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
          {projects.map((project, index) => <Link key={index} to={project.caseStudyPath}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="p-3 bg-accent/50 rounded-lg">
                  <p className="text-sm font-medium text-primary">Key Result:</p>
                  <p className="text-sm text-muted-foreground">{project.results}</p>
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