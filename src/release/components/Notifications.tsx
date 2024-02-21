import React from "react";
import { Button, H2, P, Span } from "../Typography";

const Notifications = () => {
    const notifications = [
      {
        text: "Helal sir will take tomorrows class Online.",
        creator: "Humaira Rasha",
      },
      {
        text: "Fahami sir's presentation is in this friday.",
        creator: "Jane Alam Zebin",
      },
    ];

      const isCr = false;
  return (
    <>
      <div className="flex justify-between items-center w-full">
        <H2>Notifications</H2>{" "}
        {isCr && (
          <Button
            fullWidth={false}
            className="bg-[#50fa7b] text-[#282a36] hover:bg-[#34a04f] block "
          >
            Add
          </Button>
        )}
      </div>
      <div className="flex flex-col gap-4 my-4">
        {notifications.map((notification) => (
          <div
            className="w-full bg-[#50fa7b] bg-opacity-10 p-4 rounded-sm"
            key={notification.text}
          >
            <P>{notification.text}</P>
            <Span className="text-[#50fa7b]">{notification.creator}</Span>
          </div>
        ))}
      </div>{" "}
    </>
  );
};

export default Notifications;
