import { Experience, Achievement } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Engineering Fellow",
    company: "Microsoft SEFA Program",
    location: "Remote",
    period: "May 2024",
    description: [
      "Learned Software Development Life Cycle (SDLC) and Agile methodologies.",
      "Collaborated with peers to practice real-world development workflows.",
      "Worked with Git and GitHub for version control and project collaboration.",
      "Gained exposure to professional tools used in the software industry."
    ]
  },
  {
    id: 2,
    role: "Hackathon Participant",
    company: "Various Inter-College Competitions",
    location: "Dehradun",
    period: "2023 - 2024",
    description: [
      "Won and secured runner-up positions in multiple hackathons.",
      "Developed projects like decentralized apps, CLI tools, and productivity solutions under time constraints.",
      "Worked collaboratively with team members to brainstorm and deliver innovative solutions."
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Winner - Inter-College Hackathon",
    date: "2024",
    description: "Built a functional project under time constraints and presented it to judges, securing the top position."
  },
  {
    id: 2,
    title: "Runner-up - Inter-College Hackathon",
    date: "2024",
    description: "Earned second place for developing a creative solution in a competitive hackathon environment."
  },
  {
    id: 3,
    title: "Microsoft SEFA Participant",
    date: "May 2024",
    description: "Completed software engineering foundation program by Microsoft covering SDLC, Agile, and development tools."
  },
  {
    id: 4,
    title: "1st in Spam Stoppers, 2nd in Product Marketing, 3rd in Stress Interview",
    date: "Management Fest 2023",
    description: "Achieved top positions in multiple events showcasing creativity, strategy, and communication skills."
  },
  {
    id: 5,
    title: "Most Disciplined Student & Class Topper",
    date: "2022",
    description: "Recognized for consistent academic excellence and disciplined behavior in school."
  }
];
