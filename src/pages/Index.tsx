import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, PenTool, Code2, ScanEye, Heart, Handshake } from "lucide-react";
import { ease, durations } from "@/lib/motion";
import { caseStudies } from "@/data/caseStudies";

const Index = () => {
  const strengths = [
    {
      icon: Clock,
      title: "5+ Years of Experience",
      description: "My background spans enterprise platforms, AI-native products, and complex data-driven tools at scale.",
    },
    {
      icon: PenTool,
      title: "Proficient in UX & UI Design",
      description: "I apply design thinking principles to craft intuitive, user-centered solutions that align with business objectives.",
    },
    {
      icon: Code2,
      title: "Interactive Prototyping with AI",
      description: "I use coding agents to build interactive prototypes that validate ideas faster and communicate intent clearly to engineers.",
    },
    {
      icon: ScanEye,
      title: "Master at Visual QA",
      description: "I catch subtle details others often miss and clearly communicate them to engineers via Jira or Slack.",
    },
    {
      icon: Heart,
      title: "Humble & Purposeful Mindset",
      description: "I value feedback, collaboration, and continuous learning to create impactful and user-centered solutions.",
    },
    {
      icon: Handshake,
      title: "Effective Collaborator",
      description: "I've successfully worked with product, engineering, data science, and marketing to launch products.",
    },
  ];

  const heroContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const heroItem = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: durations.base, ease } },
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-editorial py-hero">
          <motion.div
            variants={heroContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            <div className="md:col-span-7 space-y-8">
              <motion.span variants={heroItem} className="block text-label uppercase text-muted-foreground">
                Senior Product Designer · Bucharest
              </motion.span>

              <motion.h1 variants={heroItem} className="text-display">
                Hi, I'm{" "}
                <span className="text-brand-gradient">
                  Gabriela Mitrana
                </span>
              </motion.h1>

              <motion.p variants={heroItem} className="text-body-lg text-muted-foreground max-w-[52ch]">
              Senior Product Designer with 5+ years of experience designing complex, data-driven and AI-powered products. I’m particularly interested in platform products, AI-native experiences, and solving complex problems at scale.

              </motion.p>

              <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <Button asChild size="lg">
                  <Link to="/case-studies">View My Work</Link>
                </Button>
                <Link
                  to="/resume"
                  className="editorial-link text-sm font-medium"
                >
                  View My Resume
                </Link>
              </motion.div>
            </div>

            <motion.div variants={heroItem} className="md:col-span-5 relative">
              <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 bg-primary/10 rounded-[var(--radius-image)]" />
              <div className="relative aspect-square overflow-hidden rounded-[var(--radius-image)] border border-border bg-muted">
                <img
                  src="/images/IMG_1262 2.JPG"
                  alt="Gabriela Mitrana - Product Designer"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-section border-t border-border">
        <div className="container-editorial">
          <div className="mb-12">
            <span className="block text-label uppercase text-muted-foreground mb-4">Selected Work</span>
            <h2 className="text-h2">Recent case studies</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((project) => (
              <Link
                key={project.caseStudyPath}
                to={project.caseStudyPath}
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 rounded-[var(--radius-image)]"
              >
                <div className="overflow-hidden rounded-[var(--radius-image)] bg-muted aspect-[16/10] border border-border">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform group-hover:scale-[1.02]"
                    style={{ transitionDuration: "900ms", transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                  />
                </div>
                <div className="mt-5 flex items-center justify-between text-meta uppercase tracking-wider text-muted-foreground">
                  <span>{project.tags[0]}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-h3 mt-3 transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-meta uppercase tracking-wider text-foreground">
                  View Case Study
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* My Key Strengths */}
      <section className="py-section bg-background border-t border-border">
        <div className="container-editorial">
          <h2 className="text-h2 text-center mb-16">My key strengths</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <div
                  key={strength.title}
                  className="flex items-start gap-5 rounded-2xl bg-muted/50 p-6"
                >
                  <Icon className="h-8 w-8 shrink-0 text-primary mt-1" strokeWidth={1.5} aria-hidden />
                  <div>
                    <h3 className="text-foreground font-semibold leading-snug">{strength.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{strength.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
