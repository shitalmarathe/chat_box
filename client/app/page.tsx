"use client";
import {  HeroUIProvider } from "@heroui/react";
import { Messages, Inputs, Chat, SignUp } from "@/components";

export default function Home() {
  return (
    <HeroUIProvider>
    <SignUp/>
     </HeroUIProvider>
  );
}