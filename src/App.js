import "./App.scss";
import cleverAPI from "./utils/appConfig";
import { Component } from "react";
import MessageForm from "./components/MessageForm/MessageForm";
import MessageList from "./components/MessageList/MessageList";
import iPhone from "./assets/iphone-mockup.png";

class App extends Component {
  state = {
    chatHistory: [],
    isTyping: null,
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
      });
    });
  };

  // Making things appear
  createMessage = () => {
    // 3. wait 500ms, then setState of isTyping to true (then the bot starts typing)
    // const animation = {
    // setTimeout(() => {this.setState({ isTyping: true })}, 500);
    // setTimeout(() => {this.setState({ isTyping: false})}, 2500)
    //}
    // 4. display typing animation for 2000ms, once that ends, setState of isTyping to false
    // 5. then take the state of cleverReply and create an element on the DOM
    // <p>{this.state.cleverReply</p>
  };

  componentDidMount() {}

  render() {
    console.log(this.state.chatHistory);
    return (
      <div className="app">
        <div className="app__ui">
          {/* <div className="app__mockup">
            <img
              className="app__mockup-iphone"
              src={iPhone}
              alt="iPhone Mockup"
            />
          </div> */}
          <MessageForm handleSubmit={this.handleSubmit} />
          <MessageList />
        </div>
      </div>
    );
  }
}

export default App;
