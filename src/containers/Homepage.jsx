import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import withAuth from '../components/withAuth'
import '../css/homepage.css'

const Homepage = ({username, full_name, email}) => {

	return (
		<>
			<h1>Welcome username: {username}</h1>
			<br></br>
			<h1>fullname is: {full_name}</h1>
			<br></br>
			<h1>email: {email}</h1>
			<Link to="/photobooth"><button type="submit">Let's begin the photobooth</button></Link>		</>
	)
}

const mapStateToProps = ({ userReducer: { user: { username, full_name, email } } }) => ({
	username,
	full_name,
	email
})

export default withAuth(connect(mapStateToProps)(Homepage));