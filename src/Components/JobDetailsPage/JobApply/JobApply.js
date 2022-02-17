import ApplyLink from "../../UI/ApplyLink";
import styles from "./JobApply.module.css";

export default function ({ job }) {
  return (
    <section className={styles["job__apply"]}>
      <div className={styles["job__company_info"]}>
        <h2>{job.position}</h2>
        <p>So Digital Inc.</p>
      </div>

      <ApplyLink link={job.website} />
    </section>
  );
}
