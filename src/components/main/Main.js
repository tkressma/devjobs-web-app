import React from "react";
import { useMediaQuery } from "react-responsive";
import SearchBar from "./searchbar/SearchBar";
import Container from "../UI/Container";
import JobPostings from "./jobpostings/JobPostings";
export default function Main(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <main>
      <Container>
        <SearchBar isMobile={isMobile} />
        <JobPostings />
      </Container>
    </main>
  );
}
