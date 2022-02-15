import styles from "./TitleFilter.module.css";
import searchIcon from "../../../assets/desktop/icon-search.svg";

export default function TitleFilter(props) {
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
        placeholder="Filter by title..."
        className={styles["search__title"]}
      />
    </div>
  );
}
