interface FullBleedBannerProps {
  label: string;
  headline: string;
  bullets?: string[];
  size?: "sm" | "md";
}

export const FullBleedBanner = ({
  label,
  headline,
  bullets,
  size = "sm",
}: FullBleedBannerProps) => {
  const isSmall = size === "sm";

  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-y border-border/60 bg-muted/30">
      <div className={isSmall ? "container-editorial py-6 md:py-8" : "container-editorial py-10 md:py-14"}>
        <div className="mx-auto max-w-[70ch] text-center">
          <div className="flex items-center justify-center">
            <span className="rounded-full border border-border/70 bg-background/60 px-5 py-2 text-meta !font-normal uppercase tracking-wider text-muted-foreground shadow-ambient">
              {label}
            </span>
          </div>
          <p
            className={
              isSmall
                ? "mt-4 text-body-lg !font-normal leading-snug tracking-tight text-foreground md:text-h4"
                : "mt-6 text-h4 !font-normal leading-snug tracking-tight text-foreground md:text-h3"
            }
          >
            {headline}
          </p>
          {bullets?.length ? (
            <ul className={isSmall ? "mt-4 space-y-1 text-muted-foreground" : "mt-6 space-y-2 text-muted-foreground"}>
              {bullets.map((item) => (
                <li key={item} className={isSmall ? "text-body-sm !font-normal leading-relaxed" : "text-body !font-normal leading-relaxed"}>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};
