import React from "react";
import { Link } from "react-router-dom";

interface Props {
  isLogged: boolean;
  logger: (state: boolean) => void;
}

const LoginBlock = ({ isLogged, logger }: Props) => {
  const logOut = () => {
    localStorage.removeItem("logged");
    logger(false);
  };

  if (isLogged) {
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
          onClick={logOut}
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
};

export default LoginBlock;
