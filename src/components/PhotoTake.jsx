import React, { Component } from 'react';
import Webcam from 'react-webcam';
// import CountDown from './coundown.js';
// import Sound from 'react-sound';
import { connect } from 'react-redux';
import { photoCapturedAction, lastPhotoAction, resetPhotoAction } from '../actions/photos'
// import Demo from "../libraries/demo.js"
import PhotoRender from './PhotoRender.jsx'
import '../css/photobooth.css'
class PhotoTake extends Component {
  
  setRef = (webcam) => {
    //from Webcam react-webcam
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log("%c PhotoTake props from redux are:", 'color: pink', this.props.photoCaptured, imageSrc);
    this.props.photoCaptured(imageSrc)
  };

  resetPhoto=()=> {
    this.props.resetPhoto()
  }


  render() {
    console.log("%c props of PhotoTake are", 'color: yellow', this.props)

    return (
      <div>
      
        {this.props.number > 0 ?
          <div className="photo-take">
            <div className="photos-webcam ">
              <div style={{ zIndex: -1, textAlign: "center" }}>
                <Webcam ref={this.setRef} audio={false} className="webcam" />
              </div>
            </div>
          
            {/* <div className="all-images" style={{ position: "absolute", top: "50%", color: "red", width: "100%", textAlign: "center" }}> */}
              <button id="capture" onClick={this.capture} >Capture photo</button>
              <button id="reset" onClick={this.resetPhoto} >Reset Photo</button>
              {/* <h2>Screenshot</h2> */}
              <PhotoRender />
            </div>
          // </div>
          : <PhotoRender /> }
      </div>
    );
  }
}

function mapStateToProps(state) {
	console.log("state from phototakepage container", state.photoReducer);
	return {	
	 photos: state.photoReducer.photos, number: state.photoReducer.number_of_remain
	}
}

  
const mapDispatchToProps = (dispatch) => {
	console.log('mapDispatchToProps')
	return {
		lastPhotoCaptured: photos => {dispatch(lastPhotoAction(photos))},
		photoCaptured: imageSrc =>{ dispatch(photoCapturedAction(imageSrc))},
		resetPhoto: () =>{ dispatch(resetPhotoAction())}
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoTake);