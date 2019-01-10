import React from 'react'

const FrameSelection = (props) => {

	console.log("inside frame",props);
	
	return (
		<div className="overlay-container">
			<img className="strip-template" alt="strip" src="http://www.creatingkeepsakes.com/images/wysiwyg_img/PT-FS-D-11_27707.jpg" onClick={()=>props.handleSelection("strip")}></img>
			<img className="strip-template" alt="square" src="http://www.creatingkeepsakes.com/images/wysiwyg_img/PT-FS-D-11_27707.jpg" onClick={()=>props.handleSelection("square")}></img>
			<img className="strip-template" alt="gif" src="http://www.creatingkeepsakes.com/images/wysiwyg_img/PT-FS-D-11_27707.jpg" onClick={()=>props.handleSelection("gif")}></img>
			<div className="strip-text">
				<h3>strip</h3>
			</div>
		</div>
	)
}
export default FrameSelection;