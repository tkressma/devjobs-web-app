import styles from "./JobPosting.module.css";
export default function JobPosting(props) {
  return (
    <article role="listitem" className={styles["job__posting"]}>
      <figure>
        <img src={props.job.logo}></img>
      </figure>
      <p>{props.job.postedAt}</p> <p>{props.job.contract}</p>
      <h2>{props.job.position}</h2>
      <p>{props.job.company}</p>
      <span>{props.job.location}</span>
    </article>
  );
}
