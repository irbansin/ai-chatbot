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
        Chanakya is your virttual AI assistant that solves all your HR queries.
        Chanakya is your first level of support. Hereafter you don't need to
        wate for the next Helpdesk Meeting or your leave queries. Chanakya is
        just born. So please don't stress her too much. She is learning. She is
        very good at it! Give her some time and you will never be confised with
        companypolicies ever again
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
