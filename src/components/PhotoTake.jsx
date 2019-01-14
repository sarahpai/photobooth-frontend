import React, { Component } from 'react';
import Webcam from 'react-webcam';
// import CountDown from './coundown.js';
// import Sound from 'react-sound';
import { connect } from 'react-redux';
import { photoCapturedAction, lastPhotoAction } from '../actions/photos'
// import Demo from "../libraries/demo.js"
import html2canvas from 'html2canvas'
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

  captureImage=()=> {
    return (
      <>
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
     </> 
    )
  }

  canvasCapture=()=>{
    html2canvas(document.body, {
      onrendered: function (canvas) {
        ('all-images').html("");
        ('all-images').append(canvas)
      }
    })
  }

  render() {
    console.log("%c props of PhotoTake are", 'color: yellow', this.props)

    return (<div>
      
      {this.props.number > -1 ?
        
        <div className="photo-take">
          <div className="photos-webcam ">
          <div style={{ zIndex: -1, textAlign: "center" }}>
            <Webcam ref={this.setRef} audio={false} className="webcam" />
          </div>
          </div>
          
            <div className="all-images" style={{ position: "absolute", top: "50%", color: "red", width: "100%", textAlign: "center" }}>
              <button onClick={this.capture} >Capture photo</button> 
              <h2>Screenshot</h2>
               {this.captureImage()}
            </div>
          </div>
      :this.canvasCapture()}
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
		photoCaptured: imageSrc =>{ dispatch(photoCapturedAction(imageSrc))}
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoTake);