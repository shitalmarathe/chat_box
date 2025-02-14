import Chat from "./Chat";
import Typing from "./Typing";

function Messages({ messages, id, typing }) {
  console.log(typing);

  return (
    <div className="h-[85vh] max-h-[85vh] flex flex-col gap-1 p-5 md:px-14">
      {messages.map((message, idx) => (
        <Chat key={idx} message={message} self={message.user.id === id} />
      ))}

      <Typing typing={typing} />
    </div>
  );
}

export default Messages;