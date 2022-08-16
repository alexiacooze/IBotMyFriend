import "./App.scss";
import cleverAPI from "./utils/appConfig";
import { Component } from "react";
import MessageForm from "./components/MessageForm/MessageForm";
import MessageList from "./components/MessageList/MessageList";
import iPhone from "./assets/iphone-mockup.png";

class App extends Component {
  state = {
    chatHistory: [],
    isTyping: false,
  };

  // Handling Data
  handleSubmit = (e, message) => {
    e.preventDefault();
    // Params: (e, message) -> message is our user's input that's getting passed from MessageForm.js

    // This passes our user's message to the API then get the reply from the API
    cleverAPI.cleverReply(message).then((response) => {
      this.setState({
        // Take all previous chat history, and append a new object with the message/reply pair.
        chatHistory: [
          ...this.state.chatHistory,
          { message: message, reply: response.data.output },
        ],
        isTyping: true,
      });
    });
  };

  componentDidMount() {}

  render() {
    console.log(this.state.chatHistory);
    return (
      <div className="app">
        <div className="app__ui">
          <MessageForm handleSubmit={this.handleSubmit} />
          <MessageList
            chatHistory={this.state.chatHistory}
            isTyping={this.state.isTyping}
          />
        </div>
      </div>
    );
  }
}

export default App;
