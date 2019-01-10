import React, { Component } from 'react';
import './App.css';
import Photobooth from './components/Photobooth'
import Homepage from './containers/Homepage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <>
        <Router>
          <div>
          <Route exact path='/photobooth' component={Photobooth}/>
          <Route exact path='/homepage' component={Homepage}/>
          </div>
        </Router>
       
   </>
    );
  }
}

export default App;
