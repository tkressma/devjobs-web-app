import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Main.module.css";
import SearchBar from "./searchbar/SearchBar";
import Container from "../UI/Container";
import JobPostings from "./jobpostings/JobPostings";
import jobData from "../../data.json";
export default function Main(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [visibleJobs, setVisible] = useState(9);

  useEffect(() => {
    setAllJobs(jobData);
    setFilteredJobs(jobData);
  }, []);

  const showMoreHandler = () => {
    setVisible(visibleJobs + 3);
  };

  const getSearchResults = (searchParams) => {
    const results = allJobs.filter(
      (job) =>
        job.position.toLowerCase().includes(searchParams.title.toLowerCase()) &&
        job.location.toLowerCase().includes(searchParams.location.toLowerCase())
    );

    setFilteredJobs(results);
  };

  return (
    <main className={styles.main}>
      <Container>
        <SearchBar isMobile={isMobile} onSearch={getSearchResults} />
        <JobPostings postings={filteredJobs.slice(0, visibleJobs)} />
        <button onClick={showMoreHandler}>Load more</button>
      </Container>
    </main>
  );
}
