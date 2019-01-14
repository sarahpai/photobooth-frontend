
import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Photobooth from './components/Photobooth.jsx';
import Homepage from './containers/Homepage.jsx';
import LoginForm from './components/LoginForm.jsx';
import NotFound from './components/notFound.jsx';
import PhotoTake from './components/PhotoTake.jsx';



const App = props => {
  console.log('%c APP Props: ', 'color: firebrick', props) 
    return (
      <>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          
          <Route exact path='/photobooth' component={Photobooth}/>
          <Route exact path='/homepage' component={Homepage}/>
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/photobooth/take' component={PhotoTake} />
          <Route component={NotFound}/>
        </Switch>
      </>
    )
  }


export default withRouter(App);
