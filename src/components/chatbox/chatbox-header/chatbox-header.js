import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./chatbox-header.scss";

export default function ChatboxHeader({ toggleChatbox }) {
  return (
    <div className="chatbox-header">
      <div className="chatbox-header-avatar">
        <img
          src="https://www.echanakya.com/content/dam/echanakya/homepage/echanakya_logo_light.svg"
          alt="avatar"
        />
      </div>
      <div className="chatbox-header-text">
        <p>Chat with Chanakya</p>
      </div>
      <div className="chatbox-header-close" onClick={toggleChatbox}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
}
