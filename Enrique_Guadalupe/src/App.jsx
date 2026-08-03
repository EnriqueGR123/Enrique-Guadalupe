import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="inicio">
          <Hero />
        </section>

        <section id="sobre-mi">
          <About />
        </section>

        <section id="habilidades">
          <Skills />
        </section>

        <section id="proyectos">
          <Projects />
        </section>

        <section id="contacto">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;