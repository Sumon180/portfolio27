import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Skills from "./sections/skills/SkillsTechnologies";
import Services from "./sections/services/Services";
import Projects from "./sections/projects/Projects";
import Testimonials from "./sections/testimonials/Testimonials";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      {/* PREMIUM FOOTER */}
      <Footer />
    </main>
  );
}
