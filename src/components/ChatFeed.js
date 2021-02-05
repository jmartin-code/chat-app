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
      const isPrivate = userName === message.sender.username;
      const lastMessageKey = index === 0 ? null : keys[index - 1];

      return (<div key={`msg_${index}`} style = {{width = "90%"}}>
        <div className = "message-section">
          {
            isPrivate ? <privateMessage message = {Message}/> : <publicMessage lastMessage={messages[lastMessageKey]} message = {Message}/>
          }
        </div>
        <div className = "read-check" style = {{marginRight: isPrivate ? "10px" : "0", marginLeft:isPrivate ? "0" : "60px" }}>
          
        </div>
      </div>)
    });
  };

  if(!chat) return "Waiting for chat..."

  return <div className = "chat">
    <div className = "chat-container">
      <div className= "chat-title">{chat.title}</div>
      <div className= "chat-subtitle">{chat.people.map((user)=>`${user.person.username}`)}</div>
    </div>
    {renderMessages()}
    <div style = {{height: "50px"}}/>
    <div className="form">
      <Form {...props} chatId={activeChat}/>
    </div>
  </div>;
}
