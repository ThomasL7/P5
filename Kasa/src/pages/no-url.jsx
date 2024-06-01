import { Link } from "react-router-dom";

import "../styles/no-url.sass";

import ScrollToTop from "../components/scroll-to-top.jsx";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

function NoUrl() {
  return (
    <>
      <ScrollToTop />
      <div className="main-container">
        <Header />
        <main>
          <section className="no-url">
            <h2>404</h2>
            <p>
              Oups! La page que <br /> vous demandez n'existe pas.
            </p>
            <p className="link-back-home">
              <Link to="/">Retourner sur la page d'accueil</Link>
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default NoUrl;
