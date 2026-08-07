import Link from "next/link";

interface ProjectLinksProps {
  source: string;
  demo: string;
}

export default function ProjectLinks({ source, demo }: ProjectLinksProps) {
  return (
    <div className="flex gap-4 py-4 md:px-8 font-mono text-xs">
      <Link
        href={source}
        className="text-emerald-400 font-bold hover:underline"
      >
        SOURCE.SH
      </Link>
      <span className="text-zinc-800">|</span>
      <Link
        href={demo}
        className="text-white hover:underline"
      >
        DEPLOY_DEMO.EXE
      </Link>
    </div>
  );
}
