import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import "./App.css";
import chatgptLogo from './assets/chatgpt.svg';


const dummyReplies = [
 
  "ChatGPT Clone",
  "I am Good, what about you",
  "Hello",
  
];

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botMsg = {
        role: "assistant",
        content: dummyReplies[Math.floor(Math.random() * dummyReplies.length)],
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 1000);
  };

  return (
    <div className="app">
      <div className="chat-header">
  <img src={chatgptLogo} alt="ChatGPT Logo" className="logo" />

  <span>ChatGPT</span>
</div>

      <ChatWindow
        messages={[
          ...messages,
          ...(typing ? [{ role: "assistant", content: "Typing..." }] : []),
        ]}
      />
      <div className="input-area">
        <input
          type="text"
          placeholder="Send a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>➤</button>
      </div>
    </div>
  );
}
