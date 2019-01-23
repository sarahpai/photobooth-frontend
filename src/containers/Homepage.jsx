import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import withAuth from '../components/withAuth'
import '../css/homepage.css'
import '../images/lense.png'
 

const Homepage = ({username}) => {


	
	return (
		<div className="hp-wrapper">
			<h3 id="username">Welcome {username}</h3>
			<br></br>
			<h1 id="title">PHOTO</h1>
			<br></br>
			<h1 id="name" >booth app</h1>
			<Link id="button-image" to="/photobooth"><button type="submit">Let's begin the photobooth</button></Link>
			<Link id="gallery-button" to="/gallery"><button type="submit">gallery</button></Link>
		</div>
	)
}

const mapStateToProps = (state) => ({
	
	username: state.userReducer.user.username,
	full_name: state.userReducer.user.full_name,
	email: state.userReducer.user.email,
	
})
export default withAuth(connect(mapStateToProps)(Homepage));