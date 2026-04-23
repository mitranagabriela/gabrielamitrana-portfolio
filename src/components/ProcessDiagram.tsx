interface ProcessStep {
  title: string;
  bullets: string[];
}

interface ProcessDiagramProps {
  steps: ProcessStep[];
}

const ProcessArrow = () => (
  <div className="-mx-[2px] mt-[21px] flex shrink-0 items-center justify-center" aria-hidden="true">
    <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
      <path d="M0 7H35" stroke="hsl(var(--muted-foreground))" strokeWidth="1.1" />
      <path d="M35 1L42 7L35 13V1Z" fill="hsl(var(--muted-foreground))" />
    </svg>
  </div>
);

const ProcessStepCard = ({ title, bullets }: ProcessStep) => (
  <div className="min-w-0 flex-1">
    <div className="flex h-14 items-center justify-center rounded-full border border-border/70 bg-white px-4 text-center text-body font-medium leading-none tracking-tight text-muted-foreground shadow-ambient-strong whitespace-nowrap md:text-body-lg">
      {title}
    </div>
    <div className="mt-3 space-y-1 text-muted-foreground">
      {bullets.map((item) => (
        <p key={item} className="!text-body-sm !leading-snug">
          {item}
        </p>
      ))}
    </div>
  </div>
);

export const ProcessDiagram = ({ steps }: ProcessDiagramProps) => (
  <div className="w-full py-6">
    <div className="relative pb-2">
      <div className="mx-auto flex items-start gap-0">
        {steps.map((step, index) => (
          <div key={step.title} className="flex min-w-0 flex-1 items-start">
            <ProcessStepCard title={step.title} bullets={step.bullets} />
            {index < steps.length - 1 ? <ProcessArrow /> : null}
          </div>
        ))}
      </div>
    </div>
  </div>
);
