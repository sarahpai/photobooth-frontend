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
    //this.props.loginUser is coming from action creator & used in connect
		this.props.loginUser(this.state.username, this.state.password);
		this.setState({username:"", password: ""})
	}

	render() {
	return this.props.loggedIn ? (
		<Redirect to="/homepage" />
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

const mapStateToProps = ({ userReducer: { authenticatingUser, failedLogin, loggedIn, error } }) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn
})


export default withRouter(connect(mapStateToProps, { loginUser })(LoginForm))
//loginUser is the function that we are taking from action creator