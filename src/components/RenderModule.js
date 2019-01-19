import React from 'react'
import {connect} from 'react-redux';

const RenderModule = (props) => {
	console.log(props);
	
	let frame = props.frame.flatMap((f) => {  
		return f
	})
	console.log(frame);
	
	return (
		<>
			{frame.map((f, index)=> {
			return (
				<div key={index} className="captureFrame" style={{ top: `${index * 160}px`, background: `url(${f})` }}>
					</div>
					)
				})}
		{ props.photos.map((p, index) => {
			return( 
				<div key={index} className="captureImage" style={{top: `${index * 160}px`, background: `url(${p})` }}>
				</div>
				   )
				})
		}
		</>
			)
};




function mapStateToProps(state) {
	return {
		photos: state.photoReducer.photos
	}
}

export default connect(mapStateToProps, null)(RenderModule);