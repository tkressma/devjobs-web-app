import styles from "./JobPosting.module.css";
import { Link } from "react-router-dom";
export default function JobPosting(props) {
  // Destructure job obj for readability
  const {
    logoBackground,
    logo,
    company,
    postedAt,
    contract,
    position,
    location,
  } = props.job;

  return (
    <Link to="/job" style={{ textDecoration: "none" }}>
      <article role="listitem" className={styles["job__posting"]}>
        <figure
          className={styles["job__logo_container"]}
          style={{ background: `${logoBackground}` }}
        >
          <img src={`.${logo}`} alt={`${company} logo`}></img>
        </figure>

        <p className={styles["job__posted"]}>
          {postedAt}
          <span className={styles["job__styled_seperator"]}>
            <b>&#183;</b>
          </span>
          {contract}
        </p>

        <h2 className={styles["job__position"]}>{position}</h2>
        <p className={styles["job__company"]}>{company}</p>
        <span className={styles["job__location"]}>{location}</span>
      </article>
    </Link>
  );
}
