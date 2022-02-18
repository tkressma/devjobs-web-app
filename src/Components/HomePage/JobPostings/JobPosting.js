import styles from "./JobPosting.module.css";
import { Link } from "react-router-dom";
export default function JobPosting({ job }) {
  return (
    <article className={styles["job__posting"]} role="listitem">
      <figure
        className={styles["job__logo_container"]}
        style={{ background: `${job.logoBackground}` }}
      >
        <img src={`.${job.logo}`} alt={`${job.company} logo`}></img>
      </figure>

      <p className={styles["job__posted"]}>
        {job.postedAt}
        <span className={styles["job__styled_seperator"]}>
          <b>&#183;</b>
        </span>
        {job.contract}
      </p>

      <Link
        to={`/job/${job.id}`}
        aria-label={`Read more about the ${job.position} position at ${job.company}`}
        style={{ textDecoration: "none" }}
      >
        <h2 className={styles["job__position"]}>{job.position}</h2>
      </Link>
      <p className={styles["job__company"]}>{job.company}</p>
      <span className={styles["job__location"]}>{job.location}</span>
    </article>
  );
}
