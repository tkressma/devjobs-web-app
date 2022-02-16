import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import SearchBar from "./searchbar/SearchBar";
import Container from "../UI/Container";
import JobPostings from "./jobpostings/JobPostings";
import jobData from "../../data.json";
export default function Main(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisible] = useState(3);

  useEffect(() => {
    setJobs(jobData);
  }, []);

  const showMoreHandler = () => {
    setVisible(visibleJobs + 3);
  };

  return (
    <main>
      <Container>
        <SearchBar isMobile={isMobile} />
        <JobPostings postings={jobs.slice(0, visibleJobs)} />
        <button onClick={showMoreHandler}>Load more</button>
      </Container>
    </main>
  );
}
