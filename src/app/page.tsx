import config from "@/data/config.json";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar name={config.hero.name} />
      <Hero hero={config.hero} contact={config.contact} />
      <About
        about={config.about}
        personalTraits={config.personalTraits}
        languages={config.languages}
      />
      <Skills skills={config.skills} />
      <Experience experience={config.experience} />
      <Education education={config.education} />
      <Achievements
        achievements={config.achievements}
        certifications={config.certifications}
      />
      <Publications publications={config.publications} />
      <Contact contact={config.contact} name={config.hero.name} />
      <Footer name={config.hero.name} licenseNo={config.hero.licenseNo} />
    </main>
  );
}
