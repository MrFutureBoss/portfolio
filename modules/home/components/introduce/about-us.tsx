 "use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/providers/language-provider";
import { TRANSLATIONS } from "@/lib/i18n";

export default function AboutUs() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <div className="space-y-3">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
        {t.about.badge}
      </p>
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
        {t.about.headingPrefix} <span className="text-primary">Mai Ngọc Tú</span>.
      </h1>
      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {t.about.born}{" "}
        <span className="font-medium text-foreground">23/08/2002</span>,{" "}
        {lang === "vi" ? "hiện đang theo học tại " : "currently studying at "}
        <span className="font-medium text-foreground">{t.about.study}</span>.{" "}
        {t.about.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-1">
        <Badge variant="secondary">Frontend / Web</Badge>
        <Badge variant="outline">Next.js &amp; TypeScript</Badge>
        <Badge variant="outline">Open to opportunities</Badge>
      </div>
    </div>
  );
}