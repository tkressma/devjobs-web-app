import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./HomePage.module.css";
import SearchBar from "./SearchBar/SearchBar";
import Container from "../UI/Container";
import JobPostings from "./JobPostings/JobPostings";
import Button from "../UI/Button";
export default function HomePage(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
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

  const getSearchResults = (searchParams) => {
    const results = allJobs.filter(
      (job) =>
        job.position.toLowerCase().includes(searchParams.title.toLowerCase()) &&
        job.location.toLowerCase().includes(searchParams.location.toLowerCase())
    );

    setFilteredJobs(results);
  };

  return (
    <Container>
      <SearchBar isMobile={isMobile} onSearch={getSearchResults} />
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
