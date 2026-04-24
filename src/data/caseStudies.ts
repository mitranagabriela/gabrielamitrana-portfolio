import agentsMonitoringCover from "@/assets/agents-monitoring-cover-new.jpg";
import revampDataFabricCover from "@/assets/revamp-data-fabric-cover-final.png";
import firstRunCover from "@/assets/first-run-experience-hero.png";

export interface CaseStudyProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: string;
  results: string;
  year: string;
  caseStudyPath: string;
}

export const caseStudies: CaseStudyProject[] = [
  {
    title: "Improving Runtime Monitoring for Agents",
    description: "Redesigned how enterprises monitor and optimize AI agents",
    image: agentsMonitoringCover,
    tags: ["FULL REDESIGN", "AI AGENTS", "WEB"],
    status: "Completed",
    results: "Increased deployed agent runs by 95%",
    year: "2025",
    caseStudyPath: "/case-studies/agents-monitoring",
  },
  {
    title: "Revamp Data Fabric",
    description: "Simplified the data management flow for UiPath, from fragmentation to a cohesive experience",
    image: revampDataFabricCover,
    tags: ["FULL REDESIGN", "DATA MANAGEMENT", "WEB"],
    status: "Completed",
    results: "Increased data operations by 100%",
    year: "2024",
    caseStudyPath: "/case-studies/revamp-data-service",
  },
  {
    title: "Getting Started with Studio Web",
    description: "Designed the onboarding experience for an automation builder to increase adoption and reduce drop-off rates",
    image: firstRunCover,
    tags: ["0 TO 1 DESIGN", "ONBOARDING", "RPA", "WEB"],
    status: "Completed",
    results: "Reduced time to build by 40%",
    year: "2022",
    caseStudyPath: "/case-studies/first-run-experience",
  },
];
