import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";
import { about } from "../../data/about";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 max-w-7xl mx-auto px-4 md:px-0 py-24 md:py-26 border-b border-zinc-900"
    >
      <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 mb-3 uppercase tracking-widest">
        <span>[02 / About]</span>
        <span className="h-px bg-zinc-900 flex-grow" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <AboutHeader
          title={about.header.title}
          subtitle={about.header.subtitle}
          metadata={about.header.metadata}
        />
        <AboutContent
          principles={about.principles}
        />
      </div>
    </section>
  );
}
