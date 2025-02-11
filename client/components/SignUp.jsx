import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Form,
  Input,
} from "@heroui/react";

function SignUp() {
  const onSubmit = (e) => {
    // Prevent default browser page refresh.
    e.preventDefault();
    // Get form data as an object.
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // Submit data to your backend API.
    console.log(data);
  };


return (
  <div className="min-h-screen max-h-screen flex justify-center items-center">

    <Card className="max-w-[300px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="favicon.ico"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">CHAT BOX</p>
          <p className="text-small text-default-500">made.phleebs.tech</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Form onSubmit={onSubmit} validationBehavior="native">
          <Input
            isRequired
            errorMessage="Please enter a valid name"
            label="Name"
            labelPlacement="inside"
            name="text"
            placeholder="Enter your name"
            type="text"
            autoComplete="off"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/shitalmarathe/chat_box"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  </div>
);
}

export default SignUp;
