import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value?: ReactNode;
  baseline?: ReactNode;
}

export const StatCard = ({ label, value, baseline }: StatCardProps) => (
  <div className="bg-muted/30 p-6 rounded-lg border border-border/60">
    <p className="text-sm font-semibold mb-2">{label}</p>
    {value != null ? (
      <div className="text-3xl font-bold text-foreground">{value}</div>
    ) : null}
    {baseline != null ? (
      <p className="text-sm text-muted-foreground mt-2">Baseline: {baseline}</p>
    ) : null}
  </div>
);
