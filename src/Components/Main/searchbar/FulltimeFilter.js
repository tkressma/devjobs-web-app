import styles from "./FulltimeFilter.module.css";
import { useMediaQuery } from "react-responsive";

export default function FulltimeFilter(props) {
  const isTablet = useMediaQuery({
    query: "(min-width: 767px) and (max-width: 1000px)",
  });

  return (
    <label
      htmlFor="fulltime"
      className={styles["search__fulltime"]}
      onClick={props.onClick}
    >
      <input type="checkbox" id="fulltime" onClick={props.onClick} />
      {isTablet ? "Full Time" : "Full Time Only"}
    </label>
  );
}