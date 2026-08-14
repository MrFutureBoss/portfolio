"use client";

import {
  Terminal,
  Code2,
  LayoutTemplate,
  Server,
  Database,
  Smartphone,
  Wrench,
  Gauge,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/shared/providers/language-provider";
import { TRANSLATIONS } from "@/shared/lib/i18n";
import { SKILL_GROUPS, type SkillCategoryId } from "@/shared/lib/data/skills";
import { SKILL_BRAND_STYLES } from "@/shared/lib/skill-brand-styles";

const CATEGORY_ICON: Record<SkillCategoryId, LucideIcon> = {
  ide: Terminal,
  language: Code2,
  frontend: LayoutTemplate,
  backend: Server,
  database: Database,
  mobile: Smartphone,
  tools: Wrench,
  testing: Gauge,
};

export default function MySkillsList() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          {t.skills.sectionTitle}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {SKILL_GROUPS.map((group) => {
          const Icon = CATEGORY_ICON[group.id];
          return (
            <div key={group.id}>
              <div className="mb-2.5 flex items-center gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/15">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {t.skills.categories[group.id]}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pl-9">
                {group.items.map((item) => {
                  const brand = SKILL_BRAND_STYLES[item];
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background py-1 pr-2.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                      style={{ paddingLeft: brand ? 4 : 10 }}
                    >
                      {brand && (
                        <span
                          className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-[9px] font-semibold"
                          style={{ backgroundColor: brand.bg, color: brand.fg }}
                        >
                          {brand.letter}
                        </span>
                      )}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}