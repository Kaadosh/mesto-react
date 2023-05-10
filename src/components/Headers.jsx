import React from "react";
import logo from "../img/logo/logo.svg";

function Header() {
  return (
    <div className="header">
      <div src={logo} className="header__logo" alt="логотип mesto" />
    </div>
  );
}

export default Header;
