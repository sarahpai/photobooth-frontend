import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import withAuth from './withAuth'
import EmptyGallery from './EmptyGallery.jsx'
import {fetchAllPhotos} from '../actions/gallery'
class Gallery extends React.Component {
	

	componentDidMount() {
		this.props.fetchAllPhotos(this.props.user)
	}


	filterImage = () => {
		
	}

	render() {
		console.log(this.props.image[0]);
		
		const homePage = () => {
			this.props.history.push('./homepage')
		}
	
	
	
		return (
			<>
			<h1>Hi from Gallery</h1>
				<img src={this.props.image[0]} />
			</>
		)
		// return (this.props.photos.length < 0 ? <div>
		// 	<h1>Hi from Gallery</h1>
		// 	<button onClick={() => homePage()}>homepage</button>
			
		// 	</div>
		//  : <EmptyGallery />
		// )
	}



}



const mapStateToProps = (state) => {
	console.log('%c inside gallery', 'color:green', state)
	return {
		photos: state.galleryReducer.photos,
		user: state.userReducer.user.id,
		image: state.userReducer.user.photos[6].photo
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllPhotos: (id) => dispatch(fetchAllPhotos(id))
	}
}

export default withAuth(connect(mapStateToProps,mapDispatchToProps)(Gallery));