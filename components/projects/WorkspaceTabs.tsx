import { WorkspaceTab } from "../../data/projects";

interface WorkspaceTabsProps {
  tabs: WorkspaceTab[];
  activeTabId: string;
  onSelectTab: (id: "preview" | "impl" | "arch" | "metric") => void;
}

export default function WorkspaceTabs({
  tabs,
  activeTabId,
  onSelectTab,
}: WorkspaceTabsProps) {
  return (
    <div className="flex gap-2 mb-3 font-mono text-[9px] flex-wrap">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`px-2.5 py-1 rounded-custom focus:outline-none transition-all cursor-pointer ${
              isActive
                ? "bg-zinc-800/85 border border-zinc-700 border-b-2 border-b-emerald-400 text-white font-bold"
                : "bg-zinc-900 border border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
