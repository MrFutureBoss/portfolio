import { ProjectListItem } from "@/modules/projects/components/project-list-item";
import type { Project } from "@/types/project";

interface ProjectRowsViewProps {
  projects: Project[];
  onPreview: (project: Project) => void;
}

export function ProjectRowsView({ projects, onPreview }: ProjectRowsViewProps) {
  return (
    <div className="flex flex-col gap-3">
      {projects.map((project) => (
        <ProjectListItem
          key={project.id}
          project={project}
          onPreview={onPreview}
        />
      ))}
    </div>
  );
}