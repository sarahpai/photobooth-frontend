import React, { Component } from 'react';
import Webcam from 'react-webcam';
// import CountDown from './coundown.js';
// import Sound from 'react-sound';
import { connect } from 'react-redux';
import { photoCapturedAction, lastPhotoAction } from '../actions/photos'
// import Demo from "../libraries/demo.js"

class PhotoTake extends Component {
  
  state = {
      isWebcamActive: true
    }
  
  setRef = (webcam) => {
    //from Webcam react-webcam
    this.webcam = webcam;
  }


  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log("%c PhotoTake props from redux are:", 'color: pink', this.props.photoCaptured, imageSrc);
    this.props.photoCaptured(imageSrc)
  };


  render() {
    console.log("%c props of PhotoTake are", 'color: yellow', this.props)
    let myName;
    let imageClassName;
    imageClassName = "display-none";
    myName = "photos-webcam "
  

    return (
      
      <div className="photo-take">
        <div className={myName}>
          <div style={{ position: "absolute", top: "60%", color: "pink", width: "100%", textAlign: "center" }}>
            <h1>OK! Get Ready...</h1>
          </div>

          <div style={{ zIndex: -1, textAlign: "center" }}>
            <Webcam ref={this.setRef} audio={false} className="webcam" />
          </div>

        </div>
          <div className={imageClassName}>
            <div style={{ textAlign: "center" }}>
              {/* <img src={lastPhoto} className="photo-last-img" style={{ zIndex: -1 }} /> */}
            </div>
            <div style={{ position: "absolute", top: "50%", color: "red", width: "100%", textAlign: "center" }}>
              <button onClick={this.capture} >Capture photo</button> 
              <h2>Screenshot</h2>
                <div className={imageClassName}>
              <ul>
                {this.props.photos ? this.props.photos.map((photo, index) => {
                  return (
                    <li key={index} style={{ float: "left" }}>
                    <img alt="images" src={photo} width="400px" height="400px" />
                    </li>
                  )
                }
                ) : null}
              </ul>
                </div>
            </div>
          </div>
       </div>
    );
  }
}

function mapStateToProps(state) {
	console.log("state from phototakepage container", state.photoReducer);
	return {	
	 photos: state.photoReducer.photos
	}
}

  
const mapDispatchToProps = (dispatch) => {
	console.log('mapDispatchToProps')
	return {
		lastPhotoCaptured: photos => {dispatch(lastPhotoAction(photos))},
		photoCaptured: imageSrc =>{ dispatch(photoCapturedAction(imageSrc))}
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoTake);