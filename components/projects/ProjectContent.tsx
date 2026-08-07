import { Project } from "../../data/projects";
import TechStack from "./TechStack";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="lg:col-span-7 space-y-4 select-text border-b border-zinc-900 overflow-y-auto">
      <h3 className="text-2xl font-bold text-white tracking-tight">
        {project.title}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed font-light">
        {project.description}
      </p>

      {/* Architecture Highlights */}
      <div className="border-t border-b border-zinc-900 py-4 my-4">
        <span className="font-mono text-[10px] text-zinc-500 block mb-3 uppercase tracking-wider">
          {"// ARCHITECTURE HIGHLIGHTS"}
        </span>
        <ul className="space-y-2 text-zinc-400 text-xs font-light">
          {project.architectureHighlights.map((highlight, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack tag list */}
      <TechStack technologies={project.technologies} />
    </div>
  );
}
