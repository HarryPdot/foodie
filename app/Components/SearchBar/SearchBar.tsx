"use client";

import { Button, Text } from "@radix-ui/themes";

import styles from "./card.module.css";
import { fetcher } from "../../Service/fetch";

const SearchBar = ({ state, dispatch }: { state: any; dispatch: any }) => {
  const { search, address, data } = state;
  const searchApi = async (e: any) => {
    const value = search && address ? `${search} near ${address}` : search;
    try {
      const url =
        !search && address
          ? new URL(
              `/api/search/food?address=${address}`,
              window.location.origin,
            )
          : new URL(
              `/api/search/${value}?address=${address}`,
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
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          onChange={(e) => handleSearchInput(e)}
          placeholder="Search"
        />
        <input
          type="text"
          onChange={(e) => {
            handleAddressInput(e);
          }}
          placeholder="Search"
        />
        <input
          disabled={
            (search && !address) || (!search && !address) ? true : false
          }
          onClick={() =>
            (search && !address) || (!search && !address)
              ? null
              : searchApi(event)
          }
          type="submit"
          value={"Search"}
        />
      </form>

      {data.map((item: any, i: number) => {
        return (
          <div key={i} className={styles.card}>
            <Text>
              <p>name: {item.name}</p>
              <p>address: {item.address}</p>
              <p>rating: {item.rating}</p>
              <p>open now?:{item.open ? "true" : "false"}</p>
            </Text>
            {item.types ? (
              <p>
                types:
                {item.types.map((type: string, i: number) => {
                  return (
                    <p style={{ border: "1px solid black" }} key={i}>
                      {type}
                    </p>
                  );
                })}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export { SearchBar };
