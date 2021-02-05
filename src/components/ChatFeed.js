import React from "react";
import Message from "./Message";
import privateMessage from "./privateMessage";
import publicMessage from "./publicMessage";

export default function ChatFeed(props) {
  const { messages, userName, activeChat, chats } = props;

  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);
    // console.log(keys);
    return keys.map((keys, index) => {
      const message = messages[keys];
      const lastMessage = "0";
      const isPrivate = null;
    });
  };
  renderMessages();

  return <div>Hola</div>;
}
