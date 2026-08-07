import Link from "next/link";
import HeroTerminal from "./HeroTerminal";

export default function Hero() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-0 min-h-[90dvh] flex flex-col justify-center pt-16 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left column: Text details */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Status block */}
          <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500 mt-2 mb-6 uppercase tracking-widest border-b border-zinc-900 pb-2 animate-fade-in-up delay-hero-status">
            <span>SPECIALITY: FULL STACK DEVELOPER</span>
            <span className="text-zinc-800">|</span>
            <span>STACK: MERN + NEXT.JS</span>
            <span className="text-zinc-800">|</span>
            <span className="text-emerald-400 font-bold">● AVAILABLE FOR WORK</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.05] text-white mb-6 animate-fade-in-up delay-hero-title">
            Full Stack Developer With{" "}
            <span className="font-mono text-emerald-400 font-bold">Design</span>{" "}
            Engineering.
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-base md:text-lg leading-7 max-w-[55ch] mb-6 font-light animate-fade-in-up delay-hero-desc">
            Full Stack Web Developer focus on building performant web applications,
            developer tools, and intuitive user experience.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 border-t border-zinc-900 pt-6 mt-2 animate-fade-in-up delay-hero-ctas">
            <Link
              href="#projects"
              className="px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] text-zinc-950 font-mono text-xs font-bold tracking-widest uppercase transition-all rounded-custom flex items-center gap-2"
            >
              VIEW_PROJECTS
              <span>→</span>
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3.5 border border-zinc-850 hover:border-zinc-700 active:scale-[0.98] text-zinc-300 font-mono text-xs font-bold tracking-widest uppercase hover:bg-zinc-900/60 transition-colors rounded-custom"
            >
              CONNECT.WITH_ME
            </Link>
          </div>

          {/* Technical Annotations */}
          <div className="mt-8 grid grid-cols-3 gap-6 font-mono text-[9px] text-zinc-650 border-t border-zinc-900 pt-6 animate-fade-in-up delay-hero-ctas">
            <div>
              <span className="block text-zinc-500 uppercase tracking-wider font-bold">LOCATION</span>
              <span className="block mt-1">INDIA</span>
            </div>
            <div>
              <span className="block text-zinc-500 uppercase tracking-wider font-bold">YEARS_LEARNING</span>
              <span className="block mt-1">3+</span>
            </div>
            <div>
              <span className="block text-zinc-500 uppercase tracking-wider font-bold">PROJECTS_BUILT</span>
              <span className="block mt-1">10+</span>
            </div>
          </div>
        </div>

        {/* Right column: Terminal */}
        <div className="lg:col-span-5 relative hidden lg:block animate-fade-in-up delay-hero-panel">
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}
