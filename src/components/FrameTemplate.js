import React from 'react'
import FrameSelection from './FrameSelection'


const FrameTemplate = (props) => {
	console.log(props)

	

	const renderTemplate = () => {		
		if (props.template === '') {
			return (
				<div className="selection-overlay">
					<FrameSelection handleSelection={props.handleSelection} />
				</div>
			)
		} 
		

		// // eslint-disable-next-line default-case
		// switch (props.template) {
		// 	case 'strip':
		// 		return (
		// 			<div className="selection-overlay">
		// 			<FrameSelection handleSelection={props.handleSelection} />
		// 			</div>
		// 		);
		// 		default: 
		// 		return (
		// 			<div className="selection-overlay">
		// 			<FrameSelection handleSelection={props.handleSelection} />
		// 			</div>
		// 				)
		// }
	}

	return (
	<>
			{renderTemplate()}
	</>
	)

}
export default FrameTemplate;