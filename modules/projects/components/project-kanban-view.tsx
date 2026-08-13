import { ProjectCard } from "@/modules/projects/components/project-card";
import type { Project } from "@/types/project";

interface ProjectKanbanViewProps {
  projects: Project[];
  onPreview: (project: Project) => void;
}

export function ProjectKanbanView({
  projects,
  onPreview,
}: ProjectKanbanViewProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onPreview={onPreview} />
      ))}
    </div>
  );
}