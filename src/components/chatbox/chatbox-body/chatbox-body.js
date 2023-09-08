import "./chatbox-body.scss";
import React, { useEffect, useRef } from "react";

export default function ChatboxBody(props) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.messageList]);

  return (
    <div className="chatbox-body">
      <div className="chatbox-body-reply-message">
        <div className="chatbox-body-message-avatar">
          <div className="bot"></div>
        </div>
        <p className=".chatbox-body-reply-message-content-text">
          Hi, I'm Chanakya. How can I help you?
        </p>
      </div>
      {props.messageList.map((message, index) => {
        return (
          <div key={index}>
            <div className="chatbox-body-messages">
              <div className="chatbox-body-question-message">
                <div className="chatbox-body-message-avatar">
                  {" "}
                  <div className="user"></div>
                </div>
                <p>{message.question}</p>
              </div>
              <div className="chatbox-body-reply-message">
                <div className="chatbox-body-message-avatar">
                  <div className="bot"></div>
                </div>
                <p className=".chatbox-body-reply-message-content-text">
                  {message.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}
