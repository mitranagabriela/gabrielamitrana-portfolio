
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Eye, Users, Award } from "lucide-react";

const Index = () => {
  const skills = [
    "UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping", 
    "User Research", "Design Systems", "Responsive Design", "Branding"
  ];

  const stats = [
    { icon: Eye, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "25+" },
    { icon: Award, label: "Years Experience", value: "3+" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                    Gabriela
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A passionate Product Designer crafting digital experiences that delight users and drive business results. 
                  I transform complex problems into elegant, user-centered solutions through thoughtful design and research.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 4).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1">
                    {skill}
                  </Badge>
                ))}
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
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 p-6">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/93e2f568-37e5-4945-b324-c2f4ae322055.png" 
                    alt="Gabriela Mitrana - Product Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              );
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
                I'm a dedicated Product Designer with a passion for creating meaningful digital experiences that bridge 
                user needs with business objectives. Currently leading design efforts at UiPath, I specialize in 
                building intuitive tools for enterprise automation and data management.
              </p>
              <p>
                With expertise spanning UX research, interaction design, and accessibility, I believe great design 
                should be both beautiful and functional. My approach combines data-driven insights with empathetic 
                design thinking to create solutions that truly make a difference.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="py-2 justify-center hover:bg-accent/20 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
