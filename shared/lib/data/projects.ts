import type { Project, ProjectCategory } from "@/shared/types/project";
import type { Lang } from "@/shared/lib/i18n";

type FilterOption<T extends string> = { value: T; label: string };

export const PROJECT_CATEGORIES: Record<
  Lang,
  FilterOption<ProjectCategory | "all">[]
> = {
  vi: [
    { value: "all", label: "Tất cả" },
    { value: "web", label: "Web App" },
    { value: "mobile", label: "Mobile App" },
    { value: "design", label: "UI/UX Design" },
    { value: "fullstack", label: "Fullstack" },
    { value: "other", label: "Khác" },
  ],
  en: [
    { value: "all", label: "All" },
    { value: "web", label: "Web App" },
    { value: "mobile", label: "Mobile App" },
    { value: "design", label: "UI/UX Design" },
    { value: "fullstack", label: "Fullstack" },
    { value: "other", label: "Other" },
  ],
};

export const PROJECT_YEARS: Record<Lang, FilterOption<string>[]> = {
  vi: [
    { value: "all", label: "Mọi thời điểm" },
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
  ],
  en: [
    { value: "all", label: "All time" },
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
  ],
};

// TODO: thay bằng data thật, ảnh thumbnail để tạm path trong /public
// Lưu ý: "name" và "tags" giữ nguyên giữa 2 ngôn ngữ (tên riêng / tên công nghệ không dịch),
// chỉ "shortDescription" được dịch theo từng ngôn ngữ.
export const PROJECTS: Record<Lang, Project[]> = {
  vi: [
    {
      id: "1",
      slug: "edu-start",
      name: "EduStart",
      shortDescription:
        "Dự án capstone tốt nghiệp — nền tảng hỗ trợ toàn bộ quá trình dạy và học cho môn Khởi nghiệp (EXE), kết nối chặt chẽ giữa sinh viên, giảng viên và người hướng dẫn trong suốt hành trình xây dựng dự án.",
      thumbnail: "/assets/images/thumbnails/edu-start-thumbnail.webp",
      category: "fullstack",
      tags: [
        "React",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Cron",
        "Docker",
        "Ant Design",
      ],
      year: 2024,
      deployUrl: "https://edu-start-umber.vercel.app/",
      repoUrl: "https://github.com/MrFutureBoss/EduStart",
      contributors: 5,
    },
  ],
  en: [
    {
      id: "1",
      slug: "edu-start",
      name: "EduStart",
      shortDescription:
        "Graduation capstone project — a platform supporting the full teaching and learning process for the Entrepreneurship (EXE) course, connecting students, lecturers, and mentors throughout the project journey.",
      thumbnail: "/assets/images/thumbnails/edu-start-thumbnail.webp",
      category: "fullstack",
      tags: [
        "React",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Cron",
        "Docker",
        "Ant Design",
      ],
      year: 2024,
      deployUrl: "https://edu-start-umber.vercel.app/",
      repoUrl: "https://github.com/MrFutureBoss/EduStart",
      contributors: 5,
    },
  ],
};