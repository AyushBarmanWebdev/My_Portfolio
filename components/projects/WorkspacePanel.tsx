import { Project } from "../../data/projects";

interface WorkspacePanelProps {
  project: Project;
  activeTabId: "preview" | "impl" | "arch" | "metric";
}

export default function WorkspacePanel({
  project,
  activeTabId,
}: WorkspacePanelProps) {
  const content = project.workspaceContent;

  return (
    <div className="flex-grow relative h-[210px] overflow-hidden">
      {/* Preview View */}
      {activeTabId === "preview" && (
        <div className="h-full overflow-hidden bg-zinc-950/40 border border-zinc-900 rounded p-4 flex flex-col justify-between select-text duration-200">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-2 font-mono text-[9px] text-zinc-500">
            <span>{content.preview.headerLeft}</span>
            <span className={content.preview.headerRightColor}>
              {content.preview.headerRight}
            </span>
          </div>
          <div className="space-y-1 font-mono text-[9px] text-zinc-400 overflow-y-auto flex-grow pr-1 editor-scrollbar">
            {content.preview.lines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
            {content.preview.card && (
              <div className="border border-zinc-900 p-2 rounded bg-zinc-900/5 mt-1 space-y-1">
                <p className="text-white font-bold">{content.preview.card.name}</p>
                <p className="text-zinc-400">{content.preview.card.bio}</p>
                <p className="text-zinc-500 text-[8px]">
                  {content.preview.card.subText}
                </p>
              </div>
            )}
          </div>
          <div className="border-t border-zinc-900 pt-2 flex items-center justify-between font-mono text-[8px] text-zinc-600">
            <span>{content.preview.footerLeft}</span>
            <span>{content.preview.footerRight}</span>
          </div>
        </div>
      )}

      {/* Implementation View */}
      {activeTabId === "impl" && (
        <div className="h-full overflow-y-auto font-mono text-[9px] text-zinc-500 space-y-1 pr-1 editor-scrollbar select-text">
          {content.impl.map((line, idx) => {
            const indentStyle = line.indent ? { paddingLeft: `${line.indent * 4}px` } : undefined;
            return (
              <div key={idx} className="flex" style={indentStyle}>
                {line.tokens.map((token, tIdx) => (
                  <span key={tIdx} className={token.className}>
                    {token.text}
                  </span>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {/* Architecture View */}
      {activeTabId === "arch" && (
        <div className="h-full overflow-y-auto font-mono text-[9px] text-zinc-500 flex flex-col justify-center space-y-2.5 select-text">
          <p className="text-zinc-500 font-bold mb-1">{content.arch.title}</p>
          <div className="space-y-1.5 pl-2 text-zinc-400">
            {content.arch.lines.map((line, idx) => {
              const indentStyle = line.indent ? { paddingLeft: `${line.indent * 4}px` } : undefined;
              return (
                <div key={idx} className="flex" style={indentStyle}>
                  {line.tokens.map((token, tIdx) => (
                    <span key={tIdx} className={token.className}>
                      {token.text}
                    </span>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Metric View */}
      {activeTabId === "metric" && (
        <div className="h-full overflow-y-auto font-mono text-[9px] text-zinc-400 space-y-3 select-text">
          <div className="grid grid-cols-2 gap-3">
            {content.metric.map((m, idx) => (
              <div key={idx} className="border border-zinc-900 p-2 rounded bg-zinc-900/10">
                <span className="text-zinc-500 block text-[8px] uppercase tracking-wider">
                  {m.label}
                </span>
                <span
                  className={`font-bold text-[14px] ${
                    m.isAccent ? "text-emerald-400" : "text-white"
                  }`}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
