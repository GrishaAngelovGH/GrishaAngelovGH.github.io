import type { Feature } from "./feature";

export type Project = {
  id: string;
  type: string;
  title: string;
  image: string;
  description: string;
  features: Feature[];
  technologies: string[];
  gitHubLink: string;
  liveDemoLink?: string;
};
