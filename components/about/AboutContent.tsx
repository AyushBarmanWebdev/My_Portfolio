import AboutCard from "./AboutCard";
import { Principle } from "../../data/about";

interface AboutContentProps {
  principles: Principle[];
  className?: string;
}

export default function AboutContent({
  principles,
  className = "",
}: AboutContentProps) {
  return (
    <div className={`lg:col-span-8 space-y-8 ${className}`}>

      {/* 02 — Principle Cards */}
      <div className="space-y-4 scroll-reveal reveal-child-3">
        <span className="font-mono text-md pt-2 text-zinc-500 uppercase tracking-widest block">
          {"// 02 / CORE_PRINCIPLES"}
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {principles.map((principle, index) => (
            <AboutCard
              key={principle.number}
              number={principle.number}
              title={principle.title}
              points={principle.points}
              className={`scroll-reveal reveal-child-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
