export type ProjectCategory =
  | "web"
  | "mobile"
  | "design"
  | "fullstack"
  | "other";

export interface Project {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  /** Đường dẫn ảnh trong /public, ví dụ: /images/projects/xxx.png */
  thumbnail: string;
  category: ProjectCategory;
  tags: string[];
  year: number;
  deployUrl?: string;
  repoUrl?: string;
  /** Số lượng thành viên tham gia dự án */
  contributors?: number;
}