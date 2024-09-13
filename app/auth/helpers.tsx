"use server";

import { signIn as logIn, signOut as logOut } from "@/auth";
import { NextResponse } from "next/server";

export async function signIn() {
  await logIn("Google");
}

export async function signOut() {
  await logOut({redirectTo: "/"});
}
