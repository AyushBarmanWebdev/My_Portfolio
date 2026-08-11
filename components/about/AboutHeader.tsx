import Link from "next/link";
import { MetadataItem } from "../../data/about";

interface AboutHeaderProps {
  title: string;
  subtitle: string;
  metadata?: MetadataItem[];
  className?: string;
}

export default function AboutHeader({
  title,
  subtitle,
  metadata = [],
  className = "",
}: AboutHeaderProps) {
  return (
    <div className={`lg:col-span-4 ${className}`}>
      <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-white tracking-tight leading-none">
        {title}
      </h2>
      <p className="text-zinc-400 text-sm font-light mt-2">
        {subtitle}
      </p>
      <div className="mt-6 space-y-2 text-zinc-500 border-t border-zinc-900 pt-4">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block py-2">
          {"// 01 / INTRODUCTION"}
        </span>
        <p className="text-zinc-200 font-light leading-relaxed">
          <span className="text-emerald-400 font-mono">Full Stack Developer</span> with expertise in <span className="text-emerald-400 font-mono">Design Engineering</span>, excelling in creating, designing and deploying multiple websites with backend integration & databases that enhance user experience and application performance.
        </p>
      </div>
      {metadata.length > 0 && (
        <div className="mt-6 space-y-2 font-mono text-[11px] text-zinc-500 border-t border-zinc-900 pt-4">
          {metadata.map((item, index) => (
            <div key={index}>
              <span className="text-zinc-500">{item.label}: </span>

              {item.href ? (
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-zinc-200 hover:text-emerald-400 hover:decoration-emerald-400 hover:underline"
                >
                  {item.value}
                </Link>
              ) : (
                <span className="text-zinc-200">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
