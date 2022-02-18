import ApplyLink from "../../UI/ApplyLink";
import Container from "../../UI/Container";
import styles from "./JobApply.module.css";
import { useMediaQuery } from "react-responsive";

export default function JobApply({ job }) {
  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });

  return (
    <section className={styles["job__apply"]}>
      <Container className={styles["job__apply_container"]}>
        {!isMobile && (
          <div className={styles["job__company_info"]}>
            <h2 className={styles["job__position"]}>{job.position}</h2>
            <p className={styles["job__parent_company"]}>So Digital Inc.</p>
          </div>
        )}

        <ApplyLink link={job.website} />
      </Container>
    </section>
  );
}
