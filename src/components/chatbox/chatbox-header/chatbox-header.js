import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./chatbox-header.scss";

export default function ChatboxHeader() {
  return (
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
  );
}
