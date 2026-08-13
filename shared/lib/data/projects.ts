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
      id: "2",
      slug: "road-to-master-js",
      name: "Road to Master JS",
      shortDescription:
        "Nền tảng ôn tập lý thuyết và luyện giải bài tập JavaScript, TypeScript, ReactJS ngay trên trình duyệt — trải nghiệm kiểu Codewars/LeetCode, giúp người học củng cố kiến thức từ cơ bản đến nâng cao.",
      thumbnail: "/assets/images/thumbnails/road-to-master-js-thumbnail.webp",
      category: "fullstack",
      tags: [
        "TypeScript",
        "React",
        "Next.js 15",
        "Tailwind CSS",
        "Shadcn UI",
        "Magic UI",
        "Neon",
        "Drizzle ORM",
      ],
      year: 2025,
      deployUrl: "https://road-to-master-js.vercel.app/",
      repoUrl: "https://github.com/tumn2308/road-to-master-js",
      contributors: 1,
    },
    {
      id: "3",
      slug: "meet-ai",
      name: "MeetAI",
      shortDescription:
        "AI Agent đóng vai trò coach trò chuyện — người dùng tạo AI cá nhân hoá, mở phòng họp trực tuyến mời bạn bè cùng tham gia với AI, có ghi âm cuộc họp, lưu lịch sử chat và tự động tóm tắt hội thoại.",
      thumbnail: "/assets/images/thumbnails/meet-ai-thumbnail.webp",
      category: "fullstack",
      tags: [
        "TypeScript",
        "React",
        "Next.js 15",
        "Tailwind CSS",
        "Shadcn UI",
        "Magic UI",
        "Neon",
        "Drizzle ORM",
        "OpenAI",
        "Better-Auth",
      ],
      year: 2025,
      deployUrl: "https://ai-agent-coach.vercel.app/",
      repoUrl: "https://github.com/MrFutureBoss/AI-Agent-Coach",
      contributors: 1,
    },
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
      id: "2",
      slug: "road-to-master-js",
      name: "Road to Master JS",
      shortDescription:
        "A platform for reviewing JavaScript, TypeScript, and ReactJS theory and solving coding challenges directly in the browser — a Codewars/LeetCode-style experience for building skills from fundamentals to advanced.",
      thumbnail: "/assets/images/thumbnails/road-to-master-js-thumbnail.webp",
      category: "fullstack",
      tags: [
        "TypeScript",
        "React",
        "Next.js 15",
        "Tailwind CSS",
        "Shadcn UI",
        "Magic UI",
        "Neon",
        "Drizzle ORM",
      ],
      year: 2025,
      deployUrl: "https://road-to-master-js.vercel.app/",
      repoUrl: "https://github.com/tumn2308/road-to-master-js",
      contributors: 1,
    },
    {
      id: "3",
      slug: "meet-ai",
      name: "MeetAI",
      shortDescription:
        "An AI agent that acts as a conversational coach — users create a personalized AI, set up an online meeting room and invite friends to join with it, with meeting recording, saved chat history, and automatic conversation summaries.",
      thumbnail: "/assets/images/thumbnails/meet-ai-thumbnail.webp",
      category: "fullstack",
      tags: [
        "TypeScript",
        "React",
        "Next.js 15",
        "Tailwind CSS",
        "Shadcn UI",
        "Magic UI",
        "Neon",
        "Drizzle ORM",
        "OpenAI",
        "Better-Auth",
      ],
      year: 2025,
      deployUrl: "https://ai-agent-coach.vercel.app/",
      repoUrl: "https://github.com/MrFutureBoss/AI-Agent-Coach",
      contributors: 1,
    },
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