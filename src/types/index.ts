export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'core' | 'design' | 'tools' | 'other';
}

export interface Achievement {
  id: number;
  title: string;
  date: string;
  description: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}