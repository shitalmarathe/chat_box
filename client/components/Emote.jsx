import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { io } from "socket.io-client";

const socket = io("https://peaceful-cheetah-shitalborane-e976c43d.koyeb.app");

function Emote() {
  const [emoji, setEmoji] = useState("😈");

  useEffect(() => {
    socket.on("new_emoji", (emoji) => {
      setEmoji(emoji);
    });
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-6xl">{emoji}</h1>
      <EmojiSelect setEmoji={setEmoji} />
    </div>
  );
}

function EmojiSelect({ setEmoji }) {
  const emojis = "😀,😈,😑,🤨,🙁,😠,🫢,👻".split(",");

  return (
    <div className="flex gap-1 flex-wrap justify-center">
      {emojis.map((emoji, index) => {
        return (
          <Button
            key={index}
            variant="flat"
            className="text-2xl"
            onPress={() => {
              setEmoji(emoji);
              socket.emit("emoji", emoji);
            }}
          >
            {emoji}
          </Button>
        );
      })}
    </div>
  );
}

export default Emote;