import styles from "./JobRequirements.module.css";

export default function JobRequirements({ job }) {
  return (
    <section className={styles["job__requirements"]}>
      <h3 className={styles["job__requirements_title"]}>Requirements</h3>
      <p className={styles["job__requirements_description"]}>
        {job.requirements.content}
      </p>

      <ul className={styles["job__items"]}>
        {job.requirements.items.map((item, index) => (
          <li className={styles["job__item"]} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
