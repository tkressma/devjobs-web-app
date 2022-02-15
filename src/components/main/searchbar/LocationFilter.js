import styles from "./LocationFilter.module.css";
import locationIcon from "../../../assets/desktop/icon-location.svg";

export default function LocationFilter(props) {
  return (
    <div className={styles["search__location_container"]}>
      <img src={locationIcon} alt="A pin" />
      <input type="text" placeholder="Filter by location..." />
    </div>
  );
}
