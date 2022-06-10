import "./MessageForm.scss";

import React from "react";

function MessageForm() {
  return (
    <div>
      <form className="messageForm">
        <input
          className="messageForm"
          type="text"
          name="message"
          id="message"
          placeholder="iMessage"
        ></input>
      </form>
    </div>
  );
}

export default MessageForm;
