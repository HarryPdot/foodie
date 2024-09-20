"use client";

import { Text } from "@radix-ui/themes";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { FilterButton } from "./FilterButton";
const FilterRankBy = ({ dispatch, state }: { dispatch: any; state: any }) => {
  const handleCheck = (e: any) => {
    if (state.rankBy === e.target.value) return;
    dispatch({ type: "SET_RANK_BY", payload: e.target.value });
  };
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <RadioGroup.Root
        className="RadioGroupRoot"
        defaultValue="distance"
        aria-label="View density"
        onSubmit={(event) => event.preventDefault()}
        onChange={(e) => {
          handleCheck(e);
        }}
      >
        <Text>Sort By</Text>
        <FilterButton htmlFor="r1" value="distance">
          Distance
        </FilterButton>
        <FilterButton htmlFor="r2" value="prominence">
          Relevance
        </FilterButton>
      </RadioGroup.Root>
    </form>
  );
};

export { FilterRankBy };
