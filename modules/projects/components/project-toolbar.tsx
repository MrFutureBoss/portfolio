"use client";

import { LayoutGrid, List, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/shared/lib/utils";
import type { ProjectCategory } from "@/shared/types/project";
import { useLanguage } from "@/shared/providers/language-provider";
import { TRANSLATIONS } from "@/shared/lib/i18n";

export type ProjectViewMode = "kanban" | "list";

interface ProjectToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: ProjectCategory | "all";
  onCategoryChange: (value: ProjectCategory | "all") => void;
  year: string;
  onYearChange: (value: string) => void;
  viewMode: ProjectViewMode;
  onViewModeChange: (value: ProjectViewMode) => void;
  categories: { value: ProjectCategory | "all"; label: string }[];
  years: { value: string; label: string }[];
}

export function ProjectToolbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  year,
  onYearChange,
  viewMode,
  onViewModeChange,
  categories,
  years,
}: ProjectToolbarProps) {
    const { lang } = useLanguage();
  
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-xs">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={`${TRANSLATIONS[lang].placeholder.prjSearch}`}
          className="pl-9"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Select
          value={category}
          onValueChange={(v) => onCategoryChange(v as ProjectCategory | "all")}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder={`${TRANSLATIONS[lang].placeholder.prjFType}`} />
          </SelectTrigger>
          <SelectContent>
            {categories.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={year} onValueChange={onYearChange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder={`${TRANSLATIONS[lang].placeholder.prjFTime}`} />
          </SelectTrigger>
          <SelectContent>
            {years.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center rounded-md border border-border p-0.5">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-pressed={viewMode === "kanban"}
            onClick={() => onViewModeChange("kanban")}
            className={cn(
              "h-8 w-8",
              viewMode === "kanban" && "bg-accent text-accent-foreground"
            )}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-pressed={viewMode === "list"}
            onClick={() => onViewModeChange("list")}
            className={cn(
              "h-8 w-8",
              viewMode === "list" && "bg-accent text-accent-foreground"
            )}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}