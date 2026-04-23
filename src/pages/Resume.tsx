const Resume = () => {
  const experience = [
    {
      title: "Senior Product Designer",
      company: "UiPath, Bucharest, Romania",
      period: "Jul 2025 — Present",
      achievements: [
        "Contributed from the ground up to UiPath's AI Agents (Act 2) strategy, defining how enterprises build, deploy, and monitor agents within UiPath's platform."

      ],
    },
    {
      title: "Product Designer",
      company: "UiPath, Bucharest, Romania",
      period: "Jul 2021 — Jul 2025",
      achievements: [
        "Led redesign of UiPath's Data Fabric, improving how developers create and manage data within automation workflows.",
        "Built Studio Web from 0→1, a browser-based platform for designing automation workflows.",
      ],
    },
    {
      title: "UX Designer",
      company: "Lurtis AI, Bucharest, Romania",
      period: "Jan 2021 — Jul 2021",
      achievements: [
        "As the sole Product Designer I designed an AI-driven tool that maximises the potential of a plot, obtaining a wide variety of optimal building designs."
      ],
    },
  ];

  const education = [
    {
      degree: "Master's Degree, Accessibility and Inclusive Design",
      school: "Universidad Politécnica di Madrid, Madrid, Spain",
      period: "2020 — 2021",
    },
    {
      degree: "Master's Degree, Human Computer Interaction and Design",
      school: "University of Twente, Enschede, Netherlands",
      period: "2019 — 2020",
    },
    {
      degree: "Bachelor's Degree, Nanotechnology and Optoelectronics",
      school: "Faculty of Electronics and Telecommunications, Bucharest, Romania",
      period: "2015 — 2019",
    },
  ];

  const skills: Record<string, string[]> = {
    Skills: [
      "Product Design",
      "Design Thinking",
      "Interaction Design",
      "Responsive Design",
      "Product Strategy",
      "Information Architecture",
      "Accessibility and Inclusive Design",
      "Agile Methodology",
    ],
    Software: ["Claude Code", "Codex", "Cursor", "Figma", "Miro", "Adobe Photoshop Lightroom"],
    Interests: ["AI, Automation", "Digital & Analog photography", "Sports and Health", "Travelling"],
  };

  const conferences = [
    "Figma Config 2025 · San Francisco",
    "Design Matters '24 · Tokyo · 2023",
    "User Experience Lisbon UXLx · Lisbon · 2022",
  ];

  const SectionHeader = ({ label }: { label: string }) => (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-label uppercase text-muted-foreground">{label}</span>
      <span aria-hidden className="h-px flex-1 bg-border" />
    </div>
  );

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="container-editorial py-section">
        {/* Header */}
        <header className="mb-section-sm max-w-[60ch]">
          <span className="block text-label uppercase text-muted-foreground mb-6">Résumé</span>
          <h1 className="text-h1 mb-4">Gabriela Mitrana</h1>
          <p className="text-body-lg text-muted-foreground">
            Senior Product Designer — Bucharest, Romania
          </p>
        </header>

        {/* Experience */}
        <section className="mb-section-sm">
          <SectionHeader label="Experience" />
          <div className="space-y-12">
            {experience.map((job, index) => (
              <article key={index} className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10">
                <div className="text-meta uppercase tracking-wider text-muted-foreground md:pt-1">
                  {job.period}
                </div>
                <div>
                  <h3 className="text-h3 mb-1">{job.title}</h3>
                  <p className="text-body-sm text-muted-foreground mb-4">{job.company}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-body text-muted-foreground leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-section-sm">
          <SectionHeader label="Education" />
          <div className="space-y-10">
            {education.map((edu, index) => (
              <article key={index} className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10">
                <div className="text-meta uppercase tracking-wider text-muted-foreground md:pt-1">
                  {edu.period}
                </div>
                <div>
                  <h3 className="text-h3 mb-1">{edu.degree}</h3>
                  <p className="text-body-sm text-muted-foreground">{edu.school}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills & Interests */}
        <section className="mb-section-sm">
          <SectionHeader label="Skills & Interests" />
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="text-h4 mb-4">{category}</h3>
                <ul className="space-y-2">
                  {skillList.map((skill) => (
                    <li key={skill} className="text-body-sm text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Conferences */}
        <section>
          <SectionHeader label="Exchanged Ideas At" />
          <ul className="space-y-3">
            {conferences.map((conference, index) => (
              <li key={index} className="text-body text-muted-foreground">
                {conference}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
