import './NavBar.css'
import { Link } from 'react-router-dom';

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
          <Link to="/suplementos" className="navbar_category-link">
            SUPLEMENTOS
          </Link>
        </li>

        <li className="navbar_category">
          <Link href="/" className="navbar_category-link">
            OFERTAS DEL DIA
          </Link>
        </li>

        <li className="navbar_category">
          <Link href="/" className="navbar_category-link">
            CARRITO
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
