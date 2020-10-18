import React from "react";

const Menu = () => {
  return (
    <React.Fragment>
      <nav className="main-menu">
        <ul className="main-menu__list">
          <li className="main-menu__item main-menu__item--active">
            <a className="main-menu__link">Today</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link">Tomorrow</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link">Week</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Menu;
