import React, { useRef, useState } from "react";
import { Input, Button } from "@heroui/react";
import { ArrowUpFromLine, SendHorizontalIcon } from "lucide-react";

function Inputs({ socket, name, setMessages }) {
  const [input, setInput] = useState("");
  const inputFile = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    // Base 64 conversion
    var reader = new FileReader();
    reader.onloadend = function () {
      const msg = {
        type: "image",
        content: reader.result,
        user: {
          name: name,
          id: socket.id,
        },
      };
      socket.emit("message", msg);
      setMessages((prevState) => [...prevState, msg]);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit("typing", { name: name, status: false }); // Typing stopped

    if (!input) {
      console.log("File upload functionality");
      inputFile.current.click();
      return;
    }

    
    const msg = {
      type: input.startsWith("http") ? "link" : "text",
      content: input,
      user: {
        name: name,
        id: socket.id,
      },
    };
    socket.emit("message", msg);
    setMessages((prevState) => [...prevState, msg]);

    setInput("");
  };

  return (
    <form
      className="h-[15vh] flex sm:items-center items-end max-w-7xl mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full sm:gap-2 gap-0">
        <Input
          label="Enter a message"
          size="lg"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            socket.emit("typing", { name: name, status: true }); // Typing started
          }}
          autoComplete="off"
        />

        <input
          type="file"
          name="file"
          accept="image/png, image/gif, image/jpeg"
          ref={inputFile}
          onChange={handleImageUpload}
          hidden
        />

        <Button color="primary" variant="flat" className="h-auto" type="submit">
          {!input ? <ArrowUpFromLine /> : <SendHorizontalIcon />}
        </Button>
      </div>
    </form>
  );
}

export default Inputs;