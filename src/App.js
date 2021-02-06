import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./index.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      userName="john"
      userSecret="112233$"
      projectID={process.env.REACT_APP_PROJECT_ID}
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
    />
  );
};

export default App;
