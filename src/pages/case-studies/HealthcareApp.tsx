
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

const HealthcareApp = () => {
  const heroContent = (
    <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary to-purple-600 mx-auto mb-4"></div>
        <p className="text-muted-foreground">Healthcare App UX Study Preview</p>
      </div>
    </div>
  );

  const sections = [
    {
      title: "My Role",
      content: "As the UX researcher and designer for this telemedicine application, I was responsible for conducting user research, designing accessible interfaces, and ensuring the application met the specific needs of elderly users. I collaborated with healthcare professionals and developers throughout the project."
    },
    {
      title: "Challenge",
      content: "Designing a telemedicine application that would be accessible and usable for elderly users, many of whom have limited digital literacy and may have visual, cognitive, or motor impairments. The challenge was to create an interface that felt familiar and non-intimidating while providing powerful healthcare functionality."
    },
    {
      title: "Design Process",
      content: "I employed human-centered design methodology with a strong focus on accessibility. The process included extensive user research with elderly participants, accessibility audits, iterative prototyping, and continuous testing with the target demographic throughout the design phase."
    },
    {
      title: "Ideation",
      content: "Through co-design sessions with elderly users and healthcare providers, I explored various interface approaches. We focused on simplification, clear visual hierarchy, larger touch targets, and familiar interaction patterns. Voice interfaces and simplified navigation were key considerations during ideation."
    },
    {
      title: "Solution",
      content: "The final design featured large, clear buttons, high contrast colors, simple navigation with breadcrumbs, and voice-guided interactions. We implemented emergency contact features, medication reminders, and streamlined video calling with healthcare providers. The interface prioritized essential functions while hiding complex features."
    },
    {
      title: "Research",
      content: "I conducted in-depth interviews with 30 elderly users, observed telemedicine sessions, and performed usability testing in participants' homes. The research revealed specific pain points around technology anxiety, vision challenges, and the importance of family member involvement in healthcare decisions."
    },
    {
      title: "Impact",
      content: "The application achieved a 40% improvement in accessibility scores and significantly higher task completion rates among elderly users. User confidence in using telemedicine technology increased by 60%, and the application is currently being piloted in multiple healthcare systems."
    }
  ];

  return (
    <CaseStudyLayout
      title="Healthcare App UX Study"
      subtitle="User research and interface design for a telemedicine application targeting elderly users"
      tags={["Healthcare", "Accessibility", "User Research"]}
      heroContent={heroContent}
      sections={sections}
    />
  );
};

export default HealthcareApp;
