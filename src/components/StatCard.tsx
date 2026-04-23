import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value?: ReactNode;
}

export const StatCard = ({ label, value }: StatCardProps) => (
  <div className="bg-muted/30 p-6 rounded-lg border border-border/60">
    <p className="text-sm font-semibold mb-2">{label}</p>
    {value != null ? (
      <div className="text-3xl font-bold text-foreground">{value}</div>
    ) : null}
  </div>
);
