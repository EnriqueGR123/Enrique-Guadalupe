import me from './assets/me.jpeg';
import Contact from './Contact';
function Hero() {
  return (
    <section className="hero" id="inicio">
      <br /><br /><br />
      {/* HERO */}
      <div className="hero-container">

        {/* FOTO */}
        <div className="hero-photo-container">

          <div className="hero-photo">
            <img
              src={me}
              alt="Foto de Enrique Gabriel"
            />
          </div>

        </div>


        {/* TEXTO */}
        <div className="hero-content">

          <p className="hero-intro">
            HOLA, SOY ENRIQUE
          </p>

          <h1>
            Desarrollador
            <br />
            <span>Full Stack.</span>
          </h1>

          <p className="hero-description">
              Estudiante Inteligencia Artificial y Ciencia de Datos,
              apasionado por crear soluciones tecnologicas  que combinan desarrollo de software, inteligencia artificial y automatización.
              </p>

          <a
            href="#proyectos"
            className="hero-link"
          >
            Ver mis proyectos
            <span>→</span>
          </a>

        </div>


        {/* CONTACTO */}
       <Contact />

      </div>

    </section>
  );
}

export default Hero;