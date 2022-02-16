import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import Button from "../../UI/Button";
import MobileFiltersButton from "./MobileFiltersButton";
import TitleFilter from "./TitleFilter";
import LocationFilter from "./LocationFilter";
import FulltimeFilter from "./FulltimeFilter";
import FiltersModal from "./FiltersModal";
import searchIcon from "../../../assets/desktop/icon-search.svg";

export default function SearchBar(props) {
  // This is for the mobile filter modal. If true, display, else hide.
  const [filterModalActive, setFilterModalActive] = useState(false);
  const handleFilterModal = (e) => {
    e.preventDefault();
    setFilterModalActive(true);
  };

  const handleModalExit = () => {
    setFilterModalActive(false);
  };

  // This object holds the search values inputted by the user
  const [searchParams, setSearchParams] = useState({
    title: "",
    location: "",
    contract: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (setFilterModalActive) setFilterModalActive(false);
    props.onSearch(searchParams);
  };

  // A single function passed to various components
  // to update the search paramaters upon user input
  const handleSearchParams = (input) => {
    setSearchParams({ ...searchParams, ...input });
  };

  // A conditional statement to determine whether or not the primary
  // search button (on the search bar) should display the search icon (mobile)
  // or text (desktop)
  let searchBtn;
  if (props.isMobile) {
    searchBtn = (
      <Button aria-label="Search" type="submit" onClick={handleSearch}>
        <img
          src={searchIcon}
          className={styles["search__mobile_btn_icon"]}
          alt="Seach icon represented by a magnifying glass"
        />
      </Button>
    );
  } else {
    searchBtn = (
      <Button
        value="Search"
        type="submit"
        onClick={handleSearch}
        className={styles["search__button"]}
      >
        Search
      </Button>
    );
  }

  return (
    <form className={styles["search__form"]}>
      <TitleFilter updateSearch={handleSearchParams} />
      {!props.isMobile && (
        <>
          <LocationFilter updateSearch={handleSearchParams} />
          <FulltimeFilter />
        </>
      )}
      {props.isMobile && (
        <>
          <FiltersModal
            active={filterModalActive}
            onClick={handleSearch}
            closeModal={handleModalExit}
            updateSearch={handleSearchParams}
          />
          <MobileFiltersButton onClick={handleFilterModal} />
        </>
      )}
      {searchBtn}
    </form>
  );
}
