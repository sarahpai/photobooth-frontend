import React from 'react';
import {connect} from 'react-redux';
import '../css/photoTake.css'
import { resetPhotoAction } from '../actions/photos'

import Masonry from 'react-masonry-component';


class PhotoRender extends React.Component {
	// console.log(props.photos, props.frames);
	
	
	// const handleSubmit = (e) => {
	// 	// console.log(e.target);
	// 	props.resetPhoto()

	// }

	// const frame = props.frames.flatMap((f) => {  
	// 	return (
	// 		f.map((f, index) => {
	// 			return (f , index)
	// 		})
	// 	)
	// })
	// console.log(frame);

	// const imageData = props.photos.map((p)=> {
	// 	return ( p)
	// })

	// {props.photo.map((p, index) => {
	// 	return (
	// 			<div key={index} className="captureFrame" style={{ top: `${index * 160}px`, background: `url(${p.frame})` }}>
	// 				<div key={index} className="captureImage" style={{ background: `url(${p.image})` }}>
	// 				</div>
	// 			</div>
	// 		)
	// 	})
	// }
	
	// const childElements = this.props.photos.map((p, index) => {
	// 	return (
	// 			<li className="image-element-class">
	// 				<img alt="file"  key={index} src={p} />
	// 			</li>
	// 		)
	// 	})
		
	// 	const childFrames = frame.map((f, index) => {
	// 		return (
	// 			<li className="image-frame-class">
	// 			<img alt="frame" key={index} src={f} />
	// 			</li>
	// 	)
	// })

	
		
		

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
				<img alt="frameImage" key={index} src={frame} />
			)
		})
			
		const childElements = this.props.photos.map((p, index) => {
			return (
				// <li className="image-element-class">
				<img alt="photoImage" key={index} src={p} />
				// </li>
			);
		});

	return (
			<Masonry
				className={'my-gallery-class'}
				elementType={'ul'}
				updateOnEachImageLoad={false}
			>
				{childElements}
				{frameChild}
			</Masonry>
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
		resetPhoto: () => { dispatch(resetPhotoAction()) }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(PhotoRender);