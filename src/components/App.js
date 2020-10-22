import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	    this.state={isClick:false};
	    
	};
	handleClick=()=>{
		this.setState({isClick:true});
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

