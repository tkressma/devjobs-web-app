import styles from "./MobileFiltersButton.module.css";
import filterIcon from "../../../assets/mobile/icon-filter.svg";

export default function MobileFiltersButton() {
  return (
    <button
      className={styles["search__filter_btn"]}
      aria-label="Open Filters Menu"
    >
      <img
        src={filterIcon}
        className={styles["search__filter_btn_icon"]}
        alt="Filter icon represented by a funnel"
      />
    </button>
  );
}
