import styles from "./JobDetails.module.css";
import JobDetailsHeader from "./JobDetailsHeader";
export default function JobDetails({ job }) {
  return (
    <article className={styles["job__details"]}>
      <JobDetailsHeader job={job} />
      <section className={styles["job__description"]}>
        {job.description}
      </section>
      <section className={styles["job__requirements"]}>
        <h3 className={styles["job__requirements_title"]}>Requirements</h3>
        <p className={styles["job__requirements_description"]}>
          {job.requirements.content}
        </p>

        <ul>
          {job.requirements.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles["job__role"]}>
        <h3 className={styles["job__role_title"]}>What You Will Do</h3>
        <p className={styles["job__role_description"]}>{job.role.content}</p>

        <ol>
          {job.role.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </section>
    </article>
  );
}
