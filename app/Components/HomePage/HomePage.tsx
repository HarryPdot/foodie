"use client";
import { Container } from "@radix-ui/themes";
import { useReducer } from "react";

import { SearchBar } from "../SearchBar/SearchBar";
import { reducer } from "./reducer";
import { Results } from "../Results/Results";

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    search: "",
    address: "",
  });
  return (
    <Container>
      <SearchBar state={state} dispatch={dispatch}/>
      <Results/>
    </Container>
  );
};

export { HomePage };
