import React from "react";
import imgPamolsa from "../../assets/img/pamolsa_color.png";
import "../../styles/header.css";

const HeaderGlobal = () => {
  return (
    <header>
      <nav class="navbar navbar-light colorBar">
        <a className="navbarLogo" href="#">
          <img src={imgPamolsa} alt="Pamolsa" />
        </a>
      </nav>
    </header>
  );
};

export default HeaderGlobal;
