import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./chatbox.scss";

export default function Chatbox() {
  return (
    <div className="chatbox">
      <div className="chatbox-header">
        <div className="chatbox-header-avatar">
          <img
            src="https://www.epam.com/content/dam/epam/homepage/epam_logo_light.svg"
            alt="avatar"
          />
        </div>
        <div className="chatbox-header-text">
          <h1>Chat with Pam</h1>
        </div>
        <div className="chatbox-header-close">
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
      <div className="chatbox-body">
        <div className="chatbox-body-messages">
          <div className="chatbox-body-message">
            <p>Hi, I'm Pam. How can I help you?</p>
          </div>
        </div>
        <div className="chatbox-body-input">
          <input type="text" placeholder="Type your message here..." />
          <button>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
}
