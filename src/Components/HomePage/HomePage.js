import { useState } from "react";
import styles from "./HomePage.module.css";
import SearchBar from "./SearchBar/SearchBar";
import Container from "../UI/Container";
import JobPostings from "./JobPostings/JobPostings";
import Button from "../UI/Button";
export default function HomePage({ allJobs, filteredJobs, setFilteredJobs }) {
  // The amount of job postings on the screen at once
  const [visibleJobs, setVisible] = useState(12);

  const showMoreHandler = () => {
    setVisible((prevState) => prevState + 3);
  };

  // Given an object filled with the three user filter options (title, location, and contract type),
  // use that object to compare and filter through all the jobs and determine which jobs to display.
  const getSearchResults = (searchFilters) => {
    const results = allJobs.filter(
      (job) =>
        (job.position
          .toLowerCase()
          .includes(searchFilters.title.toLowerCase()) ||
          job.company
            .toLowerCase()
            .includes(searchFilters.title.toLowerCase())) &&
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

      {/* If there are no jobs found from the search, display a message */}
      {filteredJobs.length === 0 && (
        <p className={styles["search__error"]}>
          Sorry, no job postings match your search.
        </p>
      )}
    </Container>
  );
}
