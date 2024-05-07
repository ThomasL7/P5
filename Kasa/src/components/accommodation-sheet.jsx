import { useState } from "react";
import { useParams } from "react-router-dom";

import accommodations from "../backend/logements.json";

function Accommodation() {
  const { id } = useParams();
  const accommodationToDisplay = accommodations.find((accommodation) => accommodation.id === id);

  const [bool1, setBool1] = useState(true);
  const [content1, setContent1] = useState(null);
  const [bool2, setBool2] = useState(true);
  const [content2, setContent2] = useState(null);

  function function1() {
    bool1 ? setContent1(<p>{accommodationToDisplay.description}</p>) : setContent1(null);
    setBool1(!bool1);
  }
  function function2() {
    bool2
      ? setContent2(
          <ul>
            {accommodationToDisplay.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )
      : setContent2(null);
    setBool2(!bool2);
  }

  return (
    <section className="accommodation">
      <img src={`${process.env.PUBLIC_URL}/images/accommodation-1.png`} alt={accommodationToDisplay.title} />

      <div className="left-section">
        <h2>{accommodationToDisplay.title}</h2>
        <p>{accommodationToDisplay.location}</p>
        <ul>
          {accommodationToDisplay.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <button onClick={function1}>
          Description <img src={`${process.env.PUBLIC_URL}/images/${bool1 ? "arrow-up.png" : "arrow-down.png"}`} alt="Icône pour développer la section" />
        </button>
        {content1}
      </div>

      <div className="right-section">
        <div className="author-section">
          <p>{accommodationToDisplay.host.name}</p>
          <img src={accommodationToDisplay.host.picture} alt="Photo profile" />
        </div>
        <div className="rating">{Array.from({ length: 5 }, (_, index) => (index < accommodationToDisplay.rating ? <img key={index} src={`${process.env.PUBLIC_URL}/images/star.png`} alt="Étoile pleine" /> : <img key={index} src={`${process.env.PUBLIC_URL}/images/star-empty.png`} alt="Étoile vide" />))}</div>
        <button onClick={function2}>
          Équipements <img src={`${process.env.PUBLIC_URL}/images/${bool2 ? "arrow-up.png" : "arrow-down.png"}`} alt="Icône pour développer la section" />
        </button>
        {content2}
      </div>
    </section>
  );
}

export default Accommodation;
