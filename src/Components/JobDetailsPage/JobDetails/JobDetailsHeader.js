import styles from "./JobDetailsHeader.module.css";
import Button from "../../UI/Button";

export default function JobDetailsHeader(props) {
  return (
    <section className={styles["job__post_header"]}>
      <div>
        <p className={styles["job__posted"]}>
          5hr ago
          <span className={styles["job__styled_seperator"]}>
            <b>&#183;</b>
          </span>
          Full Time
        </p>

        <h2 className={styles["job__title"]}>Senior Software Engineer</h2>
        <span className={styles["job__location"]}>United States</span>
      </div>

      <Button className={styles["job__apply"]}>Apply Now</Button>
    </section>
  );
}
