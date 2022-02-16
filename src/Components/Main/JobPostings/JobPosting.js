import styles from "./JobPosting.module.css";
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
    <article role="listitem" className={styles["job__posting"]}>
      <figure
        className={styles["job__logo_container"]}
        style={{ background: `${logoBackground}` }}
      >
        <img src={`.${logo}`} alt={`${company} logo`}></img>
      </figure>

      <div className={styles["job__overview"]}>
        <p>{postedAt}</p>
        <span className={styles["job__styled_seperator"]}>
          <b>&#183;</b>
        </span>
        <p>{contract}</p>
      </div>

      <h2 className={styles["job__position"]}>{position}</h2>
      <p className={styles["job__company"]}>{company}</p>
      <span className={styles["job__location"]}>{location}</span>
    </article>
  );
}
