
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

            <span>01</span>

            <h3>
              ¿Quién soy?
            </h3>

          </div>


          {/* RIGHT */}

          <div className="about-text">

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident praesentium sequi, ad, aliquam dolore incidunt tempore impedit sint beatae similique explicabo dolorum vel! Ratione culpa exercitationem est non quas.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum beatae veniam eos non perferendis repellendus dolorem voluptas saepe voluptatem voluptate impedit consequuntur suscipit voluptatibus at aliquid, ratione consequatur aut!.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, voluptatum! Voluptas, quibusdam? Quisquam, voluptatum.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;