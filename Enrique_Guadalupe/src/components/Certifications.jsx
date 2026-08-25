import React from 'react'
import backend from './assets/backend.jpeg'
import bootstrap from './assets/bootstrap.jpeg'
import programming from './assets/programming_python.jpeg'
import react from './assets/react.jpeg'
import db from './assets/db.jpeg'
import version from './assets/version.jpeg'

import Carousel from './Carousel'

const Certifications = () => {
    const certificaciones = [
      {
        image: backend,
        title: "Introduction to Back-End Development",
        description:
          "API REST creada con Django REST Framework y JWT.",
      },
      {
        image: react,
        title: "React & TypeScript - The Practical Guide",
        description:
          "Aplicación web con React y Django.",
      },
      {
        image: db,
        title: "ntroduction to Databases for Back-End Development",
        description:
          "Aplicación web con React y Django.",
      },
      {
        image: programming,
        title: "Programming in Python",
        description:
          "Aplicación web con React y Django.",
      },
      {
        image: bootstrap,
        title: "Bootstrap 5 y SASS - La Guía Práctica",
        description:
          "Aplicación web con React y Django.",
      },
      {
        image: version,
        title: "Version Control",
        description:
          "Aplicación web con React y Django.",
        //link: "https://github.com/usuario/inventario"
      },
    ];


  return (
    <section>
      

  <Carousel items={certificaciones} carouselId="certificationsCarousel" />



    </section>
  );
}



export default Certifications
