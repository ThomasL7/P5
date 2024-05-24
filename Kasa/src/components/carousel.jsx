import { useState, useEffect, useRef } from "react";

function Carousel({ slides, timer, animationDuration }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideA, setSlideA] = useState(0);
  const [slideB, setSlideB] = useState(0);
  const [count, setCount] = useState(0);
  const timerSwitch = useRef(null);
  const animationTimer = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [styleA, setStyleA] = useState({});
  const [styleB, setStyleB] = useState({});
  const [actualSlide, setActualSlide] = useState(1);

  function nextSlide() {
    if (!animated) {
      setAnimated(true);
      const newCount = count + 1;
      setCount(newCount);
      const newCurrentSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(newCurrentSlide);
      setTimeout(() => {
        setActualSlide(newCurrentSlide + 1);
      }, animationDuration * 500);
      if (newCount % 2 === 0) {
        setSlideA(newCurrentSlide);
        setStyleA({ transform: "translateX(0%)", animation: `next-anim ${animationDuration}s ease-in-out` });
        setStyleB({ transform: "translateX(-100%)", animation: `prev-anim ${animationDuration}s ease-in-out` });
      } else {
        setSlideB(newCurrentSlide);
        setStyleA({ transform: "translateX(-100%)", animation: `prev-anim ${animationDuration}s ease-in-out` });
        setStyleB({ transform: "translateX(0%)", animation: `next-anim ${animationDuration}s ease-in-out` });
      }
      animationTimer.current = setTimeout(() => setAnimated(false), animationDuration * 1000);
    }
  }

  function prevSlide() {
    if (!animated) {
      setAnimated(true);
      const newCount = count + 1;
      setCount(newCount);
      const newCurrentSlide = (currentSlide - 1 + slides.length) % slides.length;
      setCurrentSlide(newCurrentSlide);
      setTimeout(() => {
        setActualSlide(newCurrentSlide + 1);
      }, animationDuration * 500);
      if (newCount % 2 === 0) {
        setSlideA(newCurrentSlide);
        setStyleA({ transform: "translateX(0%)", animation: `prev-anim-rev ${animationDuration}s ease-in-out` });
        setStyleB({ transform: "translateX(+100%)", animation: `next-anim-rev ${animationDuration}s ease-in-out` });
      } else {
        setSlideB(newCurrentSlide);
        setStyleA({ transform: "translateX(+100%)", animation: `next-anim-rev ${animationDuration}s ease-in-out` });
        setStyleB({ transform: "translateX(0%)", animation: `prev-anim-rev ${animationDuration}s ease-in-out` });
      }
      animationTimer.current = setTimeout(() => setAnimated(false), animationDuration * 1000);
    }
  }

  useEffect(() => {
    if (slides.length > 1 && !animated) {
      timerSwitch.current = setInterval(nextSlide, timer * 1000);
      return () => clearInterval(timerSwitch.current);
    }
  }, [nextSlide, prevSlide]);

  return (
    <div className="carousel">
      <img loading="lazy" style={styleA} className="slide slide-a" src={slides[slideA]} alt={`Image ${slideA + 1}`} />
      <img loading="lazy" style={styleB} className="slide slide-b" src={slides[slideB]} alt={`Image ${slideB + 1}`} />
      {slides.length > 1 && (
        <>
          <svg onClick={prevSlide} className="previous-icon" fill="white" aria-label="Icône précédent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 80">
            <path d="M47.0399 7.42497L39.9199 0.344971L0.359863 39.945L39.9599 79.545L47.0399 72.465L14.5199 39.945L47.0399 7.42497Z" fill="white" />
          </svg>
          <svg onClick={nextSlide} className="next-icon" fill="white" aria-label="Icône suivant" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 80">
            <path d="M47.0399 7.42497L39.9199 0.344971L0.359863 39.945L39.9599 79.545L47.0399 72.465L14.5199 39.945L47.0399 7.42497Z" fill="white" />
          </svg>
          <p>
            {actualSlide}/{slides.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Carousel;
