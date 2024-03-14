import "./NavBar.css";
import { Link } from "react-router-dom";
import Logo from "./icons8-deadlift-50.png";
import SvgCart from "../SvgCart/SvgCart.jsx";
import { useCart } from "../../context/CartProvider.jsx";

const NavBar = () => {
  const { total } = useCart();

  const TotalCart = () => {
    return (
      <div className="total__container">
        <h1 className="total">{total}</h1>
      </div>
    );
  };

  return (
    <nav className="navbar_container">
      <div className="left-side">
        <ul className="navbar_list">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <li className="navbar_category">
            <Link to="/" className="navbar_category-link">
              INICIO
            </Link>
          </li>

          <li className="navbar_category">
            <Link
              to="/suplementos"
              className="navbar_category-link suplementos"
            >
              SUPLEMENTOS
            </Link>
            <ul className="sub-menu">
              <li className="sub-menu_link">
                <Link className="link" to="/suplementos/proteinas">
                  Proteinas
                </Link>
              </li>
              <li className="sub-menu_link">
                <Link className="link" to={"/suplementos/creatinas"}>
                  Creatinas
                </Link>
              </li>
              <li className="sub-menu_link">
                <Link className="link" to="/suplementos/preentrenos">
                  Pre-entrenos
                </Link>
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

          <li className="navbar_category">
            <Link className="navbar_category-link">MARCAS</Link>
            <ul className="sub-menu">
              <li className="sub-menu_link">
                <Link className="link" to="/marcas/bodyadvance">
                  Body Advance
                </Link>
              </li>
              <li className="sub-menu_link">
                <Link className="link" to="/marcas/ena">
                  Ena
                </Link>
              </li>
              <li className="sub-menu_link">
                <Link className="link" to="/marcas/hardcore">
                  Hardcore
                </Link>
              </li>
              <li className="sub-menu_link">
                <Link className="link" to={"/marcas/spx"}>
                  Spx
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="rigth-side carrito">
        <Link to="/carrito" className="navbar_category-link">
          CARRITO
        </Link>
        <div className="carrito-wrapper">
          <Link to="/carrito"><SvgCart/></Link>
          {total >= 1 ? (
            <TotalCart />
          ) : (
            <span style={{ display: "none" }}>{total}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
