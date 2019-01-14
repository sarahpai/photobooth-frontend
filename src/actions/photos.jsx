// import { createAction } from 'redux-actions';
import {PHOTO_CAPTURED, PHOTO_ALL_CAPTURED} from '../reducers/types'

// export default {
//   photoCaptured: createAction(PHOTO_CAPTURED),
//   lastPhotoCaptured: createAction(PHOTO_ALL_CAPTURED),
//   savePrintableImage: createAction(savePrintableImage)
// };

export const photoCapturedAction = (photo) => {
  debugger
  return { type: PHOTO_CAPTURED, photo: photo}
}

export const lastPhotoAction = (lastPhoto) => {
  return { type: PHOTO_ALL_CAPTURED, lastPhoto: lastPhoto}
}


