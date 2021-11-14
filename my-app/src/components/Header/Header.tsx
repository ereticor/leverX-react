import ProfileBlock from "./ProfileBlock";

import "./header.scss";

const Header = () => {
  return (
    <div className="head__wrapper wrapper">
      <header className="head">
        <a href="/" className="head__link">
          <h1 className="head__logo">leverx group</h1>
          <p>employee services</p>
        </a>
        <nav className="head__nav">
          <a href="/" className="nav__link">Address Book</a>
          <a href="/" className="nav__link current">Leave Request</a>
        </nav>
        <ProfileBlock />
      </header>
    </div>
  );
};

export default Header;