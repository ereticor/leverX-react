import React from "react";

import PropTypes from "prop-types";

import "./loadBtn.scss";

interface Props {
  clickHandler: () => void;
}

const LoadBtn = ({ clickHandler }: Props) => {
  return (
    <button className="btn articles__load" onClick={clickHandler}>
      Load more
    </button>
  );
};

LoadBtn.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default LoadBtn;
