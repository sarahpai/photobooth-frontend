import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserAction } from '../actions/actions';

class LoginForm extends Component {
	state = {
		username: "",
		password: ""
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addUser(this.state.username, this.state.password);
	}

	render() {
		return (
			<>
			<form onSubmit={this.handleSubmit}>
				<label>Username: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input></label>
				<label>Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange}></input></label>
				<input type='submit'/>
				</form>
				{this.state.username}
			</>
		)
	}
} 

function mapDispatchToProps(dispatch) {
	return {
		addUser: (username, password)=>dispatch(addUserAction(username,password)) ///username & password is the payload data, addUserAction is the action object
	}
}

export default connect(null,mapDispatchToProps)(LoginForm);