function Carousel({ items, carouselId = "portfolioCarousel" }) {
  return (
    <div
      id={carouselId}
      className="portfolio-carousel carousel slide"
      data-bs-ride="carousel"
    >

      {/* SLIDES */}

      <div className="carousel-inner">

        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === 0 ? "active" : ""
            }`}
          >

            <img
              src={item.image}
              alt={item.title}
              className="portfolio-image image-fluid"
            />

            <br />
            <br />

            <div className="portfolio-info">

              <h3>{item.title}</h3>

              <p>{item.description}</p><br />

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                >
                  Ver proyecto →
                </a>
              )}

            </div>

          </div>
        ))}

      </div>


      {/* INDICADORES */}

      <div className="carousel-indicators">

        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={
              index === 0 ? "true" : undefined
            }
            aria-label={`Slide ${index + 1}`}
          />
        ))}

      </div> <br /><br />


      {/* BOTÓN ANTERIOR */}

      <button
        className="carousel-control-prev portfolio-control"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="prev"
      >

        <span className="portfolio-arrow">
          ←
        </span>

        <span className="visually-hidden">
          Anterior
        </span>

      </button>


      {/* BOTÓN SIGUIENTE */}

      <button
        className="carousel-control-next portfolio-control"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="next"
      >

        <span className="portfolio-arrow">
          →
        </span>

        <span className="visually-hidden">
          Siguiente
        </span>

      </button>

    </div>
  );
}

export default Carousel;
