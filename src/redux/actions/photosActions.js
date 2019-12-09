import {flickrAPI} from '../../api/api'
import {SET_PHOTO_ALBUMS, SET_PHOTOS, SET_PHOTO} from "../actions/types";

/*Создаем объект action с обязательным свойством type*/
export const setPhotosets = (photosets) => {
    return {
        type: SET_PHOTO_ALBUMS,
        payload: photosets
    }
}

export const setPhotos = (photos) => {
    return {
        type: SET_PHOTOS,
        payload: photos
    }
}

export const setPhoto = (photo) => {
    return {
        type: SET_PHOTO,
        payload: photo
    }
}

/*Thunk Creators*/
export const getPhotosets = () => {
    return async (dispatch) => {
        const photosets = await flickrAPI.getAlbums();
        //debugger
        dispatch(setPhotosets(photosets));
    }
}

export const getPhotos = (id) => {
    return async (dispatch) => {
        const photos = await flickrAPI.getPhotos(id);
        dispatch(setPhotos(photos));
    }
}

export const getPhoto = (id) => {
    return async (dispatch) => {
        const photo = await flickrAPI.getPhoto(id);
        dispatch(setPhoto(photo));
    }
}