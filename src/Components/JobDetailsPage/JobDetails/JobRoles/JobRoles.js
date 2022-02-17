import styles from "./JobRoles.module.css";

export default function JobRequirements({ job }) {
  return (
    <section className={styles["job__role"]}>
      <h3 className={styles["job__role_title"]}>What You Will Do</h3>
      <p className={styles["job__role_description"]}>{job.role.content}</p>

      <ol className={styles["job__items"]}>
        {job.role.items.map((item, index) => (
          <li className={styles["job__item"]} key={index}>
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}
