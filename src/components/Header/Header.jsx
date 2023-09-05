import React from "react";
import classess from "./Header.module.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={classess.header}>
      <div className={classess.container}>
        <div className={classess.logo}>
          <img src={Logo} alt="Kangur" width="65" />
          <h1 className={classess.title}>Kangaroo</h1>
        </div>
        <nav>
          <ul className={classess.list}>
            <li>
              <a href="#">STRONA GŁÓWNA</a>
            </li>
            <li>
              <a href="#">PREMIUM</a>
            </li>
            <li>
              <a href="#">PROJEKTY</a>
            </li>
            <li>
              <a href="https://www.mockaroo.com/" target="_blank">
                ORYGINALNA STRONA
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
