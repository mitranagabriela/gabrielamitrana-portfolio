
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudySection {
  title: string;
  content: string | React.ReactNode;
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild>
          <Link to="/case-studies">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-2xl text-muted-foreground mb-6">{subtitle}</p>
        </div>

        {/* Hero Content */}
        {heroContent ? <div className="mb-12">
            {heroContent}
          </div> : null}

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-3xl font-semibold">{section.title}</h2>
              <div className="text-xl">
                {typeof section.content === 'string' ? (
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                ) : (
                  section.content
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
