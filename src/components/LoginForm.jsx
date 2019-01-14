import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { loginUser } from '../actions/users';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import '../css/loginForm.css'
class LoginForm extends Component {
	
	//use this local state since we do not want to broadcast this info as a global state to redux
	state = {
		username: "",
		password: ""
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleLoginSubmit = (event) => {
		//this.props.loginUser is coming from action creator & used in connect
		this.props.loginUser(this.state.username, this.state.password);
		this.setState({ username: "", password: "" })
	}

	render() {
		return this.props.loggedIn ? (
			<Redirect to="/homepage" />
		) : (
				<Grid textAlign='center' style={{ height: '100%', margin: '15%' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header id="header" as='h2' textAlign='center'>
						<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQa_zYEX4rbL-q4QxOiAqrRF2dI4jW8Fu9B4D0AJHFE8gfC2V' /> Log-in to your account
					</Header>
						<Form onSubmit={this.handleLoginSubmit}
							size='large'
							loading={this.props.authenticatingUser}
							error={this.props.failedLogin}
						>
						<Message error header={this.props.failedLogin ? this.props.error : null} />
						<Segment stacked>
							<Form.Input
								fluid icon='user'
								iconPosition='left'
								placeholder='username'
								name="username"
								onChange={this.handleChange}
								value={this.state.username}
							/>
							<Form.Input
								fluid icon='lock'
								iconPosition='left'
								placeholder='Password'
								type='password'
								name="password"
								onChange={this.handleChange}
								value={this.state.password}
							/>
							<Button id='button' fluid size='large'>
								Login
							</Button>
						</Segment>
						</Form>
						<Message>
							New to us? <a href='/signup'>Sign Up</a>
						</Message>
					</Grid.Column>
				</Grid>
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