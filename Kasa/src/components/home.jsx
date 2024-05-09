import { Link } from "react-router-dom";

import accommodations from "../backend/logements.json";

function Home() {
  return (
    <section className="home">
      <div className="title-banner">
        <div className="black-filter"></div>
        <h2>Chez vous, partout et ailleurs</h2>
        <img src={`${process.env.PUBLIC_URL}/images/image-home.png`} alt="Photo d'un paysage" />
      </div>
      <div className="accommodations-list">
        {accommodations.map((accommodation, index) => (
          <Link key={index} to={`accommodation/${accommodation.id}`}>
            <article>
              <h3>{accommodation.title}</h3>
              <img src={`${accommodation.cover}`} alt={`${accommodation.title}`} />
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
