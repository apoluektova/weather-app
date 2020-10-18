import React from "react";
import Menu from "../menu/menu.jsx";

const Header = () => {
  return (
    <header className="header">
      <p className="header__location">Ulyanovsk, Russia</p>
      <Menu />
    </header>
  );
};

export default Header;
