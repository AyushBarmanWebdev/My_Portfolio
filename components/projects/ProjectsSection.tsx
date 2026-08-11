"use client";

import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectsHeader from "./ProjectsHeader";
import ProjectTabs from "./ProjectTabs";
import ProjectContent from "./ProjectContent";
import ProjectWorkspace from "./ProjectWorkspace";
import ProjectLinks from "./ProjectLinks";

export default function ProjectsSection() {
  const [activeProjectId, setActiveProjectId] = useState<string>("json");
  const [workspaceTabs, setWorkspaceTabs] = useState<Record<string, "ui" | "impl" | "arch" | "specs">>({
    "json": "ui",
    "codebook": "ui",
    "linkedin": "ui",
  });

  const activeWorkspaceTabId = workspaceTabs[activeProjectId];

  const handleSelectProject = (id: string) => {
    setActiveProjectId(id);
  };

  const handleWorkspaceTabChange = (tab: "ui" | "impl" | "arch" | "specs") => {
    setWorkspaceTabs((prev) => ({
      ...prev,
      [activeProjectId]: tab,
    }));
  };

  const activeProject =
    projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <section
      id="projects"
      className="relative z-10 max-w-7xl mx-auto px-4 md:px-0 py-24 md:py-26 border-b border-zinc-900"
    >
      <ProjectsHeader />

      <div className="border border-zinc-900 bg-zinc-950/40 rounded-custom overflow-hidden shadow-2xl">
        {/* Project Tabs Top Bar */}
        <ProjectTabs
          projects={projects}
          activeProjectId={activeProjectId}
          onSelectProject={handleSelectProject}
        />

        {/* Project Content Area */}
        <div className="bg-zinc-950/20 md:px-8 md:pt-8.5 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <ProjectContent key={`content-${activeProject.id}`} project={activeProject} />
          <ProjectWorkspace
            key={`workspace-${activeProject.id}`}
            project={activeProject}
            activeWorkspaceTabId={activeWorkspaceTabId}
            onSelectWorkspaceTab={handleWorkspaceTabChange}
          />
        </div>

        {/* Source / Demo Links */}
        <ProjectLinks source={activeProject.links.source} demo={activeProject.links.demo} />
      </div>
    </section>
  );
}
