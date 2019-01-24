import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import withAuth from '../components/withAuth'
import '../css/homepage.css'
import '../images/lense.png'
 

const Homepage = ({username}) => {


	
	return (
		<div className="hp-wrapper">
			<h3 id="username">Welcome {username} to</h3>
			<br></br>
			<h1 id="title">React</h1>
			<br></br>
			<h1 id="name" >Booth</h1>
			<div className="row">
			<a className="waves-effect waves-light btn blue-grey darken-2" href="/gallery" style={{marginLeft: "20px"}} ><i className="material-icons left">photo_library</i>Gallery</a>
			</div>
			<div className="row">
			<a className="waves-effect waves-light btn  black" href="/photobooth"><i className="material-icons left">camera_roll</i>Take photos</a>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	
	username: state.userReducer.user.username,
	full_name: state.userReducer.user.full_name,
	email: state.userReducer.user.email,
	
})
export default withAuth(connect(mapStateToProps)(Homepage));