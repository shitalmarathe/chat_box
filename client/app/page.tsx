"use client";
import { Button, HeroUIProvider } from "@heroui/react";
import Emote from "@/components/Emote";

export default function Home() {
  return (
    <HeroUIProvider>
      <Emote />
    </HeroUIProvider>
  );
}