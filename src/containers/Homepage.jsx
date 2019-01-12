import React from 'react'
// import Photobooth from '../components/Photobooth'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import withAuth from '../components/withAuth'


const Homepage = ({username, full_name, email}) => {


	return (
		<div>
			<h1>Welcome {username}</h1>
			<br></br>
			<h1>Welcome {full_name}</h1>
			<br></br>
			<h1>Welcome { email }</h1>
		
			<Link to={`/photobooth`} className="nav-link">Click to Begin</Link>
		
		
		</div>
	)
}

const mapStateToProps = ({ userReducer: { user: { username, full_name, email } } }) => ({
	username,
	full_name,
	email
})

export default withAuth(connect(mapStateToProps)(Homepage));