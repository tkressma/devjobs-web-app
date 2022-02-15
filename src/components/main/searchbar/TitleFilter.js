import React, { useState } from "react";
import styles from "./TitleFilter.module.css";
import searchIcon from "../../../assets/desktop/icon-search.svg";
import { useMediaQuery } from "react-responsive";

export default function TitleFilter(props) {
  const isMobile = useMediaQuery({ query: "(min-width: 1100px)" });
  const [titleInput, setTitleInput] = useState("");
  const handleChange = (event) => {
    setTitleInput(event.target.value);
  };

  return (
    <div className={styles["search__title_container"]}>
      {!props.isMobile && (
        <img
          src={searchIcon}
          className={styles["search__mobile_btn_icon"]}
          alt="A magnifying glass"
        />
      )}
      <input
        type="text"
        placeholder={`Filter by title${
          isMobile ? ", companies, expertise" : ""
        }...`}
        value={titleInput}
        onChange={handleChange}
      />
    </div>
  );
}
