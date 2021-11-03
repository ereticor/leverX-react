import React from "react";
import { checkLogged } from "../../../services/login";
import { Link, RouteComponentProps } from "react-router-dom";

// import { sliderData } from "../../constants/slider";

// interface State {
//   index: number;
//   interacted: boolean;
//   transition: boolean;
// }

export default class LoginBlock extends React.Component {
  // private slider: React.RefObject<HTMLUListElement>
  constructor(props: RouteComponentProps<{}>) {
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
    if (checkLogged()) {
      <div className="head__login">
        <Link to="/post" className="head__btn login__create link_btn">Create a Post</Link>
        <img
          className="login__user"
          src="${userImg}"
          title="click to log out"
        />
      </div>;
    } else {
      return <Link to="/login" className="head__sign head__btn link_btn">sign in</Link>;
    }
  }
}

{
  /* <div className="head__login">
  <button className="head__btn login__create">Create a Post</button>
  <img className="login__user" src="${userImg}" title="click to log out"/>
</div> */
}
