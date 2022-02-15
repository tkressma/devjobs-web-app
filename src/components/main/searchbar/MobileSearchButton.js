import styles from "./MobileSearchButton.module.css";
import searchIcon from "../../../assets/desktop/icon-search.svg";

export default function MobileSearchButton(props) {
  return (
    <button
      type="submit"
      className={styles["search__mobile_btn"]}
      aria-label="Search"
    >
      <img
        src={searchIcon}
        className={styles["search__mobile_btn_icon"]}
        alt="Seach icon represented by a magnifying glass"
      />
    </button>
  );
}
