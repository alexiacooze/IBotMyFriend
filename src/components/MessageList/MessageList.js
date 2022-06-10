import "./MessageList.scss";

import React from "react";

function MessageList({ chatHistory }) {
  return (
    <div className="messageList">
      {chatHistory.map((text, index) => {
        return (
          <div key={index}>
            <p>{text.message}</p>
            <p>{text.reply}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MessageList;
