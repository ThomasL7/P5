import { Link } from "react-router-dom";

function Card({ accommodation }) {
  return (
    <Link to={`/accommodation/${accommodation.id}`}>
      <article>
        <h3>{accommodation.title}</h3>
        <img loading="lazy" src={`${accommodation.cover}`} alt={`${accommodation.title}`} />
      </article>
    </Link>
  );
}

export default Card;
