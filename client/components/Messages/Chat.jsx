import { Card, CardBody, Avatar, Image } from "@heroui/react";
function Chat({ message, self }) {
  return (
    <Card className={`bg-transparent w-fit ${self && "ml-auto bg-blue-200"}`}>
      <CardBody className="flex flex-row items-center gap-1">
        {/* Show Avatar */}
        {!self && (
          <Avatar
            name={message.user.name.toUpperCase()}
            className="bg-green-400"
          />
        )}
        {/* Show when text */}
        {message.type === "text" && <p>{message.content}</p>}
        {/* Show when link */}
        {message.type === "link" && (
          <p>
            <a
              href={message.content}
              target="_blank"
              className="underline text-blue-800"
            >
              {message.content}
            </a>
          </p>
        )}
        {/* Show when image */}
        {message.type === "image" && (
          <Image src={message.content} alt="Image message" width={400} />
        )}
      </CardBody>
    </Card>
  );
}

export default Chat;
