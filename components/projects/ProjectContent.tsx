"use client";

import { Project } from "../../data/projects";
import TechStack from "./TechStack";
import { motion, useReducedMotion } from "motion/react";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="lg:col-span-7 space-y-4 select-text border-b border-zinc-900 overflow-y-auto"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <h3 className="text-2xl font-bold text-white tracking-tight">
        {project.title}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed font-light">
        {project.description}
      </p>

      {/* Architecture Highlights */}
      <div className="border-t border-b border-zinc-900 py-4 my-4">
        <span className="font-mono text-[11px] text-zinc-500 block mb-3 uppercase tracking-wider">
          {"// ENGINEERING NOTES"}
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
    </motion.div>
  );
}
