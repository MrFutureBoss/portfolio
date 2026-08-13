"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

interface ProjectListItemProps {
  project: Project;
  onPreview: (project: Project) => void;
}

export function ProjectListItem({ project, onPreview }: ProjectListItemProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-3 transition-colors hover:border-foreground/20">
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md bg-muted">
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-medium text-foreground">
          {project.name}
        </h3>
        <p className="line-clamp-1 text-sm text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-1.5">
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[11px] font-medium tabular-nums text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {project.year}
          </span>
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
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
        <Button asChild size="sm">
          <Link href={`/project-detail/${project.slug}`}>Chi tiết</Link>
        </Button>
      </div>
    </div>
  );
}