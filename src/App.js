import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Photobooth from './components/Photobooth';
import Homepage from './containers/Homepage';
import LoginForm from './components/LoginForm';
import NotFound from './components/notFound';

class App extends Component {
  render() {
    return (
      <>
        <Switch>

        <Route exact path="/" render={()=><Redirect to="/login"/>}/>
        <Route exact path='/photobooth' component={Photobooth}/>
        <Route exact path='/homepage' component={Homepage}/>
        <Route exact path='/login' component={LoginForm} />
        <Route component={NotFound}/>

        </Switch>
       
   </>
    );
  }
}

export default withRouter(App);
