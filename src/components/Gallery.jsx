import React from 'react';
import { connect } from 'react-redux';
import withAuth from './withAuth';
import { fetchAllPhotos } from '../actions/gallery';
import '../css/gallery.css'
class Gallery extends React.Component {


	componentDidMount() {
		this.props.fetchAllPhotos(this.props.user);
	}


	renderOneImage = () => {
		return this.props.photos.map(image => {
			debugger
			return <div className="image-container">
				<img alt="gallery" src={image} />
				<a className="waves-effect waves-light btn black" id="btn-download" href="" onClick={()=>this.downloadImage(image)} ><i class="material-icons left">cloud</i>Download</a>
			</div>;
		});
		
	};


	downloadImage = (image) => {
		console.log("download image clicked", image);
		var link = document.createElement('a');
		debugger
		if (typeof link.download === 'string') {
			link.href = image
			link.download = image
			document.body.appendChild(link)
			link.click();
			document.body.removeChild(link);
		} else {
			window.open(image)
		}
	};




	render() {
		console.log("sarah!", this.props);

		return (
			<>
				{/* <div className="grid">
					<div className="grid-sizer">
						<div className="grid-item grid-item--width2">
						
						
						</div>
					
					</div>

			</div> */}
					
			<a className="waves-effect waves-light btn black" href="/homepage"><i class="material-icons left">cloud</i>Homepage</a>
			{this.renderOneImage()}
			
		</>);
	}
}



const mapStateToProps = (state) => {
	console.log('%c inside gallery', 'color:green', state);
	return {
		photos: state.galleryReducer.photos,
		user: state.userReducer.user.id,
		images: state.userReducer.user.photos,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllPhotos: (id) => dispatch(fetchAllPhotos(id))
	};
};
export default withAuth(connect(mapStateToProps, mapDispatchToProps)(Gallery));
