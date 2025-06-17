import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
const UseCases = () => {
  const projects = [{
    title: "First Run Experience",
    description: "Redesigned the onboarding flow for an automation web app to increase adoption and reduce drop-off rates",
    image: "/placeholder.svg",
    tags: ["Mobile Design", "UX Research", "Fintech", "Onboarding"],
    status: "Completed",
    results: "Reduced onboarding drop-off by 40%",
    caseStudyPath: "/case-studies/first-run-experience",
    externalLink: "https://gmitrana.myportfolio.com/first-run-experience"
  }, {
    title: "SaaS Dashboard Design System",
    description: "Created a comprehensive design system for a B2B software platform used by 10,000+ users.",
    image: "/placeholder.svg",
    tags: ["Design Systems", "B2B", "Web Design"],
    status: "Completed",
    results: "50% faster development time",
    caseStudyPath: "/case-studies/saas-dashboard"
  }, {
    title: "Healthcare App UX Study",
    description: "User research and interface design for a telemedicine application targeting elderly users.",
    image: "/placeholder.svg",
    tags: ["Healthcare", "Accessibility", "User Research"],
    status: "In Progress",
    results: "Improved accessibility score by 40%",
    caseStudyPath: "/case-studies/healthcare-app"
  }];
  return <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Use Cases & Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my recent design projects and case studies. Each project showcases different aspects 
            of my design process, from research and ideation to final implementation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-primary to-purple-600 mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Project Preview</p>
                </div>
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
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link to={project.caseStudyPath}>
                      <ExternalLink className="mr-2 h-3 w-3" />
                      View Case Study
                    </Link>
                  </Button>
                  {project.externalLink && <Button variant="outline" size="sm" className="flex-1" asChild>
                      
                    </Button>}
                </div>
              </CardContent>
            </Card>)}
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