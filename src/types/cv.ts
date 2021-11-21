export type ContributonType = {
  description: string;
  name: string;
  source: string;
  url: string;
};

export type LanguageType = {
  level: string;
  name: string;
};

export type ProjectType = {
  name: string;
  summary: string;
  technologies: string;
  type: string;
};

export type SkillType = {
  content: string;
  value: number;
};

export type WorkProjectType = {
  beginAt: string;
  endedAt?: string;
  description?: string;
  position: string;
  technologies: string;
};

export type WorkType = {
  beginAt: string;
  endedAt?: string;
  description?: string;
  name: string;
  project: WorkProjectType;
};

export type CVType = {
  about: string;
  contributions: ContributonType[];
  languages: LanguageType[];
  projects: ProjectType[];
  skills: SkillType[];
  works: WorkType[];
};
