interface ProjectDetailItem {
  label: string;
  value: string;
}

interface ProjectDetailsProps {
  items: ProjectDetailItem[];
}

export const ProjectDetails = ({ items }: ProjectDetailsProps) => (
  <div className="grid md:grid-cols-2 gap-4">
    {items.map((item) => (
      <div key={item.label} className="p-4 bg-muted/30 rounded-lg border border-border/60">
        <p className="font-semibold text-primary">{item.label}:</p>
        <p className="text-muted-foreground">{item.value}</p>
      </div>
    ))}
  </div>
);
