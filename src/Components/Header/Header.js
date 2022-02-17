import React from "react";
import ThemeControl from "./ThemeControl";
import styles from "./Header.module.css";
import logo from "../../assets/desktop/logo.svg";
import Container from "../UI/Container";
function Header(props) {
  return (
    <header className={styles.header}>
      <Container className={styles["header__container"]}>
        <a href="/">
          <img
            src={logo}
            alt="DevJobs logo"
            aria-label="Frontendmentor"
            className={styles.logo}
          />
        </a>
        <ThemeControl switchTheme={props.switchTheme} theme={props.theme} />
      </Container>
    </header>
  );
}

export default Header;
