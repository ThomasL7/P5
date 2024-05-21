import CollapsibleSection from "./collapsible-section";
import Banner from "./banner";

function About() {
  return (
    <section className="about">
      <Banner title={undefined} src={`${process.env.PUBLIC_URL}/images/image-about.jpg`} alt="Photo d'un paysage" />
      <CollapsibleSection title={<h2>Fiabilité</h2>} element="p" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
      <CollapsibleSection title={<h2>Respect</h2>} element="p" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <CollapsibleSection title={<h2>Service</h2>} element="p" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <CollapsibleSection title={<h2>Sécurité</h2>} element="p" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
    </section>
  );
}

export default About;
