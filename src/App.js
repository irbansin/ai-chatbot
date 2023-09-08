import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOm } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Chatbox from "./components/chatbox/chatbox";

function App() {
  const [chatboxVisibility, setChatboxVisibility] = useState(false);

  function toggleChatbox() {
    setChatboxVisibility(!chatboxVisibility);
  }

  return (
    <div className="eChanakya-theme">
      <h1>Hello! Meet Chanakya</h1>
      <br />
      <h3 className="Chanakyas-message">
        Chanakya is answer to all your questions regarding law, ethics,
        Econonomics, Politics, and personal wellbeing. Chanakya helped
        Chandragupta Maurya to establish the Mauryan Empire. Chanakya is a
        symbol of wisdom and knowledge. Chanakya is a chatbot that can help you
        with your queries. Let Chanakya be your guide to a life of prosperity
        and happiness.
      </h3>
      <h2 className="action-message">
        Click on the headset to summon Chanakya
      </h2>
      {chatboxVisibility ? <Chatbox></Chatbox> : null}
      <button onClick={toggleChatbox} className="summon-Chanakya bounce">
        <FontAwesomeIcon icon={faOm} />
      </button>
    </div>
  );
}

export default App;
