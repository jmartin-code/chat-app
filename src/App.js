import { ChatEngine } from "react-chat-engine";
import Login from "./components/Login";
import "./index.css";

const App = () => {
  if (!localStorage.getItem("username")) {
    return <Login />;
  }

  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  return (
    <ChatEngine
      height="100vh"
      userName={username}
      userSecret={password}
      projectID={process.env.REACT_APP_PROJECT_ID}
    />
  );
};

export default App;
