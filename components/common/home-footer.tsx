"use client"

import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { TRANSLATIONS } from "@/lib/i18n";
import { useLanguage } from "../providers/language-provider";

const currentYear = new Date().getFullYear();

const BIO = {
  github: "https://github.com/MrFutureBoss",
  linkedin: "",
  mail: "mailto:maitu10e2@gmail.com"
} as const

export default function HomeFooter() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const [copied, setCopied] = useState(false);
  const handleCopyMail = async () => {
    try {
      await navigator.clipboard.writeText(BIO.mail);

      setCopied(true);

      toast.success(`${t.copy.mailCopied}`, {
        description: `maitu10e2@gmail.com ${t.copy.mailCopiedDesciption}`,
      });

      setTimeout(() => {
        setCopied(false);
      }, 2000); // 2 giây
    } catch {
      toast.error(`${t.copy.mailCopiedFail}`);
    }
  };
  return (
    <footer className="border-t bg-background/60">
      <div className="w-full space-y-5 py-6 px-4 sm:space-y-6 sm:py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-tight">
                Your Name
              </span>
              <Badge variant="outline" className="text-[11px]">
                Open to work
              </Badge>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Building clean, modern web experiences with React, Next.js and
              TypeScript. Let&apos;s create something great together.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Button asChild size="icon" variant="outline">
              <Link
                href={BIO.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="icon" variant="outline">
              <Link
                href={BIO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={handleCopyMail}
              disabled={copied}
              aria-label={copied ? `${t.copy.mailCopied}` : "Copy mail"}
              className="cursor-pointer"
            >
              <div>
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Mail className="h-4 w-4" />
                )}              
                </div>
            </Button>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {currentYear} Your Name. All rights reserved.</span>
          <span className="flex gap-4">
            <Link
              href="#"
              className="transition-colors hover:text-foreground hover:underline"
            >
              Resume
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-foreground hover:underline"
            >
              Privacy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}