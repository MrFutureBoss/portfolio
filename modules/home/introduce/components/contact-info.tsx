"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Facebook,
  Linkedin,
  Copy,
  Check,
  CopyCheck,
} from "lucide-react";
import { toast } from "sonner";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/shared/providers/language-provider";
import { TRANSLATIONS } from "@/shared/lib/i18n";

type ContactItem = {
  key: string;
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
};

export default function ContactInfo() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [allCopied, setAllCopied] = useState(false);

  const EMAIL = "maitu10e2@gmail.com";
  const PHONE_DISPLAY = "0345 919 996";
  const PHONE_RAW = "0345919996";
  // TODO: thay bằng link thật của bạn
  const GITHUB_URL = "https://github.com/MrFutureBoss";
  const FACEBOOK_URL = "https://www.facebook.com/share/1Hpjk2VwT3/?mibextid=wwXIfr";
  const LINKEDIN_URL = "https://linkedin.com/in/ngọc-tú-mai-54b2ab34a";

  const CONTACT_ITEMS: ContactItem[] = [
    {
      key: "address",
      icon: MapPin,
      label: t.contact.addressLabel,
      value: t.contact.addressDetail,
    },
    {
      key: "email",
      icon: Mail,
      label: t.contact.emailLabel,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      key: "phone",
      icon: Phone,
      label: t.contact.phoneLabel,
      value: PHONE_DISPLAY,
      href: `tel:${PHONE_RAW}`,
    },
    {
      key: "github",
      icon: Github,
      label: t.contact.githubLabel,
      value: GITHUB_URL.replace("https://", ""),
      href: GITHUB_URL,
    },
    {
      key: "facebook",
      icon: Facebook,
      label: t.contact.facebookLabel,
      value: FACEBOOK_URL.replace("https://", ""),
      href: FACEBOOK_URL,
    },
    {
      key: "linkedin",
      icon: Linkedin,
      label: t.contact.LinkedinLabel,
      value: LINKEDIN_URL.replace("https://", ""),
      href: LINKEDIN_URL,
    },
  ];

  const copyValue = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      toast.success(t.copy.itemCopied, {
        description: `${value} ${t.copy.itemCopiedDesc}`,
      });
      setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1500);
    } catch {
      toast.error(t.copy.copiedFail);
    }
  };

  const copyAll = async () => {
    const text = CONTACT_ITEMS.map((item) => `${item.label}: ${item.value}`).join(
      "\n"
    );
    try {
      await navigator.clipboard.writeText(text);
      setAllCopied(true);
      toast.success(t.copy.allCopied, { description: t.copy.allCopiedDesc });
      setTimeout(() => setAllCopied(false), 1500);
    } catch {
      toast.error(t.copy.copiedFail);
    }
  };

  return (
    <Card className="mt-2 w-full max-w-sm shrink-0 md:mt-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">
          {t.contact.contactTitle}
        </CardTitle>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          className="h-8 gap-1.5 text-xs"
          onClick={copyAll}
          disabled={allCopied}
        >
          {allCopied ? (
            <Check className="h-3.5 w-3.5 text-primary" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </Button>
      </CardHeader>

      <CardContent className="space-y-3 text-sm">
        {CONTACT_ITEMS.map((item) => (
          <div key={item.key} className="group flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <item.icon className="h-4 w-4" />
            </div>

            <div className="min-w-0 flex-1 space-y-0.5">
              <p className="font-medium">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block truncate text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="truncate text-xs text-muted-foreground">
                  {item.value}
                </p>
              )}
            </div>

            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="h-7 w-7 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
              onClick={() => copyValue(item.key, item.value)}
              aria-label={t.button.copyLinkBtn}
            >
              {copiedKey === item.key ? (
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