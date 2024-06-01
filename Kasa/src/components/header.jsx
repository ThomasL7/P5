import { NavLink } from "react-router-dom";

import "../styles/header.sass";
import logo from "../assets/svgs/logo-header.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kasa" />
      <h1>Kasa</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
