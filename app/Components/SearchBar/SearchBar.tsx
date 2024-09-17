"use client";

import * as Form from "@radix-ui/react-form";
import { Button, Flex, Section, TextField } from "@radix-ui/themes";

import { fetcher } from "../../Service/fetch";
import styles from "./card.module.css";

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
    <Form.Root
      className="FormRoot"
      onSubmit={(event) => event.preventDefault()}
    >
      <Flex direction={"column"} gap={"1"}>
        <Form.Field className="FormField" name="search">
          <Flex align={"baseline"} justify={"between"}>
            <Form.Label className="FormLabel"> Search </Form.Label>
          </Flex>
          <Form.Control asChild>
            <TextField.Root
              className="Input"
              onChange={(e) => handleSearchInput(e)}
              required
            >
              <TextField.Slot></TextField.Slot>
            </TextField.Root>
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="address">
          <Flex align={"baseline"} justify={"between"}>
            <Form.Label className="FormLabel">Address</Form.Label>
            <Form.Message className="FormMessage" match={"valueMissing"}>
              Place enter an address
            </Form.Message>
          </Flex>
          <Form.Control asChild>
            <TextField.Root
              className="Input"
              onChange={(e) => handleAddressInput(e)}
              required
            >
              <TextField.Slot></TextField.Slot>
            </TextField.Root>
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <Button
            className="Button"
            disabled={(search && !address) || (!search && !address)}
            onClick={() => searchApi()}
          >
            Search
          </Button>
        </Form.Submit>
      </Flex>
    </Form.Root>
  );
};

export { SearchBar };

// <Section py={'2'}>
// <form onSubmit={(event) => event.preventDefault()}>
//   <Flex gap={'3'} direction={'column'}>
//       <TextField.Root placeholder="Search" onChange={(e) => handleSearchInput(e)} required>
//         <TextField.Slot>
//         </TextField.Slot>
//       </TextField.Root>
//     <TextField.Root placeholder="Address" onChange={(e) => handleAddressInput(e)}>
//       <TextField.Slot>
//       </TextField.Slot>
//     </TextField.Root>
//     <Button disabled={search && !address || !search && !address} onClick={() => searchApi()}>Search</Button>
//   </Flex>
// </form>
// </Section>
