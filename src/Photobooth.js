import React from 'react'
// import { resolve } from 'q';
import './css/style.css'

let video
let canvas
let photos
let photoFilter
let clearButton

class Photobooth extends React.Component {
	
	state = {
		width: 500,
		height: 0,
		filter: 'none'
		// streaming: false	
	}
	
	componentDidMount() {
			video = document.getElementById('video')
			navigator.mediaDevices.getUserMedia({ video: true, audio: false })
				.then(stream => {
					console.log(stream)
					video.srcObject = stream
					video.play();
				})
			.catch((err) => {
				console.log(`Error: ${err}`);
			})	
	}
	

	//FILTER
	filterPhoto=(e)=> {
		photoFilter = document.getElementById('photo-filter')
		e.preventDefault();
		console.log("inside", e.target.value);
		this.setState({ filter: e.target.value },() => {console.log(video.style.filter = this.state.filter, this.state.filter)} ) 

	}
	
	takePictureButton=()=> {
		canvas = document.getElementById('canvas')
		canvas.width = 640;
		canvas.height = 480;
		let context = canvas.getContext('2d')
		console.log(context);
		// appending captured contex to page
		context.drawImage(video, 0, 0, canvas.width, canvas.height);
		
		//create image from canvas
		const imgUrl = canvas.toDataURL('image/png', 1);

		console.log(imgUrl); // base64 image url

		//create image element
		const img = document.createElement('img');

		//set img src 
		img.setAttribute('src', imgUrl)

		//set image filter
		console.log(this.state);
		img.style.filter = this.state.filter
		
		photos = document.getElementById('photos')
		photos.appendChild(img)
	}
	
	//clear event 
	clearImage = (e) => {
		clearButton = document.getElementById('clear-button')
		photos.innerHTML = "";
		this.setState({ filter: 'none' },()=> (video.style.filter = this.state.filter))
	}

	render() {
		return (
			<>	
			<div id="video-container">
            <video id="video" width="500"></video>
			</div>			
			<button id='photo-button' onClick={this.takePictureButton} className='btn btn-dark'>
			Take photo
			</button>
			<select id='photo-filter' onChange={(e)=>this.filterPhoto(e)}>
			<option value='none'>none</option>
			<option value='grayscale(100%)'>grayscale</option>
			<option value='sepia(100%)'>sepia</option>
			<option value='invert(100%)'>invert</option>
			<option value='hue-rotate(90deg)'>hue-rotate</option>
			<option value='blur(10px)'>blur</option>
			<option value='contrast(200%)'>contrast</option>
			</select>
			<button id='clear-button' onClick={this.clearImage}>clear</button>
			<canvas id='canvas'></canvas>
		
		  <div className='bottom-container'>
			<div id='photos'></div>
				</div>
			</>
		)
	}
} export default Photobooth;