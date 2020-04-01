import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      words: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" value={this.state.words} onChange={this.updateWords.bind(this)} />
        <p className="repeater">{this.state.words}</p>
      </div>
    );
  }
  updateWords(event){
    this.setState({
      words: event.target.value
    });
  }
}

export default App;
