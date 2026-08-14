export interface SkillBrandStyle {
  bg: string;
  fg: string;
  letter: string;
}

// Chỉ liệt kê công nghệ có màu thương hiệu rõ ràng, tự tin đúng.
// Công nghệ không có trong map sẽ hiện badge dạng chữ thường (không có vòng tròn màu).
export const SKILL_BRAND_STYLES: Record<string, SkillBrandStyle> = {
  // Programming languages
  Java: { bg: "#ED8B00", fg: "#4A1B0C", letter: "J" },
  JavaScript: { bg: "#F7DF1E", fg: "#412402", letter: "JS" },
  TypeScript: { bg: "#3178C6", fg: "#ffffff", letter: "TS" },
  PHP: { bg: "#777BB4", fg: "#ffffff", letter: "P" },
  SCSS: { bg: "#CC6699", fg: "#ffffff", letter: "S" },

  // Frontend
  ReactJS: { bg: "#61DAFB", fg: "#0C447C", letter: "R" },
  "Next.js": { bg: "#000000", fg: "#ffffff", letter: "N" },
  Vue: { bg: "#4FC08D", fg: "#ffffff", letter: "V" },
  "Tailwind CSS": { bg: "#38BDF8", fg: "#042C53", letter: "T" },
  "Material UI": { bg: "#007FFF", fg: "#ffffff", letter: "M" },
  "Ant Design": { bg: "#1677FF", fg: "#ffffff", letter: "A" },
  "Shadcn UI": { bg: "#000000", fg: "#ffffff", letter: "S" },

  // Backend
  "Express.js": { bg: "#000000", fg: "#ffffff", letter: "E" },
  Laravel: { bg: "#FF2D20", fg: "#ffffff", letter: "L" },
  "Spring Boot": { bg: "#6DB33F", fg: "#ffffff", letter: "S" },

  // Database & cache
  MongoDB: { bg: "#47A248", fg: "#ffffff", letter: "M" },
  MySQL: { bg: "#4479A1", fg: "#ffffff", letter: "M" },
  PostgreSQL: { bg: "#336791", fg: "#ffffff", letter: "P" },
  Redis: { bg: "#DC382D", fg: "#ffffff", letter: "R" },

  // Mobile
  "React Native": { bg: "#61DAFB", fg: "#0C447C", letter: "R" },

  // Tools
  GitHub: { bg: "#181717", fg: "#ffffff", letter: "G" },
  GitLab: { bg: "#FC6D26", fg: "#ffffff", letter: "G" },
  Jira: { bg: "#0052CC", fg: "#ffffff", letter: "J" },
  Jest: { bg: "#C21325", fg: "#ffffff", letter: "J" },
  "Docker Desktop": { bg: "#2496ED", fg: "#ffffff", letter: "D" },
};