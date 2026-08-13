 "use client";

import { Mail, Phone, MapPin } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/providers/language-provider";
import { TRANSLATIONS } from "@/lib/i18n";


export default function ContactInfo() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <Card className="mt-2 w-full max-w-sm shrink-0 md:mt-0">
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          {t.contact.contactTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MapPin className="h-4 w-4" />
          </div>
          <div className="space-y-0.5">
            <p className="font-medium">{t.contact.addressLabel}</p>
            <p className="text-xs text-muted-foreground">
              {t.contact.addressDetail}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Mail className="h-4 w-4" />
          </div>
          <div className="space-y-0.5">
            <p className="font-medium">{t.contact.emailLabel}</p>
            <a
              href="mailto:maitu10e2@gmail.com"
              className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              maitu10e2@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Phone className="h-4 w-4" />
          </div>
          <div className="space-y-0.5">
            <p className="font-medium">{t.contact.phoneLabel}</p>
            <a
              href="tel:0345919996"
              className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              0345 919 996
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}