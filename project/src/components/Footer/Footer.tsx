import React from "react";

import "./footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="foot__wrapper wrapper">
        <footer className="foot">
          <p className="foot__credits">
            2021 © LeverX, Int. All Rights Reserved.
          </p>
          <nav className="foot__nav">
            <ul className="foot__nav__list">
              <li className="foot__nav__item">
                <a
                  href="https://www.facebook.com/leverxgroup.cis"
                  target="_blank"
                  className="foot__nav__link"
                ></a>
              </li>
              <li className="foot__nav__item">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="foot__nav__link"
                ></a>
              </li>
              <li className="foot__nav__item">
                <a
                  href="https://web.telegram.org/"
                  target="_blank"
                  className="foot__nav__link"
                ></a>
              </li>
            </ul>
            <a
              href="about:blank"
              target="_blank"
              className="foot__nav__support"
            >
              Support
            </a>
          </nav>
        </footer>
      </div>
    );
  }
}
