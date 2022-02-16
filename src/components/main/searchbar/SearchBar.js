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
  const [filterModalActive, setFilterModalActive] = useState(false);
  const [searchParams, setSearchParams] = useState({
    title: "",
    location: "",
    contract: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    props.onSearch(searchParams);
  };

  const handleSearchParams = (input) => {
    setSearchParams({ ...searchParams, ...input });
  };

  const handleFilterModal = (e) => {
    e.preventDefault();
    setFilterModalActive(true);
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
          <FiltersModal active={filterModalActive} />
          <MobileFiltersButton onClick={handleFilterModal} />
        </>
      )}
      {searchBtn}
    </form>
  );
}
