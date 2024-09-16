"use client";
import { Container } from "@radix-ui/themes";
import { useReducer } from "react";

import { Results } from "../Results/Results";
import { SearchBar } from "../SearchBar/SearchBar";
import { reducer } from "./reducer";

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    search: "",
    address: "",
  });
  return (
    <Container>
      <SearchBar state={state} dispatch={dispatch} />
      <Results data={state.data} dispatch={dispatch} />
    </Container>
  );
};

export { HomePage };
