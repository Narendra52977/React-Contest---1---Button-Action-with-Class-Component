import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isClick: null };
  }
  handleClick = () => {
    this.setState({ isClick: <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p> });
  };

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick}>
          para
        </button>
        {this.state.isClick}
      </div>
    );
  }
}

export default App;
