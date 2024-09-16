"use client";

import { Button, Flex, Section, TextField } from "@radix-ui/themes";

import { fetcher } from "../../Service/fetch";

const SearchBar = ({ state, dispatch }: { state: any; dispatch: any }) => {
  const { search, address, data } = state;
  const searchApi = async () => {
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
    <Section py={'2'}>
      <form onSubmit={(event) => event.preventDefault()}>
        <Flex gap={'3'} direction={'column'}>
          <TextField.Root placeholder="Search" onChange={(e) => handleSearchInput(e)}>
            <TextField.Slot>
            </TextField.Slot>
          </TextField.Root>
          <TextField.Root placeholder="Address" onChange={(e) => handleAddressInput(e)}>
            <TextField.Slot>
            </TextField.Slot>
          </TextField.Root>
          <Button disabled={search && !address || !search && !address} onClick={() => searchApi()}>Search</Button>
        </Flex>
      </form>
    </Section>
  );
};

export { SearchBar };