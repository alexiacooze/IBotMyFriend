import "./App.scss";
import cleverAPI from "./utils/appConfig";
import { Component } from "react";
import MessageForm from "./components/MessageForm/MessageForm";

class App extends Component {
  state = {
    message: "Hello",
    cleverReply: "",
    isTyping: null,
  };

  handleSubmit = (event) => {
    // 1. sets the state of message to our user's input

    // 2. This passes our user's message to the API then get the reply from the API
    cleverAPI.cleverReply(this.state.message).then((response) => {
      this.setState({
        cleverReply: response.data.output,
      });
      console.log(this.state.cleverReply);
    });

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
    return (
      <div>
        <MessageForm />
        <p>{this.state.cleverReply}</p>
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    );
  }
}

export default App;
