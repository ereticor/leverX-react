import React from "react";
import { Link } from "react-router-dom";
import { Action, ActionFunctionAny } from "redux-actions";

interface Props {
  isLogged: boolean;
  userImage?: string;
  LogOut: ActionFunctionAny<Action<any>>;
}

const LoginBlock = ({ isLogged, LogOut, userImage }: Props) => {
  // const logOut = () => {
  //   localStorage.removeItem("logged");
  //   logger(false);
  // };

  if (isLogged) {
    // const userImg = JSON.parse(localStorage.getItem("logged") || "").picture;
    return (
      <div className="head__login">
        <Link to="/post" className="head__btn login__create link_btn">
          Create a Post
        </Link>
        <img
          className="login__user"
          src={userImage || ""}
          title="click to log out"
          onClick={LogOut}
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
