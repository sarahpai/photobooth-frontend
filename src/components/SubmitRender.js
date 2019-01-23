import React from 'react'
import {connect} from 'react-redux';
import html2canvas from 'html2canvas'
import '../css/submitRender.css'
import { submitPhotoAction, resetPhotoAction } from '../actions/photos'
import { Redirect, Link, withRouter } from 'react-router-dom'
import Axios from 'axios';

let frame;
let imageData;
let newRender;
let images;
// let base64Img
class SubmitRender extends React.Component {
	
	state = {
		redirect: false
	}


	handleSubmit = (e) => {	
		debugger
	newRender = document.querySelector(".captured");
	images = document.querySelector('.captureFrame')
	debugger

	// html2canvas(document.body, {onclone: function(document) {
	// 	document.querySelector('.something').style.marginLeft = 0;
	//   }}).then(...)
		html2canvas(images, {
			width: 960,
			height: 540
		}).then((canvas) => {
			debugger
			var dataImage = canvas.toDataURL()
			console.log(dataImage);
			debugger
			newRender.appendChild(canvas)
			return Axios({
				method: 'POST',
				baseURL: `${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${this.props.user}/photos`,
				data: {
					photo: {

						photo: dataImage,
						like: 0,
						user_id: this.props.user
					
					}
					
				},
				success: function (data) {
					console.log("upload successful", data)
			
				}
			}).catch(function (error) {
				alert(error)
			})
		})
		// this.props.resetPhoto()
		// this.props.history.push('/homepage')
	}
	

	


	render() {
		if (this.props.frames === undefined) {
			console.log("error")
		} else {
			frame = this.props.frames.flatMap((f) => {  
				// debugger
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
						<input type="hidden" value="" />
					<a href="/gallery">to gallery</a>
				<button onClick={this.redirect}>Let's begin the photobooth</button>
			</form>
				</div>
			
				<div className="captureFrame" >
					<div className="image1">
						<img id="image1" alt="image1" src={imageData[0]}/>
						<img id="frame1" alt="frame1" src={frame[0]} />
					</div>
					<div className="image2">
						 <img id="image2" alt="image2" src={imageData[1]}/>
						 <img id="frame2" alt="frame2" src={frame[1]} />
					</div>
					<div className="image3">
						 <img id="image3" alt="image3" src={imageData[2]}/>
						 <img id="frame3" alt="frame3" src={frame[2]} />
					</div>
					<div className="image4">
						 <img id="image4" alt="image4" src={imageData[3]}/>
						 <img id="frame4" alt="frame4" src={frame[3]} />
					</div>
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
export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(SubmitRender)));