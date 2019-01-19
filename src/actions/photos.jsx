import {PHOTO_CAPTURED, PHOTO_ALL_CAPTURED, RESET_PHOTOS} from '../reducers/types'

export const photoCapturedAction = (photo, frame) => {
  return { type: PHOTO_CAPTURED, photo: photo, frames: frame}
}

export const lastPhotoAction = (lastPhoto) => {
  return { type: PHOTO_ALL_CAPTURED, lastPhoto: lastPhoto}
}

export const resetPhotoAction = () => {
  return {type: RESET_PHOTOS}
}

