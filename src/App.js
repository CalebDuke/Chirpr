import React from "react";
import Header from "./Header";
import Messageinput from "./Messageinput";
import ChirpDisplay from "./ChirpDisplay";
// import ButtonSubmit from "./ButtonSubmit";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      message: "",
      chirpArray: [
        { name: "Josh", message: "Sup peeps" 
      },
        { name: "Tony", message: "They're great" 
      },
        { name: "Beach Boi", message: "We out here surfin"
      },
       { name: " ", message: " "}
      ]
    };
  }
  handleName(e) {
    this.setState({name: e.target.value });
  }
  handleChirp(e) {
    this.setState({ message: e.target.value });
  }
  //class components need a render method wrapping the return
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header />
          <input
            className="name-input"
            type="text"
            placeholder="Name"
            onChange={e => this.handleName(e)}
            value={this.state.name}
          />
          <input
            className="msg-input"
            type="text"
            placeholder="Message"
            onChange={e => this.handleChirp(e)}
            value={this.state.message}
          />
          <h1>{this.state.message}</h1>
          {/* <Messageinput /> */}
          {/* <ButtonSubmit /> */}
          <button>Submit</button>
        </div>
        <ChirpDisplay chirp={this.state.chirpArray} />
      </React.Fragment>
    );
  }
}

export default App;
