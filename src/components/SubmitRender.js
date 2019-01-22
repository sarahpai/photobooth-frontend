import React from 'react'
import {connect} from 'react-redux';
import html2canvas from 'html2canvas'
import '../css/submitRender.css'
import { submitPhotoAction, resetPhotoAction } from '../actions/photos'
import { Redirect, Link } from 'react-router-dom'
import Axios from 'axios';

let frame;
let imageData;
let newRender;
let images;
// let base64Img
class SubmitRender extends React.Component {
	
	// componentDidMount() {
	// base64Img = require('base64-img');
	// }


	handleSubmit = (e) => {	
		// debugger
	newRender = document.querySelector(".captured");
	images = document.querySelector('.captureFrame')
		html2canvas(images, { 
			width: 500,
			height: 800
		}).then((canvas) => {
			var dataImage = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
			newRender.appendChild(canvas)
			return Axios({
				method: 'POST',
				baseURL: `${process.env.REACT_APP_API_ENDPOINT}/api/v1/photos`,
				data: {
					photo: {

						photo: dataImage,
						like: 0,
						user_id: this.props.user
					
					}
				},
				success: function (data) {
					console.log("upload successful")
				}
			}).catch(function (error) {
				alert(error)
			})
		})
		this.props.resetPhoto()
	}
	

	render() {
		if (this.props.frames === undefined) {
			
		return <Redirect to="/photobooth" />
		} else {

			frame = this.props.frames.flatMap((f) => {  
				debugger
				return (
					f.map((f) => {
						return f
					})
				)
			})
			console.log(frame);
		
			imageData = this.props.photos.map((p)=> {
				return ( p)
			})
		}


		return (
			<>

			<div id="mail">
			<input type="submit" value="Take Screenshot of Div" onClick={(e)=>this.handleSubmit(e)} />
			<form>
			<input type="hidden" value=""  />
	<Link  to="/photobooth"><button type="submit">Let's begin the photobooth</button></Link>
		
			</form>
				</div>
			
				  <div className="captureFrame" >
						 <img alt="frame1" src={frame[0]} />
						 <img id="image1" alt="image1" src={imageData[0]}/>
						 <img alt="frame2" src={frame[1]} />
						 <img id="image2" alt="image2" src={imageData[1]}/>
						 <img alt="frame3" src={frame[2]} />
						 <img id="image3" alt="image3" src={imageData[2]}/>
						 <img alt="frame4" src={frame[3]} />
						 <img id="image4" alt="image4" src={imageData[3]}/>
				 </div>
			<div className="captured">
			
			</div>

			</>
			  )
		}
};




function mapStateToProps(state) {
	console.log(state.userReducer.user.id);
	
	return {
		photos: state.photoReducer.photos,
		frames: state.photoReducer.frames,
		user: state.userReducer.user.id
		
	}
}


function mapDispatchToProps(dispatch) {
	return {
		submitPhoto: (photo, userId) => { dispatch(submitPhotoAction(photo, userId)) },
		resetPhoto: () => dispatch(resetPhotoAction()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SubmitRender);