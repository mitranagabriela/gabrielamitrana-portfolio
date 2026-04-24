import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface NextCaseStudyProps {
  currentPath: string;
}

export const NextCaseStudy = ({ currentPath }: NextCaseStudyProps) => {
  const currentIndex = caseStudies.findIndex((p) => p.caseStudyPath === currentPath);
  if (currentIndex === -1) return null;
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <motion.section
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={viewportOnce}
      className="mt-section-sm pt-section-sm border-t border-border"
    >
      <div className="flex items-center gap-4 text-meta uppercase tracking-wider text-muted-foreground mb-8">
        <span>Next Case Study</span>
        <span aria-hidden className="h-px flex-1 max-w-16 bg-border" />
      </div>

      <Link
        to={next.caseStudyPath}
        onClick={() => window.scrollTo({ top: 0 })}
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 rounded-sm"
      >
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-5 md:pt-2">
            <h3 className="text-h2 mb-5 max-w-[18ch] transition-colors duration-300 group-hover:text-primary">
              {next.title}
            </h3>
            <p className="text-body-lg text-muted-foreground max-w-[52ch] mb-6">
              {next.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {next.tags.map((tag) => (
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

          {next.image ? (
            <div className="md:col-span-7 overflow-hidden rounded-[var(--radius-image)] bg-muted aspect-[16/10]">
              <img
                src={next.image}
                alt={`${next.title} preview`}
                className="w-full h-full object-cover transition-transform group-hover:scale-[1.02]"
                style={{ transitionDuration: "900ms", transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
              />
            </div>
          ) : null}
        </div>

        <div className="flex justify-end mt-6">
          <span className="text-meta uppercase tracking-wider text-muted-foreground">
            Outcome — <span className="text-foreground">{next.results}</span>
          </span>
        </div>
      </Link>
    </motion.section>
  );
};

export default NextCaseStudy;
