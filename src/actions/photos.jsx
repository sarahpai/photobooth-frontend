import {PHOTO_CAPTURED, PHOTO_ALL_CAPTURED, RESET_PHOTOS} from '../reducers/types'
// import Axios from 'axios';

export const photoCapturedAction = (photo, frame) => {
  return { type: PHOTO_CAPTURED, photo: photo, frames: frame}
}

export const resetPhotoAction = () => {
  debugger
  return (dispatch) => {
    dispatch({ type: RESET_PHOTOS })
  }
}

export const submitPhotoAction = (lastPhoto) => {
  debugger
  // return (dispatch) => {
    return (dispatch )=> (dispatch({ type: PHOTO_ALL_CAPTURED, payload: lastPhoto }))
    
    // return Axios({
    //   method: 'POST',
    //   baseURL: `${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${userId}/photos`,
      
    //   data: {
    //     photo: {
    //       photo: lastPhoto,
    //       user_id: userId
    //     }
    //   }
    // })
      // .then(r => {
        
        // dispatch({ type: PHOTO_ALL_CAPTURED, payload: r.data })
       
        // console.log("response is",r );
        
      // })
  }
// }


export const fetchAllPhotos = () => {
  // takes the token in localStorage and finds out who it belongs to
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/photos`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then((JSONResponse) => {
        console.log(JSONResponse)
        // dispatch({ type: PHOTO_ALL_CAPTURED, payload: JSONResponse[0].frame_horizontal })
      })
  }
}