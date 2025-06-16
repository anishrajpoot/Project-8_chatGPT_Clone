import React, { useEffect, useRef } from "react";
import Message from "./Message";

const ChatWindow = ({ messages }) => {
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <Message key={index} role={msg.role} content={msg.content} />
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default ChatWindow;
