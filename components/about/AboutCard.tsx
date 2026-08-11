interface AboutCardProps {
  number: string;
  title: string;
  points: string[];
  className?: string;
}

export default function AboutCard({ number, title, points, className = "" }: AboutCardProps) {
  return (
    <div className={`border border-zinc-900 bg-zinc-950/20 px-6 pt-6 pb-10 rounded-custom ${className}`}>
      <span className="font-mono text-[10px] text-zinc-500 block mb-3">
        {number}{" // "}{title}
      </span>
      <ul className="space-y-1.5 text-zinc-300 font-light">
        {points.map((point, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
            <span className="text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
