"use client";

import * as Form from "@radix-ui/react-form";

import { fetcher } from "../../../Service/fetch";
import styles from "./card.module.css";

const SearchBar = ({ state, dispatch }: { state: any; dispatch: any }) => {
  const { search, address, rankBy } = state;

  const searchApi = async () => {
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

  return (
    <div className={styles.container}>
      <Form.Root
        className={styles.FormRoot}
        onSubmit={(event) => event.preventDefault()}
        style={{ padding: "10px" }}
      >
        <Form.Field className={styles.FormField} name="search" >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className={styles.FormLabel}>Search</Form.Label>
            <Form.Message
              className={styles.FormMessage}
              match={() => !state.address}
            >
              Please enter an address
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className={styles.Input}
              type="search"
              onChange={(e) => handleSearchInput(e)}
              autoComplete="off"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            className={styles.Button}
            style={{ marginTop: 10 }}
            onClick={() => searchApi()}
            disabled={(search && !address) || (!search && !address)}
          >
            Search
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export { SearchBar };
