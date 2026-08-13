"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/shared/types/project";
import { useLanguage } from "@/shared/providers/language-provider";
import { TRANSLATIONS } from "@/shared/lib/i18n";

interface ProjectCardProps {
  project: Project;
  onPreview: (project: Project) => void;
}

export function ProjectCard({ project, onPreview }: ProjectCardProps) {
  const { lang } = useLanguage();
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/20">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          onClick={() => onPreview(project)}
          src={project.thumbnail}
          alt={project.name}
          fill
          className="cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium leading-tight text-foreground">
            {project.name}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[11px] font-medium tabular-nums text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {project.year}
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
          {project.tags.length - 3 > 1 ?
            <Badge variant="secondary" className="font-normal">
              {`+ ${project.tags.length - 3} mores`}
            </Badge>
            :
            project.tags.length - 3 === 1 ?
              <Badge variant="secondary" className="font-normal">
                + 1 more
              </Badge>
              :
              ''
          }
        </div>

        <div className="mt-auto flex items-center gap-2 pt-2">
          <Button asChild size="sm" className="flex-1">
            <Link href={`/project-detail/${project.slug}`}>{TRANSLATIONS[lang].button.detailBtn}</Link>
          </Button>

          {project.deployUrl && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onPreview(project)}
            >
              <Eye className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}