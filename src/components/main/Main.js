import React from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import SearchBar from "./searchbar/SearchBar";
import Container from "../UI/Container";
export default function Main(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <main>
      <Container>
        <SearchBar isMobile={isMobile} />
      </Container>
    </main>
  );
}
