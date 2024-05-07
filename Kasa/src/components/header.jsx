import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo Kasa" />
      <nav>
        <ul>
          <li>
            <Link to="">Accueil</Link>
          </li>
          <li>
            <Link to="about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
