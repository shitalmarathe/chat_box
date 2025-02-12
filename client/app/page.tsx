"use client";
import { useState } from "react";
import {  HeroUIProvider } from "@heroui/react";
import { Messages, Inputs, Chat, SignUp } from "@/components";
import { io } from "socket.io-client";

const socket = io(
  "https://expert-pancake-r7r9r4xvjjh59pj-8000.app.github.dev/"
);

export default function Home() {
  return (
    <HeroUIProvider>
    <SignUp/>
     </HeroUIProvider>
  );
}