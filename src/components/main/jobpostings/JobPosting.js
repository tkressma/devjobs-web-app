import styles from "./JobPosting.module.css";
export default function JobPosting(props) {
  const logoBackground = `${props.job.logoBackground}`;
  return (
    <article
      role="listitem"
      className={styles["job__posting"]}
      key={props.job.key}
    >
      <figure
        className={styles["job__logo_container"]}
        style={{ background: logoBackground }}
      >
        <img src={`.${props.job.logo}`} alt={`${props.job.company} logo`}></img>
      </figure>
      <div className={styles["job__overview"]}>
        <p>{props.job.postedAt}</p>
        <span className={styles["job__styled_seperator"]}>
          <b>&#183;</b>
        </span>
        <p>{props.job.contract}</p>
      </div>
      <h2 className={styles["job__position"]}>{props.job.position}</h2>
      <p className={styles["job__company"]}>{props.job.company}</p>
      <span className={styles["job__location"]}>{props.job.location}</span>
    </article>
  );
}
