import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-6 z-40 max-w-7xl mx-auto px-4 md:px-0 w-full animate-fade-in-up delay-header">
      <header
        className="bg-zinc-950/80 border border-zinc-900 backdrop-blur-xl rounded-custom px-6 py-3 flex items-center justify-between shadow-2xl"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <Link
            href="#"
            className="font-mono font-bold tracking-tight text-white hover:text-emerald-400 transition-colors text-sm uppercase"
          >
            AYUSH BARMAN
          </Link>

        </div>

        <nav className="hidden md:flex items-center gap-8 font-mono">
          <Link
            href="#projects"
            className="text-zinc-400 hover:text-zinc-100 transition-colors text-xs"
          >
            /PROJECTS
          </Link>
          <Link
            href="#about"
            className="text-zinc-400 hover:text-zinc-100 transition-colors text-xs"
          >
            /PHILOSOPHY
          </Link>
          <Link
            href="#skills"
            className="text-zinc-400 hover:text-zinc-100 transition-colors text-xs"
          >
            /STACK
          </Link>
          <Link
            href="#experience"
            className="text-zinc-400 hover:text-zinc-100 transition-colors text-xs"
          >
            /CHRONOLOGY
          </Link>
        </nav>

        <div>
          <Link
            href="#contact"
            className="px-4 py-1.5 border border-zinc-850 hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-400/5 text-zinc-300 font-mono text-xs tracking-wider uppercase transition-colors rounded rounded-custom"
          >
            CONNECT.WITH_ME
          </Link>
        </div>
      </header>
    </div>
  );
}
