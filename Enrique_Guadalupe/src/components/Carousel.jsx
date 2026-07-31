import React from "react";

function Carousel({ items }) {
  return (
    <div
      id="portfolioCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Indicadores */}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#portfolioCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner rounded">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === 0 ? "active" : ""
            }`}
          >
            <img
              src={item.image}
              className="d-block w-100"
              alt={item.title}
              style={{
                height: "400px",
                objectFit: "cover",
              }}
            />

            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-3">
              <h5>{item.title}</h5>
              <p>{item.description}</p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Ver proyecto
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Botón anterior */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#portfolioCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
        <span className="visually-hidden">
          Anterior
        </span>
      </button>

      {/* Botón siguiente */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#portfolioCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
        <span className="visually-hidden">
          Siguiente
        </span>
      </button>
    </div>
  );
}

export default Carousel;