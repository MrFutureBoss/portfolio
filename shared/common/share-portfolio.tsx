"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/shared/providers/language-provider";
import { TRANSLATIONS } from "@/shared/lib/i18n";

const PORTFOLIO_URL = "https://portfolio-y3xg.vercel.app/";

export default function SharePortfolio() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    // Ưu tiên Web Share API (mở native share sheet) — chủ yếu hỗ trợ tốt trên mobile/Safari
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: t.header.name,
          text: t.header.role,
          url: PORTFOLIO_URL,
        });
        return;
      } catch (err) {
        // Người dùng tự đóng share sheet -> không coi là lỗi, không cần fallback
        if ((err as Error)?.name === "AbortError") return;
      }
    }

    // Fallback: copy link vào clipboard (desktop hoặc trình duyệt không hỗ trợ Web Share API)
    try {
      await navigator.clipboard.writeText(PORTFOLIO_URL);
      setCopied(true);
      toast.success(t.copy.copiedSuccess);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error(t.copy.copiedFail);
    }
  };

  return (
    <Button
      type="button"
      size="sm"
      variant="outline"
      className="h-8 gap-1.5 text-xs"
      onClick={handleShare}
      disabled={copied}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-primary" />
      ) : (
        <Share2 className="h-3.5 w-3.5" />
      )}
      {copied ? t.button.copiedBtn : t.button.shareLinkBtn}
    </Button>
  );
}