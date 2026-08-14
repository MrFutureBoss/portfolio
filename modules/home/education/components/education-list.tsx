"use client";

import { GraduationCap, MapPin } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/shared/providers/language-provider";
import { TRANSLATIONS } from "@/shared/lib/i18n";
import { EDUCATION_ITEMS } from "@/shared/lib/data/educations";

export default function EducationList() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const items = EDUCATION_ITEMS[lang];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          {t.education.sectionTitle}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          {items.map((edu, index) => (
            <div key={edu.id} className="flex gap-4">
              {/* Cột icon + đường nối timeline */}
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-4 w-4" />
                </div>
                {index < items.length - 1 && (
                  <div className="mt-1 w-px flex-1 bg-border" />
                )}
              </div>

              {/* Nội dung */}
              <div className="flex-1 pb-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium text-primary">
                    {edu.period}
                  </span>
                  {edu.detailType && edu.detailValue && (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                      {edu.detailType === "gpa"
                        ? t.education.gpaLabel
                        : t.education.scoreLabel}
                      : {edu.detailValue}
                    </span>
                  )}
                </div>

                <h3 className="mt-1 text-sm font-semibold text-foreground">
                  {edu.degree}
                </h3>

                <p className="mt-0.5 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
                  {edu.school}
                  {edu.location && (
                    <span className="inline-flex items-center gap-0.5">
                      <span className="text-muted-foreground/50">•</span>
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}