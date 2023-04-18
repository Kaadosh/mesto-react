import React from "react";
import Logo from "../img/logo/logo.svg";

function Header() {
  return (
    <header class="header">
      <img src={Logo} class="header__logo" alt="логотип mesto" />
    </header>
  );
}

export default Header;
