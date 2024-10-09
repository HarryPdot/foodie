import { Flex } from "@radix-ui/themes";

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
        <Address state={state} dispatch={dispatch} />
      </Flex>
    </div>
  );
};

export { NavBar };
