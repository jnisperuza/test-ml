import React from "react";

import Searchbox from "./Searchbox";
import Profile from "./Profile";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__wrapper">
        <img
          className="Header__logo"
          src={process.env.PUBLIC_URL + "/img/logo.png"}
          alt="logo"
        />
        <Searchbox />
        <Profile />
      </div>
    </header>
  );
};

export default Header;
