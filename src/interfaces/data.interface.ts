import { ICONS } from "../components/ui-library/Icon";

export interface CVDataType {
  workplaces: WorkplaceType[];
  projects: FreeTimeProjectType[];
  links: LinkType[];
}

export interface WorkplaceType {
  name: string;
  position: string;
  startedAt: string;
  endedAt?: string;
  description?: string;
  projects: WorkplaceProjectType[];
}

export interface WorkplaceProjectType {
  name: string;
  stack: string[];
  description?: string;
}

export interface FreeTimeProjectType {
  title: string;
  url: string;
  subtitle: string;
  technologies: string;
  summary: string;
}

export interface LinkType {
  title: string;
  url: string;
  icon: keyof typeof ICONS;
}
