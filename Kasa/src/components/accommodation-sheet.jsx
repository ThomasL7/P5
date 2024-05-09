import { useParams, Navigate } from "react-router-dom";

import accommodations from "../backend/logements.json";
import CollapsibleSection from "./collapsible-section";
import Carousel from "./carousel";

function Accommodation() {
  const { id } = useParams();
  const accommodationToDisplay = accommodations.find((accommodation) => accommodation.id === id);

  if (!accommodationToDisplay) {
    return <Navigate to="error" />;
  } else {
    return (
      <section className="accommodation">
        <Carousel slides={accommodationToDisplay.pictures} timer={10000} />
        <div className="section-spreader">
          <div className="left-section">
            <h2>{accommodationToDisplay.title}</h2>
            <p>{accommodationToDisplay.location}</p>
            <ul>
              {accommodationToDisplay.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className="right-section">
            <div className="author-section">
              <p>{accommodationToDisplay.host.name}</p>
              <img src={accommodationToDisplay.host.picture} alt="Photo profile" />
            </div>
            <div className="rating">{Array.from({ length: 5 }, (_, index) => (index < accommodationToDisplay.rating ? <img key={index} src={`${process.env.PUBLIC_URL}/images/star.png`} alt="Étoile pleine" /> : <img key={index} src={`${process.env.PUBLIC_URL}/images/star-empty.png`} alt="Étoile vide" />))}</div>
          </div>
        </div>
        <div class="collapsible-part">
          <CollapsibleSection title={<h3>Description</h3>} content={<p>{accommodationToDisplay.description}</p>} />
          <CollapsibleSection
            title={<h3>Équipements</h3>}
            content={
              <ul>
                {accommodationToDisplay.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    );
  }
}

export default Accommodation;
