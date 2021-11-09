import React from "react";

import PropTypes from "prop-types";

interface Props {
  className?: string;
  image: string;
  title: string;
  subtitle: string;
  text: React.ReactElement;
}

const SliderItem = ({ title, subtitle, text, image, className }: Props) => {
  return (
    <li className={`slider__item ${className || ""}`}>
      <div className="slider__item__info">
        <h4 className="slider__item__head">{title}</h4>
        <h2 className="slider__item__head">{subtitle}</h2>
        <p className="slider__item__text">{text}</p>
        <button className="slider__item__btn btn">start now</button>
      </div>
      <img className="slider__item__img" src={image} />
    </li>
  );
};

SliderItem.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.element,
};

export default SliderItem;
