import React from 'react';
import { connect } from 'react-redux';
import withAuth from './withAuth';
import { fetchAllPhotos } from '../actions/gallery';
import '../css/gallery.css'
import { saveAs } from 'file-saver';
class Gallery extends React.Component {


	componentDidMount() {
		this.props.fetchAllPhotos(this.props.user);
	}


	renderOneImage = () => {
		
		return this.props.photos.map(image => {
			debugger
			return <div key={image.id} className="image-container">
				<img alt="gallery" src={image} style={{ width: 960 }} />
				
				<a className="waves-effect waves-light btn black" id="btn-download" href="" onClick={()=>this.downloadImage(image)} ><i class="material-icons left">cloud</i>Download</a>
			</div>
		});
		
	};


	downloadImage = (image) => {
		// console.log("download image clicked", image);
		var a = document.createElement('a');
		a.href = image;
		a.download = "output.png";
		document.body.appendChild(a);
		a.click();
		debugger
		document.body.removeChild(a);
		
		// return blob;


		// const url = window.URL.createObjectURL(new Blob([image], {type: 'image/png'}));
		// const link = document.createElement('a');
		// link.href = url;
		// link.setAttribute('download', 'image.png');
		// document.body.appendChild(link);
		
	};




	render() {
		console.log("props inside gallery are ", this.props);

		return (
			<>	
			<a className="waves-effect waves-light btn black" href="/homepage"><i className="material-icons left">cloud</i>Homepage</a>
			{this.renderOneImage()}
			</>
		);
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
