import Carousel from './Carousel';

export default function Projects() {
  const proyectos = [
    {
      image:'https://http2.mlstatic.com/D_NQ_NP_918596-MLA101412871636_122025-B.webp',
      title: "SIMP",
      description:
        "Sistema de reconocimiento facial para el acceso de los estudiantes de la escuela Politecnica de Guadalajara para mejorar el control de acceso y asistencia, integrando una base de datos para registrar la información de los usuarios",
      link: 'https://github.com/Vlanden/SIMP2.0'
    },

    {
      image:
        'https://us.123rf.com/450wm/echeverriurrealuis/echeverriurrealuis2301/echeverriurrealuis230100205/196895051-alfabeto-letra-p-letra-de-madera-blanca-sobre-fondo-azul-espumoso.jpg?ver=6',
      title: "ProLink",
      description:
        "Aplicación full stack con autenticación segura basada en JWT, integrando un frontend en React con un backend en Django REST Framework. Implementé manejo de sesiones, protección de rutas y comunicación cliente-servidor mediante API REST.",
      link: 'https://github.com/EnriqueGR123/ProLink/'
    },

    {
      image:
        'https://github.com/Vlanden/Guardians-of-via/blob/main/app/static/images/logo.png?raw=true',
      title: "Guardianes de la via",
      description:
        "Plataforma web interactiva para la mejora de la educación vial, incorporando elementos de gamificación y visuales para aumentar la participación y el aprendizaje efectivo. Utilizando Flask para el backend y HTML/CSS para el frontend",
      link: 'https://github.com/Vlanden/Guardians-of-via'
    },

    {
      image:
        'https://fyi.extension.wisc.edu/moneymatters/files/2022/08/meta-chart-2.png',
      title: "Expense management system",
      description:
        "Plataforma web interactiva para la mejora de la educación vial, incorporando elementos de gamificación y visuales para aumentar la participación y el aprendizaje efectivo. Utilizando Flask para el backend y HTML/CSS para el frontend",
      link: 'https://github.com/EnriqueGR123/expense-management-system'
    }
  ];

  return (
    <section id="projects">

      <Carousel
        items={proyectos}
        carouselId="projectsCarousel"
      />

    </section>
  );
}
