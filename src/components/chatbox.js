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
      {/*Introductory Message*/}.
      <div className="chatbox-body">
        <div className="chatbox-body-reply-message">
          <div className="chatbox-body-message-avatar"></div>
          <p className=".chatbox-body-reply-message-content-text">
            Hi, I'm Pam. How can I help you?
          </p>
        </div>
        {/*---------------Loop Starts-----------------*/}.
        <div className="chatbox-body-messages">
          <div className="chatbox-body-question-message">
            <div className="chatbox-body-message-avatar"></div>
            <p>Can you please tell me my name?</p>
          </div>
          <div className="chatbox-body-reply-message">
            <div className="chatbox-body-message-avatar"></div>
            <p className=".chatbox-body-reply-message-content-text">
              Your name is Anirban Sinha
            </p>
          </div>
        </div>
        <div className="chatbox-body-messages">
          <div className="chatbox-body-question-message">
            <div className="chatbox-body-message-avatar"></div>
            <p>What is my Role?</p>
          </div>
          <div className="chatbox-body-reply-message">
            <div className="chatbox-body-message-avatar"></div>
            <p className=".chatbox-body-reply-message-content-text">
              Your Role is SDE 3
            </p>
          </div>
        </div>
        <div className="chatbox-body-messages">
          <div className="chatbox-body-question-message">
            <div className="chatbox-body-message-avatar"></div>
            <p>Who is my Manager?</p>
          </div>
          <div className="chatbox-body-reply-message">
            <div className="chatbox-body-message-avatar"></div>
            <p className=".chatbox-body-reply-message-content-text">
              Jagadish Chandra Bose
            </p>
          </div>
        </div>
        {/*---------------Loop Ends-----------------*/}.
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
