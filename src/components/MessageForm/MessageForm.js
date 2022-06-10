import "./MessageForm.scss";
// import React from "react";
import { Component } from "react";
import sendIcon from "../../assets/send-icon.svg";

class MessageForm extends Component {
  state = {
    message: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  handleReset = () => {
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <div>
        <form
          className="messageForm"
          onSubmit={(event) => {
            this.props.handleSubmit(event, this.state.message);
            this.handleReset();
          }}
        >
          <input
            className="messageForm__input"
            type="text"
            name="message"
            id="message"
            placeholder="iMessage"
            onChange={this.handleChange}
            value={this.state.message}
          ></input>
          <button className="messageForm__send" type="submit">
            <img src={sendIcon} alt="Send Icon"></img>
          </button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
