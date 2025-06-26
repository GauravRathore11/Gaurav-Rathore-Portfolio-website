import { Skill } from '../types';

export const skills: Skill[] = [
  //core
  { name: "Data structures and algorithms", level: 5, category: "core" },
  { name: "Operating Systems", level: 4, category: "core" },
  { name: "Object Oriented Programming", level: 5, category: "core" },
  { name: "C, C++", level: 5, category: "core" },
  { name: "DBMS-MySQL", level: 4, category: "core" },

  // Frontend
  { name: "React", level: 5, category: "frontend" },
  { name: "JavaScript", level: 5, category: "frontend" },
  { name: "TypeScript", level: 4, category: "frontend" },
  { name: "HTML/CSS", level: 5, category: "frontend" },
  { name: "Tailwind CSS", level: 4, category: "frontend" },
  { name: "Next.js", level: 4, category: "frontend" },
  
  // Design
  { name: "Figma", level: 3, category: "design" },
  { name: "UI/UX Design", level: 3, category: "design" },
  
  // Tools
  { name: "Git", level: 4, category: "tools" },
  { name: "Figma", level: 3, category: "tools" },
  { name: "OCI", level: 3, category: "tools" },
];