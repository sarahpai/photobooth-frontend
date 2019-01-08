import React, { Component } from 'react';
import './App.css';
import Photobooth from './Photobooth'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='navbar'>
          <h1>Photobooth App</h1>
        </div>
        <Photobooth />
      </div>
    );
  }
}

export default App;
