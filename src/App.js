import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {
    username:'Guest'
  }

  updateNameHandler = (event) =>{
    this.setState(
      { username: event.target.value}
    )
  }
  render() {
    return (
      <div className="App">
        <h1>Hello! What's your name?</h1>
        <UserInput username = {this.state.username} updateUsername={this.updateNameHandler} />
        <UserOutput 
          username = {this.state.username}>
        </UserOutput>
      </div>
    );
  }
}

export default App;
