import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Chatbox from "./components/chatbox/chatbox";

function App() {
  const [chatboxVisibility, setChatboxVisibility] = useState(false);

  function toggleChatbox() {
    setChatboxVisibility(!chatboxVisibility);
  }

  function closeChatbox() {
    setChatboxVisibility(false);
  }

  return (
    <div className="echanakya-theme">
      <h1>Hello! Meet Chanakya</h1>
      <br />
      <h3 className="chanakyas-message">
        Chanakya is your personal legal advisor. He can help you with all your
        legal queries. Chanakya is available 24x7. You can use chanakya to learn
        about your rights, get legal advice, find a lawyer, and more!
      </h3>
      <h2 className="action-message">
        Click on the headset to summon Chanakya
      </h2>
      {chatboxVisibility ? (
        <Chatbox
          closeChatbox={closeChatbox}
          toggleChatbox={toggleChatbox}
        ></Chatbox>
      ) : null}
      <button onClick={toggleChatbox} className="summon-chanakya bounce">
        <FontAwesomeIcon icon={faHeadset} />
      </button>
    </div>
  );
}

export default App;
