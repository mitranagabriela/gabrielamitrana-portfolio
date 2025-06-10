
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

const FirstRunExperience = () => {
  const heroContent = (
    <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary to-purple-600 mx-auto mb-4"></div>
        <p className="text-muted-foreground">First Run Experience Preview</p>
      </div>
    </div>
  );

  const sections = [
    {
      title: "My Role",
      content: "As the lead UX/UI designer, I was responsible for redesigning the entire onboarding flow for a fintech mobile application. I worked closely with product managers, developers, and stakeholders to create a seamless first-time user experience that would reduce drop-off rates and improve user activation."
    },
    {
      title: "Challenge",
      content: "The existing onboarding process had a 60% drop-off rate during the initial setup. Users were abandoning the app before completing the registration process due to a complex and lengthy onboarding flow. The challenge was to simplify the process while still collecting necessary information for compliance and personalization."
    },
    {
      title: "Design Process",
      content: "I followed a user-centered design approach that included user research, competitive analysis, wireframing, prototyping, and usability testing. The process was iterative, with multiple rounds of testing and refinement based on user feedback and stakeholder input."
    },
    {
      title: "Ideation",
      content: "Through brainstorming sessions and design workshops, we explored various approaches including progressive disclosure, micro-interactions, and gamification elements. We focused on breaking down the complex process into digestible steps while maintaining user engagement throughout the journey."
    },
    {
      title: "Solution",
      content: "The final solution featured a 3-step onboarding process with clear progress indicators, contextual help, and optional advanced settings. We implemented smart defaults, reduced form fields by 50%, and added visual cues to guide users through each step. The design emphasized trust and security while maintaining a friendly, approachable tone."
    },
    {
      title: "Research",
      content: "I conducted user interviews with 20 potential users, analyzed competitor onboarding flows, and performed usability testing with interactive prototypes. The research revealed that users valued transparency, speed, and clear explanations of why information was needed."
    },
    {
      title: "Impact",
      content: "The redesigned onboarding flow resulted in a 40% reduction in drop-off rates, increasing user activation from 40% to 80%. Time to complete onboarding decreased from an average of 12 minutes to 4 minutes. Post-launch surveys showed a 35% improvement in user satisfaction scores for the initial experience."
    }
  ];

  return (
    <CaseStudyLayout
      title="First Run Experience"
      subtitle="Redesigning the onboarding flow for a fintech mobile app to improve user activation and reduce drop-off rates"
      tags={["Mobile Design", "UX Research", "Fintech", "Onboarding"]}
      heroContent={heroContent}
      sections={sections}
    />
  );
};

export default FirstRunExperience;
