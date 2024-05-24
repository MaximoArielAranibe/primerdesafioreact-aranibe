import "./NavBar.css";
import { Link } from "react-router-dom";
import Logo from "./icons8-deadlift-50.png";
import SvgCart from "../SvgCart/SvgCart.jsx";
import { useCart } from "../../context/CartProvider.jsx";

const NavBar = () => {
  const { totalCart } = useCart();

  const TotalCart = () => {
    return (
      <span className="total">{totalCart()}</span>
    );
  };

  return (
    <div className="navbar__container">
      <ul className="navbar">
        <li className="navbar__link--container"><Link to="/" className="navbar__link">Inicio</Link></li>
        <li className="navbar__link--container">
          <span to="/suplementos" className="navbar__link marcas">Suplementos</span>
          <ul className="dropdown">
            <li><Link to="/suplementos/proteinas" className="dropdown__link">Proteinas</Link></li>
            <li><Link to="/suplementos/creatinas" className="dropdown__link">Creatinas</Link></li>
            <li><Link to="/suplementos/quemadores-de-grasa" className="dropdown__link">Quemadores de grasa</Link></li>
            <li><Link to="/suplementos/aminoacidos" className="dropdown__link">Aminoácidos</Link></li>
            <li><Link to="/suplementos/shakers" className="dropdown__link">Shakers</Link></li>

          </ul>
        </li>
        <li className="navbar__link--container">
          <span to="/marcas" className="navbar__link marcas">Marcas</span>
          <ul className="dropdown">
            <li><Link to="/marcas/hardcore" className="dropdown__link">Hardcore</Link></li>
            <li><Link to="/marcas/spx" className="dropdown__link">SPX</Link></li>
            <li><Link to="/marcas/bodyadvance" className="dropdown__link">Body Advance</Link></li>
            <li><Link to="/marcas/ena" className="dropdown__link">ENA</Link></li>
          </ul>
        </li>
        <li className="navbar__link--container cart__link--container">
          <Link to="/carrito" className="navbar__link cart__link">
            <span className="cart__icon">Carrito<SvgCart /></span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
