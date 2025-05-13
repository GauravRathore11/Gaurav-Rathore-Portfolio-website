import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 5, category: "frontend" },
  { name: "JavaScript", level: 5, category: "frontend" },
  { name: "TypeScript", level: 4, category: "frontend" },
  { name: "HTML/CSS", level: 5, category: "frontend" },
  { name: "Tailwind CSS", level: 4, category: "frontend" },
  { name: "Next.js", level: 4, category: "frontend" },
  { name: "Redux", level: 4, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 4, category: "backend" },
  { name: "Express", level: 4, category: "backend" },
  { name: "MongoDB", level: 3, category: "backend" },
  { name: "PostgreSQL", level: 3, category: "backend" },
  { name: "Firebase", level: 4, category: "backend" },
  
  // Design
  { name: "Figma", level: 3, category: "design" },
  { name: "UI/UX Design", level: 3, category: "design" },
  
  // Tools
  { name: "Git", level: 4, category: "tools" },
  { name: "Docker", level: 3, category: "tools" },
  { name: "AWS", level: 3, category: "tools" },
  { name: "CI/CD", level: 3, category: "tools" }
];