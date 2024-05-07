import { Link } from "react-router-dom";

import accommodations from "../backend/logements.json";

function Home() {
  return (
    <section className="home">
      <div className="title-banner">
        <h2>Chez vous, partout et ailleurs</h2>
        <img src={`${process.env.PUBLIC_URL}/images/image-home.png`} alt="Photo d'un paysage" />
        {/* <img src={`${process.env.PUBLIC_URL}/images/image-home.png`} srcSet={`${process.env.PUBLIC_URL}/images/image-home_m.png 375w, ${process.env.PUBLIC_URL}/images/image-home.png 376w`} sizes="(max-width: 375px) 375px,(max-width: 376px) 376px" alt="Photo d'un paysage" /> */}
      </div>
      <div className="accommodations-list">
        {accommodations.map((accommodation, index) => (
          <Link key={index} to={`accommodation/${accommodation.id}`}>
            <article>
              <img src={`${accommodation.cover}`} alt={`${accommodation.title}`} />
              <h3>{accommodation.title}</h3>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
