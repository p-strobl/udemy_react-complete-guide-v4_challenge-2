import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    inputFieldText: "",
    inputFieldLength: null
  };

  inputHandler = event => {
    this.setState({
      inputFieldText: event.target.value,
      inputFieldLength: event.target.value.length
    });
  };

  shwoCounter = () => {
    return this.state.inputFieldLength >= 1 ? this.state.inputFieldLength : "";
  };

  deleteCharHandler = index => {
    let currentInputText = this.state.inputFieldText.split("");
    let currentInputLength = this.state.inputFieldLength - 1;
    currentInputText.splice(index, 1);
    this.setState({
      inputFieldText: currentInputText.join(""),
      inputFieldLength: currentInputLength
    });
  };

  render() {
    const inputStyle = {
      marginTop: "20px"
    };

    let inputFieldText = this.state.inputFieldText.split("");
    let chars = (
      <div>
        {inputFieldText.map((text, index) => {
          return (
            <CharComponent
              text={text}
              key={index}
              click={() => this.deleteCharHandler(index)}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <input
          type="text"
          style={inputStyle}
          onChange={event => this.inputHandler(event)}
          value={this.state.inputFieldText}
        />
        <p>{this.shwoCounter()}</p>
        <ValidationComponent inputLength={this.state.inputFieldLength} />
        <div>{chars}</div>
      </div>
    );
  }
}

export default App;
