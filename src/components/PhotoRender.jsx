import React from 'react';
import {connect} from 'react-redux';
import { resetPhotoAction } from '../actions/photos'
import '../css/photoRender.css'

import Masonry from 'react-masonry-component';


class PhotoRender extends React.Component {

	render() {
		console.log(this.props);

		const frame = this.props.frames.flatMap((f) => {  
			return (
				f.map((f) => {
					return (f)
				})
			)
		})
			
		const frameChild = frame.map((frame, index) => {
			return (
			

				<img className="frameImage" alt="frameImage" key={index}  src={frame} />
				
			)
		})
			
		const imageChild = this.props.photos.map((p, index) => {
			return (
		
				<img className="image" alt="photoImage" style={{ top: `${index * 261.34}px` }} key={index} src={p} />
			
			);
		});

	return (
			// <Masonry
			// 	className={'my-gallery-class'}
			// 	// elementType={'ul'}
			// 	updateOnEachImageLoad={false}
			// >
		<>
			<div className="photo-container">

				{frameChild}
			{imageChild}
			</div>
			</>
			// </Masonry>
			)
	}

}


function mapStateToProps(state) {
	return {
		photos: state.photoReducer.photos,
		frames: state.photoReducer.frames,
		// frame: state.frameReducer.selected_frame
	}
}

function mapDispatchToProps(dispatch) {
	return {
		resetPhoto: () => { dispatch(resetPhotoAction()) },
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(PhotoRender);