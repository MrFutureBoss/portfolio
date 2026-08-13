# Cấu trúc phân tầng dự án — Mai Tu Portfolio

> Dự án: Next.js (App Router) + TypeScript + Tailwind + shadcn/ui
> Đặc điểm: Không backend/database, toàn bộ dữ liệu là fixed value, hỗ trợ đa ngôn ngữ (vi/en).

---

## 1. Sơ đồ thư mục tổng quan

```
project-root/
├── app/                          # Routing layer (Next.js App Router)
│   ├── layout.tsx                # Root layout — providers, fonts, metadata
│   ├── loading.tsx                # Global loading UI (route-level Suspense)
│   ├── globals.css                # Global styles, Tailwind base, CSS variables
│   ├── page.tsx                   # Trang chủ (/)
│   └── (routes khác nếu có)/      # Ví dụ: /projects, /about, ...
│
├── middleware.ts                  # Xử lý cookie ngôn ngữ, redirect, v.v.
│
├── components/
│   ├── ui/                        # shadcn/ui — component gốc (button, skeleton, ...)
│   ├── providers/                 # Context Providers (LanguageProvider, ThemeProvider...)
│   ├── shared/                    # Component dùng chung nhiều nơi (Logo, SectionTitle...)
│   └── sections/                  # Component theo từng section trang (Hero, About, Skills...)
│
├── layouts/
│   └── home-layout.tsx            # Layout khung cho trang chính (header, footer, nav)
│
├── context/                       # (tuỳ chọn, có thể gộp vào providers/)
│   └── language-context.ts
│
├── lib/
│   ├── i18n.ts                    # Toàn bộ TRANSLATIONS (vi/en) — fixed data
│   ├── constants.ts               # Hằng số dùng chung (social links, nav items...)
│   ├── data/                      # Dữ liệu tĩnh: projects.ts, skills.ts, experience.ts
│   └── utils.ts                   # Hàm tiện ích (cn, formatDate, copyToClipboard...)
│
├── types/
│   └── index.ts                   # Type/interface dùng chung toàn dự án
│
├── hooks/
│   └── use-xxx.ts                 # Custom hooks (useCopyToClipboard, useMediaQuery...)
│
├── public/
│   ├── images/
│   ├── icons/
│   └── cv/                        # File CV để tải xuống
│
└── styles/ (nếu tách riêng khỏi app/globals.css)
```

---

## 2. Vai trò từng tầng (layer)

### 2.1. `app/` — Routing & Composition Layer
Chỉ chịu trách nhiệm **định tuyến** và **lắp ráp** (compose) các layout/component lại với nhau. Không chứa logic nghiệp vụ hay UI chi tiết.

- `layout.tsx`: khai báo font, metadata, bọc các Provider toàn cục.
- `loading.tsx`: UI loading tự động khi chuyển route (Next.js convention).
- `page.tsx`: gọi các section component từ `components/sections/`, không viết JSX phức tạp trực tiếp tại đây.

### 2.2. `middleware.ts` — Edge Layer
Chạy trước khi request tới route, dùng để:
- Đọc/set cookie ngôn ngữ (`current-language`).
- Detect `Accept-Language` header cho lần ghé đầu tiên.

### 2.3. `components/` — Presentation Layer
Tách theo 3 cấp độ tái sử dụng:

| Thư mục | Mục đích | Ví dụ |
|---|---|---|
| `ui/` | Component nguyên tử từ shadcn, tối giản, không chứa logic nghiệp vụ | `Button`, `Skeleton`, `Toaster` |
| `shared/` | Component dùng lại ở nhiều trang/section | `Logo`, `SectionHeading`, `LangSwitcher` |
| `sections/` | Component gắn với 1 khối nội dung cụ thể của trang | `HeroSection`, `AboutSection`, `SkillsSection` |
| `providers/` | Context Provider bọc app | `LanguageProvider`, `ThemeProvider` |

**Nguyên tắc:** `ui/` không được import từ `sections/` (tránh phụ thuộc ngược). `sections/` được phép dùng cả `ui/` và `shared/`.

### 2.4. `layouts/` — Layout Composition Layer
Khung giao diện lặp lại giữa các trang (header, nav, footer). Khác với `app/layout.tsx` (chỉ lo providers/metadata), `layouts/` lo phần **UI khung** thực sự.

### 2.5. `lib/` — Data & Logic Layer
Vì dự án không có database, đây là nơi tập trung **toàn bộ dữ liệu tĩnh** và logic thuần (pure function):

- `i18n.ts`: nguồn dữ liệu dịch duy nhất, mọi text hiển thị đi qua đây.
- `data/`: tách riêng từng loại dữ liệu tĩnh (projects, skills...) để dễ maintain, tránh 1 file phình to.
- `utils.ts`: hàm tiện ích không phụ thuộc React (copy clipboard, format...).

### 2.6. `types/` — Type Layer
Định nghĩa type/interface dùng chung, tránh định nghĩa lặp trong từng component. Ví dụ: `Project`, `SkillItem`, `NavItem`.

### 2.7. `hooks/` — Behavior Layer
Custom hook tách logic có state/effect ra khỏi component UI (ví dụ hook copy email, hook theo dõi scroll để active nav).

### 2.8. `public/` — Static Assets Layer
Ảnh, icon, file CV — asset tĩnh phục vụ trực tiếp qua URL, không qua build/transform của React.

---

## 3. Luồng dữ liệu (Data Flow)

```
lib/i18n.ts (TRANSLATIONS)
        │
        ▼
components/providers/language-provider.tsx (LanguageProvider)
        │  cung cấp lang + hàm toggleLang qua Context
        ▼
components/sections/*.tsx
        │  gọi useLanguage() để lấy đúng text theo lang hiện tại
        ▼
Render ra UI
```

```
middleware.ts (đọc cookie)
        │
        ▼
app/layout.tsx (Server Component, đọc cookie qua next/headers)
        │  truyền initialLang xuống
        ▼
LanguageProvider (khởi tạo state đúng ngay từ đầu, không flash)
```

---

## 4. Quy ước đặt tên & import

- File component: `kebab-case.tsx` (ví dụ: `hero-section.tsx`).
- Export component: `PascalCase` (ví dụ: `export function HeroSection()`).
- Import tuyệt đối qua alias `@/` (đã cấu hình sẵn trong `tsconfig.json` khi dùng shadcn):
  ```ts
  import { Button } from "@/components/ui/button";
  import { useLanguage } from "@/components/providers/language-provider";
  import { TRANSLATIONS } from "@/lib/i18n";
  ```

---

## 5. Nguyên tắc phân tầng cần giữ

1. **Không để `lib/` import từ `components/`** — data layer phải độc lập với UI layer.
2. **Section component không tự chứa dữ liệu cứng** — mọi text/nội dung lấy từ `lib/i18n.ts` hoặc `lib/data/`.
3. **`ui/` là layer thấp nhất** — không phụ thuộc Context nghiệp vụ (như `useLanguage`), chỉ nhận props từ layer trên.
4. **Server Component ưu tiên ở `app/layout.tsx`, `page.tsx`** để đọc cookie/env; Client Component (`"use client"`) chỉ dùng khi cần state/effect/interactivity (form, toggle, animation...).

---

*File này chỉ mang tính định hướng cấu trúc — điều chỉnh tên thư mục theo nhu cầu thực tế khi dự án phát triển thêm route hoặc feature mới.*