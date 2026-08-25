import Timeline from './Timeline'

function About() {
  return (
    <section className="about" id="sobre-mi">

      <div className="about-container">
        <div className="about-header">

          <p className="about-label">
            ABOUT ME
          </p>

          <h2>
            Un poco sobre mí.
          </h2>

        </div>


        {/* CONTENT */}

        <div className="about-content">

          {/* LEFT */}

          <div className="about-title">

            <h3>
              ¿Quién soy?
            </h3>
          </div>


          {/* RIGHT */}

          <div className="about-text">

            <p>
              Estudiante de Licenciatura en Inteligencia Artificial y Ciencia de Datos, con experiencia en infraestructura tecnológica, soporte a centros de datos y administración de servidores adquirida en IBM y Foxconn. Participante del programa P- TECH by IBM, con conocimientos en Python, SQL y Linux, orientado al desarrollo de soluciones back-end, IA y automatización

            </p>

            <p>
              <Timeline />
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;