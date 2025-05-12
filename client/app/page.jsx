"use client";
import { useEffect, useState } from "react";
import { HeroUIProvider } from "@heroui/react";
import { Messages, Inputs, SignUp } from "@/components";
import { io } from "socket.io-client";

const socket = io(
  "peaceful-cheetah-shitalborane-e976c43d.koyeb.app/"
);


export default function Home() {
  const [user, setUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState([]);

  useEffect(() => {
    socket.on("new_message", (msg) => {
      setMessages((prevState) => [...prevState, msg]);
    });
  }, []);

  useEffect(() => {
    socket.on("user_typing", (obj) => {
      setTyping((prevState) => {
        const includes = prevState.some((name) => name === obj.name);
        if (!includes && obj.status) {
          return [...prevState, obj.name];
        } else if (obj.status === false) {
          return prevState.filter((name) => name !== obj.name);
        } else {
          return prevState;
        }
      });
    });
  });


  return (
    <HeroUIProvider>
      {user ? (
        <div className="container mx-auto">
          <Messages messages={messages} id={socket.id} typing={typing} />
          <Inputs  socket={socket} name={user} setMessages={setMessages} />
        </div>
      ) : (
        <SignUp setUser={setUser} socket={socket} />
      )}
    </HeroUIProvider>
  );
}