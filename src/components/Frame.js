import React from 'react'

const Frame = (props) => {
	return (
		<img
		id="webcam-frame"
		alt="images"
		src={props.frame}
		/>
	)
}
export default Frame;

