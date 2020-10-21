import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	    this.state={isClick:false,paragraph:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"};
	    this.handleClick=this.handleClick.bind(this);
	};
	handleClick(){
		this.setState=(state => ({
      isClick: !state.isClick
    }));
	}

    render() {
	
    	return(
    		<div id="main">
				<button id="click" onClick={this.handleClick}>
        para
      </button>
      {this.state.isClick ? <p id="para">{this.state.paragraph}</p> : null}
    		</div>
    	);
    }
}


export default App;

