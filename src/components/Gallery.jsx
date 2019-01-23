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


	renderOneImage = () => {
		return this.props.images.map(image => {
			// debugger
			return <div>
				<img alt="gallery" src={image.photo}/>
			</div>
			
		})
	}

	render() {
		console.log("sarah!", this.props.images);
		
		const homePage = () => {
			this.props.history.push('./homepage')
		}
	
	debugger
	
		return (
			<>
			<a href="/homepage">to homepage</a>

			<h1>Hi from Gallery</h1>
				{this.renderOneImage()}
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
		images: state.userReducer.user.photos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllPhotos: (id) => dispatch(fetchAllPhotos(id))
	}
}

export default withAuth(connect(mapStateToProps,mapDispatchToProps)(Gallery));