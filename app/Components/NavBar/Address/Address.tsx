"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Label from "@radix-ui/react-label";
import { Flex, RadioCards, Text, Theme } from "@radix-ui/themes";
import { clsx } from "clsx";
import React from "react";

import styles from "./Address.module.css";
const Address = ({ state, dispatch }: { state: any; dispatch: any }) => {
  const [address, setAddress] = React.useState("");
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleAddressInput = () => {
    if (address === "") return;
    dispatch({
      type: "ADD_ADDRESS",
      payload: address,
    });
    dispatch({
      type: "SET_ADDRESS",
      payload: address,
    });
    setAddress("");
    console.log(localStorage.getItem("address"));

  };

  const deleteAddress = (i: number) => {
    console.log(i)
      if(state.savedAddresses[i] === state.address){ 
        dispatch({
          type: "SET_ADDRESS",
          payload: state.savedAddresses[0],
        });
      }
    dispatch({
      type: "DELETE_ADDRESS",
      payload: i,
    });

  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className={clsx({ [styles.Button]: true, [styles.violet]: true })}
        >
          Address
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content
          className={styles.DialogContent}
          aria-describedby={undefined}
        >
          <Dialog.Title className={styles.DialogTitle}>Address</Dialog.Title>
          <div
            style={{
              display: "flex",
              padding: "0 20px",
              flexWrap: "wrap",
              gap: 15,
              alignItems: "center",
            }}
          >
            <Label.Root
              className={styles.LabelRoot}
              htmlFor="firstName"
            ></Label.Root>
            <form
              onSubmit={(event) => event.preventDefault()}
              style={{ width: "100%" }}
            >
              <input
                className={styles.Input}
                value={address}
                type="text"
                style={{ width: "100%" }}
                id="address"
                placeholder="Search an Address"
                onChange={(e) => handleAddress(e)}
              />
              <input
                type="submit"
                onClick={() => handleAddressInput()}
                style={{ display: "none" }}
              />
            </form>
          </div>
          <Theme appearance="light">
            <RadioCards.Root
              defaultValue={
                state.address
                  ? state.savedAddresses.indexOf(state.address).toString()
                  : "0"
              }
            >
              <Flex direction="column" width="100%" gap={"1"}>
                {state.savedAddresses.map((address: string, i: number) => {
                  return (
                    <Flex justify={"between"} gap={"3"} key={i}>
                      <RadioCards.Item
                        style={{ width: "100%" }}
                        value={`${i}`}
                        onClick={() => {
                          dispatch({ type: "SET_ADDRESS", payload: address });
                        }}
                      >
                        <Flex direction="column" width="100%">
                          <Text weight={"bold"}>{address}</Text>
                        </Flex>
                      </RadioCards.Item>
                      <button onClick={() => deleteAddress(i)}>Delete</button>
                    </Flex>
                  );
                })}
              </Flex>
            </RadioCards.Root>
          </Theme>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button
                className={clsx({
                  [styles.Button]: true,
                  [styles.green]: true,
                })}
              >
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className={styles.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { Address };
