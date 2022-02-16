import styles from "./CompanyBanner.module.css";
export default function CompanyBanner(props) {
  return (
    <article className={styles["company__banner"]}>
      <figure
        className={styles["company__logo_container"]}
        style={{ background: "red" }}
      >
        <img src="" alt="logo"></img>
      </figure>

      <div className={styles["company__details"]}>
        <h1 className={styles["company__name"]}>Company</h1>
        <p className={styles["company__website"]}>scoot.com</p>
      </div>

      <a href="www.example.com" className={styles["company__website_link"]}>
        Company Site
      </a>
    </article>
  );
}
