import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./chatbox-body.scss";
import React, { useEffect, useRef } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function ChatboxBody({ messageList, loading }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  console.log(loading, "loading");

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

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
      {messageList?.map((message, index) => {
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
                <ol className="chatbox-body-reply-message-content-text">
                  {message.answer.map((item) => {
                    return (
                      <li key={index} style={{ margin: "10px 0" }}>
                        {item} {"\n"}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        );
      })}
      {loading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100px",
            padding: "5px",
          }}
          className="chatbox-body-reply-message"
        >
          Loading <FontAwesomeIcon icon={faSpinner} />
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
