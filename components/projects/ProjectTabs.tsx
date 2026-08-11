import { Project } from "../../data/projects";
import { motion, useReducedMotion } from "motion/react";

interface ProjectTabsProps {
  projects: Project[];
  activeProjectId: string;
  onSelectProject: (id: string) => void;
}

export default function ProjectTabs({
  projects,
  activeProjectId,
  onSelectProject,
}: ProjectTabsProps) {
  const shouldReduceMotion = useReducedMotion();
  const activeProject = projects.find((p) => p.id === activeProjectId);

  return (
    <div className="bg-zinc-950 border-b border-zinc-900 flex items-center justify-between text-xs text-zinc-500 font-mono select-none overflow-x-auto">
      <div className="flex items-center gap-6 pl-4">
        {/* Window Controls */}
        <div className="flex items-center gap-1.5 py-3 shrink-0">
          <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
        </div>

        {/* Tab List */}
        <div className="flex items-center" role="tablist">
          {projects.map((project) => {
            const isActive = project.id === activeProjectId;
            return (
              <motion.button
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                role="tab"
                aria-selected={isActive}
                className={`flex items-center gap-2 px-4 py-3.5 border-r border-zinc-900 font-mono text-[11px] focus:outline-none transition-all cursor-pointer ${isActive
                  ? "bg-zinc-900/60 text-white border-b-2 border-b-emerald-400"
                  : "text-zinc-400 hover:bg-zinc-900/30 hover:text-zinc-300"
                  }`}
                whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <span className={project.fileExtensionColor}>
                  {project.fileExtension}
                </span>
                <span>{project.fileName}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Status Badge Right Aligned */}
      {activeProject && (
        <div className="pr-4 py-2 hidden md:block shrink-0">
          {activeProject.headerStatus.isLive ? (
            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20 rounded">
              {activeProject.headerStatus.text}
            </span>
          ) : (
            <span className="text-[10px] text-zinc-550 font-bold uppercase tracking-wider bg-zinc-900 px-2 py-0.5 border border-zinc-800 rounded">
              {activeProject.headerStatus.text}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
