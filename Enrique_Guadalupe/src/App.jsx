import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="inicio">
          <Hero  />
        </section>

        <section id="sobre-mi">
          <About />
        </section>
        
        <section id="certificaciones" >
          <Certifications />
        </section>

        <section id="proyectos">
          <Projects />
        </section>

        <section id="habilidades">
          <Skills />
        </section>

        
      </main>
    </>
  );
}

export default App;