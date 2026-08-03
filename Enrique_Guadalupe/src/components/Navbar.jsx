const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MiPortafolio</div>

      <ul>
        <li>
          <a href="#inicio">Inicio</a>
        </li>

        <li>
          <a href="#sobre-mi">Sobre mí</a>
        </li>

        <li>
          <a href="#habilidades">Habilidades</a>
        </li>

        <li>
          <a href="#proyectos">Proyectos</a>
        </li>

        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;