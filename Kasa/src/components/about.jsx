import CollapsibleSection from "./collapsible-section";

function About() {
  return (
    <section className="about">
      <img src={`${process.env.PUBLIC_URL}/images/image-about.png`} alt="Photo d'un paysage" />
      <CollapsibleSection title="Fiabilité" />
      <CollapsibleSection title="Respect" />
      <CollapsibleSection title="Service" />
      <CollapsibleSection title="Sécurité" />
    </section>
  );
}

export default About;
