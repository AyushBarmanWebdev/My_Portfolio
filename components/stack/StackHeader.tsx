interface StackHeaderProps {
  sectionNumber?: string;
  label?: string;
  title?: string;
  className?: string;
}

export default function StackHeader({
  sectionNumber = "03",
  label = "SYSTEM_CAPABILITIES",
  title = "Engineered Systems",
  className = "",
}: StackHeaderProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 mb-3 uppercase tracking-widest">
        <span>
          [{sectionNumber} / {label}]
        </span>
        <span className="h-px bg-zinc-900 flex-grow" />
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-white tracking-tight leading-none">
        {title}
      </h2>
    </div>
  );
}
