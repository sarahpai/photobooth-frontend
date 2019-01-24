import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import withAuth from './withAuth'
import { fetchAllPhotos } from '../actions/gallery'
import '../css/gallery.css'
class Gallery extends React.Component {
	

	componentDidMount() {
		this.props.fetchAllPhotos(this.props.user)
	}


	renderOneImage = () => {
		return this.props.photos.map(image => {
			// debugger
			return <div className="image-container">
				<img alt="gallery" src={image}/>
			</div>
			
		})
	}

	render() {
		console.log("sarah!", this.props);
		
	
	debugger
	
		return (
			<>
			<a class="waves-effect waves-light btn" href="/homepage"><i class="material-icons left">cloud</i>To homepage</a>
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
		images: state.userReducer.user.photos,
		// finalImage: state.photoReducer.photos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllPhotos: (id) => dispatch(fetchAllPhotos(id))
	}
}

export default withAuth(connect(mapStateToProps,mapDispatchToProps)(Gallery));