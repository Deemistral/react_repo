import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 10,
    savedTemp: "",
    mode: "current"
  }
  incrementMe = () =>{
    let newCount = this.state.count + 1;
      this.setState({count:newCount})
      
      
  }
  decrementMe =()=> {
    let newcount = this.state.count - 1;
    this.setState({count:newcount})
  }
  saveTemp =()=> {
  	let newcount = this.state.count ;
    this.setState({savedTemp: newcount})
  }
  lastSaved=()=> {
  	this.setState({mode: "saved"})
  }
  return=()=> {
    this.setState({mode: "current"})
  }

  
  render(){
    if(this.state.mode === "current"){
      return(
        <div className="app-container ">
        <div className="temperature-display-container">
          <div className={"temperature-display " +(this.state.count >=15 ? "hot":"cold")}>
            {this.state.count}C
          </div>
        </div>
        <div className="button-container">
          <button onClick={this.state.count <=29 ? this.incrementMe:null}>+</button>
          <button onClick={this.state.count >0 ? this.decrementMe: null}>-</button>
          <button onClick={this.saveTemp}>saveTemp</button>
          <button onClick={this.lastSaved}>Last</button>
        </div>
      </div>
      );
    }else {
      return(
        <div className="app-container ">
        <div className="temperature-display-container">
          <div className={"temperature-display " +(this.state.count >=15 ? "hot":"cold")}>
            {this.state.savedTemp}C
          </div>
        </div>
        <div className="button-container">
          <button onClick={this.return}>return</button>
        </div>
      </div>
      );
    }
    
  }
  
}

export default App;
