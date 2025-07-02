"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4 max-w-md mx-auto">
        <p>User is logged in</p>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    );
  }

  const onSubmit = async () => {
    authClient.signUp.email(
      { name, email, password },
      {
        onError: () => {
          window.alert("Error went wrong");
        },
        onSuccess: () => {
          window.alert("User created successfully");
        },
      }
    );
  };

  const onSignIn = async () => {
    authClient.signIn.email(
      { email, password },
      {
        onError: () => {
          window.alert("Error went wrong");
        },
        onSuccess: () => {
          window.alert("User created successfully");
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 max-w-md mx-auto">
      <div className="flex flex-col gap-4 w-full">
        <h1>Create User</h1>
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={onSubmit}>Create User</Button>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <h1>Sign In</h1>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={onSignIn}>Sign In</Button>
      </div>
    </div>
  );
}
