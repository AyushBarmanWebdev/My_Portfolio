import { Project } from "../../data/projects";
import WorkspaceTabs from "./WorkspaceTabs";
import WorkspacePanel from "./WorkspacePanel";

interface ProjectWorkspaceProps {
  project: Project;
  activeWorkspaceTabId: "ui" | "impl" | "arch" | "specs";
  onSelectWorkspaceTab: (id: "ui" | "impl" | "arch" | "specs") => void;
}

export default function ProjectWorkspace({
  project,
  activeWorkspaceTabId,
  onSelectWorkspaceTab,
}: ProjectWorkspaceProps) {
  return (
    <div className="lg:col-span-5 border border-zinc-900 p-5 rounded-custom font-mono text-[10px] text-zinc-500 flex flex-col justify-between h-80 relative overflow-hidden select-none">
      {/* Header bar */}
      <div className="flex border-b justify-between border-zinc-900 pb-2 mb-2.5">
        {/* Tabs */}
        <WorkspaceTabs
          tabs={project.workspaceTabs}
          activeTabId={activeWorkspaceTabId}
          onSelectTab={onSelectWorkspaceTab}
        />

        <span className="pt-1">
          {project.workspaceVersionOrCost.label}: {project.workspaceVersionOrCost.value}
        </span>
      </div>

      {/* Dynamic Content Panel */}
      <WorkspacePanel key={project.id} project={project} activeTabId={activeWorkspaceTabId} />

      {/* Footer Metrics */}
      <div className="border-t border-zinc-900 pt-2 text-[8px] flex justify-between mt-2">
        <span>{project.footerMetrics.left}</span>
        <span>{project.footerMetrics.right}</span>
      </div>
    </div>
  );
}
