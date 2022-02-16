import styles from "./CompanyBanner.module.css";
export default function CompanyBanner(props) {
  return (
    <article className={styles["company__banner"]}>
      <figure
        className={styles["job__logo_container"]}
        style={{ background: "`${logoBackground}red" }}
      >
        <img src="test" alt="logo"></img>
      </figure>

      <h1>Company</h1>
      <p>scoot.com</p>
      <button>
        <a href="www.example.com">Company Site</a>
      </button>
    </article>
  );
}
