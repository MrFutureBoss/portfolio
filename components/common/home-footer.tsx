import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function HomeFooter() {
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
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="icon" variant="outline">
              <Link
                href="https://www.linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="icon" variant="outline">
              <Link href="mailto:you@example.com">
                <Mail className="h-4 w-4" />
              </Link>
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