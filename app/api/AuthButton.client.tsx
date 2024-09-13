"use client";

import { useSession } from "next-auth/react";

import { signIn, signOut } from "../auth/helpers";
import { useState } from "react";

const AuthButton = () => {
  const {data: session, status, update} = useSession();

  const handleSignOut = async () => {
    await signOut();
    await update({session: null});
  };

  return session?.user ? (
    <div>
      Signed in as {session?.user.name}
      <br />
      <button onClick={() => handleSignOut()}>Sign out</button>
    </div>
  ) : (
    <button onClick={() => signIn()}>Sign in</button>
  );
};

export { AuthButton };
