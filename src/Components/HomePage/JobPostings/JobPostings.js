import React from "react";
import JobPosting from "./JobPosting";
import styles from "./JobPostings.module.css";
export default function JobPostings(props) {
  return (
    <>
      <section className={styles["postings"]} role="list">
        {props.postings.map((posting) => (
          <JobPosting job={posting} key={posting.id} />
        ))}
      </section>
    </>
  );
}