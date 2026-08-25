import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
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
        <section id="proyectos">
          <br />
          <Projects />
        </section>

        <section id="certificaciones" >
          <br /> <br /><br />
          <Certifications />
        </section>

        <section id="habilidades">
          <Footer />
        </section>

        
      </main>
    </>
  );
}

export default App;