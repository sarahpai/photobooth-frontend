import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import { photoCapturedAction, resetPhotoAction } from '../actions/photos'
import '../css/photoTake.css'
import Frame from './Frame.js'
import PhotoRender from './PhotoRender.jsx'
import RenderModule from './RenderModule.js'
class PhotoTake extends Component {
  constructor(props) {
    super(props)
    this.webcam = React.createRef();

    this.state = {
      countdown: 3,
      file: undefined,
      currentStatus: 0,
      frameCount: 1,
      photo: []
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
      </div>
    )
  }

  setFrame = () => {
    const frame = this.props.frame.slice(this.state.frameCount - 1, this.state.frameCount)    
    const file = this.state.file
    this.setState({ currentStatus: 3, photo: [...this.state.photo, { frame: frame[0], image: this.state.file }] })
    this.props.photoCaptured(file, frame)
  }
   
  capture = () => {
    this.timer = setInterval(() => {
      if (this.state.countdown === 1) {
        new Promise((resolve, reject) => {
          this.setState({ file: this.webcam.getScreenshot() });
          resolve();
        });
      } if (this.state.countdown > 1) {
        this.setState({ countdown: this.state.countdown - 1 });
      } else {
        clearInterval(this.timer);
        this.setState({currentStatus: 2})
      }
    }, 1000);
    this.setState({ currentStatus: 1, countdown: 3});
  }
  
  renderResetState = () => {
      this.setState({ currentStatus: 0, countdown: 3, frameCount: this.state.frameCount + 1 })
  }



  renderMain = () => {
    switch (this.state.currentStatus) {
      case 1:
       return this.renderCountdown();
      case 2:
        return this.setFrame();
      case 3:
        return this.renderResetState();
      default: 
        return null
    }
  }

  renderFrames = () => {
    const frame = this.props.frame.slice(this.state.frameCount - 1, this.state.frameCount)
    return <Frame frame={frame[0]} />
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
        {this.props.number > 0 ?
          <div> 
          {this.renderMain()}
            <div>
              {this.renderFrames()}
            <Webcam
              style={videoConstraints}
              ref={this.setRef}
              audio={false}
              />
            </div>

            <div className="button-div">
              <button onClick={this.capture} name="photo-button"></button>
            </div>
              <PhotoRender />
              </div>
          : <RenderModule />
        }
      </>
    )
  }
}


const mapStateToProps=(state)=> {
	console.log("state from photo take container", state);
	return {	
    number: state.photoReducer.number_of_remain,
    frame: state.frameReducer.selected_frame
	}
}

  
const mapDispatchToProps = (dispatch) => {
	console.log('mapDispatchToProps')
	return {
		photoCaptured: (imageSrc, frameSrc) => { dispatch(photoCapturedAction(imageSrc, frameSrc))},
    resetPhoto: () => { dispatch(resetPhotoAction()) },
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoTake);