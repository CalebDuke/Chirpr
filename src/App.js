import React from "react";

class App extends React.Component {
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
      <div className="App">
        <input
          type="text"
          placeholder="Name"
          onChange={e => this.handleChirp(e)}
        />
        <h1>{this.state.textvalue}</h1>
      </div>
    );
  }
}

export default App;
