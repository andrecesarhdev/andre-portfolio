import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import BackgroundGrid from "./components/BackgroundGrid";

function App() {
  return (
    <div className="bg-bg min-h-screen relative isolate">
      <BackgroundGrid />

      <Header />
      <Hero />

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <TechStack />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />
    </div>
  );
}

export default App;