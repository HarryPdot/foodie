"use client";

import { useSession } from "next-auth/react";
import styles from "./AuthButton.module.css";

import { signIn, signOut } from "../auth/helpers";
import { Button, Flex, Text } from "@radix-ui/themes";

const AuthButton = () => {
  const { data: session, status, update } = useSession();

  const handleSignOut = async () => {
    await signOut();
    await update({ session: null });
  };

  return (
    <Flex justify={"end"}>
      {session?.user ? (
      <Flex direction={"column"} gap={2}>
        <Button onClick={() => handleSignOut()}>Sign out</Button>
        <Text>{session?.user.name}</Text>
      </Flex>
      ) : (
      <Button className={styles.Button} onClick={() => signIn()}>Sign in</Button>
      )}
    </Flex>
  )
  

};

export { AuthButton };
