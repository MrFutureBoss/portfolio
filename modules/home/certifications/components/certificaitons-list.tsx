"use client";

import { useState } from "react";
import { Award, Check, Copy } from "lucide-react";
import { toast } from "sonner";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/shared/providers/language-provider";
import { TRANSLATIONS } from "@/shared/lib/i18n";
import { CertificationItem } from "@/shared/types/certification";

export const CERTIFICATION_ITEMS: CertificationItem[] = [
  {
    id: "1",
    period: "03/2025",
    title: "TOEIC",
    issuer: "IIG",
    score: "710",
    url: "https://drive.google.com/file/d/1xCvi7PwXAoSYEmn_RRMc2dWW4YSYKD1L/view?usp=sharing",
  },
  {
    id: "2",
    period: "12/2024",
    title: "UX/UI Design",
    issuer: "Coursera",
    url: "https://coursera.org/share/880d25c75a70fd23c130ab5cb595a1dd",
  },
  {
    id: "3",
    period: "12/2024",
    title: "Project Management",
    issuer: "Coursera",
    url: "https://coursera.org/share/8f488b9150749837f7073ded43aa5e39",
  },
];

export default function CertificationsList() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyUrl = async (key: string, url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedKey(key);
      toast.success(t.copy.itemCopied, {
        description: `${url} ${t.copy.itemCopiedDesc}`,
      });
      setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1500);
    } catch {
      toast.error(t.copy.copiedFail);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          {t.certifications.sectionTitle}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {CERTIFICATION_ITEMS.map((cert) => (
          <div
            key={cert.id}
            className="group flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:border-foreground/20"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Award className="h-4 w-4" />
            </div>

            <div className="min-w-0 flex-1 space-y-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <p className="truncate text-sm font-semibold text-foreground">
                  {cert.title}
                </p>
                {cert.score && (
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {cert.score}
                  </span>
                )}
                <span className="rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {cert.issuer} • {cert.period}
                </span>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block truncate text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                {cert.url}
              </a>
            </div>

            <Button
              type="button"
              size="icon"
              variant="ghost"
              className={`h-7 w-7 shrink-0 transition-opacity group-hover:opacity-100 ${
                copiedKey === cert.id ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => copyUrl(cert.id, cert.url)}
              disabled={copiedKey === cert.id}
              aria-label={t.button.copyLinkBtn}
            >
              {copiedKey === cert.id ? (
                <Check className="h-3.5 w-3.5 text-primary" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}