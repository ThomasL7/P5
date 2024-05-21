import { useState } from "react";

function CollapsibleSection({ title, element, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const Element = element;
  const [animationOn, setAnimationOn] = useState(false);

  function toggle() {
    setAnimationOn(true);
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapsible-section">
      <div className="title-section">
        {title}
        <svg onClick={toggle} className={`arrow${isOpen ? " rotate-180-open" : " rotate-180-close"}`} fill="white" aria-label="Icône pour développer la section" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 15">
          <path d="M10.7897 1.43154C11.4591 0.762119 12.5462 0.762119 13.2157 1.43154L23.4979 11.7138C24.1674 12.3832 24.1674 13.4704 23.4979 14.1398C22.8285 14.8092 21.7414 14.8092 21.072 14.1398L12 5.06782L2.92804 14.1344C2.25862 14.8039 1.17148 14.8039 0.502064 14.1344C-0.167355 13.465 -0.167355 12.3779 0.502064 11.7085L10.7843 1.42618L10.7897 1.43154Z" />
        </svg>
      </div>
      <Element className={animationOn ? (isOpen ? "open-collapsible-section" : "close-collapsible-section") : "init-state-collapsible-section"}>{animationOn && content}</Element>
    </div>
  );
}

export default CollapsibleSection;
