import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import FiltersModal from "./FiltersModal";
import TitleFilter from "./TitleFilter";
import MobileFiltersButton from "./MobileFiltersButton";
import searchIcon from "../../../assets/desktop/icon-search.svg";

import Button from "../../UI/Button";
import LocationFilter from "./LocationFilter";
import FulltimeFilter from "./FulltimeFilter";

export default function SearchBar(props) {
  // A conditional statement to determine whether or not the primary
  // search button (on the search bar) should display the search icon (mobile)
  // or text (desktop).be
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
    searchBtn = (
      <Button value="Search" type="submit" className={styles["search__button"]}>
        Search
      </Button>
    );
  }

  const [filterModalActive, setFilterModalActive] = useState(false);
  const [fulltime, setFulltime] = useState(false);
  const handleFilterModal = (event) => {
    event.preventDefault();
    setFilterModalActive(true);
  };

  const handleFullTime = () => {
    setFulltime(!fulltime);
    console.log("test");
  };

  return (
    <form className={styles["search__form"]}>
      <TitleFilter />
      {!props.isMobile && (
        <>
          <LocationFilter />
          <FulltimeFilter onClick={handleFullTime} />
        </>
      )}
      {props.isMobile && (
        <>
          <FiltersModal active={filterModalActive} />
          <MobileFiltersButton onClick={handleFilterModal} />
        </>
      )}
      {searchBtn}
    </form>
  );
}
