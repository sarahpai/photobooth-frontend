import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import withAuth from '../components/withAuth'
import '../css/homepage.css'
import '../images/lense.png'
 

const Homepage = ({username, full_name, email}) => {


	
	return (
		<div className="hp-wrapper">
			<h1 id="title">PHOTO</h1>
			<br></br>
			<h1 id="name" >booth app</h1>
			<br></br>
			<h3 id="username">Welcome {username}</h3>
			<Link id="button-image" to="/photobooth"><button type="submit">Let's begin the photobooth</button></Link>
			<Link id="button" to="/gallery"><button type="submit">gallery</button></Link>
		</div>
	)
}

const mapStateToProps = ({ userReducer: { user: { username, full_name, email } } }) => ({
	username,
	full_name,
	email
	
})

export default withAuth(connect(mapStateToProps)(Homepage));