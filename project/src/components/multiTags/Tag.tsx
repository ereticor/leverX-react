import React from "react";

import PropTypes from "prop-types";

interface Props {
  text: string;
  clickHandler?: (tag: string) => void;
  isChecked: boolean;
}

const Tag = ({ text, isChecked, clickHandler }: Props) => {
  return (
    <label className={`checkbar__label ${isChecked ? "checked" : ""}`}>
      <input
        className="checkbar__input"
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          if (clickHandler) {
            clickHandler(text);
          }
        }}
      />
      {text}
    </label>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  isChecked: PropTypes.bool.isRequired,
};

export default Tag;
