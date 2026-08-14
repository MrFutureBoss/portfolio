import type { Lang } from "@/shared/lib/i18n";
import { EducationItem } from "@/shared/types/education";


export const EDUCATION_ITEMS: Record<Lang, EducationItem[]> = {
  vi: [
    {
      id: "1",
      period: "2020 - 2025",
      degree: "Cử nhân Công nghệ Thông tin",
      school: "Đại học FPT",
      location: "Hà Nội",
      detailType: "gpa",
      detailValue: "3.0",
    },
    {
      id: "2",
      period: "08/2023 - 03/2024",
      degree: "On-Job Training — Lớp Frontend",
      school: "FPT Academy",
      detailType: "score",
      detailValue: "8.6",
    },
  ],
  en: [
    {
      id: "1",
      period: "2020 - 2025",
      degree: "Bachelor of Information Technology",
      school: "FPT University",
      location: "Hanoi",
      detailType: "gpa",
      detailValue: "3.0",
    },
    {
      id: "2",
      period: "08/2023 - 03/2024",
      degree: "On-Job Training — Frontend Class",
      school: "FPT Academy",
      detailType: "score",
      detailValue: "8.6",
    },
  ],
};