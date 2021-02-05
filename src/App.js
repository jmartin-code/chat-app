import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./index.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectId={process.env.REACT_APP_PROJECT_ID}
      userName="jmartin"
      userSecret="112233445566778899"
      // showFeed={(props)=> <ChatFeed {...chatAppProps}}
    />
  );
};

export default App;
