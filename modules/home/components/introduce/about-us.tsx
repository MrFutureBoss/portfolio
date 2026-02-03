 "use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/providers/language-provider";

const ABOUT_CONTENT = {
  vi: {
    badge: "Giới thiệu",
    headingPrefix: "Xin chào, mình là",
    study: "Đại học FPT, ngành Công nghệ thông tin",
    born: "Sinh năm",
    description:
      "Mình tập trung vào việc xây dựng các sản phẩm web hiện đại, dễ dùng và có trải nghiệm người dùng tốt.",
  },
  en: {
    badge: "About me",
    headingPrefix: "Hi, I'm",
    study: "FPT University, Information Technology major",
    born: "Born in",
    description:
      "I focus on building modern, user-friendly web products with great user experience.",
  },
} as const;

export default function AboutUs() {
  const { lang } = useLanguage();
  const t = ABOUT_CONTENT[lang];

  return (
    <div className="space-y-3">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
        {t.badge}
      </p>
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
        {t.headingPrefix} <span className="text-primary">Mai Ngọc Tú</span>.
      </h1>
      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {t.born}{" "}
        <span className="font-medium text-foreground">23/08/2002</span>,{" "}
        {lang === "vi" ? "hiện đang theo học tại " : "currently studying at "}
        <span className="font-medium text-foreground">{t.study}</span>.{" "}
        {t.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-1">
        <Badge variant="secondary">Frontend / Web</Badge>
        <Badge variant="outline">Next.js &amp; TypeScript</Badge>
        <Badge variant="outline">Open to opportunities</Badge>
      </div>
    </div>
  );
}