import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { loginUser } from '../actions/users';
import { Button, Form, Segment, Message } from 'semantic-ui-react'
// import {  SET_CURRENT_USER, AUTHENTICATING_USER, FAILED_LOGIN } from '../reducers/types.js';
// import {usersReducer} from '../reducers/userReducer';

class LoginForm extends Component {
	
	//use this local state since we do not want to broadcast this info as a global state to redux
	state = {
		username: "",
		password: ""
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleLoginSubmit = (event) => {
		event.preventDefault();
		this.props.loginUser(this.state.username, this.state.password);
		this.setState({username:"", password: ""})
	}

	render() {
	return this.props.loggedIn ? (
		<Redirect to="/profile" />
		) : (
		<Segment>
			<Form
			onSubmit={this.handleLoginSubmit}
			size="mini"
			key="mini"
			loading={this.props.authenticatingUser}
			error={this.props.failedLogin}
			>
			<Message error header={this.props.failedLogin ? this.props.error : null} />
			<Form.Group widths="equal">
				<Form.Input
				label="username"
				placeholder="username"
				name="username"
				onChange={this.handleChange}
				value={this.state.username}
				/>
				<Form.Input
				type="password"
				label="password"
				placeholder="password"
				name="password"
				onChange={this.handleChange}
				value={this.state.password}
				/>
			</Form.Group>
			<Button type="submit">Login</Button>
			</Form>
		</Segment>
		)
	}
} 

const mapStateToProps = (state) => {
  console.log("inside login", state)
  return{
      authenticatingUser: state.user.authenticatingUser,
      failedLogin: state.user.failedLogin,
      isLoggedIn: state.user.isLoggedIn,
      error: state.user.error
  }
}


export default withRouter(connect(mapStateToProps, { loginUser })(LoginForm))
