import me from './assets/me.jpeg';
import Contact from './Contact';
function Hero() {
  return (
    <section className="hero" id="inicio">

      <nav className="navbar">

        <a href="#inicio" className="logo">
          Enrique Gabriel
        </a>

        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>

      </nav>


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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ipsa ipsam nihil consectetur animi fugiat, sed totam voluptate maxime voluptates neque! Ipsam dolorum amet incidunt ullam. Quod fuga necessitatibus dicta!
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