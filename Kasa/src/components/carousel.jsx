import { useState, useEffect, useRef } from "react";

import "../styles/carousel.sass";
import arrow from "../assets/svgs/arrow-carousel.svg";

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

  // Function Next
  function nextSlide() {
    // Active only if animation is ended
    if (!animated) {
      // Increment Count & find current slide to display
      setAnimated(true);
      const newCount = count + 1;
      setCount(newCount);
      const newCurrentSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(newCurrentSlide);
      // Create a delay (half of animation duration) to display the current slide number
      setTimeout(() => {
        setActualSlide(newCurrentSlide + 1);
      }, animationDuration * 500);
      // On pair count, A is the actual slide to display & B to hide
      if (newCount % 2 === 0) {
        setSlideA(newCurrentSlide);
        setStyleA({ transform: "translateX(0%)", animation: `next-anim ${animationDuration}s ease-in-out` });
        setStyleB({ transform: "translateX(-100%)", animation: `prev-anim ${animationDuration}s ease-in-out` });
      }
      // On impair count, B is the actual slide to display & A to hide
      else {
        setSlideB(newCurrentSlide);
        setStyleA({ transform: "translateX(-100%)", animation: `prev-anim ${animationDuration}s ease-in-out` });
        setStyleB({ transform: "translateX(0%)", animation: `next-anim ${animationDuration}s ease-in-out` });
      }
      // Timer for animation end
      animationTimer.current = setTimeout(() => setAnimated(false), animationDuration * 1000);
    }
  }

  // Function Previous
  function prevSlide() {
    // Active only if animation is ended
    if (!animated) {
      setAnimated(true);
      // Increment Count & find current slide to display
      const newCount = count + 1;
      setCount(newCount);
      const newCurrentSlide = (currentSlide - 1 + slides.length) % slides.length;
      setCurrentSlide(newCurrentSlide);
      // Create a delay (half of animation duration) to display the current slide number
      setTimeout(() => {
        setActualSlide(newCurrentSlide + 1);
      }, animationDuration * 500);
      // On pair count, A is the actual slide to display & B to hide
      if (newCount % 2 === 0) {
        setSlideA(newCurrentSlide);
        setStyleA({ transform: "translateX(0%)", animation: `prev-anim-rev ${animationDuration}s ease-in-out` });
        setStyleB({ transform: "translateX(+100%)", animation: `next-anim-rev ${animationDuration}s ease-in-out` });
      }
      // On impair count, B is the actual slide to display & A to hide
      else {
        setSlideB(newCurrentSlide);
        setStyleA({ transform: "translateX(+100%)", animation: `next-anim-rev ${animationDuration}s ease-in-out` });
        setStyleB({ transform: "translateX(0%)", animation: `prev-anim-rev ${animationDuration}s ease-in-out` });
      }
      // Timer for animation end
      animationTimer.current = setTimeout(() => setAnimated(false), animationDuration * 1000);
    }
  }

  // Automatic Next slide after a timer (only if more than one slide)
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
      {/* Interactive or informative elements (only if more than one slide)*/}
      {slides.length > 1 && (
        <>
          <img onClick={prevSlide} className="previous-icon" src={arrow} alt="Icône précédent" />
          <img onClick={nextSlide} className="next-icon" src={arrow} alt="Icône suivant" />
          <p>
            {actualSlide}/{slides.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Carousel;
