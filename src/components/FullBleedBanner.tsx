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
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-y border-border/70 bg-muted/25">
      <div className={isSmall ? "container-editorial py-6 md:py-8" : "container-editorial py-10 md:py-14"}>
        <div className="mx-auto max-w-[70ch] text-center">
          <div className="flex items-center justify-center">
            <span className="rounded-full border border-border/70 bg-background/60 px-5 py-2 text-meta font-medium uppercase tracking-wider text-muted-foreground shadow-[0_2px_10px_rgba(2,8,23,0.06)]">
              {label}
            </span>
          </div>
          <p
            className={
              isSmall
                ? "mt-4 text-[1.1rem] leading-snug tracking-tight text-foreground md:text-[1.3rem]"
                : "mt-6 text-[1.35rem] leading-snug tracking-tight text-foreground md:text-[1.6rem]"
            }
          >
            {headline}
          </p>
          {bullets?.length ? (
            <ul className={isSmall ? "mt-4 space-y-1 text-muted-foreground" : "mt-6 space-y-2 text-muted-foreground"}>
              {bullets.map((item) => (
                <li key={item} className={isSmall ? "text-[0.95rem] leading-relaxed" : "text-[1.05rem] leading-relaxed"}>
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
