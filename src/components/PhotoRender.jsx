import React from 'react';
import {connect} from 'react-redux';
// import html2canvas from 'html2canvas'


const PhotoRender=(props) =>{
	return (
		<div>
			{props.photos.map((photo, index) => {
				return (
					<span key={index} style={{ float: "left" }}>
						<img alt="images" src={photo} width="400px" height="400px" />
					</span>
				)
			})}
			{props.photos.length === 4 ? <> <input className="he" type="text" placeholder="email@gmail.com" style={{ zIndex: -1 }}  /><button>SUBMIT</button> </> : null} 
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