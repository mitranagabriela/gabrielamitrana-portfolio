import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface CaseStudySection {
  title?: string;
  content: string | React.ReactNode;
  variant?: "default" | "fullBleed";
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  tags: string[];
  heroContent: React.ReactNode;
  sections: CaseStudySection[];
}

export const CaseStudyLayout = ({
  title,
  subtitle,
  tags,
  heroContent,
  sections
}: CaseStudyLayoutProps) => {
  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="container-editorial py-section">
        {/* Back link */}
        <Link
          to="/case-studies"
          className="group inline-flex items-center gap-2 text-meta uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-section-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 rounded-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Back to Case Studies
        </Link>

        {/* Header */}
        <header className="mb-section-sm">
          <h1 className="text-h1 max-w-[22ch]">{title}</h1>
        </header>

        {/* Hero content */}
        {heroContent ? (
          <div className="mb-section-sm">
            {heroContent}
          </div>
        ) : null}

        {/* Sections */}
        <div className="case-study-prose space-y-section-sm">
          {(() => {
            let visibleIndex = 0;
            return (
              <>
                {sections.map((section, index) => {
                  const variant = section.variant ?? "default";

                  if (variant === "fullBleed") {
                    return (
                      <motion.section
                        key={index}
                        variants={fadeUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={viewportOnce}
                      >
                        {section.content}
                      </motion.section>
                    );
                  }

                  visibleIndex += 1;
                  const counter = String(visibleIndex).padStart(2, "0");

                  return (
                    <motion.section
                      key={index}
                      variants={fadeUp}
                      initial="initial"
                      whileInView="animate"
                      viewport={viewportOnce}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-4 text-meta uppercase tracking-wider text-muted-foreground">
                        <span>{counter}</span>
                        <span aria-hidden className="h-px flex-1 max-w-16 bg-border" />
                      </div>
                      <h2 className="text-h2 max-w-[32ch]">{section.title}</h2>
                      <div>
                        {typeof section.content === "string" ? (
                          <p className="text-body-lg text-muted-foreground leading-relaxed">{section.content}</p>
                        ) : (
                          section.content
                        )}
                      </div>
                    </motion.section>
                  );
                })}
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
};
