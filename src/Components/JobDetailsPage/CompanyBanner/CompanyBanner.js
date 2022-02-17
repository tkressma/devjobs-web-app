import styles from "./CompanyBanner.module.css";

export default function CompanyBanner({ job }) {
  return (
    <article className={styles["company__banner"]}>
      <figure
        className={styles["company__logo_container"]}
        style={{ background: `${job.logoBackground}` }}
      >
        <img src={`.${job.logo}`} alt={`${job.company} logo`}></img>
      </figure>

      <div className={styles["company__details"]}>
        <h1 className={styles["company__name"]}>{job.company}</h1>
        <p className={styles["company__website"]}>{job.website}</p>
      </div>

      <a href={job.website} className={styles["company__website_link"]}>
        Company Site
      </a>
    </article>
  );
}
