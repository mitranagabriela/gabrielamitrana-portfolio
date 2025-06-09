
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Mail, Phone, Linkedin, Globe } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Senior UX/UI Designer",
      company: "Tech Innovation Co.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led design for 3 major product launches resulting in 40% increase in user engagement",
        "Established design system used across 5 product teams",
        "Mentored 2 junior designers and conducted user research with 200+ participants"
      ]
    },
    {
      title: "UX Designer",
      company: "Digital Solutions Inc.",
      period: "2021 - 2022",
      location: "Remote",
      achievements: [
        "Redesigned core user flows leading to 25% reduction in bounce rate",
        "Collaborated with engineering teams to implement responsive design solutions",
        "Created wireframes and prototypes for mobile and web applications"
      ]
    },
    {
      title: "Junior UI Designer",
      company: "Creative Studio",
      period: "2020 - 2021",
      location: "New York, NY",
      achievements: [
        "Designed marketing materials and digital assets for 15+ clients",
        "Developed brand identity packages for startups",
        "Maintained design consistency across multiple touchpoints"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Fine Arts in Graphic Design",
      school: "Art Institute of Design",
      period: "2016 - 2020",
      details: "Graduated Summa Cum Laude, Dean's List"
    }
  ];

  const skills = {
    "Design Tools": ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle"],
    "Technical Skills": ["HTML/CSS", "JavaScript Basics", "Responsive Design", "Design Systems"],
    "Soft Skills": ["User Research", "Prototyping", "Team Leadership", "Client Communication"],
    "Methodologies": ["Design Thinking", "Agile/Scrum", "User-Centered Design", "A/B Testing"]
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Download my complete resume or view the highlights below
          </p>
          <Button size="lg" className="group">
            <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            Download PDF Resume
          </Button>
        </div>

        {/* Contact Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Linkedin className="h-4 w-4" />
                <span>linkedin.com/in/yourprofile</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-2"></div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <Badge variant="outline">{job.period}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="font-medium">{job.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            {education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="font-medium text-muted-foreground">{edu.school}</span>
                  <Badge variant="outline">{edu.period}</Badge>
                </div>
                <p className="text-muted-foreground">{edu.details}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Skills & Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="space-y-3">
                  <h3 className="font-semibold text-primary">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
