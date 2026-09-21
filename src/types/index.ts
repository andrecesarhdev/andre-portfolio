export interface Project {
  id: string;
  name: string;
  description: string;
  problem: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Technology {
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "tools";
  status: string;
}

export interface JourneyStep {
  year: string;
  title: string;
}
