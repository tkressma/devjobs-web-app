import React from "react";
import styles from "./TitleFilter.module.css";
export default function TitleFilter(props) {
  return (
    <input
      type="search"
      className={styles["search__input"]}
      placeholder="Filter by title..."
    />
  );
}
