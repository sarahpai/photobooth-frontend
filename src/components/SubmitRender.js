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
class SubmitRender extends React.Component {
	

	handleSubmit = (e) => {	
	newRender = document.querySelector(".captured");
	images = document.querySelector('.captureFrame')
	debugger
	
	
	html2canvas(images, {
			width: 960,
			height: 540
		}).then((canvas) => {
			var dataImage = canvas.toDataURL()
			console.log(dataImage);
			// newRender.appendChild(canvas)
			this.props.submitPhoto(dataImage, this.props.user)
			//post to backend with axios
			Axios({
				method: 'POST',
				baseURL: `${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${this.props.user}/photos`,
				data: {
						photo: {

						photo: dataImage,
						like: 0,
						user_id: this.props.user
					
					}
		
				},
			})
				.then(data => this.props.history.push('/homepage'))
		
	})
	// this.setState({redirect: true})

		// this.props.resetPhoto()
		// this.props.history.push('/homepage')
	}
	

	


	render() {

		// const {redirect} = this.state
		// if (redirect) {
			// console.log("submit render")
		// } else {
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
				return (p)
			})
		// }


		return (
			<>

			<div id="mail">
			<input type="submit" value="Take Screenshot of Div" onClick={(e)=>this.handleSubmit(e)} />
			<form>
						<input type="hidden" value="" />
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