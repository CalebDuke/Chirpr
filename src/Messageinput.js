import React from "react";

class MessageInput extends React.Component {
  constructor() {
    super();
    this.state = {
      textvalue: ""
    };
  }
  handleChirp(e) {
    this.setState({ textvalue: e.target.value });
  }
  //class components need a render method wrapping the return
  render() {
    return (
      <div className="MessageInput">
        <input
          type="text"
          placeholder="What's ON Yo Mind bB???"
          onChange={e => this.handleChirp(e)}
        />
        <h1>{this.state.textvalue}</h1>
      </div>
    );
  }
}

export default MessageInput;
