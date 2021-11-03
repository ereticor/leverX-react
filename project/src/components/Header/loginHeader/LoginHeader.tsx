import React from "react";

// import { sliderData } from "../../constants/slider";

interface State {
  index: number;
  interacted: boolean;
  transition: boolean;
}

export default class LoginHeader extends React.Component<{}, State> {
  // private slider: React.RefObject<HTMLUListElement>
  constructor(props: {}) {
    super(props);

    // this.state = { index: 1, interacted: false, transition: false };

    // this.slider = React.createRef()

    // this.transformSlide = this.transformSlide.bind(this)
    // this.checkSlide = this.checkSlide.bind(this)
    // this.autoSlide = this.autoSlide.bind(this)
    //! name this loginBlock
  }

  componentDidMount() {
    // this.autoSlide()
  }

  render() {
    return (
      <button className="head__sign head__btn">sign in</button>
    );
  }
}

// <div className="head__login">
//   <button className="head__btn login__create">Create a Post</button>
//   <img className="login__user" src="${userImg}" title="click to log out"/>
// </div>