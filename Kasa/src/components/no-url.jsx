import { Link } from "react-router-dom";

function NoUrl() {
  return (
    <section className="no-url">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas</p>
      <a href="#">
        <Link to="">Retourner sur la page d'accueil</Link>
      </a>
    </section>
  );
}

export default NoUrl;
