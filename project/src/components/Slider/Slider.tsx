import React, { useEffect, useMemo, useState } from "react";

import { sliderData } from "../../constants/slider";

import SliderItem from "./SliderItem";

import "./slider.scss";

const Slider = () => {
  const [index, setIndex] = useState(1);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [transition, setTransition] = useState(false);

  function transformSlide(dir: number) {
    if (timer) {
      clearTimeout(timer);
    }

    const interactedTimer = setTimeout(() => {
      transformSlide(1);
    }, 3000);

    setTimer(interactedTimer);

    if (!transition) {
      if (dir == 1) {
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setIndex((prevIndex) => prevIndex - 1);
      }
    }

    setTransition(true);
  }

  function checkSlide() {
    if (index == 0) {
      setIndex(2);
    }

    if (index == sliderData.length - 1) {
      setIndex(1);
    }

    setTransition(false);
  }

  useEffect(() => {
    let mounted = true;
    if (!mounted && timer) {
      clearTimeout(timer);
    } else {
      transformSlide(1);
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <div className="slider">
        <ul
          className={`slider__list ${
            transition ? "slider__list_transition" : ""
          }`}
          style={{ transform: `translateX(-${index}00%)` }}
          onTransitionEnd={checkSlide}
        >
          {sliderData.map((el, index) => (
            <SliderItem key={index} {...el} />
          ))}
        </ul>
      </div>
      <button
        className="slider__left slider__btn"
        onClick={() => transformSlide(-1)}
      >
        &lt;
      </button>
      <button
        className="slider__right slider__btn"
        onClick={() => transformSlide(1)}
      >
        &gt;
      </button>
      <div className="slider__pagination">
        <label className="pagination__label">
          <input
            type="radio"
            name="sliderPagination"
            checked={index === 1}
            onChange={() => transformSlide(-1)}
          />
          <span></span>
        </label>
        <label className="pagination__label">
          <input
            type="radio"
            name="sliderPagination"
            checked={index === 2}
            onChange={() => transformSlide(1)}
          />
          <span></span>
        </label>
      </div>
    </>
  );
};

export default Slider;
