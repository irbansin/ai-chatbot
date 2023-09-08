import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./chatbox.scss";
import ChatboxHeader from "./chatbox-header/chatbox-header";
import ChatboxBody from "./chatbox-body/chatbox-body";
import { useState } from "react";

export default function Chatbox() {
  const [question, setQuestion] = useState("");
  const [messageList, setMessageList] = useState([
    {
      question: "Can you please tell me my name?",
      answer: "Your name is Eva",
    },
    {
      question: "What is my Role?",
      answer: "Your Role is SDE 3",
    },
    {
      question: "Who is my Manager?",
      answer: "Jagadish Chandra Bose",
    },
  ]);

  function sendText(event) {
    setMessageList([
      ...messageList,
      { question: question, answer: "Answer from OpenAI" },
    ]);
    setQuestion("");
  }

  return (
    <div className="chatbox">
      <ChatboxHeader></ChatboxHeader>
      <ChatboxBody messageList={messageList}></ChatboxBody>
      <div className="chatbox-footer">
        <input
          value={question}
          type="text"
          placeholder="Type your message here..."
          onChange={(event) => setQuestion(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              sendText();
            }
          }}
        />
        <button onClick={sendText}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
}
