import React from 'react';
import {connect} from 'react-redux';
// import html2canvas from 'html2canvas'

const PhotoRender=(props) =>{
	
	const handleSubmit = (e) => {
		console.log(e.target);
		
	}



	return (
		<div>
			{props.photos.map((photo, index) => {
				return (
					<span key={index} style={{ float: "left" }}>
						<img id="pic" alt="images" src={photo} width="300px" height="300px" />
					</span>
				)
			})}
			{props.photos.length === 4 ? <> <input className="email-input" type="text" placeholder="enter your email address" style={{ zIndex: -1 }}  /><button onClick={(e)=>handleSubmit(e)} >SUBMIT</button> </> : null} 
		</div>
	)
	// canvasCapture=()=>{
	// 	html2canvas(document.body, {
	// 	  onrendered: function (canvas) {
	// 		('all-images').html("");
	// 		('all-images').append(canvas)
	// 	  }
	// 	})
	//   }
}


function mapStateToProps(state) {
	return {
		photos: state.photoReducer.photos
	}
}

export default connect(mapStateToProps,null)(PhotoRender);