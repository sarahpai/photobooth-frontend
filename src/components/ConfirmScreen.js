import React from 'react'

const confirmScreen =()=> {
	return(
		<div className="captureFrame" style={{ background: `url(${this.props.frame[0]})` }}>
		<div className="captureImage" style={{ background: `url(${this.state.file})` }}>
		</div>
	  </div>
	)
}
export default confirmScreen;