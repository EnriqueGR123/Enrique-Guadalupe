import React from 'react'
import Carousel from './Carousel';

export default function Projects() {
  const proyectos = [
        {
          image: 'backend',
          title: "Introduction to Back-End Development",
          description:
            "API REST creada con Django REST Framework y JWT.",
          link:''
        }]

  return (
    <section id="projects">
      <div className="about-container">
         <div className="about-header">
          <h3>
            Proyectos
          </h3>
        </div>
      </div>
       

      <Carousel items={proyectos} />
    </section>
  );
}
