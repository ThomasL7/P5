import { useState } from "react";

function CollapsibleSection({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggle}>
        {title}
        <img src={`${process.env.PUBLIC_URL}/images/${isOpen ? "arrow-down.png" : "arrow-up.png"}`} alt="Icône pour développer la section" />
      </button>
      {isOpen && content}
    </div>
  );
}

export default CollapsibleSection;
