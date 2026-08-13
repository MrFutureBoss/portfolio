"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/shared/providers/language-provider";
import { NAV_ITEMS } from "@/shared/lib/nav-items";
import { TRANSLATIONS } from "@/shared/lib/i18n";
import { Languages } from "lucide-react";
import { AnimatedThemeToggler } from "../../../components/ui/animated-theme-toggler";
import { useTheme } from "next-themes";
import { ResumeDialog } from "../resume-dialog";
import { cn } from "@/shared/lib/utils";

export default function HomeHeader() {
  const { lang, setLang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const { resolvedTheme, setTheme } = useTheme();
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  const isNavActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
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

          {/* Navigation - desktop */}
          <div className="hidden items-center gap-6 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_ITEMS.map((item) => {
                  const active = isNavActive(item.href);
                  return (
                    <NavigationMenuItem key={item.key}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                            active
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {t.nav[item.key]}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <Separator orientation="vertical" className="h-6" />

            <Button asChild size="sm" onClick={() => setResumeOpen(true)}>
              <div className="cursor-pointer">{t.header.viewCv}</div>
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
            <AnimatedThemeToggler
              theme={resolvedTheme === "dark" ? "dark" : "light"}
              onThemeChange={(newTheme) => setTheme(newTheme)}
            />
          </div>

          {/* Mobile: nút mở sidebar menu */}
          <div className="flex items-center gap-2 md:hidden">
            <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" aria-label="Mở menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="flex w-72 flex-col gap-6 p-6">
                <SheetHeader className="p-0 text-left">
                  <SheetTitle className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 border">
                      <AvatarFallback className="text-xs font-semibold">
                        PT
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col leading-none">
                      <span className="text-sm font-semibold">
                        {t.header.name}
                      </span>
                      <span className="text-[11px] text-muted-foreground">
                        {t.header.role}
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                {/* Nav items theo cột, cách đều nhau bởi Separator */}
                <nav className="flex flex-col">
                  {NAV_ITEMS.map((item, index) => {
                    const active = isNavActive(item.href);
                    return (
                      <Fragment key={item.key}>
                        {index > 0 && <Separator className="my-1" />}
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                              active
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            {t.nav[item.key]}
                          </Link>
                        </SheetClose>
                      </Fragment>
                    );
                  })}
                </nav>

                <Separator />

                {/* Nút xem CV */}
                <SheetClose asChild>
                  <Button className="w-full" onClick={() => setResumeOpen(true)}>
                    {t.header.viewCv}
                  </Button>
                </SheetClose>

                {/* Switch ngôn ngữ */}
                <div className="flex items-center justify-between gap-2 rounded-lg border bg-muted/40 px-2 py-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Languages className="h-4 w-4" />
                    {t.switch.lang}
                  </div>
                  <div className="flex items-center gap-1">
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
                </div>

                {/* Toggle theme */}
                <div className="flex items-center justify-between rounded-lg border px-3 py-2">
                  <span className="text-xs text-muted-foreground">
                    {t.switch.theme}
                  </span>
                  <AnimatedThemeToggler
                    theme={resolvedTheme === "dark" ? "dark" : "light"}
                    onThemeChange={(newTheme) => setTheme(newTheme)}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <ResumeDialog open={resumeOpen} onOpenChange={setResumeOpen} />
    </>
  );
}