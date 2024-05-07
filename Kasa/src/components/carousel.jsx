import { useState } from "react";

function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  //   function nextSlide() {
  //     if (currentSlide === slides.length - 1) {
  //       setCurrentSlide(0);
  //     } else {
  //       setCurrentSlide(currentSlide + 1);
  //     }
  //   }

  //   function prevSlide() {
  //     if (currentSlide === 0) {
  //       setCurrentSlide(slides.length - 1);
  //     } else {
  //       setCurrentSlide(currentSlide - 1);
  //     }
  //   }

  return (
    <div className="carousel">
      <img className="slide" src={slides[currentSlide]} alt={`Image${currentSlide + 1}`} />
      <img onClick={prevSlide} className="previous-icon" src={`${process.env.PUBLIC_URL}/images/arrow-left.png`} alt="Icône précédent" />
      <img onClick={nextSlide} className="next-icon" src={`${process.env.PUBLIC_URL}/images/arrow-right.png`} alt="Icône suivant" />
      <p>
        {currentSlide + 1}/{slides.length}
      </p>
    </div>
  );
}

export default Carousel;
