import "../styles/about.sass";

import about from "../data/about.json";
import ScrollToTop from "../components/scroll-to-top.jsx";
import Header from "../components/header.jsx";
import Banner from "../components/banner";
import CollapsibleSection from "../components/collapsible-section";
import Footer from "../components/footer.jsx";

function About() {
  return (
    <>
      <ScrollToTop />
      <div className="main-container">
        <Header />
        <main>
          <section className="about">
            <Banner title={undefined} src={require(`../assets/images/image-about.jpg`)} alt="Photo d'un paysage" />
            {about.map((aboutElement, index) => (
              <CollapsibleSection title={<h2>{aboutElement.title}</h2>} element="p" content={aboutElement.content} key={index} />
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default About;
