import React from "react";
import styles from "./SearchBar.module.css";
import FiltersModal from "./FiltersModal";
import TitleFilter from "./TitleFilter";
import MobileFiltersButton from "./MobileFiltersButton";
import MobileSearchButton from "./MobileSearchButton";
import searchIcon from "../../../assets/desktop/icon-search.svg";

import Button from "../../UI/Button";
import LocationFilter from "./LocationFilter";
import FulltimeFilter from "./FulltimeFilter";

export default function SearchBar(props) {
  let searchBtn;
  if (props.isMobile) {
    searchBtn = (
      <Button aria-label="Search" type="submit">
        <img
          src={searchIcon}
          className={styles["search__mobile_btn_icon"]}
          alt="Seach icon represented by a magnifying glass"
        />
      </Button>
    );
  } else {
    searchBtn = <Button>Search</Button>;
  }

  return (
    <form className={styles["search__form"]}>
      <TitleFilter isMobile={props.isMobile} />
      {!props.isMobile && <LocationFilter />}
      {!props.isMobile && <FulltimeFilter />}
      {props.isMobile && <FiltersModal />}
      {props.isMobile && <MobileFiltersButton />}

      {searchBtn}
    </form>
  );
}
