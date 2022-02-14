import React from "react";
import filterIcon from "../../../assets/mobile/icon-filter.svg";
import searchIcon from "../../../assets/desktop/icon-search.svg";
import styles from "./SearchBar.module.css";
import SearchButton from "./SearchButton";
import TitleFilter from "./TitleFilter";
export default function SearchBar() {
  return (
    <form className={styles["search__form"]}>
      <TitleFilter />
      <button>
        <img src={filterIcon} alt="Filter options" />
      </button>
      <SearchButton searchIcon={searchIcon} isMobile={false} />
    </form>
  );
}
