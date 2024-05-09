import { useState, useEffect, useRef } from "react";

function Carousel({ slides, timer }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSwitch = useRef(null);

  function popAnimation() {
    const currentImage = document.querySelector(".slide");
    currentImage.classList.remove("fade-in");
    setTimeout(() => {
      currentImage.classList.add("fade-in");
    }, 4);
  }

  function nextSlide() {
    clearInterval(autoSwitch.current);
    setCurrentSlide((currentSlide + 1) % slides.length);
    popAnimation("");
  }

  function prevSlide() {
    clearInterval(autoSwitch.current);
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    popAnimation("");
  }

  useEffect(() => {
    if (slides.length > 1) {
      autoSwitch.current = setInterval(nextSlide, timer);
    }
    return () => clearInterval(autoSwitch.current);
  }, [nextSlide]);

  return (
    <div className="carousel">
      <img className="slide fade-in" src={slides[currentSlide]} alt={`Image${currentSlide + 1}`} />
      {slides.length > 1 && (
        <>
          <img onClick={prevSlide} className="previous-icon" src={`${process.env.PUBLIC_URL}/images/arrow-left.png`} alt="Icône précédent" />
          <img onClick={nextSlide} className="next-icon" src={`${process.env.PUBLIC_URL}/images/arrow-right.png`} alt="Icône suivant" />
          <p>
            {currentSlide + 1}/{slides.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Carousel;
