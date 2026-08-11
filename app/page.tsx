import Navbar from "../components/navigation/Navbar";
import Hero from "../components/hero/Hero";
import ProjectsSection from "../components/projects/ProjectsSection";
import About from "../components/about";
import Stack from "../components/stack";
import RevealSection from "../components/motion/RevealSection";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col z-10">
      {/* Background Grids & Ambient Lighting */}
      <div className="absolute inset-0 dashboard-grid pointer-events-none z-0"></div>

      <Navbar />
      <RevealSection><Hero /></RevealSection>
      <RevealSection><ProjectsSection /></RevealSection>
      <RevealSection><About /></RevealSection>
      <RevealSection><Stack /></RevealSection>
    </main>
  );
}
