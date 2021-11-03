import React from 'react'

import './header.scss'

export default class Header extends React.Component {
  render() {
    return (
      <div className="head__wrapper wrapper">
        <header className="head">
          <a href="/" className="head__link">
            <h1 className="head__logo">leverX</h1>
          </a>
          <button className="head__sign head__btn">sign in</button>
        </header>
      </div>
    )
  }
}