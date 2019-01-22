import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import withAuth from './withAuth'

import '../css/frameSelect.css'
import { selectFrame } from '../actions/frames'
import {minionFrame, powerFrame} from '../constants/Frame.js'
import { resetPhotoAction } from '../actions/photos'



class FrameSelect extends React.Component {
	


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
		debugger
		return <>
			
		
			
				<div className="frame-background">>
			<h2 style={{ textAlign: 'center' }}>Select your Frame</h2>
					<div className="grid">
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="cartoon" src={minionFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="cartoon" src={minionFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="cartoon" src={minionFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
								</Link>
							</div>
						</div>
					
					
					</div>
				</div>
			
			
		</>
		
	}
}

const mapStateToProps = (state) => {
	console.log("state from FRAMESELECT", state);
	
	return {
		selected_frame: state.frameReducer.selected_frame,
		photos: state.photoReducer.photos
	}
}

const mapDispatchToProps=(dispatch) => {
	return {
		resetPhoto: () => dispatch(resetPhotoAction),
		selectFrame: (clickedFrame)=> dispatch(selectFrame(clickedFrame))
	}
}
export default withAuth(connect(mapStateToProps,mapDispatchToProps)(FrameSelect));