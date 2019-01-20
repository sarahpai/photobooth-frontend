import React from 'react';
import {connect} from 'react-redux';
import '../css/photobooth.css'
import { resetPhotoAction } from '../actions/photos'
// import { Link } from 'react-router-dom';

const PhotoRender = (props) => {
	console.log(props.photos, props.frames);
	debugger
	
	// const handleSubmit = (e) => {
	// 	// console.log(e.target);
	// 	props.resetPhoto()

	// }


	
	return (
		<>
			{props.photo.map((p, index) => {
				return (
						<div key={index} className="captureFrame" style={{ top: `${index * 160}px`, background: `url(${p.frame})` }}>
							<div key={index} className="captureImage" style={{ background: `url(${p.image})` }}>
						</div>
					
						</div>
					)
				})
			}
			</>
		)
		
 


}


function mapStateToProps(state) {
	return {
		photos: state.photoReducer.photos,
		frames: state.photoReducer.frames,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		resetPhoto: () => { dispatch(resetPhotoAction()) }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(PhotoRender);