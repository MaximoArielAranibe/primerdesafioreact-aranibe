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
              <Link className="link" to="/suplementos/proteinas">Proteinas</Link>
            </li>
            <li className="sub-menu_link">
              <Link className="link" to={"/suplementos/creatinas"}>Creatinas</Link>
            </li>
            <li className="sub-menu_link">
              <Link className="link" to="/suplementos/preentrenos">Pre-entrenos</Link>
            </li>
            <li className="sub-menu_link">
              <Link className="link" to="/suplementos/quemadores-de-grasa">
                Quemadores de grasa
              </Link>
            </li>
            <li className="sub-menu_link">
              <Link className="link" to="/suplementos/shakers">
                Shakers
              </Link>
            </li>
          </ul>
        </li>

        <li className="navbar_category navbar_category-link">
            MARCAS
          <ul className="sub-menu">
            <li className="sub-menu_link">
              <Link className="link" to="/marcas/bodyadvance">Body Advance</Link>
            </li>
            <li className="sub-menu_link">
              <Link className="link" to="/marcas/ena">
                Ena
              </Link>
            </li>
            <li className="sub-menu_link">
              <Link className="link" to="/marcas/hardcore">Hardcore</Link>
            </li>
            <li className="sub-menu_link">
              <Link className="link" to={"/marcas/spx"}>Spx</Link>
            </li>
          </ul>
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
