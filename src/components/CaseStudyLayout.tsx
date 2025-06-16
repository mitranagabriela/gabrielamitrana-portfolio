
import { Badge } from "@/components/ui/badge";
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

export const CaseStudyLayout = ({ title, subtitle, tags, heroContent, sections }: CaseStudyLayoutProps) => {
  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild>
          <Link to="/usecases">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Use Cases
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="mb-12">
          {heroContent}
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <div>
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
