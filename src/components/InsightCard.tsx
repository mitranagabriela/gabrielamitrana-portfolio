import type { ComponentType, ReactNode } from "react";
import type { LucideProps } from "lucide-react";

interface InsightCardProps {
  icon: ComponentType<LucideProps>;
  children: ReactNode;
}

export const InsightCard = ({ icon: Icon, children }: InsightCardProps) => (
  <div className="bg-muted/30 p-6 rounded-lg border border-border/60">
    <Icon className="h-8 w-8 text-foreground mb-3" aria-hidden="true" />
    <p className="text-muted-foreground leading-relaxed">{children}</p>
  </div>
);
