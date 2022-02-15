import React from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../../../assets/desktop/icon-search.svg";
import filterIcon from "../../../assets/mobile/icon-filter.svg";

export default function SearchBar(props) {
  return (
    <form className={styles["search__form"]}>
      <input
        type="text"
        placeholder="Filter by title..."
        className={styles["search__title"]}
      />

      <div className={styles.other} aria-modal="true" aria-labelledby="filter">
        <input type="text" placeholder="Filter by location..." />

        <label for="fulltime">
          <input type="checkbox" id="fulltime" />
          Full Time Only
        </label>
        <button type="submit">Search</button>
      </div>

      <button
        className={styles["search__filter_btn"]}
        aria-label="More Filters"
      >
        <img
          src={filterIcon}
          className={styles["search__filter_btn_icon"]}
          alt="Filter icon represented by a funnel"
        />
      </button>

      <button
        type="submit"
        className={styles["search__mobile_btn"]}
        aria-label="Search"
      >
        <img
          src={searchIcon}
          className={styles["search__mobile_btn_icon"]}
          alt="Seach icon represented by a magnifying glass"
        />
      </button>
    </form>
  );
}
