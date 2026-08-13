"use client";

import { ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/shared/types/project";

interface ProjectPreviewPanelProps {
  project: Project;
  onClose: () => void;
}

export function ProjectPreviewPanel({
  project,
  onClose,
}: ProjectPreviewPanelProps) {
  return (
    <div className="flex h-full w-full flex-col border-l border-border bg-background">
      <div className="flex items-center justify-between gap-2 border-b border-border p-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground">
            {project.name}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {project.deployUrl}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {project.deployUrl && (
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {project.deployUrl ? (
        <iframe
          src={project.deployUrl}
          title={project.name}
          className="h-full w-full flex-1 bg-muted"
        />
      ) : (
        <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
          Dự án chưa có link deploy.
        </div>
      )}
    </div>
  );
}