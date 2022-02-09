import React from "react";
import ThemeControl from "./ThemeControl";
import styles from "./Header.module.css";
import logo from "../../assets/desktop/logo.svg";
function Header() {
  return (
    <header className={styles.header}>
      <a href="www.frontendmentor.io">
        <img src={logo} />
      </a>
      <ThemeControl />
    </header>
  );
}

export default Header;
