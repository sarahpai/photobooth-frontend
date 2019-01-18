import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom';
import '../css/photobooth_theme.css'
// import { fetchFrames } from '../actions/frames';
import { connect } from 'react-redux';
import withAuth from '../components/withAuth'
import { fetchHorizontalFrame, fetchVerticalFrame, fetchGifFrame, selectFrame } from '../actions/frames'
import minionFrame from '../images/minion+frame.png'
import powerFrame from '../images/vertical-frame.png'
import cartoon from '../images/four image template.jpg'



class Photobooth extends React.Component {
	
	componentDidMount() {
		this.props.horizontalFrame()
		this.props.verticalFrame()
		this.props.gifFrame()
	}

	handleClick=(event)=> {
		console.log(event.target.name);
		let selectedFrame;
		switch (event.target.name) {
			case "minion":
				selectedFrame = minionFrame
				break;
			case "power":
				selectedFrame = powerFrame
				break;
			case "cartoon":
				selectedFrame = cartoon
				break;
			default:
				selectedFrame = "minionDefault"
		} console.log("frame selected", selectedFrame)
		this.props.selectFrame(selectedFrame)
	}


	render() {
		return <>
			<h2 style={{textAlign: 'center'}}>Select your Frame</h2>
			{/* <Link id="button-continue" to="/photobooth/take"><button type="submit">Selected Theme Mission</button></Link> */}
			<div className="overlay-container">
			
			<Link to="/photobooth/take"><img onClick={(event)=>this.handleClick(event)} name="cartoon" id="frame" alt="horizontal" src={this.props.horizontal_frame} ></img></Link>	
			<Link to="/photobooth/take"><img onClick={(event)=>this.handleClick(event)} name="power" id="frame" alt="vertical" src={this.props.vertical_frame} ></img></Link>
			<Link to="/photobooth/take"><img onClick={(event)=>this.handleClick(event)} name="minion" id="frame" alt="gif" src={this.props.gif_frame} ></img></Link>
			
			</div>
		</>
		
	}
}

const mapStateToProps = (state) => {
	return {
		horizontal_frame: state.frameReducer.horizontal_frame,
		vertical_frame: state.frameReducer.vertical_frame,
		gif_frame: state.frameReducer.gif_frame,
		selected_frame: state.frameReducer.selected_frame
	}
}

const mapDispatchToProps=(dispatch) => {
	return {
		horizontalFrame: () => dispatch(fetchHorizontalFrame()),
		verticalFrame: () => dispatch(fetchVerticalFrame()),
		gifFrame: () => dispatch(fetchGifFrame()),
		selectFrame: (clickedFrame)=> dispatch(selectFrame(clickedFrame))
	}
}
export default withAuth(connect(mapStateToProps,mapDispatchToProps)(Photobooth));










// class Photobooth extends React.Component {
	
// 	state = {
// 		width: 500,
// 		filter: 'none',
// 		template: ""
// 	}
	
// 	componentDidMount() {
// 			video = document.getElementById('video')
// 			navigator.mediaDevices.getUserMedia({ video: true, audio: false })
// 				.then(stream => {
// 					console.log(stream)
// 					video.srcObject = stream
// 					video.play();
// 				})
// 			.catch((err) => {
// 				console.log(`Error: ${err}`);
// 			})	
// 	}
	

// 	//FILTER
// 	filterPhoto=(e)=> {
// 		// let photoFilter = document.getElementById('photo-filter')
// 		e.preventDefault();
// 		console.log("inside", e.target.value);
// 		this.setState({ filter: e.target.value },() => {console.log(video.style.filter = this.state.filter, this.state.filter)} ) 

// 	}
	
// 	takePictureButton=()=> {
// 		canvas = document.getElementById('canvas')
// 		canvas.width = 320;
// 		canvas.height = 240;
// 		let context = canvas.getContext('2d')
// 		console.log(context);

// 		// appending captured context to page
// 		context.drawImage(video, 0, 0, canvas.width, canvas.height);
		
// 		//create image from canvas
// 		const imgUrl = canvas.toDataURL('image/png', 1);
		
// 		console.log(imgUrl); // base64 image url
		
// 		//create image element
// 		const img = document.createElement('img');
		
// 		//set img src 
// 		img.setAttribute('src', imgUrl)
		
// 		//set image filter
// 		console.log(this.state);
// 		img.style.filter = this.state.filter
		
// 		//append photos to page
// 		photos = document.getElementById('photos')
// 		photos.appendChild(img)

// 	}
	
// 	//clear event 
// 	clearImage = (e) => {
// 		// let clearButton = document.getElementById('clear-button')
// 		photos.innerHTML = "";
// 		this.setState({ filter: 'none' },()=> (video.style.filter = this.state.filter))
// 	}


// 	handleSelection = (templateName) => {
// 		// let frameName = templateName.currentTarget.alt
// 		this.setState({
// 			template: templateName
// 		},()=>console.log(this.state)
// 		)
// 	}

	
// 	render() {
// 		// const faceFilter = require('facefilter/dist/jeelizFaceFilterES6.js')

// 		return (
// 			<>	
// 			<div id="video-container">
//             <video id="video" width="500"></video>
// 			</div>			
// 			<button id='photo-button' onClick={this.takePictureButton} className='btn btn-dark'>
// 			Take photo
// 			</button>
// 			<select id='photo-filter' onChange={(e)=>this.filterPhoto(e)}>
// 			<option value='none'>none</option>
// 			<option value='grayscale(100%)'>grayscale</option>
// 			<option value='sepia(100%)'>sepia</option>
// 			<option value='invert(100%)'>invert</option>
// 			<option value='hue-rotate(90deg)'>hue-rotate</option>
// 			<option value='blur(10px)'>blur</option>
// 			<option value='contrast(200%)'>contrast</option>
// 			</select>
// 			<button id='clear-button' onClick={this.clearImage}>clear</button>
// 			<canvas id='canvas'></canvas>
		
// 		  <div className='bottom-container'>
// 			<div id='photos'></div>
// 				</div>
// 		  <div className='gif-container'>
// 			<div id='bitmap'></div>
// 				</div>
// 				<FrameTemplate template={this.state.template} handleSelection={this.handleSelection}/>
// 			</>
// 		)
// 	}
// }

// function mapStateToProps(state) {
// 	return {
// 		template: state.template
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return{
		
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Photobooth);