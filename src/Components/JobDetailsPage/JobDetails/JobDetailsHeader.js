import styles from "./JobDetailsHeader.module.css";
import Button from "../../UI/Button";

export default function JobDetailsHeader({ job }) {
  return (
    <section className={styles["job__post_header"]}>
      <div>
        <p className={styles["job__posted"]}>
          {job.postedAt}
          <span className={styles["job__styled_seperator"]}>
            <b>&#183;</b>
          </span>
          {job.contract}
        </p>

        <h2 className={styles["job__title"]}>{job.position}</h2>
        <span className={styles["job__location"]}>{job.location}</span>
      </div>

      <Button className={styles["job__apply"]}>Apply Now</Button>
    </section>
  );
}
