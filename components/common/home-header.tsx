"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useLanguage } from "@/components/providers/language-provider";
import { NAV_ITEMS } from "@/lib/nav-items";
import { TRANSLATIONS } from "@/lib/i18n";
import { Languages } from "lucide-react";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

export default function HomeHeader() {
  const { lang, setLang } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="flex h-14 w-full items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Avatar className="h-8 w-8 border sm:h-9 sm:w-9">
            <AvatarFallback className="text-xs font-semibold">
              PT
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col leading-none">
            <span className="text-xs font-semibold tracking-tight sm:text-sm">
              {t.header.name}
            </span>
            <span className="text-[10px] text-muted-foreground sm:text-[11px]">
              {t.header.role}
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.key}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {t.nav[item.key]}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <Separator orientation="vertical" className="h-6" />

          <Button asChild size="sm">
            <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              {t.header.viewCv}
            </Link>
          </Button>
          <div className="flex items-center gap-1 rounded-lg border bg-muted/40 px-1">
            <Languages className="mx-1 h-4 w-4 text-muted-foreground" />

            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={() => setLang("vi")}
              className={`h-8 rounded-md px-3 text-xs font-medium transition-all ${lang === "vi"
                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              VN
            </Button>

            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={() => setLang("en")}
              className={`h-8 rounded-md px-3 text-xs font-medium transition-all ${lang === "en"
                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              EN
            </Button>
          </div>
          <AnimatedThemeToggler />
        </div>

        {/* Mobile CTA */}
        <div className="flex items-center gap-2 md:hidden">
          <Button asChild size="sm" variant="outline">
            <Link href="#contact">{t.header.contact}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}