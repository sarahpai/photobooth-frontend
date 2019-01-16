import React, { Component } from 'react';
import Webcam from 'react-webcam';
// import CountDown from './coundown.js';
// import Sound from 'react-sound';
import { connect } from 'react-redux';
import { photoCapturedAction, lastPhotoAction, resetPhotoAction } from '../actions/photos'
import { fetchGifFrame,  } from '../actions/frames'
import PhotoRender from './PhotoRender.jsx'
import '../css/photobooth.css'
import html2canvas from 'html2canvas'
// import minionFrame from '../images/minion+frame.png'
class PhotoTake extends Component {
  
  state= {
    photo: []
  }

  setRef = (webcam) => {
    //from Webcam react-webcam
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log("%c PhotoTake props from redux are:", 'color: pink', this.props.photoCaptured);
    this.props.photoCaptured(imageSrc)
    
    // this is HTML2CANVAS capture
    // let capture = document.querySelector("#image")
    // console.log(capture);
    // html2canvas(capture).then(canvas => {
    //   document.body.appendChild(canvas)
    // })
  };


  resetPhoto=()=> {
    this.props.resetPhoto()
  }
 

  render() {
    console.log("%c props of PhotoTake are", 'color: yellow', this.props)
    
    // let webcam = document.querySelector(".webcam")
    // console.log(webcam);
    
    
    return (
      <>
        {this.props.number > 0 ?
          <div  id="frame">
            <div id="image-container">
              <img
                id="image"
                alt="images"
                src={this.props.frame}
              />
            </div>
            <div id="webcam-container">
              <Webcam
                className="webcam"
                ref={this.setRef}
                audio={false}
              />
            </div>
  
            <div className="buttons">  
              <button
                id="capture"
                onClick={() => this.capture()}
              >
                Capture photo
              </button>
              <button
                id="reset"
                onClick={this.resetPhoto}
              >
                Reset Photo
              </button>
            </div>
            <div
              className="photo-column"
              ref="canvas"
            >
              <PhotoRender />
            </div>
          </div>
          :
          <PhotoRender />
        }
        </>
    );
  }
}

function mapStateToProps(state) {
	console.log("state from phototakepage container", state);
	return {	
    photos: state.photoReducer.photos,
    number: state.photoReducer.number_of_remain,
    frame: state.frameReducer.selected_frame
  //  gif_frame: state.frameReducer.gif_frame
	}
}

  
const mapDispatchToProps = (dispatch) => {
	console.log('mapDispatchToProps')
	return {
		lastPhotoCaptured: photos => {dispatch(lastPhotoAction(photos))},
		photoCaptured: imageSrc =>{ dispatch(photoCapturedAction(imageSrc))},
    resetPhoto: () => { dispatch(resetPhotoAction()) },
    // selectedFrame: () => {dispatch(selectedFrame(selectedFrame))}
    // gifFrame: () => {dispatch(fetchGifFrame())}
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoTake);