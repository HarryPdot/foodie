"use client";
import { Container } from "@radix-ui/themes";
import { useReducer } from "react";

import { SearchBar } from "../SearchBar/SearchBar";
import { reducer } from "./reducer";

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
  });
  return (
    <Container>
      <SearchBar />
    </Container>
  );
};

export { HomePage };
