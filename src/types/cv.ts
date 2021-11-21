export type AboutType = {
  id: number;
  about: string;
  characteristics: string;
};

export type ContributonType = {
  id: number;
  description: string;
  name: string;
  source: string;
  url: string;
};

export type LanguageType = {
  id: number;
  level: string;
  name: string;
  priority: number;
};

export type ProjectType = {
  id: number;
  name: string;
  summary: string;
  technologies: string;
  type: string;
};

export type SkillType = {
  id: number;
  content: string;
  value: number;
};

export type WorkProjectType = {
  id: number;
  beginAt: string;
  endedAt?: string;
  description?: string;
  name: string;
  position: string;
  technologies: string;
};

export type WorkType = {
  id: number;
  beginAt: string;
  endedAt?: string;
  description?: string;
  name: string;
  projects: WorkProjectType[];
};

export type CVType = {
  about: AboutType;
  contributions: ContributonType[];
  languages: LanguageType[];
  projects: ProjectType[];
  skills: SkillType[];
  works: WorkType[];
};
