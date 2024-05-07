import { useState } from "react";

function CollapsibleSection({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {title}
      <img onClick={toggle} src={`${process.env.PUBLIC_URL}/images/${isOpen ? "arrow-down.png" : "arrow-up.png"}`} alt="Icône pour développer la section" />
      {isOpen && content}
    </div>
  );
}

export default CollapsibleSection;
