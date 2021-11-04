import React from "react";
import { Link } from "react-router-dom";

interface Props {
  isLogged: boolean;
  logger: (state: boolean) => void;
}

export default class LoginBlock extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  logOut = () => {
    localStorage.removeItem("logged");
    this.props.logger(false);
  };

  render() {
    if (this.props.isLogged) {
      const userImg = JSON.parse(localStorage.getItem("logged") || "").picture;
      return (
        <div className="head__login">
          <Link to="/post" className="head__btn login__create link_btn">
            Create a Post
          </Link>
          <img
            className="login__user"
            src={userImg}
            title="click to log out"
            onClick={this.logOut}
          />
        </div>
      );
    } else {
      return (
        <Link to="/login" className="head__sign head__btn link_btn">
          sign in
        </Link>
      );
    }
  }
}
