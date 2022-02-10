import React from "react";
import ThemeControl from "./ThemeControl";
import styles from "./Header.module.css";
import logo from "../../assets/desktop/logo.svg";
import Container from "../UI/Container";
function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles["header__container"]}>
        <a href="www.frontendmentor.io">
          <img src={logo} />
        </a>
        <ThemeControl />
      </Container>
    </header>
  );
}

export default Header;
