import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import agentsMonitoringCover from "@/assets/agents-monitoring-cover-new.jpg";
import revampDataFabricCover from "@/assets/revamp-data-fabric-cover-final.png";
import firstRunCover from "@/assets/first-run-experience-hero.png";
import { fadeUp, viewportOnce, stagger } from "@/lib/motion";

const UseCases = () => {
  const projects = [
    {
      title: "Improving Runtime Monitoring for Agents",
      description: "Redesigned how enterprises monitor and optimize AI agents",
      image: agentsMonitoringCover,
      tags: ["FULL REDESIGN", "AI AGENTS", "WEB"],
      status: "Completed",
      results: "Increased deployed agent runs by 95%",
      year: "2025",
      caseStudyPath: "/case-studies/agents-monitoring",
    },
    {
      title: "Revamp Data Fabric",
      description: "Simplified the data management flow for UiPath, from fragmentation to a cohesive experience",
      image: revampDataFabricCover,
      tags: ["FULL REDESIGN", "DATA MANAGEEMNT", "WEB"],
      status: "Completed",
      results: "Increased data operations by 100%",
      year: "2024",
      caseStudyPath: "/case-studies/revamp-data-service",
    },
    {
      title: "Getting Started with Studio Web",
      description: "Designed the onboarding experience for an automation builder to increase adoption and reduce drop-off rates",
      image: firstRunCover,
      tags: ["0 TO 1 DESIGN", "ONBOARDING", "RPA", "WEB"],
      status: "Completed",
      results: "Reduced time to build by 40%",
      year: "2022",
      caseStudyPath: "/case-studies/first-run-experience",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="container-editorial py-section">
        {/* Header */}
        <header className="mb-section-sm max-w-[60ch]">
          <span className="block text-label uppercase text-muted-foreground mb-6">Selected Work</span>
          <h1 className="text-h1 mb-6">What I've designed</h1>
        </header>

        {/* Projects list */}
        <motion.div
          variants={stagger(0.1)}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="border-t border-border"
        >
          {projects.map((project, index) => {
            const counter = String(index + 1).padStart(2, "0");
            return (
              <motion.article key={project.caseStudyPath} variants={fadeUp}>
                <Link
                  to={project.caseStudyPath}
                  className="group block py-section-sm border-b border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 rounded-sm"
                >
                  {/* Eyebrow row */}
                  <div className="flex items-center justify-between text-meta uppercase tracking-wider text-muted-foreground">
                    <span>{counter} / Case Study</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
                    {/* Text */}
                    <div className="md:col-span-5 md:pt-2">
                      <h2 className="text-h2 mb-5 max-w-[18ch] transition-colors duration-300 group-hover:text-primary">
                        {project.title}
                      </h2>
                      <p className="text-body-lg text-muted-foreground max-w-[52ch] mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full border border-border/70 bg-muted/50 px-3 py-1 text-meta uppercase tracking-wider text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-meta uppercase tracking-wider text-foreground">
                        View Case Study
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Image */}
                    {project.image ? (
                      <div className="md:col-span-7 overflow-hidden rounded-[var(--radius-image)] bg-muted aspect-[16/10]">
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="w-full h-full object-cover transition-transform group-hover:scale-[1.02]"
                          style={{ transitionDuration: "900ms", transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                        />
                      </div>
                    ) : null}
                  </div>

                  {/* Result meta */}
                  <div className="flex justify-end mt-6">
                    <span className="text-meta uppercase tracking-wider text-muted-foreground">
                      Outcome — <span className="text-foreground">{project.results}</span>
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        {/* In development */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="py-section-sm border-b border-border"
        >
          <div className="flex items-center justify-between text-meta uppercase tracking-wider text-muted-foreground">
            <span>— In Development</span>
            <span>Soon</span>
          </div>
          <h2 className="text-h2 mt-8 text-muted-foreground max-w-[18ch]">More projects coming soon</h2>
          <p className="text-body-lg text-muted-foreground mt-5 max-w-[52ch]">
            I'm currently working on several projects that will be added to this portfolio. Check back for detailed case studies, process documentation, and outcomes.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default UseCases;
