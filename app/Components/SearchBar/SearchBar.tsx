"use client";

import * as Form from "@radix-ui/react-form";
import { Button, Flex, Section, TextField } from "@radix-ui/themes";

import { fetcher } from "../../Service/fetch";
import styles from "./card.module.css";

const SearchBar = ({ state, dispatch }: { state: any; dispatch: any }) => {
  const { search, address, data, rankBy } = state;

  const searchApi = async () => {
    console.log(state.rankBy);
    const value = search && address ? `${search} near ${address}` : search;
    try {
      const url =
        !search && address
          ? new URL(
              `/api/search/food?address=${address}&rankBy=${rankBy}`,
              window.location.origin,
            )
          : new URL(
              `/api/search/${value}?address=${address}&rankBy=${rankBy}`,
              window.location.origin,
            );
      const data = await fetcher(url.href, "POST");
      dispatch({
        type: "SET_DATA",
        payload: data,
      });
    } catch {
      console.error("Internal Server Error:", Error);
    }
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_SEARCH",
      payload: e.target.value,
    });
  };

  const handleAddressInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_ADDRESS",
      payload: e.target.value,
    });
  };

  return (
    <Form.Root
      className="FormRoot"
      onSubmit={(event) => event.preventDefault()}
    >
      <Form.Field className="FormField" name="email">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Search</Form.Label>
        </div>
        <Form.Control asChild>
          <input
            className="Input"
            type="search"
            onChange={(e) => handleSearchInput(e)}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="question">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Address</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter an address
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            type="text"
            className="Textarea"
            required
            onChange={(e) => handleAddressInput(e)}
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button
          className="Button"
          style={{ marginTop: 10 }}
          onClick={() => searchApi()}
          disabled={(search && !address) || (!search && !address)}
        >
          Post question
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export { SearchBar };
