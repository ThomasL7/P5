import { Link } from "react-router-dom";

function NoUrl() {
  return (
    <section className="no-url">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p className="link-back-home">
        <Link to="">Retourner sur la page d'accueil</Link>
      </p>
    </section>
  );
}

export default NoUrl;
