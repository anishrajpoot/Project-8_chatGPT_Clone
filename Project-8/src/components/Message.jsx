import React from "react";
import "../App.css";

const Message = ({ role, content }) => {
  return (
    <div className={`message-row ${role}`}>
      <div className="message-bubble">
        <div className="message-role">{role === "user" ? "You" : "ChatGPT"}</div>
        <div className="message-text">{content}</div>
      </div>
    </div>
  );
};

export default Message;
