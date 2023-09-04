import "./chatbox-body.scss";

export default function ChatboxBody(props) {
  return (
    <div className="chatbox-body">
      <div className="chatbox-body-reply-message">
        <div className="chatbox-body-message-avatar">
          <div className="bot"></div>
        </div>
        <p className=".chatbox-body-reply-message-content-text">
          Hi, I'm Pam. How can I help you?
        </p>
      </div>
      {/*---------------Loop Starts-----------------*/}.
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
      {/* <div className="chatbox-body-messages">
          <div className="chatbox-body-question-message">
            <div className="chatbox-body-message-avatar">
              {" "}
              <div className="user"></div>
            </div>
            <p>Can you please tell me my name?</p>
          </div>
          <div className="chatbox-body-reply-message">
            <div className="chatbox-body-message-avatar">
              <div className="bot"></div>
            </div>
            <p className=".chatbox-body-reply-message-content-text">
              Your name is Eva
            </p>
          </div>
        </div> */}
      {/*---------------Loop Ends-----------------*/}.
      {/* <div className="chatbox-body-messages">
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
        </div> */}
    </div>
  );
}
