import "../styles/home.sass";

import accommodations from "../data/logements.json";
import ScrollToTop from "../components/scroll-to-top.jsx";
import Header from "../components/header.jsx";
import Banner from "../components/banner";
import Card from "../components/card";
import Footer from "../components/footer.jsx";

function Home() {
  return (
    <>
      <ScrollToTop />
      <div className="main-container">
        <Header />
        <main>
          <section className="home">
            <Banner title="Chez vous, partout et ailleurs" src={require("../assets/images/image-home.jpg")} alt="Photo d'un paysage" />
            <div className="accommodations-list">
              {accommodations.map((accommodation, index) => (
                <Card accommodation={accommodation} key={index} />
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
