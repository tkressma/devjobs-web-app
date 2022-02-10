import React from "react";
import styles from "./ThemeControl.module.css";
import sunIcon from "../../assets/desktop/icon-sun.svg";
import moonIcon from "../../assets/desktop/icon-moon.svg";
function ThemeControl(props) {
  return (
    <div className={styles.controls}>
      <img
        src={sunIcon}
        className={styles.sun}
        alt="An icon of the sun (light mode)"
      />

      <input className={styles.toggle} type="checkbox" />

      <img
        src={moonIcon}
        className={styles.moon}
        alt="An icon of the moon (dark mode)"
      />
    </div>
  );
}

export default ThemeControl;
