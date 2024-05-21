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
    const starSVG = <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" />;
    const resultRegex = accommodationToDisplay.host.name.match(/^(.*)\s+(\w+)$/);
    const firstName = resultRegex[1];
    const lastName = resultRegex[2];

    return (
      <section className="accommodation">
        <Carousel slides={accommodationToDisplay.pictures} timer={4000} animationDuration={600} />
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
              <p>
                {firstName}
                <br />
                {lastName}
              </p>
              <img loading="lazy" src={accommodationToDisplay.host.picture} alt="Photo profile" />
            </div>
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) =>
                index < accommodationToDisplay.rating ? (
                  <svg fill="#FF6060" aria-label="Star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" key={index}>
                    {starSVG}
                  </svg>
                ) : (
                  <svg fill="#E3E3E3" aria-label="Empty star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" key={index}>
                    {starSVG}
                  </svg>
                )
              )}
            </div>
          </div>
        </div>
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
    );
  }
}

export default Accommodation;
