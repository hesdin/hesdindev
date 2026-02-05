import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import FAQ from "./components/sections/FAQ";
import Gallery from "./components/sections/Gallery";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Pricing from "./components/sections/Pricing";
import Services from "./components/sections/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Projects />
        <Gallery />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
