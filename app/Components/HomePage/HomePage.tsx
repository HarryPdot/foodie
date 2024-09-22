"use client";
import { Box, Container } from "@radix-ui/themes";
import { useReducer } from "react";

import { FilterRankBy } from "../Filter/FilterRankBy";
import { NavBar } from "../NavBar/NavBar";
import { SearchBar } from "../NavBar/SearchBar/SearchBar";
import { Results } from "../Results/Results";
import { reducer } from "./reducer";

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    search: "",
    address: "",
    rankBy: "distance",
    placeid: "",
  });

  return (
    <Box style={{ width: "100%" }}>
      <NavBar state={state} dispatch={dispatch} />
      <SearchBar state={state} dispatch={dispatch} />
      <FilterRankBy state={state} dispatch={dispatch} />
      <Results data={state.data} dispatch={dispatch} />
    </Box>
  );
};

export { HomePage };
