import { auth, signIn, signOut } from "@/auth";

const Logging = async () => {
  const session = await auth();

  return (
    <div>
      {!session?.user ? (
        <form
          action={async () => {
            "use server";
            await signIn("Google");
          }}
        >
          <button type="submit">Sign in</button>
        </form>
      ) : (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign out</button>
        </form>
      )}
    </div>
  );
};

export { Logging };
