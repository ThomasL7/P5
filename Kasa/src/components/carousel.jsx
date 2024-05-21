import { useState, useEffect, useRef } from "react";

function Carousel({ slides, timer, animationDuration }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideA, setSlideA] = useState(0);
  const [slideB, setSlideB] = useState(0);
  const [count, setCount] = useState(0);
  const timerSwitch = useRef(null);
  const carouselRef = useRef(null);
  const animationTimer = useRef(null);
  const [animated, setAnimated] = useState(false);

  function activeSlide(classToAnimate, previousOrNext) {
    const currentImage = carouselRef.current.querySelector(classToAnimate);
    requestAnimationFrame(() => {
      currentImage.classList.add(`${previousOrNext}-animation`);
    });
  }

  function nextSlide() {
    if (!animated) {
      setAnimated(true);
      const newCount = count + 1;
      setCount(newCount);
      const newCurrentSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(newCurrentSlide);
      const slidesList = carouselRef.current.querySelectorAll(".slide");
      slidesList.forEach((slide) => {
        slide.classList.remove("previous-forward-animation");
        slide.classList.remove("next-forward-animation");
        slide.classList.remove("previous-backward-animation");
        slide.classList.remove("next-backward-animation");
      });
      if (newCount % 2 === 0) {
        setSlideA(newCurrentSlide);
        activeSlide(".slide-a", "next-forward");
        activeSlide(".slide-b", "previous-forward");
      } else {
        setSlideB(newCurrentSlide);
        activeSlide(".slide-b", "next-forward");
        activeSlide(".slide-a", "previous-forward");
      }
      animationTimer.current = setTimeout(() => setAnimated(false), animationDuration);
    }
  }

  function prevSlide() {
    if (!animated) {
      setAnimated(true);
      const newCount = count + 1;
      setCount(newCount);
      const newCurrentSlide = (currentSlide - 1 + slides.length) % slides.length;
      setCurrentSlide(newCurrentSlide);
      const slidesList = carouselRef.current.querySelectorAll(".slide");
      slidesList.forEach((slide) => {
        slide.classList.remove("previous-forward-animation");
        slide.classList.remove("next-forward-animation");
        slide.classList.remove("previous-backward-animation");
        slide.classList.remove("next-backward-animation");
      });
      if (newCount % 2 === 0) {
        setSlideA(newCurrentSlide);
        activeSlide(".slide-a", "previous-backward");
        activeSlide(".slide-b", "next-backward");
      } else {
        setSlideB(newCurrentSlide);
        activeSlide(".slide-b", "previous-backward");
        activeSlide(".slide-a", "next-backward");
      }
      animationTimer.current = setTimeout(() => setAnimated(false), animationDuration);
    }
  }

  useEffect(() => {
    if (slides.length > 1) {
      if (!animated) {
        timerSwitch.current = setInterval(nextSlide, timer);

        return () => clearInterval(timerSwitch.current);
      }
    }
  }, [nextSlide, prevSlide]);

  return (
    <div className="carousel" ref={carouselRef}>
      <img loading="lazy" className="slide slide-a" src={slides[slideA]} alt={`Image ${slideA + 1}`} />
      <img loading="lazy" className="slide slide-b" src={slides[slideB]} alt={`Image ${slideB + 1}`} />
      {slides.length > 1 && (
        <>
          <svg onClick={prevSlide} className="previous-icon" fill="white" aria-label="Icône précédent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 80">
            <path d="M47.0399 7.42497L39.9199 0.344971L0.359863 39.945L39.9599 79.545L47.0399 72.465L14.5199 39.945L47.0399 7.42497Z" fill="white" />
          </svg>
          <svg onClick={nextSlide} className="next-icon" fill="white" aria-label="Icône suivant" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 80">
            <path d="M47.0399 7.42497L39.9199 0.344971L0.359863 39.945L39.9599 79.545L47.0399 72.465L14.5199 39.945L47.0399 7.42497Z" fill="white" />
          </svg>
          <p>
            {currentSlide + 1}/{slides.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Carousel;
