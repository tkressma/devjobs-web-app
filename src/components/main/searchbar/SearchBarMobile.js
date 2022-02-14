import React from "react";
import filterIcon from "../../../assets/mobile/icon-filter.svg";
import searchIcon from "../../../assets/desktop/icon-search.svg";
import styles from "./SearchBar.module.css";
import TitleFilter from "./TitleFilter";
import SearchButton from "./SearchButton";
export default function SearchBarMobile() {
  return (
    <form className={styles["search__form"]}>
      <TitleFilter />
      <button>
        <img src={filterIcon} alt="Filter options" />
      </button>
      <SearchButton searchIcon={searchIcon} isMobile={true} />
    </form>
  );
}
