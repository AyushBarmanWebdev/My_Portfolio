interface TechStackProps {
  technologies: string[];
}

export default function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-2 text-[10px] font-mono text-zinc-400">
      {technologies.map((tech, idx) => (
        <span
          key={idx}
          className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-custom"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
