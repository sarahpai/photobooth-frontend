import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { loginUser } from '../actions/users';
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import '../css/loginForm.css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'

class LoginForm extends Component {
	
	//use this local state since we do not want to broadcast this info as a global state to redux
	state = {
		username: "",
		password: ""
	}

	handleChange = (event) => {
		event.preventDefault();
		this.setState({ [event.target.name]: event.target.value })
	}

	handleLoginSubmit = (event) => {
		//this.props.loginUser is coming from action creator & used in connect
		event.preventDefault();
		this.props.loginUser(this.state.username, this.state.password);
		this.setState({ username: "", password: "" })
	}

	render() {
		return this.props.loggedIn ? (
			<Redirect to="/homepage" />
		) : (
				<div id="wrapper">
					<div id="start">

						<div className="inner">
							<div className="names">
								<hr className="small"></hr>
								<div>
									<h1>PhotoBooth</h1>
									<form onSubmit={this.handleLoginSubmit} className="col s12" >
										<div className="row">
										{ !this.props.failedLogin ? null : this.props.error }
										<div className="form-field col s6">
										<i className="material-icons prefix">account_circle</i>
										<input onChange={this.handleChange} value={this.state.username} name="username" id="icon_prefix" type="text" className="validate" />
										<label htmlFor="icon_prefix">Username</label>
										</div>
										
										<div className="form-field col s6">
										<i className="material-icons prefix">lock</i>
										<input  onChange={this.handleChange} value={this.state.password} id="password" type="password" name="password" className="validate"/>
										<label htmlFor="password">Password</label>
										</div>
									</div>
							     
								  
									<button className="btn-large-red">Login</button>
								</form>
								</div>
							</div>
						</div>
					</div>
</div>
			
			)
	}
} 

const mapStateToProps = ({ userReducer: { authenticatingUser, failedLogin, loggedIn, error } }) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn
})


export default withRouter(connect(mapStateToProps, { loginUser })(LoginForm))
//loginUser is the function that we are taking from action creator