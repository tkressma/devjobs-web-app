import React from "react";
import styles from "./LocationFilter.module.css";
import locationIcon from "../../../../assets/desktop/icon-location.svg";

export default function LocationFilter(props) {
  const handleChange = (e) => {
    props.updateSearch({ location: e.target.value });
  };

  return (
    <div className={styles["search__location_container"]}>
      <img src={locationIcon} alt="A pin" className={styles.pin} />
      <input
        type="text"
        placeholder="Filter by location..."
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
