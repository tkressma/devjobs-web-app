import { Link } from "react-router-dom";
import React from "react";
import ThemeControl from "./ThemeControl";
import styles from "./Header.module.css";
import logo from "../../assets/desktop/logo.svg";
import Container from "../UI/Container";
function Header(props) {
  return (
    <header className={styles.header}>
      <Container className={styles["header__container"]}>
        <h1>
          <Link to="/">
            <img
              src={logo}
              alt="DevJobs logo"
              aria-label="Frontendmentor"
              className={styles.logo}
            />
          </Link>
        </h1>
        <ThemeControl switchTheme={props.switchTheme} theme={props.theme} />
      </Container>
    </header>
  );
}

export default Header;
