import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import withAuth from './withAuth'

import '../css/frameSelect.css'
import { selectFrame } from '../actions/frames'
import {minionFrame, comicFrame, aliFrame, waldoFrame} from '../constants/Frame.js'
import { resetPhotoAction } from '../actions/photos'



class FrameSelect extends React.Component {
	


	handleClick=(event)=> {
		console.log(event.target.name);
		let selectedFrame;
		switch (event.target.name) {
			case "minion":
				selectedFrame = minionFrame
				break;
			case "comic":
				selectedFrame = comicFrame
				break;
			case "ali":
				selectedFrame = aliFrame
				break;
			case "waldo":
				selectedFrame = waldoFrame
				break;
			default:
				selectedFrame = "minion"
		} console.log("frame selected", selectedFrame)
		this.props.selectFrame(selectedFrame)
	}

	
	
	

	render() {
		return <>
				<div className="frame-background">
			<h2 style={{ textAlign: 'center', marginTop: 150 }}>Select your Frame</h2>
					<div className="grid">
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="comic" src={comicFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="minion" src={minionFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="ali" src={aliFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="waldo" src={waldoFrame[0]} />
								</Link>
							</div>
						</div>
						{/* <div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="comic" src={comicFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="minion" src={minionFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="comic" src={comicFrame[0]} />
								</Link>
							</div>
						</div>
						<div className="grid-item">
							<div className="grid-item-content">
								<Link to="/photobooth/take">
									<img alt="frame" onClick={(event) => this.handleClick(event)} name="cartoon" src={comicFrame[0]} />
								</Link>
							</div>
						</div> */}

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