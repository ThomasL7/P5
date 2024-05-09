import { useState } from "react";

function CollapsibleSection({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapsible-section">
      <div className="title-section">
        {title}
        <img onClick={toggle} className="arrow" src={`${process.env.PUBLIC_URL}/images/${isOpen ? "arrow-down.png" : "arrow-up.png"}`} alt="Icône pour développer la section" />
      </div>
      {isOpen && content}
    </div>
  );
}

export default CollapsibleSection;
