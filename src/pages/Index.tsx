import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ease, durations } from "@/lib/motion";

const Index = () => {
  const meta = ["Strategy", "Systems", "Research", "Prototyping"];
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "75+", label: "Stakeholders Involved" },
    { value: "5+",  label: "Years Experience" },
  ];

  const heroContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const heroItem = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: durations.base, ease } },
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-editorial py-hero">
          <motion.div
            variants={heroContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            <div className="md:col-span-7 space-y-8">
              <motion.span variants={heroItem} className="block text-label uppercase text-muted-foreground">
                Senior Product Designer · Bucharest
              </motion.span>

              <motion.h1 variants={heroItem} className="text-display">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Gabriela Mitrana
                </span>
              </motion.h1>

              <motion.p variants={heroItem} className="text-body-lg text-muted-foreground max-w-[52ch]">
                I'm a product designer with a passion for creating meaningful digital experiences. My approach combines user-centered design principles with business objectives to deliver solutions that not only look beautiful but also drive results.
              </motion.p>

              <motion.div variants={heroItem} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-meta uppercase tracking-wider text-muted-foreground">
                {meta.map((item, i) => (
                  <span key={item} className="flex items-center gap-x-3">
                    {i > 0 ? <span aria-hidden className="text-muted-foreground/40">·</span> : null}
                    {item}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <Button asChild size="lg">
                  <Link to="/case-studies">View My Work</Link>
                </Button>
                <Link
                  to="/resume"
                  className="text-sm font-medium underline underline-offset-8 decoration-1 decoration-muted-foreground/40 hover:decoration-foreground transition-[text-decoration-color] duration-200"
                >
                  View My Resume
                </Link>
              </motion.div>
            </div>

            <motion.div variants={heroItem} className="md:col-span-5 relative">
              <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 bg-primary/10 rounded-[var(--radius-image)]" />
              <div className="relative aspect-square overflow-hidden rounded-[var(--radius-image)] border border-border bg-muted">
                <img
                  src="/images/IMG_1262 2.JPG"
                  alt="Gabriela Mitrana - Product Designer"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border">
        <div className="container-editorial py-section-sm">
          <dl className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center px-6 py-6 sm:py-2">
                <dt className="text-meta uppercase tracking-wider text-muted-foreground order-2 mt-2">
                  {stat.label}
                </dt>
                <dd className="text-h2 order-1">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section className="py-section">
        <div className="container-reading">
          <span className="block text-label uppercase text-muted-foreground mb-6">About</span>
          <h2 className="text-h2 mb-8">A curious, outdoor-leaning designer.</h2>
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            When I'm not designing, I'm usually out photographing or simply enjoying the outdoors. I'm curious by nature and always seeking new perspectives — a mindset that deeply influences my design work.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
