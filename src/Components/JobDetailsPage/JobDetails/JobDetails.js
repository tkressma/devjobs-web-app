import styles from "./JobDetails.module.css";
import JobDetailsHeader from "./JobDetailsHeader";
import JobRequirements from "./JobRequirements/JobRequirements";
import JobRoles from "./JobRoles/JobRoles";
export default function JobDetails({ job }) {
  return (
    <article className={styles["job__details"]}>
      <JobDetailsHeader job={job} />
      <section className={styles["job__description"]}>
        {job.description}
      </section>

      <JobRequirements job={job} />
      <JobRoles job={job} />
    </article>
  );
}
