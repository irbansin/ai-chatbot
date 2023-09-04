import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Chatbox from "./components/chatbox";

function App() {
  const [chatboxVisibility, setChatboxVisibility] = useState(false);

  function toggleChatbox() {
    setChatboxVisibility(!chatboxVisibility);
  }

  return (
    <>
      {chatboxVisibility ? <Chatbox></Chatbox> : null}
      <button onClick={toggleChatbox} className="summon-pam bounce">
        <FontAwesomeIcon icon={faHeadset} />
      </button>
    </>
  );
}

export default App;
