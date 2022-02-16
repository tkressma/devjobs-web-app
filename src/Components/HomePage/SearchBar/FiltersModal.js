import styles from "./FiltersModal.module.css";
import FulltimeFilter from "./FulltimeFilter";
import LocationFilter from "./LocationFilter";
import Button from "../../UI/Button";

export default function FiltersModal(props) {
  return (
    <>
      {/* Blurred background to put focus on modal. */}
      <div
        className={`${styles["modal__background"]} ${
          props.active && styles["modal__active"]
        }`}
        onClick={props.closeModal}
      ></div>

      <div
        className={`${styles.modal} ${props.active && styles.active}`}
        aria-modal="true"
      >
        <LocationFilter updateSearch={props.updateSearch} />
        <FulltimeFilter />
        <Button
          type="submit"
          className={styles["search__button"]}
          onClick={(e) => props.onClick(e)}
        >
          Search
        </Button>
      </div>
    </>
  );
}
