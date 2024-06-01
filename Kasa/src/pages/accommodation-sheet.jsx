import { useParams, Navigate } from "react-router-dom";

import "../styles/accommodation-sheet.sass";
import star from "../assets/svgs/star.svg";
import starEmpty from "../assets/svgs/star-empty.svg";

import accommodations from "../data/logements.json";
import ScrollToTop from "../components/scroll-to-top.jsx";
import Header from "../components/header.jsx";
import Carousel from "../components/carousel";
import CollapsibleSection from "../components/collapsible-section";
import Footer from "../components/footer.jsx";

function Accommodation() {
  // Getting accommodation ID from URL
  const { id } = useParams();
  const accommodationToDisplay = accommodations.find((accommodation) => accommodation.id === id);

  // Navigate to no-rul if no accommodation ID found
  if (!accommodationToDisplay) {
    return <Navigate to="/404" />;
  } else {
    // Splice first name and last name
    const resultRegex = accommodationToDisplay.host.name.match(/^(.*)\s+(\w+)$/);
    const firstName = resultRegex[1];
    const lastName = resultRegex[2];

    return (
      <>
        <ScrollToTop />
        <div className="main-container">
          <Header />
          <main>
            <section className="accommodation">
              <Carousel slides={accommodationToDisplay.pictures} timer={5} animationDuration={0.6} />
              <div className="section-spreader">
                {/* Left section */}
                <div className="left-section">
                  <h2>{accommodationToDisplay.title}</h2>
                  <p>{accommodationToDisplay.location}</p>
                  <ul>
                    {accommodationToDisplay.tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                </div>

                {/* Right section */}
                <div className="right-section">
                  <div className="author-section">
                    <p>
                      {firstName}
                      <br />
                      {lastName}
                    </p>
                    <img loading="lazy" src={accommodationToDisplay.host.picture} alt="Photo profile" />
                  </div>
                  <div className="rating">{Array.from({ length: 5 }, (_, index) => (index < accommodationToDisplay.rating ? <img src={star} alt="Star" key={index} /> : <img src={starEmpty} alt="Empty star" key={index} />))}</div>
                </div>
              </div>

              {/* Collapsible section */}
              <div className="collapsible-part">
                <CollapsibleSection title={<h3>Description</h3>} element="p" content={accommodationToDisplay.description} />
                <CollapsibleSection
                  title={<h3>Équipements</h3>}
                  element="ul"
                  content={accommodationToDisplay.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                />
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </>
    );
  }
}

export default Accommodation;
