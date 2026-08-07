import Navbar from "../components/navigation/Navbar";
import Hero from "../components/hero/Hero";
import ProjectsSection from "../components/projects/ProjectsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col z-10">
      {/* Background Grids & Ambient Lighting */}
      <div className="absolute inset-0 dashboard-grid pointer-events-none z-0"></div>

      <Navbar />
      <Hero />
      <ProjectsSection />
    </main>
  );
}
