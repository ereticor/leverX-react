import React from "react";

import "./loadBtn.scss";

interface Props {
  clickHandler: () => void;
}

export default class LoadBtn extends React.Component<Props> {
  render() {
    return (
      <button className="btn articles__load" onClick={this.props.clickHandler}>
        Load more
      </button>
    );
  }
}
