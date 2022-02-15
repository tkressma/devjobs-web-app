import styles from "./FiltersModal.module.css";
import FulltimeFilter from "./FulltimeFilter";
import LocationFilter from "./LocationFilter";
import Button from "../../UI/Button";
export default function FiltersModal(props) {
  return (
    <div className={styles.modal} aria-modal="true" aria-labelledby="filter">
      <LocationFilter />
      <FulltimeFilter />
      <Button type="submit" className={styles["search__button"]}>
        Search
      </Button>
    </div>
  );
}
