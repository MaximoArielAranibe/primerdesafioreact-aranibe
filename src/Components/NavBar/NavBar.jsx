import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar_container">
      <ul className="navbar_list">
        <li className="navbar_category">
          <a href="/" className="navbar_category-link">
            INICIO
          </a>
        </li>

        <li className="navbar_category">
          <a href="/" className="navbar_category-link">
            SUPLEMENTOS
            <i class="fa-solid fa-angle-down navbar_category-suplementos"></i>
          </a>
        </li>

        <li className="navbar_category">
          <a href="/" className="navbar_category-link">
            OFERTAS DEL DIA
          </a>
        </li>

        <li className="navbar_category">
          <a href="/" className="navbar_category-link">
            CARRITO
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
