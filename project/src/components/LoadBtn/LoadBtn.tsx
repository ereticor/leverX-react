import React from "react";

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

export default LoadBtn;
