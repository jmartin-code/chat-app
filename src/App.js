import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./index.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      //   projectId={process.env.REACT_APP_PROJECT_ID}
      projectID="dcc84af0-686b-4711-84f9-20d1469f164f"
      userName="jmartin"
      userSecret="112233445566778899"
      // showFeed={(props)=> <ChatFeed {...chatAppProps}}
    />
  );
};

export default App;
