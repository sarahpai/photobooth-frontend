import React from 'react';
import {connect} from 'react-redux';
import '../css/photobooth.css'
import { resetPhotoAction } from '../actions/photos'
import { Link } from 'react-router-dom';
// import minionFrame from '../images/minion+frame.png'

const PhotoRender=(props) =>{
	console.log(props);
	
	const handleSubmit = (e) => {
		// console.log(e.target);
		props.resetPhoto() 

	}

	

	return (

		// props.photos.length === 1 ? createDiv() : null
		<div className="photo-container">
			{props.photos.map((photo, index) => {
				return (
				
					<div className="photo" key={index}  >
					<span key={index} style={{ float: "left" }}>
						<img id="pic" src={photo}  />
					</span>
					</div>
				

				)			
			}
			)
		}
			{props.photos.length === 4 ? <> <input className="email-input" type="text" placeholder="enter your email address" style={{ zIndex: -1 }} />
				<Link to="/photobooth"><button onClick={(e) => handleSubmit(e)}
					type="submit">submit</button></Link>
				</> : null} 
		</div>
	)
}


function mapStateToProps(state) {
	return {
		photos: state.photoReducer.photos,
		frame: state.frameReducer.selected_frame
	}
}

function mapDispatchToProps(dispatch) {
	return {
		resetPhoto: () => { dispatch(resetPhotoAction()) }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(PhotoRender);