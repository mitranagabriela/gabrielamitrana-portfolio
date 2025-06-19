
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Mail, Phone, Linkedin } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Product Designer",
      company: "UiPath, Bucharest, Romania",
      period: "JULY 2021 - PRESENT",
      achievements: [
        "Currently - designing how AI agents are built, deployed, and monitored.",
        "Led the design of UiPath's data storage service, enabling robust, no-code data modeling and storage for RPA projects—streamlining how businesses manage and leverage data in automation workflows.",
        "Built Studio Web from the ground up—a powerful, web-based platform for designing, optimizing, and automating business processes at scale."
      ]
    },
    {
      title: "UX Designer",
      company: "Lurtis AI, Bucharest, Romania",
      period: "JAN 2021 - JULY 2021",
      achievements: [
        "As the sole Product Designer at Lurtis AI, I led the design of an AI buildability estimator. I created wireframes and interactive prototypes, conducted usability testing, iterated based on feedback, and delivered an accessible solution aligned with business goals."
      ]
    },
    {
      title: "Digital Verification Engineer",
      company: "Infineon Technologies",
      period: "JUN 2018 - SEP 2019",
      achievements: [
        "Specialized in verifying complex automotive digital designs, with a focus on functional accuracy and safety compliance."
      ]
    }
  ];

  const education = [
    {
      degree: "Master's Degree, Accessibility and Inclusive Design",
      school: "Universidad Politécnica di Madrid, Madrid, Spain",
      period: "OCT 2015 - JULY 2021"
    },
    {
      degree: "Master's Degree, Human Computer Interaction and Design",
      school: "University of Twente, Enschede, Netherlands",
      period: "OCT 2015 - JULY 2021"
    },
    {
      degree: "Bachelor's Degree, Nanotechnology and Optoelectronics",
      school: "Faculty of Electronics and Telecommunications, Bucharest, Romania",
      period: "OCT 2015 - JULY 2021"
    }
  ];

  const skills = {
    "Skills": ["Product Design", "Design Thinking", "Interaction Design", "Responsive Design", "Product Strategy", "Information Architecture", "Accessibility and Inclusive Design", "Agile Methodology"],
    "Software": ["Figma", "Miro", "Adobe Photoshop Lightroom"],
    "Interests": ["AI, Automation", "Digital & Analog photography", "Sports and Health", "Travelling"]
  };

  const conferences = [
    "Figma Config 2025 | San Francisco",
    "Design Matters '24, Tokyo, 2023",
    "User Experience Lisbon UXLx — Lisbon, 2022"
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Gabriela Mitrana</h1>
          <p className="text-xl text-muted-foreground mb-2">Product Designer</p>
          <p className="text-muted-foreground mb-8">Bucharest, Romania</p>
          <Button size="lg" className="group">
            <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            Download PDF Resume
          </Button>
        </div>

        {/* Experience */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Experience</CardTitle>
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
          <CardContent className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="font-medium text-muted-foreground">{edu.school}</span>
                  <Badge variant="outline">{edu.period}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills & Interests */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Skills & Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-1 gap-6">
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

        {/* Conferences */}
        <Card>
          <CardHeader>
            <CardTitle>Conferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {conferences.map((conference, index) => (
                <div key={index} className="text-muted-foreground">
                  {conference}
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
