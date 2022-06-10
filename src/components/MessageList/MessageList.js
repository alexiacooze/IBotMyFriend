import "./MessageList.scss";

import React from "react";

function MessageList({ chatHistory, isTyping }) {
  return (
    <div className="messageList">
      {chatHistory.map((text, index) => {
        return (
          <div className="message" key={index}>
            <div className="message__userContainer">
              <p className="message__user">{text.message}</p>
            </div>

            <div className="botContainer">
              <p className="message__bot">{text.reply}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageList;
