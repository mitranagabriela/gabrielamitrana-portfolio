import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Eye, Users, Award } from "lucide-react";
const Index = () => {
  const skills = ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems", "Responsive Design", "Branding"];
  const stats = [{
    icon: Eye,
    label: "Projects Completed",
    value: "50+"
  }, {
    icon: Users,
    label: "Stakeholders Involved",
    value: "25+"
  }, {
    icon: Award,
    label: "Years Experience",
    value: "4+"
  }];
  return <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Gabriela Mitrana
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">Product designer with a focus on human-centered design, helping people save time, while offering a smooth experience in the process.</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 4).map(skill => <Badge key={skill} variant="secondary" className="text-sm py-1">
                    {skill}
                  </Badge>)}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/usecases">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/resume">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/20 p-8">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img src="/lovable-uploads/79f69057-22b9-4a99-b407-027f7b628e54.png" alt="Gabriela Mitrana - Product Designer" className="w-full h-full object-cover grayscale" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map(stat => {
            const Icon = stat.icon;
            return <Card key={stat.label} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">About Me</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a dedicated designer with a passion for creating meaningful digital experiences. 
                My approach combines user-centered design principles with business objectives to deliver 
                solutions that not only look beautiful but also drive results.
              </p>
              <p>When I'm not designing, I'm usually out photographing or simply enjoying the outdoors. I'm curious by nature and always seeking new perspectives – a mindset that deeply influences my design work.</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;
