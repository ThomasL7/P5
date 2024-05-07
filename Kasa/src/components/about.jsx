import { useState } from "react";

function About() {
  const [bool1, setBool1] = useState(true);
  const [content1, setContent1] = useState(null);
  const [bool2, setBool2] = useState(true);
  const [content2, setContent2] = useState(null);
  const [bool3, setBool3] = useState(true);
  const [content3, setContent3] = useState(null);
  const [bool4, setBool4] = useState(true);
  const [content4, setContent4] = useState(null);

  function function1() {
    bool1 ? setContent1(<p></p>) : setContent1(null);
    setBool1(!bool1);
  }
  function function2() {
    bool2 ? setContent2(<p></p>) : setContent2(null);
    setBool2(!bool2);
  }
  function function3() {
    bool3 ? setContent3(<p></p>) : setContent3(null);
    setBool3(!bool3);
  }
  function function4() {
    bool4 ? setContent4(<p></p>) : setContent4(null);
    setBool4(!bool4);
  }

  return (
    <section className="about">
      <img src={`${process.env.PUBLIC_URL}/images/image-about.png`} alt="Photo d'un paysage" />
      {/* <img src={`${process.env.PUBLIC_URL}/images/image-about.png`} srcSet={`${process.env.PUBLIC_URL}/images/image-about_m.png 375w, ${process.env.PUBLIC_URL}/images/image-about.png 376w`} sizes="(max-width: 375px) 375px,(max-width: 376px) 376px" alt="Photo d'un paysage" /> */}
      <button onClick={function1}>
        Fiabilité <img src={`${process.env.PUBLIC_URL}/images/${bool1 ? "arrow-up.png" : "arrow-down.png"}`} alt="Icône pour développer la section" />
      </button>
      {content1}
      <button onClick={function2}>
        Respect
        <img src={`${process.env.PUBLIC_URL}/images/${bool2 ? "arrow-up.png" : "arrow-down.png"}`} alt="Icône pour développer la section" />
      </button>
      {content2}
      <button onClick={function3}>
        Service
        <img src={`${process.env.PUBLIC_URL}/images/${bool3 ? "arrow-up.png" : "arrow-down.png"}`} alt="Icône pour développer la section" />
      </button>
      {content3}
      <button onClick={function4}>
        Sécurité
        <img src={`${process.env.PUBLIC_URL}/images/${bool4 ? "arrow-up.png" : "arrow-down.png"}`} alt="Icône pour développer la section" />
      </button>
      {content4}
    </section>
  );
}

export default About;
