import React from 'react';
import Webcam from 'react-webcam';

export default class WebcamCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }
 
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
  };
 
  render() {
    return (
      <div className = "camera-enter">        
        <div style = {{zIndex:-1}}>
          <Webcam
            audio={false}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width='100%'
            height='100%'          
          />
        </div>

        <div style={{position:"absolute",top:"50%",color:"white",width:"100%",textAlign:"center"}}>
          <h1>Ok! Get Ready ...</h1>
        </div>
        <button onClick={this.capture}>Capture photo</button> 
      </div>
    );
  }
}