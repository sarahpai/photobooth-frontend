import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom';
import '../css/photobooth_theme.css'
import { connect } from 'react-redux';
import withAuth from '../components/withAuth'
import { selectFrame } from '../actions/frames'
import {minionFrame, powerFrame} from '../constants/Frame.js'



class Photobooth extends React.Component {
	


	handleClick=(event)=> {
		console.log(event.target.name);
		let selectedFrame;
		switch (event.target.name) {
			case "minion":
				selectedFrame = minionFrame
				break;
			case "power":
				selectedFrame = powerFrame
				break;
			case "cartoon":
				selectedFrame = minionFrame
				break;
			default:
				selectedFrame = "minionDefault"
		} console.log("frame selected", selectedFrame)
		this.props.selectFrame(selectedFrame)
	}


	render() {
		
		return <>
			<h2 style={{textAlign: 'center'}}>Select your Frame</h2>
			{/* <Link id="button-continue" to="/photobooth/take"><button type="submit">Selected Theme Mission</button></Link> */}
			<div className="overlay-container">
			
			<Link to="/photobooth/take"><img onClick={(event)=>this.handleClick(event)} name="cartoon" id="frame" alt="horizontal" src={minionFrame[0]} ></img></Link>	
			<Link to="/photobooth/take"><img onClick={(event)=>this.handleClick(event)} name="power" id="frame" alt="vertical" src={this.props.vertical_frame} ></img></Link>
			<Link to="/photobooth/take"><img onClick={(event)=>this.handleClick(event)} name="minion" id="frame" alt="gif" src={this.props.gif_frame} ></img></Link>
			
			</div>
		</>
		
	}
}

const mapStateToProps = (state) => {
	return {
		selected_frame: state.frameReducer.selected_frame
	}
}

const mapDispatchToProps=(dispatch) => {
	return {
		selectFrame: (clickedFrame)=> dispatch(selectFrame(clickedFrame))
	}
}
export default withAuth(connect(mapStateToProps,mapDispatchToProps)(Photobooth));