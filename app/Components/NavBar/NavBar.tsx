import { Flex, Text } from "@radix-ui/themes";

import { Address } from "./Address/Address";
import styles from "./NavBar.module.css";

const NavBar = ({ state, dispatch }: { state: any; dispatch: any }) => {
  return (
    <div className={styles.container}>
      <Flex
        direction={"row"}
        gap={"0.5rem"}
        align={"center"}
        justify={"center"}
        width={"100%"}
        height={"100%"}
      >
        <Flex direction={"row"} align={"center"} gap={"0.5rem"}>
          <Text weight={"bold"}>{state.address}</Text>
          <Address state={state} dispatch={dispatch} />
        </Flex>
      </Flex>
    </div>
  );
};

export { NavBar };
