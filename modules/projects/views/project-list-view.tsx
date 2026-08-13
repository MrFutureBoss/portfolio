"use client";

import { useMemo, useState } from "react";
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  PROJECT_YEARS,
} from "@/shared/lib/data/projects";
import type { Project, ProjectCategory } from "@/shared/types/project";
import {
  ProjectToolbar,
  type ProjectViewMode,
} from "@/modules/projects/components/project-toolbar";
import { ProjectKanbanView } from "@/modules/projects/components/project-kanban-view";
import { ProjectRowsView } from "@/modules/projects/components/project-rows-view";
import { ProjectPreviewPanel } from "@/modules/projects/components/project-preview-panel";
import { cn } from "@/shared/lib/utils";
import { useLanguage } from "@/shared/providers/language-provider";
import { TRANSLATIONS } from "@/shared/lib/i18n";

export default function ProjectListView() {
  const { lang } = useLanguage();
  const [viewMode, setViewMode] = useState<ProjectViewMode>("kanban"); // default: kanban
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [year, setYear] = useState<string>("all");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS[lang].filter((project) => {
      const matchSearch = project.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      const matchCategory =
        category === "all" || project.category === category;
      const matchYear = year === "all" || String(project.year) === year;

      return matchSearch && matchCategory && matchYear;
    });
  }, [search, category, year, lang]);

  return (
    <div className="flex flex-col h-full w-full gap-4">
      <div className="sticky top-14 z-20 bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:top-16">
        <ProjectToolbar
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          year={year}
          onYearChange={setYear}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          categories={PROJECT_CATEGORIES[lang]}
          years={PROJECT_YEARS[lang]}
        />
      </div>
      <div className="flex h-full w-full gap-4">
        <div
          className={cn(
            "flex min-w-0 flex-1 flex-col gap-4 transition-all",
            previewProject && "lg:max-w-[50%]"
          )}
        >

          {filteredProjects.length === 0 ? (
            <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-border py-16 text-sm text-muted-foreground">
              {TRANSLATIONS[lang].notFound.prjSrchNF}
            </div>
          ) : viewMode === "kanban" ? (
            <ProjectKanbanView
              projects={filteredProjects}
              onPreview={setPreviewProject}
            />
          ) : (
            <ProjectRowsView
              projects={filteredProjects}
              onPreview={setPreviewProject}
            />
          )}
        </div>

        {previewProject && (
          <>
            {/* Desktop: giữ nguyên split-screen nửa màn hình */}
            <div className="hidden w-1/2 shrink-0 lg:block">
              <ProjectPreviewPanel
                project={previewProject}
                onClose={() => setPreviewProject(null)}
              />
            </div>

            {/* Mobile/tablet: mở dạng popup (bottom sheet) */}
            <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center sm:p-4 lg:hidden">
              <div className="h-[85vh] w-full overflow-hidden rounded-t-xl bg-background sm:h-[80vh] sm:max-w-lg sm:rounded-xl">
                <ProjectPreviewPanel
                  project={previewProject}
                  onClose={() => setPreviewProject(null)}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}