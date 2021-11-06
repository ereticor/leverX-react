import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import LoginBlock from "./LoginBlock";

const Header = () => {
  return (
    <div className="head__wrapper wrapper">
      <header className="head">
        <Link to="/" className="head__link">
          <h1 className="head__logo">leverX</h1>
        </Link>
        <LoginBlock />
      </header>
    </div>
  );
};

export default Header;
