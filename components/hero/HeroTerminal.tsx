"use client";

import { useState } from "react";
import { Braces, Code } from "lucide-react";

interface Tab {
  id: string;
  name: string;
  icon: React.ReactNode;
  active: string;
}

function CodeLine({ number, children, }: { number: number; children: React.ReactNode; }) {
  return (
    <div className="flex">
      <span className="w-8 text-right pr-4 text-zinc-700 select-none font-mono">
        {number}
      </span>

      {children}
    </div>
  );
}

export default function HeroTerminal() {
  const [activeTab, setActiveTab] = useState<string>("profile");

  const tabs: Tab[] = [
    {
      id: "profile",
      name: "profile.json",
      icon: <Braces className="w-3.5 h-3.5 text-rose-400" />,
      active: "PROFILE",
    },
    {
      id: "stack",
      name: "stack.config.ts",
      icon: <Code className="w-3.5 h-3.5 text-blue-400" />,
      active: "STACK",
    },
  ];

  return (
    <div className="border border-zinc-900 bg-zinc-950/40 px-4 rounded-lg font-mono text-[10px] h-104 text-zinc-500 relative flex flex-col shadow-2xl">
      {/* Top Window Bar */}
      <div className="border-b border-zinc-900 flex items-center justify-between select-none rounded-t-lg">
        <div className="flex items-center gap-6 overflow-x-auto">
          {/* Window dots */}
          <div className="flex items-center gap-1.5 py-3">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>

          {/* Tab List */}
          <div className="flex items-center" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`flex items-center gap-2 px-3 py-3 border-r border-zinc-900 font-mono text-[10px] transition-all focus:outline-none cursor-pointer ${activeTab === tab.id
                  ? "bg-zinc-900/60 text-white border-b border-b-emerald-400"
                  : "text-zinc-500 hover:bg-zinc-900/20 hover:text-zinc-300"
                  }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
        <span className="text-[9px] text-zinc-600 hidden sm:inline">UTF-8</span>
      </div>

      {/* Editor Content Area */}
      <div className="flex-grow py-6 overflow-y-auto editor-scrollbar bg-zinc-950/20 text-zinc-400">
        {activeTab === "profile" && (
          <div className="space-y-1 select-text">
            <CodeLine number={1}>
              <p className="text-zinc-500 pl-10">
                <span className="text-rose-400">export const</span> Web_Developer = <span className="text-amber-500">{"{"}</span>
              </p>
            </CodeLine>

            <CodeLine number={2}>
              <p className="pl-15">
                <span className="text-zinc-500">name</span>:{" "}
                <span className="text-emerald-400">{"\"Ayush Barman\""}</span>,
              </p>
            </CodeLine>

            <CodeLine number={3}>
              <p className="pl-15">
                <span className="text-zinc-500">role</span>:{" "}
                <span className="text-emerald-400">{"\"Full Stack Developer\""}</span>,
              </p>
            </CodeLine>

            <CodeLine number={4}>
              <p className="pl-15">
                <span className="text-zinc-500">location</span>:{" "}
                <span className="text-emerald-400">{"\"India\""}</span>,
              </p>
            </CodeLine>

            <CodeLine number={5}>
              <p className="pl-15">
                <span className="text-zinc-500">available_For_Work</span>:{" "}
                <span className="text-purple-500">{"\"true\""}</span>,
              </p>
            </CodeLine>

            <CodeLine number={6}>
              <p className="pl-15">
                <span className="text-zinc-500">focus</span>: <span className="text-amber-500">{"["}</span>
              </p>
            </CodeLine>

            <CodeLine number={7}>
              <p className="pl-21">
                <span className="text-emerald-400">{"\"Modern Web Apps\""}, {"\"Scalable APIs\""}</span>,
              </p>
            </CodeLine>

            <CodeLine number={8}>
              <p className="pl-21">
                <span className="text-emerald-400">{"\"User Experience\""}, {"\"Performance\""}</span>
              </p>
            </CodeLine>

            <CodeLine number={9}>
              <p className="pl-15 text-amber-500">{"],"}</p>
            </CodeLine>

            <CodeLine number={10}>
              <p className="pl-15">
                <span className="text-zinc-500">approach</span>: <span className="text-amber-500">{"["}</span>
              </p>
            </CodeLine>

            <CodeLine number={11}>
              <p className="pl-21">
                <span className="text-emerald-400">{"\"Research & Planning\""}, {"\"Design & Development\""}</span>,
              </p>
            </CodeLine>

            <CodeLine number={12}>
              <p className="pl-21">
                <span className="text-emerald-400">{"\"Test Driven Development\""}, {"\"Testing & Optimization\""}</span>,
              </p>
            </CodeLine>

            <CodeLine number={13}>
              <p className="pl-15 text-amber-500">{"],"}</p>
            </CodeLine>

            <CodeLine number={14}>
              <p className="pl-15">
                <span className="text-zinc-500">principle</span>:{" "}
                <span className="text-emerald-400">
                  {"\"Thoughtful engineering with an intuitive UI/UX.\""}
                </span>
              </p>
            </CodeLine>

            <CodeLine number={15}>
              <p className="pl-10 text-amber-500">{"}"};</p>
            </CodeLine>
          </div>
        )}

        {activeTab === "stack" && (
          <div className="space-y-1 select-text">
            <CodeLine number={1}>
              <p className="pl-10">
                <span className="text-rose-400">export const</span> <span className="text-sky-400">Stack</span> = <span className="text-amber-500">{"{"}</span>
              </p>
            </CodeLine>

            <CodeLine number={2}>
              <p className="pl-15">
                <span className="text-zinc-500">frontend</span>: <span className="text-amber-500">{"["}</span>
              </p>
            </CodeLine>

            <CodeLine number={3}>
              <p className="pl-21">
                <span className="text-emerald-400">{"\"React.js\""}</span>,{" "}
                <span className="text-emerald-400">{"\"Next.js\""}</span>,{" "}
                <span className="text-emerald-400">{"\"Tailwind CSS\""}</span>
              </p>
            </CodeLine>

            <CodeLine number={4}>
              <p className="pl-15 text-amber-500">],</p>
            </CodeLine>

            <CodeLine number={5}>
              <p className="pl-15">
                <span className="text-zinc-500">backend</span>: <span className="text-amber-500">{"["}</span>
              </p>
            </CodeLine>

            <CodeLine number={6}>
              <p className="pl-21">
                <span className="text-emerald-400">{"\"JavaScript/TypeScript\""}</span>,{" "}
                <span className="text-emerald-400">{"\"Node.js\""}</span>
              </p>
            </CodeLine>

            <CodeLine number={7}>
              <p className="pl-21">
                <span className="text-emerald-400">{"\"Express.js\""}</span>,{" "}
                <span className="text-emerald-400">{"\"REST APIs\""}</span>
              </p>
            </CodeLine>

            <CodeLine number={8}>
              <p className="pl-15 text-amber-500">],</p>
            </CodeLine>

            <CodeLine number={9}>
              <p className="pl-15">
                <span className="text-zinc-500">database</span>: <span className="text-amber-500">{"["}</span>
              </p>
            </CodeLine>

            <CodeLine number={10}>
              <p className="pl-21">
                <span className="text-emerald-400">{"\"MongoDB\""}</span>,{" "}
                <span className="text-emerald-400">{"\"SQL\""}</span>,{" "}
                <span className="text-emerald-400">{"\"PostgreSQL\""}</span>
              </p>
            </CodeLine>

            <CodeLine number={11}>
              <p className="pl-15 text-amber-500">],</p>
            </CodeLine>

            <CodeLine number={12}>
              <p className="pl-15">
                <span className="text-zinc-500">tooling</span>: <span className="text-amber-500">{"["}</span>
              </p>
            </CodeLine>

            <CodeLine number={13}>
              <p className="pl-21">
                <span className="text-emerald-400">{"\"Git/GitLab\""}</span>,{" "}
                <span className="text-emerald-400">{"\"GitHub\""}</span>,
              </p>
            </CodeLine>

            <CodeLine number={14}>
              <p className="pl-21">
                <span className="text-emerald-400">{"\"VS Code\""}</span>,{" "}
                <span className="text-emerald-400">{"\"Postman\""}</span>
              </p>
            </CodeLine>

            <CodeLine number={15}>
              <p className="pl-15 text-amber-500">],</p>
            </CodeLine>

            <CodeLine number={16}>
              <p className="pl-10 text-amber-500">{"}"};</p>
            </CodeLine>
          </div>
        )}
      </div>

      {/* Window Footer */}
      <div className="border-t border-zinc-900 bg-zinc-950 px-4 py-2 flex items-center justify-between text-[9px] text-zinc-600 rounded-b-lg">
        <div className="text-zinc-500">TAB_STATE: ACTIVE</div>
        <div className="text-zinc-500">
          {tabs.find((t) => t.id === activeTab)?.active}
        </div>
      </div>
    </div>
  );
}
