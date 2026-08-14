export type SkillCategoryId =
  | "ide"
  | "language"
  | "frontend"
  | "backend"
  | "database"
  | "mobile"
  | "tools"
  | "testing";

export interface SkillGroup {
  id: SkillCategoryId;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "ide",
    items: [
      "Cursor",
      "Windsurf",
      "VS Code",
      "NetBeans",
      "IntelliJ IDEA",
      "Selenium IDE",
      "Android Studio",
    ],
  },
  {
    id: "language",
    items: ["Java", "JavaScript", "TypeScript", "PHP", "SCSS"],
  },
  {
    id: "frontend",
    items: [
      "ReactJS",
      "Next.js",
      "Vue",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Shadcn UI",
    ],
  },
  {
    id: "backend",
    items: ["Express.js", "Laravel", "Spring Boot", "Hibernate/JPA"],
  },
  {
    id: "database",
    items: [
      "Neon",
      "MongoDB",
      "Microsoft SQL Server",
      "MySQL",
      "PostgreSQL",
      "phpMyAdmin",
      "Redis",
    ],
  },
  {
    id: "mobile",
    items: ["React Native", "Android (Java)"],
  },
  {
    id: "tools",
    items: ["GitHub", "GitLab", "Jira", "JMeter", "Jest", "Docker Desktop"],
  },
  {
    id: "testing",
    items: ["Google PageSpeed Insight", "Lighthouse"],
  },
];