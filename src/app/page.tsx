import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Experience from "./components/experience";
import AwardAndAchievements from "./components/awardsAndAchievements";
import Projects from "./components/projects";
import Education from "./components/education";
import Footer from "./components/footer";
import PrimayCTA from "./ui/cta/primary";
import SecondaryCTA from "./ui/cta/secondary";
import TertiaryCTA from "./ui/cta/tertiary";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="p-4 pt-20">
        <PrimayCTA label="PrimayCTA" />
        <SecondaryCTA label="SecondaryCTA" />
        <TertiaryCTA label="TertiaryCTA" />
        <HeroSection />
        <Experience />
        <AwardAndAchievements />
        <Projects />
        <Education />
      </div>
      <Footer />
    </main>
  );
}
