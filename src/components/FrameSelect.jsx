import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import withAuth from './withAuth'

import '../css/frameSelect.css'
import { selectFrame } from '../actions/frames'
import {minionFrame, powerFrame} from '../constants/Frame.js'



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
		
		return <>
		
			<div className="frame-background">>
			<h2 style={{ textAlign: 'center' }}>Select your Frame</h2>
			<div className="grid">
				<div className="grid-item">
					<div className="grid-item-content">
					<Link to="/photobooth/take">
								<img onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
							</Link>
					</div>
				</div>
					<div className="grid-item">
						<div className="grid-item-content">
							<Link to="/photobooth/take">
								<img onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
							</Link>
						</div>
					</div>
					<div className="grid-item">
						<div className="grid-item-content">
							<Link to="/photobooth/take">
								<img onClick={(event) => this.handleClick(event)} name="cartoon" src={minionFrame[0]} />
							</Link>	
						</div>
					</div>
				<div className="grid-item">
					<div className="grid-item-content">
					<Link to="/photobooth/take">
								<img onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
							</Link>
					</div>
				</div>
					<div className="grid-item">
						<div className="grid-item-content">
							<Link to="/photobooth/take">
								<img onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
							</Link>
						</div>
					</div>
					<div className="grid-item">
						<div className="grid-item-content">
							<Link to="/photobooth/take">
								<img onClick={(event) => this.handleClick(event)} name="cartoon" src={minionFrame[0]} />
							</Link>	
						</div>
					</div>
				<div className="grid-item">
					<div className="grid-item-content">
					<Link to="/photobooth/take">
								<img onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
							</Link>
					</div>
				</div>
					<div className="grid-item">
						<div className="grid-item-content">
							<Link to="/photobooth/take">
								<img onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
							</Link>
						</div>
					</div>
					<div className="grid-item">
						<div className="grid-item-content">
							<Link to="/photobooth/take">
								<img onClick={(event) => this.handleClick(event)} name="cartoon" src={minionFrame[0]} />
							</Link>	
						</div>
					</div>
				<div className="grid-item">
					<div className="grid-item-content">
					<Link to="/photobooth/take">
								<img onClick={(event) => this.handleClick(event)} name="cartoon" src={powerFrame[0]} />
					</Link>
					</div>
				</div>
					
					
				</div>
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
export default withAuth(connect(mapStateToProps,mapDispatchToProps)(FrameSelect));