import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "mitrana_gabriela2008@yahoo.com",
      href: "mailto:mitrana_gabriela2008@yahoo.com",
      external: false,
    },
    {
      label: "Phone",
      value: "+40 727 303 250",
      href: "tel:+40727303250",
      external: false,
    },
    {
      label: "Location",
      value: "Bucharest, Romania",
      href: null,
      external: false,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/gabriela-mitrana-714765111",
      href: "https://www.linkedin.com/in/gabriela-mitrana-714765111/",
      external: true,
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="container-reading py-section">
        {/* Header */}
        <header className="mb-section-sm">
          <span className="block text-label uppercase text-muted-foreground mb-6">Contact</span>
          <h1 className="text-h1 mb-6">Get in touch.</h1>
          <p className="text-body-lg text-muted-foreground">
            Whether you have a project in mind or just want to chat about design, I'd love to hear from you.
          </p>
        </header>

        <ul className="border-t border-border">
          {contactInfo.map((item) => {
            const content = (
              <div className="flex items-center justify-between py-8 border-b border-border group">
                <div>
                  <span className="block text-label uppercase text-muted-foreground mb-3">
                    {item.label}
                  </span>
                  <span className="text-h3 group-hover:text-primary transition-colors duration-300">
                    {item.value}
                  </span>
                </div>
                {item.href ? (
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                ) : null}
              </div>
            );

            return (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 rounded-sm"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
