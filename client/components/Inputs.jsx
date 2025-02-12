import React, { useRef, useState } from "react";
import { Input, Button } from "@heroui/react";
import { ArrowUpFromLine, SendHorizontalIcon } from "lucide-react";

function Inputs() {
  const [input, setInput] = useState("");
  const inputFile = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    // Base 64 conversion
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      console.log("File upload functionality");
      inputFile.current.click();
      return;
    }

    console.log(input);

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
          onChange={(e) => setInput(e.target.value)}
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