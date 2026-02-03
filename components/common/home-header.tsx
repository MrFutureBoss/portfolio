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

const NAV_ITEMS = {
  vi: [
    { href: "#about", label: "Giới thiệu" },
    { href: "#projects", label: "Dự án" },
    { href: "#skills", label: "Kỹ năng" },
    { href: "#contact", label: "Liên hệ" },
  ],
  en: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
} as const;

export default function HomeHeader() {
  const { lang, setLang, toggleLang } = useLanguage();
  const navItems = NAV_ITEMS[lang];

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
              Your Name
            </span>
            <span className="text-[10px] text-muted-foreground sm:text-[11px]">
              Frontend Developer
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Separator orientation="vertical" className="h-6" />

          <Button asChild size="sm">
            <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              View CV
            </Link>
          </Button>

          <div className="ml-1 flex items-center gap-[2px] rounded-full bg-muted/80 p-[2px]">
            <Button
              type="button"
              size="icon"
              variant={lang === "vi" ? "default" : "ghost"}
              className="h-7 w-9 text-[11px] font-semibold"
              onClick={() => setLang("vi")}
            >
              VN
            </Button>
            <Button
              type="button"
              size="icon"
              variant={lang === "en" ? "default" : "ghost"}
              className="h-7 w-9 text-[11px] font-semibold"
              onClick={() => setLang("en")}
            >
              EN
            </Button>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="flex items-center gap-2 md:hidden">
          <Button asChild size="sm" variant="outline">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}