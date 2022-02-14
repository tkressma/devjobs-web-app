import React from "react";
import SearchBar from "./searchbar/SearchBar";
import Container from "../UI/Container";
import SearchBarMobile from "./searchbar/SearchBarMobile";
export default function Main(props) {
  return (
    <main>
      <Container>
        <SearchBarMobile />
      </Container>
    </main>
  );
}
