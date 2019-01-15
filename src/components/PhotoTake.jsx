import React, { Component } from 'react';
import Webcam from 'react-webcam';
// import CountDown from './coundown.js';
// import Sound from 'react-sound';
import { connect } from 'react-redux';
import { photoCapturedAction, lastPhotoAction, resetPhotoAction } from '../actions/photos'
import { fetchGifFrame } from '../actions/frames'
// import Demo from "../libraries/demo.js"
import PhotoRender from './PhotoRender.jsx'
import '../css/photobooth.css'
import html2canvas from 'html2canvas'

class PhotoTake extends Component {
  
  state= {
    photo:[]
  }
  
  setRef = (webcam) => {
    //from Webcam react-webcam
    this.webcam = webcam;
  }

  capture = (frame) => {
    const imageSrc = this.webcam.getScreenshot();
    console.log("%c PhotoTake props from redux are:", 'color: pink', this.props.photoCaptured, frame);
    this.props.photoCaptured(imageSrc)
  
  };

  captureFrame = () => {
    html2canvas(document.frame)
  }

  resetPhoto=()=> {
    this.props.resetPhoto()
  }
  componentDidMount() {
  this.props.gifFrame()
}

  render() {
    console.log("%c props of PhotoTake are", 'color: yellow', this.props)
    let frame = document.getElementById('frame')
    return (
      <>
        {this.props.number > 0 ?
          <div id="frame">
            <div id="image-container">
              <img src={this.props.gif_frame} />
            </div>
            <div id="webcam-container">
              <Webcam  ref={this.setRef} audio={false} className="webcam" />
            </div>
  
            <div className="buttons">  
              <button id="capture" onClick={()=>this.capture(frame)} >Capture photo</button>
              <button id="reset" onClick={this.resetPhoto} >Reset Photo</button>
            </div>
            <div className="photo-column">
              <PhotoRender />
            </div>
          </div>
         
          : <PhotoRender />}
        </>
     
    );
  }
}

function mapStateToProps(state) {
	console.log("state from phototakepage container", state);
	return {	
   photos: state.photoReducer.photos, number: state.photoReducer.number_of_remain,
   gif_frame: state.frameReducer.gif_frame
	}
}

  
const mapDispatchToProps = (dispatch) => {
	console.log('mapDispatchToProps')
	return {
		lastPhotoCaptured: photos => {dispatch(lastPhotoAction(photos))},
		photoCaptured: imageSrc =>{ dispatch(photoCapturedAction(imageSrc))},
    resetPhoto: () => { dispatch(resetPhotoAction()) },
    gifFrame: () => {dispatch(fetchGifFrame())}
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoTake);