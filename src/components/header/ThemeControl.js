import React from "react";
import styles from "./ThemeControl.module.css";
import sunIcon from "../../assets/desktop/icon-sun.svg";
import moonIcon from "../../assets/desktop/icon-moon.svg";
function ThemeControl(props) {
  return (
    <div className={styles.controls}>
      <img src={sunIcon} alt="An icon of the sun (light mode)" />
      <div className={styles["toggle__btn"]}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </div>
      <img src={moonIcon} alt="An icon of the moon (dark mode)" />
    </div>
  );
}

export default ThemeControl;
