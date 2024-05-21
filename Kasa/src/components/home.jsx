import accommodations from "../backend/logements.json";
import Card from "./card";
import Banner from "./banner";

function Home() {
  return (
    <section className="home">
      <Banner title="Chez vous, partout et ailleurs" src={`${process.env.PUBLIC_URL}/images/image-home.jpg`} alt="Photo d'un paysage" />
      <div className="accommodations-list">
        {accommodations.map((accommodation, index) => (
          <Card accommodation={accommodation} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Home;
