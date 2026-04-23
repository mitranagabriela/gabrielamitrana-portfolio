import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShowcaseFrameProps {
  children: ReactNode;
  className?: string;
}

export const ShowcaseFrame = ({ children, className }: ShowcaseFrameProps) => (
  <div
    className={cn(
      "rounded-showcase bg-muted/30 border border-border/60 p-6 md:p-8",
      className,
    )}
  >
    {children}
  </div>
);
