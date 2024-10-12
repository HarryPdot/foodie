import * as Select from "@radix-ui/react-select";
import { Theme } from "@radix-ui/themes";
import { useState } from "react";

import { fetcher } from "@/app/Service/fetch";

import styles from "./Address.module.css";
const AddressPredictions = ({
  dispatch,
}: {
  state: any;
  dispatch: any;
}) => {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");
  const [predictions, setPredictions] = useState<any>([]);

  const handleAddress = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (e.target.value.length <= 5) {
      return setPredictions([])
    }
    setOpen(true);
    try {
      const url = new URL(`/api/autocomplete/${input}`, window.location.origin);
      const data = await fetcher(url.href, "POST");
      console.log(data);
      setPredictions(data.predictions);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddressInput = () => {
    if (input === "") return;
    dispatch({
      type: "ADD_ADDRESS",
      payload: input,
    });
    dispatch({
      type: "SET_ADDRESS",
      payload: input,
    });
    setInput("");
    setPredictions([]);
  };

  return (
    <Theme appearance="light" style={{ width: "100%" }}>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          display: "flex",
          width: "100%",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          className={styles.Input}
          value={input}
          type="text"
          style={{ width: "100%", marginTop: "auto", marginBottom: "auto" }}
          id="address"
          placeholder="Search an Address"
          onChange={(e) => handleAddress(e)}
          autoComplete="off"
        />
        <input
          type="submit"
          onClick={() => handleAddressInput()}
          style={{ height: "35px", padding: "0 10px" }}
          value={"Add"}
        />
      </form>
      <Select.Root onValueChange={setInput} open={open ? true : false}>
        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>
        <Select.Content
          position="item-aligned"
          data-state={open ? "open" : "closed"}
          style={{ zIndex: "10", backgroundColor: "white" }}
        >
          <Theme appearance="light">
            {predictions &&
              predictions?.map((place: any, i: number) => {
                return (
                  <Select.Item
                    value={place.description}
                    key={i}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        return setPredictions([])
                    }}
                  >
                    {place.description}
                  </Select.Item>
                );
              })}
          </Theme>
        </Select.Content>
      </Select.Root>
    </Theme>
  );
};

export { AddressPredictions };
