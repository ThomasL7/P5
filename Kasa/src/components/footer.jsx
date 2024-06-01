import "../styles/footer.sass";
import logo from "../assets/svgs/logo-footer.svg";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo Kasa" />
      <h4>© 2020 Kasa. All rights reserved</h4>
    </footer>
  );
}

export default Footer;
