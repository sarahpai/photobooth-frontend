import React from 'react'
import '../css/style.css'
// import TakenPhoto from '../components/TakenPhoto'
import FrameTemplate from '../components/FrameTemplate'

let video
let canvas
let photos
// let photoFilter
// let clearButton

class Photobooth extends React.Component {
	
	state = {
		width: 500,
		// height: 0,
		filter: 'none',
		template: ""
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
		let photoFilter = document.getElementById('photo-filter')
		e.preventDefault();
		console.log("inside", e.target.value);
		this.setState({ filter: e.target.value },() => {console.log(video.style.filter = this.state.filter, this.state.filter)} ) 

	}
	
	takePictureButton=()=> {
		canvas = document.getElementById('canvas')
		canvas.width = 320;
		canvas.height = 240;
		let context = canvas.getContext('2d')
		console.log(context);

		// appending captured context to page
		context.drawImage(video, 0, 0, canvas.width, canvas.height);
		
		//create image from canvas
		const imgUrl = canvas.toDataURL('image/png', 1);
		
		console.log(imgUrl); // base64 image url

		//create gif gif canvas
		
		
		//create image element
		const img = document.createElement('img');
		
		//set img src 
		img.setAttribute('src', imgUrl)
		
		//set image filter
		console.log(this.state);
		img.style.filter = this.state.filter
		
		//append photos to page
		photos = document.getElementById('photos')
		photos.appendChild(img)
	}
	
	//clear event 
	clearImage = (e) => {
		// let clearButton = document.getElementById('clear-button')
		photos.innerHTML = "";
		this.setState({ filter: 'none' },()=> (video.style.filter = this.state.filter))
	}

	handleSelection = (templateName) => {
		// let frameName = templateName.currentTarget.alt
		this.setState({
			template: templateName
		},()=>console.log(this.state)
		)
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
		  <div className='gif-container'>
			<div id='bitmap'></div>
				</div>
				<FrameTemplate template={this.state.template} handleSelection={this.handleSelection}/>
			</>
		)
	}
} export default Photobooth;