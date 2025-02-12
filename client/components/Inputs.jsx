import React, { useRef, useState } from "react";
import { Input, Button } from "@heroui/react";
import { ArrowUpFromLine, SendHorizontalIcon } from "lucide-react";

function Inputs() {
  const [input, setInput] = useState("");
  const inputFile = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
  

  if(!input){
    console.log("File upload functionality")
    inputFile.current.click();
    return;
  }

  console.log(input);
  setInput("");
};

return(
  <form className="h-[15vh] flex sm:items-center items-end max-w-7xl mx-auto"
  onSubmit={handleSubmit}>

    <div  className="flex w-full sm:gap-2 gap-0">

    <Input
    label="Enter a message"
    size="lg"
    text="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    autoComplete="off"
    />

        <input
          type="file"
          name="file"
          accept="image/png, image/gif, image/jpeg"
          ref={inputFile}
          hidden
        />  
    </div>
    <Button variant="faded" className="h-auto" type="submit">
    {!input ? <ArrowUpFromLine /> : <SendHorizontalIcon />}
    </Button>
  </form>
)
}

export default Inputs;
