"use client";
import { useState } from "react";
import { HeroUIProvider } from "@heroui/react";
import { Messages, Inputs, Chat, SignUp } from "@/components";
import { io } from "socket.io-client";

const socket = io(
  "https://bug-free-space-fishstick-jj4q6gx9rg9q2j66v-8000.app.github.dev/"
);

export default function Home() {
  const [user, setUser] = useState("");

  return (
    <HeroUIProvider>
      {user ? (
        <>
          <Messages />
          <Inputs />
        </>
      ) : (
        <SignUp setUser={setUser} socket={socket} />
      )}
    </HeroUIProvider>
  );
}