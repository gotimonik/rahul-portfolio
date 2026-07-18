import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specializations from "@/components/Specializations";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-background text-foreground">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Specializations />
        <Approach />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
