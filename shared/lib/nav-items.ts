// lib/nav-items.ts
// Cấu trúc navigation, không chứa text hiển thị (text nằm ở lib/i18n.ts)

export const NAV_ITEMS = [
  { key: "about", href: "/" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "/projects" },
  { key: "skills", href: "/skills" },
] as const;

export type NavKey = (typeof NAV_ITEMS)[number]["key"];