"use client";
import { Container } from "@radix-ui/themes";
import { useReducer } from "react";

import { FilterRankBy } from "../Filter/FilterRankBy";
import { Results } from "../Results/Results";
import { SearchBar } from "../SearchBar/SearchBar";
import { reducer } from "./reducer";

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    search: "",
    address: "",
    rankBy: "distance",
  });
  return (
    <Container>
      <SearchBar state={state} dispatch={dispatch} />
      <FilterRankBy state={state} dispatch={dispatch} />
      <Results data={state.data} dispatch={dispatch} />
    </Container>
  );
};

export { HomePage };
