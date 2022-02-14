import React from "react";
import styles from "./SearchButton.module.css";

export default function SearchButton(props) {
  return (
    <button className={styles.search}>
      {props.isMobile ? (
        <img
          src={props.searchIcon}
          alt="Submit search"
          className={styles["search__icon"]}
        />
      ) : (
        "Search"
      )}
    </button>
  );
}
