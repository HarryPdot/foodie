import { auth } from "@/auth";

const User = async () => {
  const session = await auth();
  if (!session?.user) return null;

  return <div>{session.user.name}</div>;
};

export { User };
