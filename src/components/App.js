import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false
    };
  }

  render() {
    const handelClick = () => {
      this.setState({ view: true });
    };

    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={handelClick}>
          {this.state.view === true ? (
            <p id="para">
              Hello, I've learnt to use the full-stack evaluation tool. This
              makes me so happy
            </p>
          ) : null}
        </button>
      </div>
    );
  }
}

export default App;
