import styles from "./ApplyLink.module.css";

export default function ApplyLink({ link }) {
  return (
    <a href={link} className={styles["job__apply"]}>
      Apply Now
    </a>
  );
}
