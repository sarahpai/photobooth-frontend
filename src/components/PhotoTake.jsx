import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import { photoCapturedAction, lastPhotoAction, resetPhotoAction } from '../actions/photos'
// import { fetchGifFrame,  } from '../actions/frames'
import PhotoRender from './PhotoRender.jsx'
import '../css/photobooth.css'
// import html2canvas from 'html2canvas'

// import styled from 'styled-components';

class PhotoTake extends Component {
  constructor(props) {
    super(props)
    this.webcam = React.createRef();

    this.state = {
      countdown: 3,
      file: undefined,
      viewState: 0
    }
 }

  
  setRef = (webcam) => {
    //from Webcam react-webcam
    this.webcam = webcam;
  }

  renderCountdown = () => {
  return (
    <div>
      <span id="countdown">{this.state.countdown}</span>
      {/* <h2 id="mission-text">grab the minions!</h2> */}
    </div>
    ) 
    
}

  renderConfirmScreen = () => {
  return (
    <div className="captureFrame" style={{ background: `url(${this.props.frame})` }}>
      <div className="captureImage" style={{ background: `url(${this.state.file})` }}>
      </div>
    </div>
  )
}
  
capture = () => {
  // const imageSrc = this.webcam.getScreenshot();
  // console.log("%c PhotoTake props from redux are:", 'color: pink', this.props.photoCaptured);
  // this.props.photoCaptured(imageSrc)
  this.timer = setInterval(() => {
    if (this.state.countdown === 1) {
      new Promise((resolve, reject) => {
        // this.props.photoCaptured(this.webcam.getScreenshot());
        this.setState({ file: this.webcam.getScreenshot() });
        resolve();
      });
    }
    if (this.state.countdown > 1) {
      this.setState({ countdown: this.state.countdown - 1 });
    } else {
      clearInterval(this.timer);
      this.setState({viewState: 2})
    }
  }, 1000);
  this.setState({ viewState: 1, countdown: 3 });
  // this is HTML2CANVAS capture
  // let capture = document.querySelector("#image")
  // console.log(capture);
  // html2canvas(capture).then(canvas => {
  //   document.body.appendChild(canvas)
  // })
  
}
  

  
  

  resetPhoto = () => {
    this.props.resetPhoto()
  }
 
  renderMain = () => {
    switch (this.state.viewState) {
      case 1:
       return this.renderCountdown();
      case 2:
        return this.renderConfirmScreen();
      default: 
        return null
    }
  }


  render() {
    
    const videoConstraints = {
      position: 'absolute',
      margin: 'auto',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -10
    }
   
    return (
      <>
        {this.renderMain()}
        {this.props.number > 0 ?
          <div> 
            <div>

              <img
              id="border"
              alt="images"
              src={this.props.frame}
              />
            
            <Webcam
              style={videoConstraints}
              ref={this.setRef}
              audio={false}
              />
            </div>

            <div className="button-div">
              <button onClick={this.capture} name="button"></button>
            </div>
            <div
              className="photo-column"
              ref="canvas"
            >
              {/* <PhotoRender /> */}
            </div>

          </div>
          // : <PhotoRender photos={this.state.file}/>
          : null
        }
        
      </>
    )
  }
}


const mapStateToProps=(state)=> {
	console.log("state from photo take container", state);
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