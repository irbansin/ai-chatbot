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

  function visitPitchdeck() {
    window.open("https://view.storydoc.com/pjDDv0L9", "_blank");
  }

  return (
    <div className="echanakya-theme">
      <h1>Hello! Meet Chanakya</h1>
      <br />
      <h2 className="chanakyas-message">
        Chanakya is your personal legal advisor. He can help you with all your
        legal queries.
      </h2>
      <h3>
        Chanakya is available 24x7. You can use chanakya to learn about your
        rights, get legal advice, find a lawyer, and more!
      </h3>
      <p>
        We are currently in beta. Please bear with us if you encounter any bugs.
        We are working really hard to democratise the legal system.
      </p>
      <h2 className="action-message">
        Click on the headset to summon Chanakya
      </h2>
      <button onClick={visitPitchdeck} className="visit-pitchdeck-button">
        Pitch Deck
      </button>
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
