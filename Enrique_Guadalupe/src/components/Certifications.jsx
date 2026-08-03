import React from 'react'
// import Carousel from "./Carousel";
import proyecto1 from "../assets/proyecto1.png";

const Certifications = () => {
    const certificaciones = [
      {
        image: 'Bootstrap',
        title: "API de tareas",
        description:
          "API REST creada con Django REST Framework y JWT.",
        link: "https://github.com/usuario/proyecto"
      },
      {
        image: 'proyecto2',
        title: "Sistema de inventario",
        description:
          "Aplicación web con React y Django.",
        link: "https://github.com/usuario/inventario"
      }
    ];


  return (
    <section id="projects">
      <h2 className="mb-4">
        Mis certificaciones
      </h2>

      <Carousel items={certificaciones} />
    </section>
  );
}



export default Certifications
