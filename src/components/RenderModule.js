import React from 'react'
import {connect} from 'react-redux';
import html2canvas from 'html2canvas'
let frame;
let imageData;
let newRender;
let images;
class RenderModule extends React.Component {
	
	


    
	handleSubmit = () => {
		
	newRender = document.querySelector(".captured");
	images = document.querySelector('.captureFrame')
	  

		html2canvas(images, { 
			width: 1200,
			height: 1200
	}).then((canvas)=> {
		newRender.appendChild(canvas)
	  })
	}
	
	render(){
		frame = this.props.frame.flatMap((f) => {  
			return (
				f.map((f) => {
					return f
				})
			)
		})
		console.log(frame);
	
		imageData = this.props.photos.map((p)=> {
			return ( p)
		})


		return (
			<>
			<div id="mail">
			<input type="text" placeholder="enter your email here" />
			<button onClick={()=>this.handleSubmit()} type="submit">submit</button>
			 </div>
			
				  <div className="captureFrame" >
						 <img alt="frame1" src={frame[0]} />
						 <img id="image1" alt="image1" src={imageData[0]}/>
						 <img alt="frame2" src={frame[1]} />
						 <img id="image2" alt="image2" src={imageData[1]}/>
						 <img alt="frame3" src={frame[2]} />
						 <img id="image3" alt="image3" src={imageData[2]}/>
						 <img alt="frame4" src={frame[3]} />
						 <img id="image4" alt="image4" src={imageData[3]}/>
				 </div>
			<div className="captured">
			
			</div>

			</>
			  )
		}
};




function mapStateToProps(state) {
	return {
		photos: state.photoReducer.photos,
		frame: state.photoReducer.frames
	}
}

export default connect(mapStateToProps, null)(RenderModule);