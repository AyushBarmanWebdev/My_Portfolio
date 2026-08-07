export default function ProjectsHeader() {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 mb-3 uppercase tracking-widest">
        <span>[01 / ENGINEERING_CASES]</span>
        <span className="h-px bg-zinc-900 flex-grow"></span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-white tracking-tight leading-none">
        Selected Projects
      </h2>
    </div>
  );
}
