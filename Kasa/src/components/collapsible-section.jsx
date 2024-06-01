import { useState } from "react";

import "../styles/collapsible-section.sass";
import arrow from "../assets/svgs/arrow-collapsible.svg";

function CollapsibleSection({ title, element, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const Element = element;
  const [animationOn, setAnimationOn] = useState(false);

  // Function to display & adapt animation (close or open) after the first interaction
  function toggle() {
    setAnimationOn(true);
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapsible-section">
      <div className="title-section">
        {title}
        <img onClick={toggle} className={`arrow${isOpen ? " rotate-180-open" : " rotate-180-close"}`} src={arrow} alt="Icône pour développer la section" />
      </div>
      <Element className={animationOn ? (isOpen ? "open-collapsible-section" : "close-collapsible-section") : "init-state-collapsible-section"}>{animationOn && content}</Element>
    </div>
  );
}

export default CollapsibleSection;
