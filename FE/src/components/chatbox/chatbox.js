import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./chatbox.scss";
import ChatboxHeader from "./chatbox-header/chatbox-header";
import ChatboxBody from "./chatbox-body/chatbox-body";
import React, { useState } from "react";
import chatService from "../../services/chat.service";

const initialState = {
  question: "",
  messageList: [],
};

export default function Chatbox({ toggleChatbox }) {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  async function sendText() {
    setState({
      ...state,
      question: "",
    });
    setLoading(true);
    let response = await chatService.askQuestion(state.question);
    response = await response.json();

    if (response) {
      let responseArr = [];
      for (let i = 0; i < response.length; i++) {
        const formattedTextArray = response[i].pageContent
          .split("\n")
          .filter(Boolean);
        responseArr.push(formattedTextArray.join(""));
      }
      // setAnswer(JSON.stringify(response)); // Update the answer state
      const newMessageList = [
        ...state.messageList,
        { question: state.question, answer: responseArr }, // Use answer state here
      ];

      setState({
        ...state,
        question: "",
        messageList: newMessageList,
      });
      setLoading(false);
    }
  }

  return (
    <div className="chatbox">
      <ChatboxHeader toggleChatbox={toggleChatbox}></ChatboxHeader>
      <ChatboxBody
        messageList={state.messageList}
        loading={loading}
      ></ChatboxBody>
      <div className="chatbox-footer">
        <input
          autoFocus
          value={state.question}
          type="text"
          placeholder="Type your message here..."
          onChange={(event) =>
            setState({
              ...state,
              question: event.target.value,
            })
          }
          onKeyUp={(event) => {
            if (event.key === "Enter" && state.question.trim() !== "") {
              sendText();
            }
          }}
        />
        <button
          onClick={() => {
            if (state.question.trim() !== "") {
              sendText(); // Valid question check
            }
          }}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
}
