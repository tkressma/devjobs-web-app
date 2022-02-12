import React from "react";
import SearchBar from "./searchbar/SearchBar";
import Container from "../UI/Container";
export default function Main(props) {
  return (
    <main>
      <Container>
        <SearchBar />
      </Container>
    </main>
  );
}
