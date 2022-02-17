import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import SearchBar from "./SearchBar/SearchBar";
import Container from "../UI/Container";
import JobPostings from "./JobPostings/JobPostings";
import Button from "../UI/Button";
export default function HomePage(props) {
  // Used to keep a constant record of all the available job postings
  const [allJobs, setAllJobs] = useState([]);
  // A constantly changing list of jobs based on the users filters
  const [filteredJobs, setFilteredJobs] = useState([]);
  // The amount of job postings on the screen at once
  const [visibleJobs, setVisible] = useState(9);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllJobs(data);
        setFilteredJobs(data);
      });
  }, []);

  const showMoreHandler = () => {
    setVisible((prevState) => prevState + 3);
  };

  // Given an object filled with the three user filter options (title, location, and contract type),
  // use that object to compare and filter through all the jobs and determine which jobs to display.
  const getSearchResults = (searchFilters) => {
    const results = allJobs.filter(
      (job) =>
        job.position
          .toLowerCase()
          .includes(searchFilters.title.toLowerCase()) &&
        job.location
          .toLowerCase()
          .includes(searchFilters.location.toLowerCase()) &&
        job.contract.includes(searchFilters.contract)
    );

    setFilteredJobs(results);
  };

  return (
    <Container>
      <SearchBar onSearch={getSearchResults} />
      <JobPostings postings={filteredJobs.slice(0, visibleJobs)} />

      {/* If there are no more jobs left to show, remove load more button */}
      {visibleJobs < filteredJobs.length && (
        <Button
          onClick={showMoreHandler}
          className={styles["button__loadmore"]}
        >
          Load More
        </Button>
      )}
    </Container>
  );
}
