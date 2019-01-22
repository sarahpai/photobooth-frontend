import {PHOTO_CAPTURED, PHOTO_ALL_CAPTURED, RESET_PHOTOS} from '../reducers/types'
import Axios from 'axios';

export const photoCapturedAction = (photo, frame) => {
  return { type: PHOTO_CAPTURED, photo: photo, frames: frame}
}

export const resetPhotoAction = () => {
  return {type: RESET_PHOTOS}
}

export const submitPhotoAction = (lastPhoto, userId) => {
  debugger
  return (dispatch) => {
    dispatch({ type: PHOTO_ALL_CAPTURED })
    debugger
    return Axios({
      method: 'POST',
      baseURL: `${process.env.REACT_APP_API_ENDPOINT}/api/v1/photos`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "image/png",
        Accept: "application/json",
      },
      data: {
        photo: {
          photo: lastPhoto,
          user_id: userId
        }
      }
    })
      .then(r => {
        debugger
        dispatch({ type: PHOTO_ALL_CAPTURED, payload: r.data })
        debugger
        // console.log("response is",r );
        
      })
  }
}


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