"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const HomeView = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Home</h1>
      logged in as {session?.user.name}
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/sign-in");
              },
            },
          })
        }
      >
        Sign out
      </Button>
    </div>
  );
};
