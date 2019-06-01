import React, { Component } from 'react';
import '../../src/App.css';

class createChallenge extends Component {
  state = {
    userName: " ",
    park: " ",
    time: " "
  }
handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  })
}
handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
}
render () {
    return (
    <div className="container">
    <form onSubmit={this.handleSubmit} className="white">
      <h5 className="grey-text text-darken-3">Create Challenge</h5>
      <div className="input-field">
        <label htmlFor="userName">User Name</label>
        <input type="text" id="userName" onChange={this.handleChange}/>
      </div>
      <div className="input-field">
        <label htmlFor="park">Park</label>
        <input type="text" id="park" onChange={this.handleChange}/>
      </div>
      <div className="input-field">
        <label htmlFor="time">Time</label>
        <input type="text" id="time" onChange={this.handleChange}/>
      </div>
        <button className="btn pink lighten-1 z-depth-0">Create Challenge</button>
    </form>
    </div>
    )
  }
}
  
  export default createChallenge;