import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
    <nav className="navbar_container">
      <ul className="navbar_list">
        <li className="navbar_category">
          <Link to="/" className="navbar_category-link">
            INICIO
          </Link>
        </li>

        <li className="navbar_category">
          <Link to="/suplementos" className="navbar_category-link suplementos">
            SUPLEMENTOS
          </Link>
          <ul className="sub-menu">
            <li className="sub-menu_link">
              <Link to="/suplementos/proteinas">Proteinas</Link>
            </li>
            <li className="sub-menu_link">
              <Link to="/suplementos/preentrenos">Pre-entrenos</Link>
            </li>
            <li className="sub-menu_link">
              <Link to="/suplementos/quemadores-de-grasa">
                Quemadores de grasa
              </Link>
            </li>
            <li className="sub-menu_link">
              <Link to="/suplementos/shakers">
                Shakers
              </Link>
            </li>
          </ul>
        </li>

        <li className="navbar_category">
          <Link to="/combos" className="navbar_category-link">
            COMBOS
          </Link>
        </li>

        <li className="navbar_category">
          <Link to="/carrito" className="navbar_category-link">
            CARRITO
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
