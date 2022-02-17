import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./SearchBar.module.css";
import Button from "../../UI/Button";
import MobileFiltersButton from "./Mobile/MobileFiltersButton";
import TitleFilter from "./Filters/TitleFilter";
import LocationFilter from "./Filters/LocationFilter";
import FulltimeFilter from "./Filters/FulltimeFilter";
import FiltersModal from "./Mobile/FiltersModal";
import searchIcon from "../../../assets/desktop/icon-search.svg";

export default function SearchBar(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

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
  const [searchFilters, setSearchFilters] = useState({
    title: "",
    location: "",
    contract: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // If the modal is open and a search occurs, then the user is searching from the modal.
    // In that case, close the modal, else, do nothing.
    if (setFilterModalActive) setFilterModalActive(false);

    // Send the searchFilters object to the Main component to filter the results
    props.onSearch(searchFilters);
  };

  // A single function passed to various components
  // to update the search paramaters upon user input
  const handleSearchParams = (input) => {
    setSearchFilters({ ...searchFilters, ...input });
  };

  // A conditional statement to determine whether or not the primary
  // search button (on the search bar) should display the search icon (mobile)
  // or text (desktop)
  let searchBtn;
  if (isMobile) {
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
      {!isMobile && (
        <>
          <LocationFilter updateSearch={handleSearchParams} />
          <FulltimeFilter updateSearch={handleSearchParams} />
        </>
      )}
      {isMobile && (
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
