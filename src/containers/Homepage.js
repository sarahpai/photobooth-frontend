import React from 'react'
// import Photobooth from '../components/Photobooth'
import { Link } from 'react-router-dom';

const Homepage = () => {
	return (
		<div>
			Welcome to Photobooth
		
			<Link to={`/photobooth`} className="nav-link">Click to Begin</Link>
		
		
		</div>
	)
}
export default Homepage;