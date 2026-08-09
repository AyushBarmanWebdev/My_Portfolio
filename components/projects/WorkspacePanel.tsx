import { Project } from "../../data/projects";
import Image from "next/image";
import { useState } from "react";

interface WorkspacePanelProps {
  project: Project;
  activeTabId: "ui" | "impl" | "arch" | "specs";
}

export default function WorkspacePanel({
  project,
  activeTabId,
}: WorkspacePanelProps) {
  const content = project.workspaceContent;

  const [activeImage, setActiveImage] = useState(0);
  const [open, setOpen] = useState(false);
  const currentImage = content.ui.images[activeImage];

  return (
    <div className="flex-grow relative h-[210px] overflow-hidden">
      {/* Preview View */}
      {activeTabId === "ui" && (
        <div className="h-full overflow-y-auto font-mono flex flex-col justify-between select-text duration-200">
          <div className="relative h-full w-full overflow-hidden rounded-custom cursor-pointer">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              onClick={() => setOpen(true)}
            />
            {open && (
              <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setOpen(false)}>
                <div className="relative w-[70vw] h-[70vh] cursor-pointer" onClick={(e) => {
                  e.stopPropagation();
                }}>
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    className="object-contain mx-auto"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-zinc-900 pt-2 flex items-center justify-center">
            <div className="flex justify-between gap-2 overflow-x-auto editor-scrollbar">
              {content.ui.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-10 h-10 rounded-custom cursor-pointer overflow-hidden transition ${activeImage === i ? "border border-emerald-400 text-emerald-400" : "border border-zinc-800 hover:border-zinc-700"
                    }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Implementation View */}
      {activeTabId === "impl" && (
        <div className="h-full overflow-y-auto font-mono text-[9px] text-zinc-500 space-y-1 pr-1 select-text">
          {content.impl.map((line, idx) => {
            const indentStyle = line.indent ? { paddingLeft: `${line.indent * 4}px` } : undefined;
            return (
              <div key={idx} className="flex leading-4" style={indentStyle}>
                {line.tokens.map((token, tIdx) => (
                  <span key={tIdx} className={`whitespace-pre ${token.className ?? ""}`}>
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
        <div className="h-full font-mono text-[9px] text-zinc-500 flex flex-col space-y-1 editor-scrollbar select-text">
          <p className="text-zinc-500 font-bold mb-1">{content.arch.title}</p>
          <div className="space-y-1.5 px-2 text-zinc-400">
            {content.arch.lines.map((line, idx) => {
              const indentStyle = line.indent ? { paddingLeft: `${line.indent * 4}px` } : undefined;
              return (
                <div key={idx} className="flex" style={indentStyle}>
                  {line.tokens.map((token, tIdx) => (
                    <span key={tIdx} className={`whitespace-pre ${token.className ?? ""}`}>
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
      {activeTabId === "specs" && (
        <div className="h-full overflow-x-auto editor-scrollbar font-mono text-[9px] text-zinc-400 space-y-3 select-text">
          <div className="grid grid-cols-2 gap-3">
            {content.specs.map((m, idx) => (
              <div key={idx} className="border border-zinc-900 p-2 rounded bg-zinc-900/10">
                <span className="text-zinc-400 block text-[9px] uppercase tracking-wider">
                  {m.label}
                </span>
                <span
                  className={`font-bold text-[14px] ${m.isAccent ? "text-emerald-400" : "text-white"
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
